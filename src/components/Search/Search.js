import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Search.module.css";

const Search = (props) => {
  const [searchDropdown, setSearchDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
    if (event.target.value.length > 0) {
      setSearchDropdown(true);
    } else {
      setSearchDropdown(false);
    }
  };

  const handleEnterKey = (e) => {
    if (e.key == "Enter") {
      console.log("You pressed Enter!!");
    }
  };

  return (
    <div className={`${props.className}`}>
      <div className={`${classes.searchContainer}`}>
        <span className={`icon-search ${classes.icon}`}></span>
        <input
          type="text"
          placeholder="Search"
          className={classes.input}
          onChange={handleSearch}
          onKeyDown={handleEnterKey}
        />
        {searchDropdown ? (
          <div className={classes.searchDropdownOuter}>{searchValue}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export { Search };
