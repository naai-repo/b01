'use client';
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea';
// import "mapbox-gl/dist/mapbox-gl.css";

import  { useState, useEffect } from 'react'
import Map, { Marker, GeolocateControl } from 'react-map-gl';
// import { useState } from "react";

// let token = 'pk.eyJ1IjoibXlwZXJybyIsImEiOiJjbDRmZGVwNmwwMjlmM3BvZm02czd5ZWhlIn0.vjixPEoZnR1G6QmKxMva2w'
// import styles from './styles.module.css';
// import ReactMapGl from 'react-map-gl';

// const Page = () => {
//     let [newPlace, setNewPlace] = useState({lat:0, long:0});
//     const [viewPort, setViewPort] = useState({
//         width: '100%',
//         height: '400px',
//         latitude:28.6447,
//         longitude:77.217,
//         zoom:10
//     });
//     useEffect(() => {
//         if ("geolocation" in navigator) {
//           navigator.geolocation.getCurrentPosition(position => {
//             const { latitude, longitude } = position.coords;
//             setViewPort(prevViewport => ({
//               ...prevViewport,
//               latitude,
//               longitude
//             }));

//             setNewPlace({
//                 lat:latitude,
//                 long:longitude
//             });
            
//           });
//         } else {
//           console.log("Geolocation is not supported by this browser.");
//         }
//       }, []); 
    
//     function handleClick(v:any){
//         console.log(v)
       
//         const {lng, lat} = v;
//         setNewPlace({
//             lat:lat,
//             long:lng
//         });
//     }

  
    
//     const className = 'mapboxgl-control-container';
//     return (
//         <div style={{width:"100vw",height:"60vh"}}>
//             <div style={{height:"70px", backgroundColor:'purple'}}>

// </div>
//     <ReactMapGl 
//    {...viewPort} 
//     mapboxAccessToken={token}
//     transitionDuration={200}
//     mapStyle='mapbox://styles/mapbox/streets-v12'
//     onViewPortChange={(v:any) => setViewPort(v)}
//     onClick={(e) => handleClick(e.lngLat)}
//     >
//         {newPlace ? (
//             <>
//             <Marker 
//                 latitude={newPlace?.lat}
//                 longitude={newPlace?.long}
//                 offsetLeft={-3.5 * viewPort.zoom}
//                 offsetTop={-7 * viewPort.zoom}

//             >
//             </Marker>
//             </>
//         ) : null
//         }


// </ReactMapGl>


// <div style={{height:"300px", backgroundColor:'purple'}}>

// </div>
//         </div>

    

//     )
// }

// export default Page



import * as React from 'react';
// import {createRoot} from 'react-dom/client';
// import Map from 'react-map-gl';
import './st.css'
import GeocoderControl from './geocoder-control';
import ControlPanel from './control-panel';

// eslint-disable-next-line
const TOKEN = "pk.eyJ1IjoibXlwZXJybyIsImEiOiJjbDRmZGVwNmwwMjlmM3BvZm02czd5ZWhlIn0.vjixPEoZnR1G6QmKxMva2w"; // Set your mapbox token here

export default function Page() {

  let [newPlace, setNewPlace] = useState({lat:0, long:0});
      const [viewPort, setViewPort] = useState({});
      useEffect(() => {
          if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
              const { latitude, longitude } = position.coords;
              setViewPort(prevViewport => ({
                ...prevViewport,
                latitude,
                longitude
              }));
  
              setNewPlace({
                  lat:latitude,
                  long:longitude
              });
              
            });
          } else {
            console.log("Geolocation is not supported by this browser.");
          }
        }, []); 

        function handleClick(v:any){

                  console.log(v)
                 
                  const {lng, lat} = v;
                  setNewPlace({
                      lat:lat,
                      long:lng
                  });
              }
  return (
    <>
    <div id='hj' style={{width:'100vw', height:'80vh'}}>
    <Map
        initialViewState={{
          longitude: viewPort.longitude,
          latitude: viewPort.latitude,
          zoom: 13,
          
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={TOKEN}
        onClick={(e) => handleClick(e.lngLat)}
      >
         {newPlace ? (
            <>
            <Marker 
                latitude={newPlace?.lat}
                longitude={newPlace?.long}
                offsetLeft={-3.5 * viewPort.zoom}
                offsetTop={-7 * viewPort.zoom}

            >
            </Marker>
            </>
        ) : null
        }
        <GeocoderControl mapboxAccessToken={TOKEN} position="top-left" />
      </Map>
      {/* <ControlPanel /> */}
    </div>
    
    </>
  );
}

