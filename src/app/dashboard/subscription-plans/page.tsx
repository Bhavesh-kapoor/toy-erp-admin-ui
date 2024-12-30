"use client";

import useFetch from "@/hooks/useFetch";
import { endpoints } from "@/data/endpoints";
import AuthGuard from "@/components/AuthGuard";
import Loader from "@/components/common/Loader";
import Wrapper from "@/components/common/Wrapper";
import TableComponent from "@/components/common/Table";

const columns = [
  { key: "_id", label: "ID", sortable: false },
  { key: "name", label: "Name", sortable: false },
  { key: "description", label: "Description", sortable: false },
  { key: "maxProperties", label: "Max. Property", sortable: false },
  { key: "isActive", label: "Status", sortable: false },
];

const Seo: React.FC = () => {
  const { data, loading, error } = useFetch(endpoints["Subscription"].fetchAll);
  const updatedData = data?.data.result;
  const paginationData = data?.data?.pagination;

  if (loading && !updatedData && !error) return <Loader />;

  const operationsAllowed = endpoints["Subscription"].operations;

  return (
    <AuthGuard>
      <Wrapper>
        <TableComponent
          type="Subscription"
          columns={columns}
          data={updatedData}
          pagination_data={paginationData}
          operationsAllowed={operationsAllowed}
        />
      </Wrapper>
    </AuthGuard>
  );
};

export default Seo;
