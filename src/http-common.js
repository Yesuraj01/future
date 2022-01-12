import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/svnprojects/YR_HM/api",
  headers: {
    "Content-type": "application/json"
  }
});
