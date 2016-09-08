json.extract! review,
  :id,
  :author_id,
  :spot_id,
  :user_id,
  :rating,
  :content

json.date review.date

json.author do
  json.photoUrl author.photo.url
  json.username author.username
end
