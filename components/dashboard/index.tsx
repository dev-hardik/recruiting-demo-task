"use client";
import React, { useEffect, useState } from "react";
import { Table } from "../table";
import { Filters } from "./filters";
import { data } from "@/lib/api/mock-data";

export const Dashboard = () => {
  const [list, setList] = useState(data);
  const [filters, setFilters] = useState<any>({
    public: [],
    active: [],
    regions: [],
    tags: [],
  });

  useEffect(() => {
    const filteredList = data?.filter((item: any) => {
      return Object.keys(filters).every((key: any) => {
        const value = filters?.[key];
        if (value === "" || value.length === 0) {
          return true;
        }

        if (!Array.isArray(item[key])) {
          return value.includes(item[key]);
        }
        return value?.every((el: string) => {
          return item[key]?.includes(el);
        });
      });
    });
    setList(filteredList);
  }, [filters]);

  return (
    <div className="flex">
      <Filters filters={filters} setFilters={setFilters} list={list} />
      <div className="flex-1 p-5">
        <div>Search</div>
        <Table list={list} />
      </div>
    </div>
  );
};
