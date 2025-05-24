import axios from "axios";

const URL = process.env.NEXT_PUBLIC_API;

const apiInstan = axios.create({
  baseURL: URL,
});

export default apiInstan;
