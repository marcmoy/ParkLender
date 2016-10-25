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
#  email           :string
#  fname           :string
#  lname           :string
#

class User < ApplicationRecord

	 attr_reader :password, :coverPhotoUrl, :coverPhotoThumbnail, :confirm

	 validates :username, :password_digest, :session_token, presence: true
	 validates :username, :email, uniqueness: true
	 validates :password, length: { minimum: 6 }, allow_nil: :true

	 #  validate :confirm_password

	 validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i

	 after_initialize :ensure_session_token
	 before_validation :ensure_session_token_uniqueness

	 has_one :photo
	 has_many :reviews
	 has_many :bookings

	 has_one 	:spot, primary_key:  :id, foreign_key:  :host_id, class_name:   :Spot

	 has_many :authored_reviews, primary_key: :id, foreign_key: :author_id, class_name: :Review

	 def password=(password)
		  self.password_digest = BCrypt::Password.create(password)
		  @password = password
	 end

	 #  def confirm=(confirm)
	 # 	 	@confirm = confirm
	 #  end

	 def self.find_by_credentials(username, password)
		  user = User.find_by(username: username)
		  return nil unless user
		  user.password_is?(password) ? user : nil
	 end

	 def password_is?(password)
		  BCrypt::Password.new(self.password_digest).is_password?(password)
	 end

	 def reset_session_token!
		  self.session_token = new_session_token
		  ensure_session_token_uniqueness
		  self.save
		  self.session_token
	 end

	 def spot_review
		  self.authored_reviews.where.not(spot_id: nil)
	 end

	 def other_user_reviews
		  self.authored_reviews.where.not(user_id: nil)
	 end

	 def member_since
		  month = created_at.strftime('%B')
		  year = created_at.strftime('%Y')
		  "#{month} #{year}"
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

	 #  def confirm_password
	 # 	  return if BCrypt::Password.new(self.password_digest).is_password?(confirm)
	 # 	  errors[:Confirm] << "password does not match"
	 #  end
end
