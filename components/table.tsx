"use client";
import { tagsColor } from "@/lib/api/mock-data";
import React from "react";
import { Pill } from "./utils/pill";

interface Props {
  list: any;
}

export const Table = ({ list }: Props) => {
  return (
    <div className="flex-1 border-gray-300 border-[1px] rounded-md overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100 text-sm font-medium">
          <tr>
            <th className="text-left py-3 px-4 font-bold border-b border-gray-200">
              Name
            </th>
            <th className="text-left py-3 px-4 font-bold border-b border-gray-200">
              Regions
            </th>
            <th className="text-left py-3 px-4 font-bold border-b border-gray-200">
              Tags
            </th>
            <th className="text-left py-3 px-4 font-bold border-b border-gray-200">
              Active
            </th>
            <th className="text-left py-3 px-4 font-bold border-b border-gray-200">
              Public
            </th>
          </tr>
        </thead>
        <tbody>
          {list?.map((item) => (
            <tr key={item?.name}>
              <td className="py-3 px-4 border-b border-gray-200 text-sm">
                {item?.name}
              </td>
              <td className="py-3 px-4 border-b border-gray-200 text-sm">
                {item?.regions?.map((region) => `${region}`).join(" ,")}
              </td>
              <td className="py-3 px-4 border-b border-gray-200 text-sm">
                {item?.tags?.map((tag) => (
                  <Pill key={tag} label={tag} color={tagsColor[tag]} />
                ))}{" "}
              </td>
              <td className="py-3 px-4 border-b border-gray-200 text-sm">
                {item?.active ? <i className="fa-solid fa-check"></i> : "-"}
              </td>
              <td className="py-3 px-4 border-b border-gray-200 text-sm">
                {item?.public ? <i className="fa-solid fa-check"></i> : "-"}
              </td>
            </tr>
          ))}
          {list.length === 0 && (
            <tr>
              <td className="text-center p-3 text-sm" colSpan={5}>
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
