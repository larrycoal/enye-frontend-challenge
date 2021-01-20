import React, { useState } from "react";
import Modal from './Modal'
const User = (props) => {
  const { list } = props;
  const [details, setDetails]=useState({
    open:false,
    body:""
  })
  const [state, setState] = useState({
    currentPage: 1,
    profilePerPage: 20,
    start:0,
  });
  var PageList = list
    ? list.slice(state.start, state.start + state.profilePerPage)
    : null;
    const handleOpen = (list) => {
      setDetails({
        open:true,
        body:list
      })
    };
    const handleClose = () => {
      setDetails({
        ...details,
        open:false
        
      })
    };
  const handleNextPage = () => {
      if(state.currentPage < Math.ceil(list.length / 20)){
      setState({
          ...state,
          start:state.start + state.profilePerPage,
          currentPage:state.currentPage+1
      })}
  };
  const handlePrevPage = () => {
      if(state.currentPage > 1){
    setState({
        ...state,
        start:state.start - state.profilePerPage,
        currentPage:state.currentPage-1
    })}
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
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {PageList?PageList.map((list, i) => (
            <tr key={i}>
              <td>{state.start + i}</td>
              <td >{list.FirstName.toUpperCase()}</td>
              <td>{list.LastName}</td>
              <td>{list.Gender}</td>
              <td>{list.PaymentMethod}</td>
              <td>{list.Email}</td>
              <td className="modal"onClick={()=>handleOpen(list)}>View Details</td>
            </tr>
          )):
          <div className="loading">
            Loading
          </div>
          }
        </tbody>
      </table>
      <div className="pagination_wrapper">
        <button onClick={handlePrevPage} >Prev Page</button>
      
        <button onClick={handleNextPage}>Next Page</button>
      </div>
     <Modal open={details.open} profile={details.body} handleClose={()=>handleClose()}/>
    </div>
  );
};

export default User;
