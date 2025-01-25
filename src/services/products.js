import httpService from "./httpService.js";

export const getProductsService = (page, countOnPage, searchChar) => {
  return httpService(
    `/admin/products?page=${page}&count=${countOnPage}&searchChar=${searchChar}`,
    "get",
  );
};

export const deleteProductService = (productId) => {
  return httpService(`/admin/product/${productId}`, "delete");
};
