json.extract! spot, :id, :host, :title, :description,
  :lat, :lng, :prices, :location

# json.favorite_users bench.favorite_users.map(&:id)

# json.reviews do
#   json.partial! 'api/reviews/review', collection: bench.reviews, as: :review
# end
