import useSWR from "swr";
import { Person } from "@/types";
import CardLister from "@/components/CardList/CardLister";
import data from "@/app/data";

export default function Collection() {

  const randomIds = getRandomIds(data, 3);
  const selectedItems = data.filter((item: Person) =>
    randomIds.includes(item.id)
  );

  return (
    <div>
      {selectedItems.length === 0 ? (
        <div className="flex justify-center items-center text-gray-500 text-2xl min-h-screen font-normal bg-gray-300">
          您尚未收藏任何移工
        </div>
      ) : (
        <div className="collection-box min-h-screen px-3 py-20 pt-0 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 flex gap-[50px] flex-col">
          <h1 className="text-2xl font-normal flex px-6"></h1>
          <CardLister
            title={`您目前收藏了${selectedItems.length}名移工`}
            data={selectedItems}
          ></CardLister>
        </div>
      )}
    </div>
  );
}

// 隨機選取指定數量的 ID
function getRandomIds(data: Person[], count: number): number[] {
  const shuffled = data.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map((item: Person) => item.id);
}
