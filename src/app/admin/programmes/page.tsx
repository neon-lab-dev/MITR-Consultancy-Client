"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */

import Table from "@/Components/Reusable/Table/Table";

const Programmes = () => {
    const columns = [
        { key: "id", label: "ID" },
        { key: "name", label: "Programme Name" },
        { key: "enrolledStudents", label: "Enrolled Students" },
        { key: "price", label: "Price" },
        { key: "duration", label: "Duration" },
    ];
      
    const data = [
        { id: 1, name: "Web Development Bootcamp", enrolledStudents: 150, price: "₹999", duration: "3 months" },
        { id: 2, name: "Data Science Masterclass", enrolledStudents: 120, price: "₹999", duration: "3 months" },
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

export default Programmes;