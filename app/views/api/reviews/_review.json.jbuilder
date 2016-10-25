json.extract! review,
  :id,
  :author_id,
  :spot_id,
  :user_id,
  :rating,
  :content

json.date review.date

json.author do
  json.photoUrl review.author.photo.url
  json.username review.author.username
end
