import { convertDataToFormdata } from "../utils/convertDate.js";
import httpService from "./httpService.js";

export const getProductsService = (page, countOnPage, searchChar) => {
  return httpService(
    `/admin/products?page=${page}&count=${countOnPage}&searchChar=${searchChar}`,
    "get",
  );
};

export const createNewProductService = (data) => {
  return httpService(
    "/admin/products",
    "post",
    data.image ? convertDataToFormdata(data) : data,
  );
};

export const editProductService = (productId, data) => {
  return httpService(`/admin/products/${productId}`, "put", data);
};

export const deleteProductService = (productId) => {
  return httpService(`/admin/products/${productId}`, "delete");
};

export const addProductAttrService = (productId, data) => {
  return httpService(`/admin/products/${productId}/add_attr`, "post", data);
};

export const addProductImage = (productId, data) => {
  return httpService(`/admin/products/${productId}/add_image`, "post", data);
};
