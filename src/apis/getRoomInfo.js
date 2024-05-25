import axios from "axios";

export async function fetchRoomInfo(id) {
  try {
    const url = `/api/qrcode/${id}/`;
    console.log("Request URL:", url);
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.error("Request failed", e);
    throw new Error(e.response ? e.response.data : e.message);
  }
}
