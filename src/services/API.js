import axios from "axios";

 export async function fetchData() {
    const url = "api/cars.json";
    return axios.post(url).then((res) => {
      return res.data;
    }).catch(err => err);
  }