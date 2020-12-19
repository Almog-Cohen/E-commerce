import axios from "axios";

const instace = axios.create({
  baseURL: "https://us-central1-e-commerce-ce132.cloudfunctions.net/api",
});

export default instace;

// Local host route
// "http://localhost:5001/e-commerce-ce132/us-central1/api"
