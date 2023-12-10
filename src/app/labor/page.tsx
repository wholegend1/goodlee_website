"use client";
import data from "@/app/data";
import CardLister from "@/components/CardList/CardLister";
import FilterList from "@/components/Filter/FilterList";
import { useEffect, useState } from "react";

export default function Labor() {
  const [latestWorkers, setLatestWorkers] = useState<any>([]);

  useEffect(() => {
    const latest = data.slice(0, 4);
    setLatestWorkers(latest);
  }, []);
  return (
    <div className="px-3 py-20 pt-0 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 flex gap-[50px] flex-col">
      <div className="new-labor-box">
        <h3 className="px-8">最近上線的移工</h3>
        <CardLister data={latestWorkers} />
      </div>
      <FilterList />
      <CardLister data={data} />
    </div>
  );
}
