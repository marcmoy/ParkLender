json.extract! spot,
              :id, :title, :description, :lat, :lng,
              :location, :width, :length, :city, :state

json.numReviews spot.num_reviews
json.rating spot.rating

# json.photo do
json.photoUrl spot.photo.url
# end

json.host do
  json.id spot.host.id
  json.url spot.host.photo.url
  json.thumbnail spot.host.photo.thumbnail
  json.name spot.host.username
  json.memberSince spot.host.member_since
end

json.prices spot.rates(price_filter, min, max)

json.vehicles spot.allowed_vehicles
