import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: `https://api.rawg.io/api`,
  params: {
    key: `3b230c9d551145599e2030faa5d4b6ca`,
  },
});

export { CanceledError };
