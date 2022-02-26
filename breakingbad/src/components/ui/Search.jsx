import { useState } from "react";
import { debounce } from "lodash";
const Search = ({ getQuery }) => {
  const [query, setQuery] = useState("");
  const handlerOnchange = debounce((value) => {
    setQuery(value);
    getQuery(value);
  }, 1000);
  return (
    <section className="search">
      <input
        type="text"
        onChange={(e) => handlerOnchange(e.target.value)}
        className="form-control"
      />
    </section>
  );
};

export default Search;
