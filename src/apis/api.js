import axios from "axios";
import { apiUrl } from "./config";

export const getProducts = async ({ searchKeyword = "" }) => {
  try {
    let queryString = "?";
    if (searchKeyword) queryString += `searchKeyword=${searchKeyword}&`;

    const response = await axios({
      url: `${apiUrl}/api/product/readproduct${queryString}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.statusText !== "OK") {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
};

export const getProductsById = async (id) => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/product/searchcategory/${id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.statusText !== "OK") {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
};

export const getCategory = async () => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/product/readcategory`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.statusText !== "OK") {
      throw new Error(response.data.msg);
    }
    return response.data.data;
  } catch (err) {
    console.log(err);
    return { error: err.response.data.msg || err.msg };
  }
};
