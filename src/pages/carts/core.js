import { Alert } from "../../utils/alerts.js";
import * as Yup from "yup";

export const initialValues = {
  user_id: "",
  product_id: "",
  color_id: "",
  guaranty_id: "",
  count: "",
};

export const onSubmit = async (
  values,
  actions,
  setSelectedProductsInfo,
  currentProduct,
) => {
  actions.resetForm();
  actions.setFieldValue("user_id", values.user_id);
  setSelectedProductsInfo((old) => [
    ...old,
    {
      id: currentProduct.id + Math.random(),
      product: currentProduct,
      guaranty:
        values.guaranty_id > 0
          ? currentProduct.guaranties.filter(
              (g) => g.id == values.guaranty_id,
            )[0]
          : null,
      color:
        values.color_id > 0
          ? currentProduct.colors.filter((c) => c.id == values.color_id)[0]
          : null,
      count: values.count,
    },
  ]);
};

export const validationSchema = Yup.object().shape({
  user_id: Yup.number()
    .typeError("فقط عدد وارد کنید")
    .required("لطفا این قسمت را پر کنید"),
  product_id: Yup.number()
    .typeError("فقط عدد وارد کنید")
    .required("لطفا این قسمت را پر کنید"),
  color_id: Yup.number().typeError("فقط عدد وارد کنید"),
  guaranty_id: Yup.number().typeError("فقط عدد وارد کنید"),
  count: Yup.number()
    .typeError("فقط عدد وارد کنید")
    .required("لطفا این قسمت را پر کنید"),
});
