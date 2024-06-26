import { getTodos } from "../api/products";
import ProductBox from "../components/ProductBox";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { Fragment, useEffect } from "react";
import { TodoType } from "../types";

const Todos = () => {
  const { ref, inView } = useInView();

  const {
    data,
    fetchNextPage,
    isLoading,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["getTodos"],
    queryFn: getTodos,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allpage) => {
      const nextPage = lastPage.length ? allpage.length + 1 : undefined;
      return nextPage;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const skeletonItems = Array.from({ length: 20 }, (_, index) => index);

  return (
    <>
      <div className="mb-6">todos</div>
      <div className="grid grid-cols-5 gap-6">
        {isLoading ? (
          <>
            {skeletonItems.map((index) => (
              <div
                key={index}
                className="border border-gray-200 bg-gray-200 max-auto rounded-lg px-4 py-7 w-56 h-64 flex space-y-5 flex-col justify-center overflow-hidden animate-pulse"
              ></div>
            ))}
          </>
        ) : (
          <>
            {data?.pages.map((group, i) => (
              <Fragment key={i}>
                {group.map((product: TodoType) => (
                  <ProductBox key={product.id} product={product} todosType />
                ))}
              </Fragment>
            ))}
            <div>
              {isFetching && !isFetchingNextPage ? "Fetching..." : null}
            </div>
          </>
        )}
      </div>
      <button ref={ref}>
        {isFetchingNextPage ? "loading more.." : "load more"}
      </button>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};

export default Todos;
