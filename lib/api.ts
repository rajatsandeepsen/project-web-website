import axios from "axios";

export const publicGateway = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Use environment variables for the API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export const EmailPost = async (email: string) => {
  try {
    const response = await publicGateway.post("/web", { email: email });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to add email data");
  }
};

export const EmailGet = async () => {
  try {
    const response = await publicGateway.get("/web");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch email data");
  }
};
export const EmailGetCount = async () => {
  try {
    const response = await publicGateway.get("/web/count");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch email data");
  }
};
