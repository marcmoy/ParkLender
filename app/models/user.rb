# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

	attr_reader :password, :coverPhotoUrl, :coverPhotoThumbnail

	validates :username, :password_digest, :session_token, presence: true
	validates :username, uniqueness: true
	validates :password, length: {minimum: 6}, allow_nil: :true

	after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness

	has_one :photo,
		primary_key: :id,
		foreign_key: :user_id,
		class_name: :UserPhoto

	has_many :reviews

	has_one :spot,
		primary_key: :id,
		foreign_key: :host_id,
		class_name: :Spot

	has_many :authored_reviews,
		primary_key: :id,
		foreign_key: :author_id,
		class_name: :Review

	def password= password
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials username, password
		user = User.find_by(username: username)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is? password
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	def spotReviews
		self.authored_reviews.where.not(spot_id: nil)
	end

	def authoredReviews
		authored_reviews
	end

	def otherUserReviews
		self.authored_reviews.where.not(user_id: nil)
	end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end

end
