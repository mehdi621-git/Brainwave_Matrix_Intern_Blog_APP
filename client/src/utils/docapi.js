import axios from "axios";
import { Api_Notification, service_url } from "./config";

const url = 'http://localhost:7000';

const axiosInstance = axios.create({
  baseURL: url,
  timeout: 10000,
  headers: {
    "content-type": 'application/json'
  }
});

const processResponse = (response) => {
  if (response.status === 200) {
    return { IsSuccess: true, data: response.data.JSON };
  } else {
    return {
      IsFailure: true,
      status: response?.status,
      msg: response.data?.msg || "Unknown error", // Added fallback
      code: response.data?.code || "Unknown code" // Added fallback
    };
  }
};

const processError = (error) => {
  if (error.response) { // Status other than 200
    console.log("Error in response", error.response.data);
    return {
      IsError: true,
      msg: Api_Notification.responseFailure,
      code: error.response.status
    };
  } else if (error.request) { // No response from server
    console.log("Error in Request", error.request);
    return {
      IsError: true,
      msg: Api_Notification.requestFailure,
      code: ""
    };
  } else { // Client-side error
    console.log("Error in Connectivity", error.message);
    return {
      IsError: true,
      msg: Api_Notification.networkError,
      code: ""
    };
  }
};

// Request interceptor
axiosInstance.interceptors.request.use(
  function (config) { // For successful request
    return config;
  },
  function (error) { // For error case
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Successfully received response
    // Stop loader here if necessary
    return processResponse(response);
  },
  function (error) {
    // Stop loader
    return Promise.reject(processError(error));
  }
);

const API = {};
for (const [key, value] of Object.entries(service_url)) {
  API[key] = async (body, showUploadProgress, showDownloadProgress) => {
    try {
      return await axiosInstance({
        method: value.method,
        url: value.url,
        data: body,
        responseType: value.responseType,
        onUploadProgress: function (progressEvent) {
          if (showUploadProgress) {
            let percentageCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
            showUploadProgress(percentageCompleted);
          }
        },
        onDownloadProgress: function (progressEvent) {
          if (showDownloadProgress) {
            let percentageCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
            showDownloadProgress(percentageCompleted);
          }
        }
      });
    } catch (error) {
      return processError(error); // Handle any unexpected errors
    }
  };
}

export { API };

