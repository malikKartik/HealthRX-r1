import * as React from 'react';
import {useState} from 'react';
import MapGL,{Marker} from 'react-map-gl';
import Pin from './pins/pin';
import Dot from './pins/pathDot'
import PlaneTravel from './utils/planeTravel'
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
  const [travled,setTravled] = useState({tR1:false,tR2:false,tR2:false,tR2:false,tR2:false,})
  const [flagged,setFlagged] = useState(false)
  const [pathColor,setPathColor] = useState("#000")
  let num = 0;
  let path = new Array(76).fill(0);

  const launchRafale = () =>{
    if(!travled.tR1){
      setR1(true)
      setTravled({...travled,tR1:true})
      setPathColor("#0d0")
    }else if(!travled.tR2){
      setR2(true)
      setTravled({...travled,tR2:true})
      setPathColor("#01e")
    }else if(!travled.tR3){
      setR3(true)
      setTravled({...travled,tR3:true})
      setPathColor("#00e")
    }else if(!travled.tR4){
      setR4(true)
      setTravled({...travled,tR4:true})
      setPathColor("#000")
    }else if(!travled.tR5){
      setR5(true)
      setTravled({...travled,tR5:true})
      setPathColor("#a00")
    }else{
      alert("rafale already reached!")
      return;
    }
  }
  if(travled.tR1 && travled.tR2 && travled.tR3 && travled.tR4 && travled.tR5 && !flagged){
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
    <button onClick={launchRafale} disabled={r1||r2||r3||r4||r5}>Launch Rafale</button>
    </>
  );
}

export default App