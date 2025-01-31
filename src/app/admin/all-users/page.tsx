"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */

import Table from "@/Components/Reusable/Table/Table";

const AllUsers = () => {
    const columns = [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Phone" },
        { key: "country", label: "Country" },
      ];
      
      const data = [
        { id: 1, name: "John Doe", email: "john@example.com", phone: "01608249337", country: "Bangladesh" },
        { id: 1, name: "John Doe", email: "john@example.com", phone: "01608249337", country: "Bangladesh" },
      ];
      
      const actions = [
        { label: "Edit", onClick: (row: any) => console.log("Edit", row) },
        { label: "Delete", onClick: (row: any) => console.log("Delete", row) },
      ];
      
    return (
        <div>
             
            <Table columns={columns} data={data} actions={actions} />
        </div>
    );
};

export default AllUsers;