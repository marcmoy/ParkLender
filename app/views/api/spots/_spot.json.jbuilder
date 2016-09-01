json.extract! spot, :id, :title, :description,
  :lat, :lng, :prices, :location, :reviews

json.numReviews spot.numReviews
# json.rating spot.rating

# json.photo do
json.photoUrl spot.photo.url
# end

json.host do
  json.thumbnail spot.host.photo.thumbnail
  json.name spot.host.username
end
