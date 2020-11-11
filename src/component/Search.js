import React, { Fragment, useState } from "react";
import { Redirect } from "react-router";
import {} from "../styles/search.scss";

const Search = () => {
  const [searchState, setSearchState] = useState({ search: false });
  const [termState, setTermState] = useState({ term: "" });
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setSearchState({ search: true });
      setTermState({ term: event.target.value });
    }
  }

  return (
    <Fragment>
      <input
        type="text"
        className="search"
        placeholder="🔍 Search Crawler"
        onKeyPress={handleKeyPress}
      />
      {searchState.search ? (
        <Redirect
          to={{ pathname: "/result", state: { results: termState.term } }}
        />
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Search;
