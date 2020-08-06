import React from 'react'
import {Marker} from 'react-map-gl';
import Plane from './plane'
const PlaneTravel = (props) =>{
    const [pos,setPos] = React.useState({
        lon: 2.21,
        lat: 46.22,
        index: 0,
        size: -25,
        rotation: -60
    })
    const mov = () =>{
        const num = pos.index
        if(num<150){
            setPos({...pos,lon: pos.lon+1/2,lat:pos.lat-0.21/2,index:num+1,size:pos.size+0.33})
        }else{
            props.setOnRoute(false)
        }
      }
    const rot = () =>{
        if(pos.rotation<60){
            setPos({...pos,rotation:pos.rotation+2})
        }else{
            setPos({...pos,index:pos.index+1})
        }
    }
    React.useEffect(() => {
    const timer = setTimeout(() => {
        if(pos.index === 0){
            rot()
        }else if(pos.index<=150){
            mov()
        }
    }, 10);
    return () => clearTimeout(timer);
    }, [pos]);
    return(
        <Marker
          longitude={pos.lon}
          latitude={pos.lat}
        >
            <Plane color={props.color} size={50-Math.abs(pos.size)} angle={pos.rotation}></Plane>
        </Marker>
    )
}

export default PlaneTravel