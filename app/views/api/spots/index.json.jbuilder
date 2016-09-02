@spots.each do |spot|
  json.set! spot.id do
    json.partial! 'spot', spot: spot, price_filter: @price_filter
  end
end
