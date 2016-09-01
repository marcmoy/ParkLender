json.extract! spot, :id, :title, :description,
  :lat, :lng, :prices, :location, :photo,
  :reviews, :rating, :numReviews

json.host do
  json.thumbnail spot.host.photo.thumbnail
  json.name spot.host.username
end
