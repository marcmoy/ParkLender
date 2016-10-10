@price_filter = ["hourly_rate","daily_rate","monthly_rate"]
@min = 0 unless @min
@max = 100 unless @max
json.partial! 'spot', spot: @spot, price_filter: @price_filter, min: @min, max: @max
