import axios from "axios";

const api = axios.create({
  baseURL: "https://api-projpop.seade.gov.br/v1/dados/sf/mun/t/3550308/"
});

export default api;