import React, { Component } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from './VenueMarkers';
class MapView extends Component {
    constructor(props) {
        super(props);
        const detail = props.detail && props.detail.length >= 2 ? props.detail : [0, 0]; // default wert damit der compoent funktioniert

        this.state = {
            currentLocation: { lat: detail[0], lng: detail[1] },
            zoom: 12,
            coordinates: detail
        }
    }
    render() {
        const { currentLocation, zoom, coordinates } = this.state;
        return (
            <MapContainer center={currentLocation} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Markers venues={[{"name": "", "geometry": coordinates}]}/>
            </MapContainer>
        );
    }
}
export default MapView;