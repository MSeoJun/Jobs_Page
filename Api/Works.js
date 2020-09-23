import axios from "axios";

const apiKey = "72514a5a5a6d756e3739496f6b496c";

export const getWorks = async () => {
  const res = await axios.get(
    `http://openapi.seoul.go.kr:8088/${apiKey}/json/GetJobInfo/1/20/`
  );
  return res.data;
};

export const findAddress = async (address) => {
  const headers = {
    Authorization: "KakaoAK 2344729dd3c69850d8b0c2a54e73f6e5",
  };
  const res = await axios.get(
    `https://dapi.kakao.com/v2/local/search/address.json?query=${address}`,
    { headers }
  );
  return res.data;
};
