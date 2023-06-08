import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "ca45e3aeed0fcaa3118f916c5d8364b2",
    units: "metric",
    lang: "kr",
  },
});

export const getWeahter = ({ queryKey }) => {
  // const lat = queryKey[1];
  // const lon = queryKey[2];

  const [_, lat, lon] = queryKey;
  //   =>배열 비구조화 할당으로 변수처리
  //   console.log(lat, lon);
  return instance
    .get(`/weather?lat=${lat}&lon=${lon}`)
    .then((response) => response.data);
};

// *axios
// => 프론트에서 필요한 내용을 서버에 요청하는데
// url에 필요한 변수값등을 설정할수 있음

// ex)
// axios.create({
//     baseURL:"기본 주소",
//     params:{
//         속성: "속성값" (요청에 필요한 변수값을 정의)
//     }
// })
