// Kakao Map API 이용
// 대진대학교 학생회관 그라찌에 : markerPostion1 
// 대진대학교 중앙도서관 그라찌에 : markerPosotion2
import { useEffect } from "react";

const {kakao} = window; 

function Location() {
  useEffect(()=>{
    const container = document.getElementById('map');
    const options = {
      center : new kakao.maps.LatLng(37.871443, 127.155154),
      level : 4
    };
    const map = new kakao.maps.Map(container,options);
    const markerPostion1 = new kakao.maps.LatLng(37.871443, 127.155154);
    const markerPostion2 = new kakao.maps.LatLng(37.873448, 127.154985); 
    const marker1 = new kakao.maps.Marker({
      position : markerPostion1
    });
    const marker2 = new kakao.maps.Marker({
      position : markerPostion2
    });
    marker1.setMap(map);
    marker2.setMap(map);
  },[])
  
  
  return(
    <div id="map" style={{width:'500px', height: '600px', position: 'relative', left: '550px', top: '50px'}}>
      <div className="">
        
      </div>
    </div>
  )
}
export default Location;