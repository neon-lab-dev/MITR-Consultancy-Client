"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */

import Table from "@/Components/Reusable/Table/Table";
import { useGetAllProgrammesQuery } from "@/redux/Features/InterhshipProgrammes/internshipProgrammesApi";

const Programmes = () => {
    const { data: allProgrammes } = useGetAllProgrammesQuery({});
    const columns = [
        { key: "_id", label: "ID" },
        { key: "courseName", label: "Programme Name" },
        { key: "totalEnrolled", label: "Enrolled Students" },
        { key: "price", label: "Price" },
        { key: "duration", label: "Duration" },
    ];

    const actions = [
        { label: "Edit", onClick: (row: any) => console.log("Edit", row) },
        { label: "Delete", onClick: (row: any) => console.log("Delete", row) },
    ];
    return (
        <div>
            <Table columns={columns} data={allProgrammes?.courses} actions={actions} />
        </div>
    );
};

export default Programmes;