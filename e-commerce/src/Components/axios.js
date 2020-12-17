import axios from "axios";

const instace = axios.create({
  baseURL: "http://localhost:5001/e-commerce-ce132/us-central1/api",
});

export default instace;
