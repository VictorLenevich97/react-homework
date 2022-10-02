import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { POST_SEARCH } from "../../constant/endpoints";

export const Search = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const [searchValue, setSearchValue] = useState(params.get("value") || "");

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    searchValue && navigate(`${POST_SEARCH}/?value=${searchValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={onSearch} value={searchValue} />
      <button>Поиск</button>
    </form>
  );
};

//2:23;23

