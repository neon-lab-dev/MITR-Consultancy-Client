"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

interface Column {
  key: string;
  label: string;
}

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
  actions?: { label: string; onClick: (rowData: Record<string, any>) => void }[];
}

const Table: React.FC<TableProps> = ({ columns, data, actions }) => {
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  return (
    <div className="overflow-x-auto shadow-course-details rounded-lg border border-gray-200">
      <table className="min-w-full bg-white">
        {/* Table Head */}
        <thead className="bg-primary-20 text-white">
          <tr>
            {columns?.map((col) => (
              <th key={col.key} className="px-6 py-3 text-left font-medium">
                {col.label}
              </th>
            ))}
            {actions && <th className="px-6 py-3 text-left">Actions</th>}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data?.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t">
              {columns.map((col) => (
                <td key={col.key} className="px-6 py-4 whitespace-nowrap">
                  {row[col.key]}
                </td>
              ))}

              {/* Action Dropdown */}
              {actions && (
                <td className="px-6 py-4 relative">
                  <button
                    className="px-4 py-2 bg-gray-200 rounded-md"
                    onClick={() => setDropdownOpen(dropdownOpen === rowIndex ? null : rowIndex)}
                  >
                    ⋮
                  </button>

                  {dropdownOpen === rowIndex && (
                    <div className="absolute right-20 mt-2 w-36 bg-white shadow-md rounded-md border z-10">
                      {actions.map((action, actionIndex) => (
                        <button
                          key={actionIndex}
                          className="block px-4 py-2 text-left w-full hover:bg-gray-100"
                          onClick={() => {
                            action.onClick(row);
                            setDropdownOpen(null);
                          }}
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
