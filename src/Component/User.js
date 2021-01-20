import React, { useState, useEffect } from "react";

const User = (props) => {
  const { list } = props;
  const [state, setState] = useState({
    currentPage: 1,
    profilePerPage: 20,
    totalPage: Math.ceil(list.length / 20),
    start:0,
  });
  var PageList = list
    ? list.slice(state.start, state.start + state.profilePerPage)
    : null;

  const handleNextPage = () => {
      setState({
          ...state,
          start:state.start + state.profilePerPage
      })
  };
  const handlePrevPage = () => {
    setState({
        ...state,
        start:state.start - state.profilePerPage
    })
  };
  return (
    <div className="user_wrapper">
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Payment Method</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {PageList?PageList.map((list, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{list.FirstName}</td>
              <td>{list.LastName}</td>
              <td>{list.Gender}</td>
              <td>{list.PaymentMethod}</td>
              <td>{list.Email}</td>
            </tr>
          )):null}
        </tbody>
      </table>
      <span>
        <button onClick={handlePrevPage} >Prev Page</button>
      </span>
      <span>
        <button onClick={handleNextPage}>Next Page</button>
      </span>
    </div>
  );
};

export default User;
