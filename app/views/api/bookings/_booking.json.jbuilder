json.extract! booking,
  :id,
  :user_id,
  :spot_id,
  :host_id,
  :price_type,
  :start_time,
  :end_time,
  :start_date,
  :end_date,
  :status

json.start_time_minutes booking.start_time_minutes
json.end_time_minutes booking.end_time_minutes
