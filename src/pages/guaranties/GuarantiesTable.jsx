import { useEffect, useState } from "react";
import PaginatedTable from "../../components/PaginatedTable";
import {
  deleteGuarantieservice,
  getAllGuarantiesService,
} from "../../services/guaranties.js";
import { Alert, Confirm } from "../../utils/alerts.js";
import AddGuaranty from "./AddGuaranty";
import Actions from "./tableAddition/Actions";

const GuarantiesTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [guarantyToEdit, setguarantyToEdit] = useState(null);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    { field: "descriptions", title: "توضیحات" },
    { field: "length", title: "مدت گارانتی" },
    { field: "length_unit", title: "واحد" },
    {
      title: "عملیات",
      elements: (rowData) => (
        <Actions
          rowData={rowData}
          setguarantyToEdit={setguarantyToEdit}
          handleDeleteguaranty={handleDeleteguaranty}
        />
      ),
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  const handleGetAllGuaranties = async () => {
    setLoading(true);
    const res = await getAllGuarantiesService();
    res && setLoading(false);
    if (res.status === 200) {
      setData(res.data.data);
    }
  };

  const handleDeleteguaranty = async (guaranty) => {
    if (
      await Confirm("حذف برند", `آیا از حذف ${guaranty.title} اطمینان دارید؟`)
    ) {
      const res = await deleteGuarantieservice(guaranty.id);
      if (res.status === 200) {
        Alert("انجام شد", res.data.message, "success");
        setData((lastData) => lastData.filter((d) => d.id != guaranty.id));
      }
    }
  };

  useEffect(() => {
    handleGetAllGuaranties();
  }, []);
  return (
    <PaginatedTable
      data={data}
      dataInfo={dataInfo}
      numOfPAge={8}
      searchParams={searchParams}
      loading={loading}
    >
      <AddGuaranty
        setData={setData}
        guarantyToEdit={guarantyToEdit}
        setguarantyToEdit={setguarantyToEdit}
      />
    </PaginatedTable>
  );
};

export default GuarantiesTable;
