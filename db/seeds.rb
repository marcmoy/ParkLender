# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)

# add transaction

require_relative 'photos'
require_relative 'users'
require_relative 'reviews'
require_relative 'title'
require_relative 'descriptions'

ActiveRecord::Base.transaction do

  User.create!(username: 'marc', password: 'password')
  Photo.create!(user_id: 1, url: DEFAULT_PIC, thumbnail: DEFAULT_PIC)
  User.create!(username: 'Demo-User', password: 'password')
  Photo.create!(user_id: 2, url: DEFAULT_PIC, thumbnail: DEFAULT_PIC)

  58.times do |i|
    user = User.create!(username: USERNAMES[i], password: 'go_fullstack_go')
    Photo.create!(
        user_id: user.id,
        url: USERSPHOTOS[i],
        thumbnail: USERSPHOTOS[i]
      )
    # rand(1..50).times do |n|
    #   Review.create!(
    #     author_id: user.id,
    #     user_id: n + 1,
    #     rating: rand(1..5),
    #     content: Faker::Company::buzzword
    #   )
    # end
  end

  widths = (6..20).select{|num| num.even?}
  lengths = (12..30).select{|num| num.even?}

  def randomCoord (min, max)
      rand * (max-min) + min
  end

  hourly_prices = (5..20).select{|num| num % 5 == 0}
  daily_prices = (30..60).select{|num| num % 5 == 0}
  monthly_prices = (80..120).select{|num| num % 5 == 0}


  max_lat = 37.779021218924235
  min_lat = 37.72243367562528

  max_lng = -122.49378204345703
  min_lng = -122.3997974395752

  ratings = [3,3,3,4,4,4,5,5,5,5,5,5,5,5] # get more 5 ratings

  50.times do |i|
    spot = Spot.create!(
      host_id: i + 3,
      title: TITLES[i],
      description: DESCRIPTION[i],
      lat: randomCoord(min_lat, max_lat),
      lng: randomCoord(min_lng, max_lng),
      hourly_rate: hourly_prices.sample,
      daily_rate: (rand(1..4) != 2 ? daily_prices.sample : 0),
      monthly_rate: (rand(1..3) != 2 ? monthly_prices.sample : 0),
      address: Faker::Address.street_address,
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
      width: widths.sample,
      length: lengths.sample,
      car: true,
      motorcycle: true,
      van: Faker::Boolean.boolean,
      truck: Faker::Boolean.boolean
    )

    Photo.create!(
      spot_id: spot.id,
      url: PHOTOS[i],
      thumbnail: Faker::Placeholdit.image("50x50")
    )

    rand(1..3).times do |i|
      start_date = Time.now + (i * 4).months
      end_date = start_date + rand(1..3).weeks
      DateRange.create!(
        spot_id: spot.id,
        start_date: start_date,
        end_date: end_date
      )
    end

    initial_user_id = rand(3..18)

    rand(10..30).times do |n|
      Review.create!(
        author_id: initial_user_id + n,
        spot_id: spot.id,
        rating: ratings.sample,
        content: GOOD_REVIEWS.sample
      )
    end
  end

end
