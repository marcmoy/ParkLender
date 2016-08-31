json.extract! spot, :id, :host, :title, :description,
  :lat, :lng, :prices, :allowedVehicles, :location

# json.favorite_users bench.favorite_users.map(&:id)
json.photoUrl spot.photo.url

# json.reviews do
#   json.partial! 'api/reviews/review', collection: bench.reviews, as: :review
# end
