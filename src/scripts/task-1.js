import axios from "axios";
import { fetchBreeds } from "./helpers/cat-api";

const API_KEY = "live_xFhCb8xn5azc6PLJ4Wadu3S0BtQE0UFEHJHmGH5tjJsSiTA6tca4DKwmBh0kiZKk";
axios.defaults.headers.common["x-api-key"] = API_KEY;

export const refs = {
    select: document.querySelector(".breed-select"),
    loader: document.querySelector(".loader"),
    dataLoader: document.querySelector(".date-loader"),
    catsCont: document.querySelector(".cat-info"),
};

fetchBreeds(API_KEY);
