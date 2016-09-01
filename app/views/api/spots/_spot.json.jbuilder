json.extract! spot, :id, :title, :description,
  :lat, :lng, :prices, :location, :photo, :reviews

json.numReviews spot.numReviews
json.rating spot.rating

json.host do
  json.thumbnail spot.host.photo.thumbnail
  json.name spot.host.username
end
