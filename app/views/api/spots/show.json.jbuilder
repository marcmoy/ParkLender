@price_filter = ["hourly_rate","daily_rate","monthly_rate"]
json.partial! 'spot', spot: @spot, price_filter: @price_filter
