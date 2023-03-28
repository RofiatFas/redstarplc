const baseUrl = 'http://20.106.202.171:86/api';

let axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("RSM-token")}`
    }
  };

export const constants = {
    baseUrl,
    axiosConfig
}