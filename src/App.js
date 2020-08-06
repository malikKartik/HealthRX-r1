import * as React from 'react';
import {useState} from 'react';
import MapGL,{Marker} from 'react-map-gl';
import Pin from './pin';
import Dot from './pathDot'
import PlaneTravel from './planeTravel'
const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2FydGlrbWFsaWsiLCJhIjoiY2sxdnNubXJrMGkwcTNibzZrNWkyMm9waiJ9.U-3RSbfauGFCAhzy415Lrg'

const App = () => {
  const [viewport, setViewport] = useState({
    latitude: 22,
    longitude: 22,
    zoom: 2.5
  });
  const [r1,setR1] = useState(false)
  const [r2,setR2] = useState(false)
  const [r3,setR3] = useState(false)
  const [r4,setR4] = useState(false)
  const [r5,setR5] = useState(false)
  const [travled1,setTravled1] = useState(false)
  const [travled2,setTravled2] = useState(false)
  const [travled3,setTravled3] = useState(false)
  const [travled4,setTravled4] = useState(false)
  const [travled5,setTravled5] = useState(false)
  const [flagged,setFlagged] = useState(false)
  const [pathColor,setPathColor] = useState("#000")
  let num = 0;
  let path = new Array(76).fill(0);
  const launchR1 = () =>{
    if(travled1) return;
    setR1(true)
    setTravled1(true)
    setPathColor("#0d0")
  }
  const launchR2 = () =>{
    if(travled2) return;
    setR2(true)
    setTravled2(true)
    setPathColor("#01e")
  }
  const launchR3 = () =>{
    if(travled3) return;
    setR3(true)
    setTravled3(true)
    setPathColor("#00e")
  }
  const launchR4 = () =>{
    if(travled4) return;
    setR4(true)
    setTravled4(true)
    setPathColor("#000")
  }
  const launchR5 = () =>{
    if(travled5) return;
    setR5(true)
    setTravled5(true)
    setPathColor("#a00")
  }
  if(travled1 && travled2 && travled3 && travled4 && travled5 && !flagged){
    setFlagged(true)
    setTimeout(() => {
      alert("Congratulations! all Rafals have arrived.")
    }, 3500);
  }
  return (
    <>
    <MapGL
      {...viewport}
      width="100vw"
      height="80vh"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      <Marker
          longitude={2.21}
          latitude={46.22}
        >
          <Pin size={20} />
        </Marker>
        {path.map(()=>{
          num = num+1
          return(
            <Marker
              longitude={2.21+num*1}
              latitude={46.22+num*-0.21}
            >
              <Dot size={5} color={pathColor}></Dot>
            </Marker>
          )
        })}
        {r1?<PlaneTravel color="#0d0" setOnRoute={setR1}></PlaneTravel>:null}
        {r2?<PlaneTravel color="#01e" setOnRoute={setR2}></PlaneTravel>:null}
        {r3?<PlaneTravel color="#00e" setOnRoute={setR3}></PlaneTravel>:null}
        {r4?<PlaneTravel color="#000" setOnRoute={setR4}></PlaneTravel>:null}
        {r5?<PlaneTravel color="#a00" setOnRoute={setR5}></PlaneTravel>:null}
        <Marker
          longitude={76.7821}
          latitude={30.3752}
        >
          <Pin size={20} />
        </Marker>
    </MapGL>
    <button onClick={launchR1} disabled={r1||r2||r3||r4||r5}>Lanch Rafale 1</button>
    <button onClick={launchR2} disabled={r1||r2||r3||r4||r5}>Lanch Rafale 2</button>
    <button onClick={launchR3} disabled={r1||r2||r3||r4||r5}>Lanch Rafale 3</button>
    <button onClick={launchR4} disabled={r1||r2||r3||r4||r5}>Lanch Rafale 4</button>
    <button onClick={launchR5} disabled={r1||r2||r3||r4||r5}>Lanch Rafale 5</button>
    </>
  );
}

export default App