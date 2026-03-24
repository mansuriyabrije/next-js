import { config } from "../config";
import axiosInstance from "./axios";
import axios from "axios";

export async function apiFetch<T = any>(
  endpoint: string,
  options: any = {}
): Promise<{ data: T | null; error: string | null; status: number; message?: string; errors?: any }> {
  try {
    const { method = "GET", body, headers, ...rest } = options;
    
    const response = await axiosInstance({
      url: endpoint,
      method,
      data: body ? JSON.parse(body) : undefined,
      headers: {
        ...headers,
      },
      ...rest,
    });

    // Check if the backend explicitly returned a failure status even with 200 OK
    if (response.data.status === false || response.data.success === false) {
      return {
        data: null,
        error: response.data.message || "API request failed",
        status: response.status,
        message: response.data.message,
        errors: response.data.errors,
      };
    }

    return {
      data: response.data.data,
      error: null,
      status: response.status,
      message: response.data.message,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const response = error.response;
      console.error("API Axios Error:", response?.data || error.message);
      
      return {
        data: null,
        error: response?.data?.message || "API request failed",
        status: response?.status || 500,
        message: response?.data?.message,
        errors: response?.data?.errors,
      };
    }

    console.error("Unexpected Error:", error);
    return {
      data: null,
      error: "Network error or server unavailable",
      status: 500,
    };
  }
}
