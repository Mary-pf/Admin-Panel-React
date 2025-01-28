import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ErrorMessage, Field } from "formik";

const Ckeditor = ({ name, label, className, placeholder }) => {
  return (
    <Field>
      {({ form }) => {
        return (
          <div className={`col-12 ${className}`}>
            <CKEditor
              editor={ClassicEditor}
              data={`<p>${label} : ${placeholder}</p>`}
              onReady={(editor) => {
                console.log(editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
            <ErrorMessage name={name} component={FormikError} />
          </div>
        );
      }}
    </Field>
  );
};

export default Ckeditor;
