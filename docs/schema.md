# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
fname           | string    | not null
lname           | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## spots
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
host_id       | integer   | not null, foreign key (references users), indexed
title         | string    | not null
description   | text      | not null
lat           | integer   | not null
lng           | integer   | not null
hourly_rate   | integer   | (one of these price rates can't be null)
daily_rate    | integer   |
monthly_rate  | integer   |
address       | string    | not null, (unique combination of address/city/state/country)
city          | string    | not null
state         | string    | not null
country       | string    | not null
width         | integer   | not null
length        | integer   | not null

**Notes:**
+ For availability, how do I deal with date ranges and time ranges?

## reviews
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
author_id     | integer   | not null, foreign key (references users), indexed
spot_id       | integer   | not null, foreign key indexed
user_id       | integer   | not null, foreign key indexed (users can review each other)
rating        | integer   | not null
content       | string    | not null

## bookings
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
driver_id    | integer   | not null, foreign key (references users), indexed
host_id      | integer   | not null, foreign key (references users), indexed
spot_id      | integer   | not null, foreign key, indexed
type         | string    | not null, ("hourly, daily, monthly")
status       | string    | not null, default = "PENDING"
start_date   | date      | not null
end_ date    | date      | not null
start_time   | time      | not null
end_time     | time      | not null

## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
parent_id   | integer   | foreign key (references parent message), indexed
from_id     | integer   | not null, foreign key (references "from" user id), indexed
to_id       | integer   | not null, foreign key (references "to" user id), indexed
content     | text      | not null

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | foreign key (references users), indexed
spot_id     | integer   | foreign key (references spots), indexed
url         | string    | not null, unique
thumbnail   | string    | not null, unique
