import { useState } from "react";

export const useCurrentLocation = () => {
  const defaultLat = 35.2379853471766;
  const defaultLon = 129.08831458908972;
  const [lat, setLat] = useState(defaultLat);
  const [lon, setLon] = useState(defaultLon);

  const location = (pos) => {
    // =>실행할 함수에 첫번째 매개변수는 현재 위치 정보를 가져옴
    // const lat = pos.coords.latitude;
    // const lon = pos.coords.longitude;
    const {
      coords: { latitude, longitude },
    } = pos;
    // console.log(latitude, longitude);
    // =>지역변수이기 때문에 함수 밖으로 변수를 사용할수 없음
    // =>useState를 이용하여 전역변수ㅘ 할수있음

    setLat(latitude);
    setLon(longitude);
  };

  navigator.geolocation.getCurrentPosition(location);
  // =>현재 위치 기준으로 위도, 경도를 얻어옴
  // =>매개변수에 실행할 함수명을 작성해주면 됨

  return {
    lat,
    lon,
  };
  // =>지역변수 처리한 변수들을 useCurrentLocation함수를
  // 실행할때마다 얻어올수 있음
};
