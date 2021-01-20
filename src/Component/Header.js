import React, { useState } from "react";

const Header = (props) => {
  const [gFilter, setgFilter] = useState({
    display: false,
    filter: "All",
  });
  const [cFilter, setcFilter] = useState({
    display: false,
    filter:"All"
  });

  const showGenderFilter = () => {
    setgFilter({ ...gFilter,display: !gFilter.display });
  };


  const handleGenderFilter = (key) => {
    setgFilter({ display: !gFilter.display, filter:key });
    const filter = {
        type:"Gender",
        key
    }
    props.filterList(filter)
  };

  const showCardFilter = () => {
    setcFilter({...cFilter, display: !cFilter.display });
  };
  const handleCardFilter = (key) => {
    setcFilter({ display: !cFilter.display, filter:key });
    const filter = {
        type:"PaymentMethod",
        key
    }
    props.filterList(filter)
  };
  return (
    <div className="header_wrapper">
      <div className="left">
        <h1>ENYE-PROFILES</h1>
        <span>Filters</span>
        <span>Gender: </span>
        <span className="dropdown" onClick={showGenderFilter}>
          {gFilter.filter}
          <span>
            <i className="fas fa-sort-down   "></i>
          </span>
        </span>
        <span>Payment Method: </span>
        <span className="dropdown" onClick={showCardFilter}>
          {cFilter.filter}
          <span>
            <i className="fas fa-sort-down   "></i>
          </span>
        </span>
      </div>
      <div className="right">
        <input type="text" placeholder="search first name" onChange={(e)=>{props.searchList(e.target.value)}}/>
      </div>
      <div
        className="genderFilter"
        style={{ display: `${gFilter.display ? "inline" : "none"}` }}
      >
        <ul>
          <li onClick={() => handleGenderFilter("All")}>All</li>
          <li onClick={() => handleGenderFilter("Male")}>Male</li>
          <li onClick={() => handleGenderFilter("Female")}>Female</li>
          <li onClick={() => handleGenderFilter("Prefer to skip")}>
            Prefer To Skip
          </li>
        </ul>
      </div>
      <div
        className="cardFilter"
        style={{ display: `${cFilter.display ? "inline" : "none"}` }}
      >
        <ul>
          <li onClick={() => handleCardFilter("All")}>All</li>
          <li onClick={() => handleCardFilter("money order")}>Money Order</li>
          <li onClick={() => handleCardFilter("cc")}>CC</li>
          <li onClick={() => handleCardFilter("check")}>Check</li>
          <li onClick={() => handleCardFilter("paypal")}>Paypal</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
