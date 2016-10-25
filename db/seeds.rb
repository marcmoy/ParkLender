require_relative 'photos'
require_relative 'users'
require_relative 'reviews'
require_relative 'title'
require_relative 'descriptions'
require_relative 'new_spots'

ActiveRecord::Base.transaction do

  User.create!(
    username: 'marc', password: 'go_fullstack_go',
    email: 'me@marcmoy.io', fname: 'marc', lname: 'moy'
  )
  Photo.create!(user_id: 1, url: DEFAULT_PIC, thumbnail: DEFAULT_PIC)

  User.create!(
    username: 'demo-user', password: 'go_fullstack_go',
    email: 'demo-user@email.com', fname: 'demo', lname: 'user'
  )
  Photo.create!(user_id: 2, url: DEFAULT_PIC, thumbnail: DEFAULT_PIC)

  @usernames = {}

  58.times do |i|
    user = User.create!(
      username: USERNAMES[i].downcase, password: 'go_fullstack_go',
      email: "#{USERNAMES[i].downcase}@email.com", fname: USERNAMES[i], lname: Faker::Name.last_name
    )
    @usernames[USERNAMES[i]] = true
    Photo.create!(
      user_id: user.id,
      url: USERSPHOTOS[i],
      thumbnail: USERSPHOTOS[i]
    )
  end

  widths = (6..20).select { |num| num.even? }
  lengths = (12..30).select { |num| num.even? }

  def random_cord(min, max)
    rand * (max-min) + min
  end

  hourly_prices = (5..20).select { |num| num % 5 == 0 }
  daily_prices = (30..60).select { |num| num % 5 == 0 }
  monthly_prices = (80..120).select { |num| num % 5 == 0 }


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
      lat: random_cord(min_lat, max_lat),
      lng: random_cord(min_lng, max_lng),
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

    rand(1..3).times do |n|
      start_date = Time.now + (n * 4).months
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

  @new_spot_index = 0
  def random_spot_url
    url = NEW_SPOT_PHOTOS[@new_spot_index]
    @new_spot_index += 1
    @new_spot_index = 0 if @new_spot_index == NEW_SPOT_PHOTOS.count
    url
  end

  @user_id_count = 61
  @user_photos = {}

  city_coords = [
    { max_lat: 47.62332472154639, max_lng: -122.28761672973633,
      min_lat: 47.59848353250081, min_lng: -122.33460903167725,
      name: 'Seattle', state: 'WA' },
    { max_lat: 41.8852376062634, max_lng: -87.62480735778809,
      min_lat: 41.875929810736615, min_lng: -87.633111476898,
      name: 'Chicago', state: 'IL' },
    { max_lat: 40.739375769890344, max_lng: -73.97905826568604,
      min_lat: 40.710560040164694, min_lng: -74.0063095092773,
      name: 'New York', state: 'CA' },
    { max_lat: 34.062729051574166, max_lng: -118.23675155639648,
      min_lat: 34.03897689615888, min_lng: -118.2625007629394,
      name: 'Los Angeles', state: 'CA' },
    { max_lat: 42.364937027686025, max_lng: -71.05412006378174,
      min_lat: 42.35164964898325, min_lng: -71.0648488998413,
      name: 'Boston', state: 'MA' },
  ]

  city_coords.each do |coord|
    city = coord[:name]
    state = coord[:state]
    max_lat = coord[:max_lat]
    min_lat = coord[:min_lat]
    max_lng = coord[:max_lng]
    min_lng = coord[:min_lng]

    50.times do |i|

      name = Faker::Name.first_name
      while @usernames[name]
        name = Faker::Name.first_name
      end
      @usernames[name] = true

      user_photo = i.odd? ? UiFaces.man : UiFaces.woman

      # try to avoid repeats as much as possible
      user_photo = i.odd? ? UiFaces.man : UiFaces.woman if @user_photos[user_photo]

      # chloepark photo link is broken
      until user_photo != "https://s3.amazonaws.com/uifaces/faces/twitter/chloepark/128.jpg"
        user_photo = i.odd? ? UiFaces.man : UiFaces.woman
      end

      @user_photos[user_photo] = true

      user = User.create!(
        username: name.downcase, password: 'go_fullstack_go',
        email: "#{name}@gmail.com", fname: name, lname: Faker::Name.last_name
      )

      Photo.create!(
        user_id: user.id,
        url: user_photo,
        thumbnail: user_photo
      )

      spot = Spot.create!(
        host_id: user.id,
        title: TITLES.sample,
        description: DESCRIPTION.sample,
        lat: random_cord(min_lat, max_lat),
        lng: random_cord(min_lng, max_lng),
        hourly_rate: hourly_prices.sample,
        daily_rate: (rand(1..4) != 2 ? daily_prices.sample : 0),
        monthly_rate: (rand(1..3) != 2 ? monthly_prices.sample : 0),
        address: Faker::Address.street_address,
        city: city,
        state: state,
        country: 'US',
        width: widths.sample,
        length: lengths.sample,
        car: true,
        motorcycle: true,
        van: Faker::Boolean.boolean,
        truck: Faker::Boolean.boolean
      )

      photo_url = random_spot_url

      Photo.create!(
        spot_id: spot.id,
        url: photo_url,
        thumbnail: Faker::Placeholdit.image("50x50")
      )

      rand(1..3).times do |x|
        start_date = Time.now + (x * 4).months
        end_date = start_date + rand(1..3).weeks
        DateRange.create!(
          spot_id: spot.id,
          start_date: start_date,
          end_date: end_date
        )
      end

      initial_user_id = rand(3..@user_id_count - 31)

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
end
