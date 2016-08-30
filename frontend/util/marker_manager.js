export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = []; // marker objects
    this._createMarkerFromSpot = this._createMarkerFromSpot.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
  }

  updateMarkers(newSpots) {
    this.newSpots = newSpots;
    this.spotsToAdd().forEach(this._createMarkerFromSpot);
    this._markersToRemove().forEach(this._removeMarker);
  }

  spotsToAdd() {
    const currentSpotIds = this.markers.map( marker => marker.spotId );
    const newSpots = this.spots;
    const newSpotIds = Object.keys(newSpots);

    return newSpotIds.reduce( (collection, spotId) => {
      if (!currentSpotIds.includes(spotId)) {
        return ( collection.concat( [newSpots[spotId]] ));
      }
    }, [] );
  }

  _markersToRemove() {
    return this.markers.filter( marker => {
      return !this.newSpots.hasOwnProperty(marker.spotId);
    });
  }

  _createMarkerFromSpot(spot) {
    const pos = new google.maps.LatLng(spot.lat, spot.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      spotId: spot.id
    });

    // info window feature
    const infoWindow = this.createInfoWindow(spot);
    marker.addListener('click', () => infoWindow.open(this.map, marker));
    this.map.addListener('click', () => infoWindow.close());

    this.markers.push(marker);
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null); // set map to null just in case
    this.markers.splice(idx, 1);
  }

  createInfoWindow(spot) {
    const text = `${spot.title}`;
    return new google.maps.InfoWindow({ content: text });
  }
}
