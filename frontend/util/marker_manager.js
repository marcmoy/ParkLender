export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = []; // marker objects
    this._createMarkerFromSpot = this._createMarkerFromSpot.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
  }

  updateMarkers(newSpots = []) {
    this.newSpots = newSpots;
    this.spotsToAdd().forEach(this._createMarkerFromSpot);
    this._markersToRemove().forEach(this._removeMarker);
  }

  spotsToAdd() {
    const currentSpotIds = this.markers.map( marker => marker.spotId );
    const newSpots = this.newSpots;
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

  _stars(rating) {
    let stars = [];

    for (let i = 0; i < rating ; i++) {
      stars.push(
        `<i class="gold star">★</i>`
      );
    }

    let j = stars.length + 1;
    while (stars.length < 5) {
      stars.push(
        `<i class="gray star">★</i>`
      );
      j++;
    }

    return(
      `<div class="stars-container pull-left info-window">
        ${stars.join("")}
      </div>`
    );
  }

  createInfoWindow(spot) {
    const text = `
      <div class='spot-index-item clearfix info-window'>
        <a href="#/spots/${spot.id}" class='listing-photo-container info-window'>
          <div class="picture-overflow info-window">
            <img src="${spot.photoUrl}" class="main-photo info-window" alt=${spot.title}/>
          </div>
          <img src="${spot.host.thumbnail}" class="spot-item-host-photo info-window" alt=${spot.host.username}/>
        </a>
        <div class="spot-caption-container clearfix text-left info-window">
          <strong class="spot-title">${spot.title}</strong><br/>
          <span class="spot-reviews-numbers pull-left info-window">${spot.numReviews} Reviews </span>
          ${this._stars(spot.rating)}
        </div>
      </div>
    `;
    return new google.maps.InfoWindow({ content: text });
  }
}
