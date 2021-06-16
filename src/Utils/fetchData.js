import axios from "axios";
export const fetchData = async () => {
  const response = await axios.get(
    "https://60ca1eaa772a7600172055f6.mockapi.io/api/shoes"
  );

  return response.data;
};


