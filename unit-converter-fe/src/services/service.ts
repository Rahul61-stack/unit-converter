import axios from "axios";
export const getUnitConversion = async (
  value: number,
  conversionFrom: string | null,
  conversionTo: string | null
) => {
  try {
    const response = await axios.post("/api/convert", {
      value: value,
      conversionFrom: conversionFrom,
      conversionTo: conversionTo,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
