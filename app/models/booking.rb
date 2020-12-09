class Booking < ApplicationRecord
  belongs_to :tenant, class_name: "User"
  belongs_to :offer
end