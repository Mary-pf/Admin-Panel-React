import React from "react";
import GuarantiesTable from "./GuarantiesTable";

const Guaranties = () => {
  return (
    <div
      id="manage_guaranty_section"
      className="manage_guaranty_section main_section"
    >
      <h4 className="text-center my-3">مدیریت گارانتی ها</h4>
      <GuarantiesTable />
    </div>
  );
};

export default Guaranties;
