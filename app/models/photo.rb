class Photo < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :spot, optional: true
end
