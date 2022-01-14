import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Marker } from './marker.jsx';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class MyMap extends Component {

    state = {
        center: {
            lat: 31.6817849,
            lng: 34.5860601
        },
        zoom: 11
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.coords !== this.props.coords) {
            this.setState((prevState) => ({ center: { ...prevState.center, lat: this.props.coords.Lat, lng: this.props.coords.Lng } }))
        }
    }

    render() {
        const { lat, lng } = this.state.center

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100%', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: '' }}
                    center={this.state.center}
                    zoom={this.state.zoom}

                >
                    <Marker lat={31.6817849} lng={34.5860601} text={'A'} />
                    <Marker lat={34.0392321} lng={-118.2137171} text={'B'} />
                    <Marker lat={14.690483} lng={-91.2592005} text={'C'} />
                    <AnyReactComponent
                        lat={lat}
                        lng={lng}
                    // text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}
