import jMoment from "jalali-moment";

export const convertDateToJalali = (date) => {
  return jMoment(date).format("jYYYY/jMM/jDD");
};

export const convertDataToFormdata = (dataObj) => {
  const formdata = new FormData();
  for (const key in dataObj) {
    formdata.append(key, dataObj[key]);
  }
  return formdata;
};
