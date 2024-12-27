import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function SortBy({ sortBy, orderBy, setSortBy, setOrderBy }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
    searchParams.set("sortBy", event.target.value);
    setSearchParams(searchParams);
  };

  const handleOrderByChange = (event) => {
    setOrderBy(event.target.value);
    searchParams.set("orderBy", event.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <div>
        <label>Sort By: </label>
        <select
          name="Sort Article By"
          onChange={handleSortByChange}
          value={sortBy}
        >
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
          <option value="author">Author</option>
          <option value="article_id">Article ID</option>
        </select>
      </div>
      <div>
        <label>Order By: </label>
        <select
          name="Order Article By"
          onChange={handleOrderByChange}
          value={orderBy}
        >
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>
    </div>
  );
}
