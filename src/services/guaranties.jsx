import httpService from "./httpService.jsx";

export const getAllGuarantiesService = () => {
  return httpService("/admin/guarantees", "get");
};

export const addNewGuarantieservice = (data) => {
  return httpService("/admin/guarantees", "post", data);
};

export const editGuarantieservice = (guarantyId, data) => {
  return httpService(`/admin/guarantees/${guarantyId}`, "put", data);
};

export const deleteGuarantieservice = (guarantyId) => {
  return httpService(`/admin/guarantees/${guarantyId}`, "delete");
};
