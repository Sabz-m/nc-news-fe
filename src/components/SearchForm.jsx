import { useState } from "react";

const SearchForm = ({ setUsername }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchInput);
    setUsername(searchInput);
    setSearchInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            placeholder="Type Username here"
            type="text"
            onChange={handleChange}
            value={searchInput}
            required
          />
        </label>
        <button type="submit"> View </button>
      </form>
    </div>
  );
};

export default SearchForm;
