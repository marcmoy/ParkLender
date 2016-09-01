class UserPhoto < ApplicationRecord
  belongs_to :user, optional: true
end
