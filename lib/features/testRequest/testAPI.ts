import axios from "axios";
import AxiosResponse from "axios";

const API_URL = "https://qatj3x3u32.execute-api.ap-northeast-1.amazonaws.com/dev/test"

const getTestApi = async () => {
  return await axios.get(API_URL, {
    headers: {"Content-Type": "application/json" }
  });
};

export const fetchTestApi = async () => {
  const testAPI = await getTestApi();

  const data = testAPI.data;
  console.log(testAPI.data);

  return data;
};
