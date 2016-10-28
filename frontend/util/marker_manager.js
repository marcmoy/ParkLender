import $ from 'jquery';

export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};  // marker objects
    this._createMarkerFromSpot = this._createMarkerFromSpot.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
  }

  updateMarkers(newSpots = {}) {
    this.addNewMarkers(newSpots);
    this.removeOldMarkers(newSpots);
  }

  addNewMarkers(newSpots) {
    for (let id in newSpots) {
      if (!this.markers[id]) { // if the our markers don't include this spot
        this._createMarkerFromSpot(newSpots[id]); // add this spot to markers
      }
    }
  }

  removeOldMarkers(newSpots) {
    let oldMarkers = this.markers;
    for (let id in oldMarkers) {
      if (!newSpots[id]) { // if the marker is not included in the new spots
        this._removeMarker(oldMarkers[id]); // remove that marker
      }
    }
  }

  _createMarkerFromSpot(spot) {
    const pos = new google.maps.LatLng(spot.lat, spot.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      spotId: spot.id,
      icon: greyIcon
    });

    // info window feature
    const infoWindow = this.createInfoWindow(spot);

    google.maps.event.addListener(infoWindow, 'closeclick', () => {
      marker.setIcon(greyIcon);
    });

    marker.addListener('click', () => {
      infoWindow.open(this.map, marker);
      marker.setIcon(redIcon);
    });

    this.map.addListener('click', () => {
      infoWindow.close();
      marker.setIcon(greyIcon);
    });

    // create marker animations
    let $spot = $(`#spot${spot.id}`);
    $spot.hover(
      () => {
        // when spot is hovered, bounce marker
        marker.setAnimation(google.maps.Animation.BOUNCE);
        // change marker icon
        marker.setIcon('https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red.png');
        // if spot is hovered for more than 2 seconds, center dat map to marker
        // this.centerTimeout = setTimeout(() => {
        //   // if marker is out of bounds
        //   if (!this.map.getBounds().contains(marker.getPosition())) {
        //     // recenter map AND open info window
        //     let center = { lat: spot.lat, lng: spot.lng };
        //     this.map.setCenter(center);
        //     infoWindow.open(this.map, marker);
        //   }
        // }, 1500);
      },
      () => {
        // when spot is not hovered, calm dat marker
        marker.setAnimation(null);
        // change marker icon
        marker.setIcon('https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_grey.png');
        // add listener for info window close
        infoWindow.close();
        // when spot is not hovered, clear timeout
        // clearTimeout(this.timeout);
      }
    );

    this.markers[`${spot.id}`] = marker;
  }

  _removeMarker(marker) {
    marker.setMap(null); // set map to null just in case
    delete this.markers[marker.spotId];
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

const redIcon = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red.png';
const greyIcon = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_grey.png';
