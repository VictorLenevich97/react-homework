import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SEARCH } from "../../Costants/routes";
import SearchIcon from "@mui/icons-material/Search";
import "./search.css";

export const SearchForm = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const [searchValue, setSearchValue] = useState(
    params.get("value") || ""
  );

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="searchBox">
      <input
        className="searchInput"
        type="text"
        name=""
        placeholder="Search....."
        onChange={onSearch}
        value={searchValue}
      />
      <button
        onClick={() => {
          searchValue && navigate(`${SEARCH}/?value=${searchValue}`);
        }}
        className="searchButton"
        href="#"
      >
        <SearchIcon color="white"></SearchIcon>
      </button>
    </form>
  );
};
