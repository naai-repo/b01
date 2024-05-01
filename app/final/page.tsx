'use client'
import Map, {Marker, NavigationControl} from 'react-map-gl';

import {useState, useCallback} from 'react';
import ControlPanel from './control-panel';
import Pin from './pin';

import type {MarkerDragEvent, LngLat} from 'react-map-gl';

import GeocoderControl from './geocoder-control';
// eslint-disable-next-line


export default function App() {
  const [marker, setMarker] = useState({
    latitude: 28.68,
    longitude: 77.31
  });
  const [events, logEvents] = useState<Record<string, LngLat>>({});

  const onMarkerDragStart = useCallback((event: MarkerDragEvent) => {
    logEvents(_events => ({..._events, onDragStart: event.lngLat}));
  }, []);

  const onMarkerDrag = useCallback((event: MarkerDragEvent) => {
    logEvents(_events => ({..._events, onDrag: event.lngLat}));

    setMarker({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat
    });
  }, []);

      function handleClick(v:any){
        console.log(v)
       
        const {lng, lat} = v;
        setMarker({
            latitude:lat,
            longitude:lng
        });
    }

  const onMarkerDragEnd = useCallback((event: MarkerDragEvent) => {
    logEvents(_events => ({..._events, onDragEnd: event.lngLat}));
  }, []);

  let TOKEN = 'pk.eyJ1IjoibXlwZXJybyIsImEiOiJjbDRmZGVwNmwwMjlmM3BvZm02czd5ZWhlIn0.vjixPEoZnR1G6QmKxMva2w';
  return  <div style={{height:'60vh'}}>
      <Map
        initialViewState={{
          longitude: 77.31,
          latitude: 28.68,
          zoom: 13
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={TOKEN}
        onClick={(e) => handleClick(e.lngLat)}
      >
         <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
          anchor="bottom"
          draggable
          onDragStart={onMarkerDragStart}
          onDrag={onMarkerDrag}
          onDragEnd={onMarkerDragEnd}
        >
          <Pin size={20} />
          <NavigationControl />
        </Marker>
        <GeocoderControl mapboxAccessToken={TOKEN} position="top-left" />
      </Map>
      
    </div>

}