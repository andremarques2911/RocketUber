import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections 
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyAMFwrAlIr5B8Jo-Yd2UNpsSejPXY9S2RQ"
        strokeWidth={3}
        strokeColor="#222"
    />
);

export default Directions;
