json.extract! spot, :id, :title, :description,
  :lat, :lng, :location, :width, :length

json.numReviews spot.numReviews
json.rating spot.rating

# json.photo do
json.photoUrl spot.photo.url
# end

json.host do
  json.id spot.host.id
  json.thumbnail spot.host.photo.thumbnail
  json.name spot.host.username
end

json.prices spot.rates(price_filter, min, max)

json.vehicles spot.allowedVehicles
