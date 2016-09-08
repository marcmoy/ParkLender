json.extract! user, :id, :username, :photo

user.spotReviews.each do |review|
  json.set! review.spot_id do
    json.content review.content
    json.rating review.rating
  end
end
