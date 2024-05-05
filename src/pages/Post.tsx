import { getPost } from "../api/products";
import ProductBox from "../components/ProductBox";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { TodoType } from "../types";

const Post = () => {
  const [page, setPage] = useState<number>(1);

  const { data, isFetching, isPlaceholderData } = useQuery({
    queryKey: ["list", page],
    queryFn: () => getPost(page),
    placeholderData: keepPreviousData,
  });

  return (
    <>
      <div className="mb-6">links</div>
      <div className="grid grid-cols-5 gap-6">
        <>
          {data?.map((product: TodoType) => (
            <ProductBox key={product.id} product={product} todosType />
          ))}
        </>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-10 space-x-6">
        <button
          className={`${
            page === 1 &&
            "text-gray-300 hover:text-white hover:bg-gray-300 hover:border-gray-300"
          } border border-gray-800 w-[100px] h-[40px] px-3 py-2 rounded-lg hover:bg-gray-900 hover:text-white`}
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className={`${
            !!isPlaceholderData &&
            "text-gray-300 hover:text-white hover:bg-gray-300 hover:border-gray-300"
          } border border-gray-800 w-[100px] h-[40px] rounded-lg hover:bg-gray-900 hover:text-white`}
          onClick={() => {
            setPage((old) => old + 1);
          }}
          disabled={isPlaceholderData}
        >
          Next
        </button>
      </div>
      <div className="text-center mt-5">
        {isFetching ? <span> Loading...</span> : null}
      </div>
    </>
  );
};

export default Post;
