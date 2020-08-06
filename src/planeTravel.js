import React from 'react'
import {Marker} from 'react-map-gl';
import Plane from './plane'
const PlaneTravel = (props) =>{
    let path = new Array(76).fill(0);
    const [pos,setPos] = React.useState({
        lon: 2.21,
        lat: 46.22,
        index: 0,
        size: -25
    })
    const mov = () =>{
        const num = pos.index
        if(num<150){
            setPos({lon: pos.lon+1/2,lat:pos.lat-0.21/2,index:num+1,size:pos.size+0.33})
        }
      }
    React.useEffect(() => {
    const timer = setTimeout(() => {
        if(pos.index<=150){
            mov()
        }
    }, 30);
    return () => clearTimeout(timer);
    }, [pos]);
    return(
        <Marker
          longitude={pos.lon}
          latitude={pos.lat}
        >
            <Plane color={props.color} size={50-Math.abs(pos.size)}></Plane>
        </Marker>
    )
}

export default PlaneTravel