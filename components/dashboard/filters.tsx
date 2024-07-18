"use client";
import { filterFields } from "@/lib/api/mock-data";
import React, { useState } from "react";

interface Props {
  filters: any;
  setFilters: any;
  list: any;
}
export const Filters = ({ filters, setFilters, list }: Props) => {
  const [expandFilters, setExpandFilters] = useState({
    public: true,
    active: true,
    regions: true,
    tags: true,
  });

  const handleFilterChange = (field: any, option: any) => {
    const customFilter = { ...filters };
    if (customFilter[field?.value]?.includes(option?.value)) {
      customFilter[field?.value] = customFilter[field?.value].filter(
        (item: any) => item !== option.value
      );
    } else {
      customFilter[field?.value].push(option.value);
    }
    setFilters(customFilter);
  };

  const onToggleExpand = (filterValue: string) => {
    setExpandFilters((prev: any) => ({
      ...prev,
      [filterValue]: !prev[filterValue],
    }));
  };

  const resetFilters = () => {
    setFilters({
      public: [],
      active: [],
      regions: [],
      tags: [],
    });
  };

  const onCloseFilter = (event: any, value: string) => {
    event.stopPropagation();
    setFilters((prev: any) => ({ ...prev, [value]: [] }));
  };

  const getItemCount = (filter: any, option: any) => {
    return (
      list?.filter((item: any) => {
        if (!Array.isArray(item[filter?.value])) {
          return item[filter?.value] === option?.value;
        }
        return item[filter?.value].includes(option?.value);
      }).length || ""
    );
  };

  return (
    <div className="flex-1 max-w-[300px] p-5">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold"> Filters</h2>
        <button
          className="bg-white border-[1px] border-gray-200 px-3 py-1 rounded-md text-md"
          onClick={() => resetFilters()}
        >
          Reset
        </button>
      </div>

      <>
        {filterFields?.map((field) => (
          <div key={field?.value}>
            <div
              className="flex my-3 items-center justify-between"
              onClick={() => onToggleExpand(field.value)}
            >
              <div className="text-sm font-semibold">{field?.label}</div>
              {filters[field.value]?.length > 0 && (
                <span
                  className="text-sm font-semibold py-1 px-3 flex items-center gap-2 border-gray-300 border-[1px] rounded-full mr-auto ml-1 inline-block"
                  onClick={(event) => onCloseFilter(event, field.value)}
                >
                  {filters[field.value]?.length}

                  <i className="fa-solid fa-times text-gray-400"></i>
                </span>
              )}
              <i
                className={`fa-solid text-xs fa-chevron-${
                  expandFilters[field.value] ? "up" : "down"
                }`}
              ></i>
            </div>

            <div
              className={`border-gray-300 border-[1px] rounded-md overflow-hidden transition-all duration-300 ${
                expandFilters[field.value] ? "max-h-screen" : "max-h-0 "
              }`}
            >
              {field?.options?.map((option, index) => (
                <label
                  key={option?.value?.toString()}
                  className={`flex items-center justify-between p-2 
                ${index !== field.options?.length - 1 && "border-b-[1px]"}
                `}
                  htmlFor={`${field?.value}_${index}`}
                >
                  <input
                    type="checkbox"
                    className="mr-2"
                    name={`${field?.value}_${index}`}
                    id={`${field?.value}_${index}`}
                    checked={filters[field?.value]?.includes(option?.value)}
                    onChange={() => handleFilterChange(field, option)}
                  />
                  <span className="flex-1">{option?.label}</span>
                  <span>{getItemCount(field, option)}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </>
    </div>
  );
};
