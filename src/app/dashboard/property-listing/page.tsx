"use client";

import useFetch from "@/hooks/useFetch";
import { endpoints } from "@/data/endpoints";
import AuthGuard from "@/components/AuthGuard";
import Loader from "@/components/common/Loader";
import Wrapper from "@/components/common/Wrapper";
import TableComponent from "@/components/common/Table";

const columns = [
  { key: "_id", label: "ID", sortable: false },
  { key: "title", label: "Title", sortable: false },
  { key: "status", label: "Status", sortable: false },
  { key: "propertyType", label: "Type", sortable: false },
  { key: "price", label: "Price", sortable: false },
  { key: "description", label: "Description", sortable: false },
];

const Users: React.FC = () => {
  const { data, loading, error } = useFetch(endpoints["Properties"].fetchAll);
  const updatedData = data?.data.result;
  const paginationData = data?.data?.pagination;

  if (loading && !updatedData && !error) return <Loader />;

  const operationsAllowed = endpoints["Properties"].operations;

  return (
    <AuthGuard>
      <Wrapper>
        <TableComponent
          type="Properties"
          columns={columns}
          data={updatedData}
          pagination_data={paginationData}
          operationsAllowed={operationsAllowed}
        />
      </Wrapper>
    </AuthGuard>
  );
};

export default Users;
