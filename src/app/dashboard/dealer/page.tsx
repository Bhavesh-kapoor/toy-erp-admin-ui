"use client";

import useFetch from "@/hooks/useFetch";
import { endpoints } from "@/data/endpoints";
import AuthGuard from "@/components/AuthGuard";
import Loader from "@/components/common/Loader";
import Wrapper from "@/components/common/Wrapper";
import TableComponent from "@/components/common/Table";

const columns = [
  { key: "_id", label: "ID", sortable: false },
  { key: "name", label: "Dealer Name", sortable: false },
  { key: "email", label: "Email", sortable: false },
  { key: "mobile", label: "Phone Number", sortable: false },
  { key: "isActive", label: "Active Status", sortable: true },
  { key: "createdAt", label: "created At", sortable: true, isDate: true },
];

const Users: React.FC = () => {
  const { data, loading, error } = useFetch(endpoints["Dealer"].fetchAll);
  const updatedData = data?.data.result;
  const paginationData = data?.data?.pagination;

  if (loading && !updatedData && !error) return <Loader />;

  const operationsAllowed = endpoints["Dealer"].operations;

  return (
    <AuthGuard>
      <Wrapper>
        <TableComponent
          type="Dealer"
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
