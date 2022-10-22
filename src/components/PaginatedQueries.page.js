import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

const fetchColors = (pageNumber) =>
  axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);

const PaginatedQueries = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return <h2> Loading....</h2>;

  if (isError) return <h1>{error.message}</h1>;

  return (
    <>
      <div>
        {data?.data.map((color) => (
          <h3 key={color.id}>
            {color.id}. {color.label}
          </h3>
        ))}
      </div>
      <div className="d-flex-row">
        <button
          onClick={() => setPageNumber((p) => p - 1)}
          disabled={pageNumber === 1}
        >
          {"<<"}
        </button>
        <button
          onClick={() => setPageNumber((p) => p + 1)}
          disabled={pageNumber === 4}
        >
          {">>"}
        </button>
      </div>
      {isFetching && "loading..."}
    </>
  );
};

export default PaginatedQueries;
