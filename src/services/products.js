import { convertDataToFormdata } from "../utils/convertDate.js";
import httpService from "./httpService.js";

export const getProductsService = (page, countOnPage, searchChar) => {
  return httpService(
    `/admin/products?page=${page}&count=${countOnPage}&searchChar=${searchChar}`,
    "get",
  );
};

export const getAllProductTitlesService = () => {
  return httpService(`/admin/products/all_titles`, "get");
};

export const getOneProductService = (productId) => {
  return httpService(`/admin/products/${productId}`, "get");
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

export const addProductImageService = (productId, data) => {
  return httpService(`/admin/products/${productId}/add_image`, "post", data);
};

export const deleteProductImageService = (imageId) => {
  return httpService(`/admin/products/gallery/${imageId}`, "delete");
};

export const setMainProductImageService = (imageId) => {
  return httpService(`/admin/products/gallery/set_main/${imageId}`, "get");
};

export const getFewerProductsService = () => {
  return httpService(`/admin/products/fewer_products`, "get");
};
export const toggleNotificationService = (productId) => {
  return httpService(`/admin/products/toggle_notification/${productId}`, "get");
};
