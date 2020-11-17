//DATE PICKER COMPONENT
import React, { useState } from "react";
import "./Search.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@material-ui/icons/People";
import { Button, Input } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Search() {
  const history = useHistory();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [input, setInput] = useState("2");

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        className="search__picker"
      />

      <h2>
        Number of guests <PeopleIcon />
      </h2>
      <input
        min={0}
        defaultValue={2}
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        onClick={() =>
          history.push({
            pathname: "/search",
          })
        }
      >
        Search Airbnb
      </Button>
    </div>
  );
}

export default Search;
