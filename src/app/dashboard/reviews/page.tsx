"use client";

import useFetch from "@/hooks/useFetch";
import { endpoints } from "@/data/endpoints";
import AuthGuard from "@/components/AuthGuard";
import Loader from "@/components/common/Loader";
import Wrapper from "@/components/common/Wrapper";
import TableComponent from "@/components/common/Table";

const columns = [
  { key: "_id", label: "ID", sortable: false },
  { key: "name", label: "User Name", sortable: false },
  { key: "propertyId", label: "Property Id", sortable: false },
  // { key: "isActive", label: "Active Status", sortable: true },
  { key: "comment", label: "Review", sortable: false },
  { key: "stars", label: "Rating", sortable: true },
];

const Users: React.FC = () => {
  const { data, loading, error } = useFetch(endpoints["Review"].fetchAll);
  const updatedData = data?.data.result;
  const paginationData = data?.data?.pagination;

  if (loading && !updatedData && !error) return <Loader />;

  const operationsAllowed = endpoints["Review"].operations;

  return (
    <AuthGuard>
      <Wrapper>
        <TableComponent
          type="Review"
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
