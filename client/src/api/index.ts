import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_SERVER_API_BASE_URL!;

export const fetchLoadTests = async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/test/results`);
    return data;
  } catch (error) {
    console.error(`An error occurred: ${JSON.stringify(error, null, 2)}`);
  }
};

export const createLoadTest = async (testData: any) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/test/create`, testData);
    return data;
  } catch (error) {
    console.error(`An error occurred: ${JSON.stringify(error, null, 2)}`);
  }
};
