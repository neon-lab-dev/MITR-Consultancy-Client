"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */

import Table from "@/Components/Reusable/Table/Table";
import { useGetAllUserQuery } from "@/redux/Features/Admin/adminApi";

const AllUsers = () => {
  const {data:allUsers} = useGetAllUserQuery({});
    const columns = [
        { key: "id", label: "ID" },
        { key: "full_name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "country", label: "Country" },
        { key: "role", label: "Role" },
      ];
      
      const actions = [
        { label: "Edit", onClick: (row: any) => console.log("Edit", row) },
        { label: "Delete", onClick: (row: any) => console.log("Delete", row) },
      ];
      
    return (
        <div>
            <Table columns={columns} data={allUsers?.users} actions={actions} />
        </div>
    );
};

export default AllUsers;