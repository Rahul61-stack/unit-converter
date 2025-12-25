import { API_URL } from "@/config";
import axios from "axios";
export const getUnitConversion = async (
  value: number,
  conversionFrom: string | null,
  conversionTo: string | null
) => {
  try {
    const apiUrl = encodeURI(`${API_URL.trim()}/api/convert`);
    const response = await axios.post(apiUrl, {
      value: value,
      conversionFrom: conversionFrom,
      conversionTo: conversionTo,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
