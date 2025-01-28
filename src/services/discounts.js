import httpService from "./httpService.js";

export const getAllDiscountsService = () => {
  return httpService("/admin/discounts", "get");
};

export const addNewDiscountService = (data) => {
  return httpService("/admin/discounts", "post", data);
};
