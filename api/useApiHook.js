import axios from "axios";

const baseUrl = "https://api.publicapis.org";

export const callApi = async (method, path, payload) => {
  try {
    const req = await axios({
      method: method.toUpperCase(),
      url: `${baseUrl}${path}`,
      payload: payload ? payload : undefined,
    });

    if (req) return req.data;
  } catch (error) {
    throw error;
  }
};
