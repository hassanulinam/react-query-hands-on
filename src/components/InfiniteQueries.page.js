import axios from "axios";
import React, { Fragment } from "react";
import { useInfiniteQuery } from "react-query";

const fetchColors = ({ pageParam }) =>
  axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);

const InfiniteQueries = () => {
  const { isLoading, isError, error, data, hasNextPage, fetchNextPage } =
    useInfiniteQuery(["colors"], fetchColors, {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < 4) {
          return pages.length + 1;
        } else return undefined;
      },
    });

  if (isLoading) return <h2> Loading....</h2>;

  if (isError) return <h1>{error.message}</h1>;

  return (
    <>
      <div>
        {data?.pages.map((group, i) => (
          <Fragment key={i}>
            {group.data.map((color) => (
              <h2 key={color.id}>
                {color.id}. {color.label}
              </h2>
            ))}
          </Fragment>
        ))}
      </div>
      <button disabled={!hasNextPage} onClick={fetchNextPage}>
        Load more
      </button>
    </>
  );
};

export default InfiniteQueries;
