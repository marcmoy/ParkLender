# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)

# add transaction

User.create!(username: 'marc', password: 'password')
Photo.create!(user_id: 1, url: Faker::Avatar.image, thumbnail: Faker::Avatar.image("my-own-slug", "50x50"))
User.create!(username: 'demo-user', password: 'password')
Photo.create!(user_id: 2, url: Faker::Avatar.image, thumbnail: Faker::Avatar.image("my-own-slug", "50x50"))

50.times do
  user = User.create!(username: Faker::Internet.user_name, password: 'password')
  Photo.create!(
      user_id: user.id,
      url: Faker::Avatar.image,
      thumbnail: Faker::Avatar.image("my-own-slug", "50x50")
    )
  rand(1..50).times do |n|
    Review.create!(
      author_id: n + 1,
      user_id: user.id,
      rating: rand(1..5),
      content: Faker::Company::buzzword
    )
  end
end

widths = (6..20).select{|num| num.even?}
lengths = (12..30).select{|num| num.even?}

def randomCoord (min, max)
    rand * (max-min) + min
end

prices = (0..100).select{|num| num % 5 == 0}

max_lat = 37.78417678837021
min_lat = 37.72761122164702

max_lng = -122.50545501708984
min_lng = -122.37876892089844

ratings = [0,1,2,3,4,4,4,5,5,5,5,5] # get more 5 ratings

50.times do |i|
  spot = Spot.create!(
    host_id: i + 1,
    title: Faker::Company.buzzword,
    description: Faker::Hipster.sentence(5),
    lat: randomCoord(min_lat, max_lat),
    lng: randomCoord(min_lng, max_lng),
    hourly_rate: prices.sample,
    daily_rate: prices.sample,
    monthly_rate: prices.sample,
    address: Faker::Address.street_address,
    city: 'San Francisco',
    state: 'CA',
    country: 'US',
    width: widths.sample,
    length: lengths.sample,
    car: Faker::Boolean.boolean,
    motorcycle: Faker::Boolean.boolean,
    van: Faker::Boolean.boolean,
    truck: Faker::Boolean.boolean
  )

  Photo.create!(
    spot_id: spot.id,
    url: Faker::Placeholdit.image,
    thumbnail: Faker::Placeholdit.image("50x50")
  )

  rand(1..50).times do |n|
    Review.create!(
      author_id: n + 1,
      spot_id: spot.id,
      rating: ratings.sample,
      content: Faker::Hipster.sentence(5)
    )
  end
end
