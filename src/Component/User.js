import React from "react";

const User = (props) => {
  const { list } = props;
  return (
    <div className="user_wrapper">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Payment Method</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {list
            ? list.map((list) => (
                <tr key={list.PhoneNumber}>
                  <td>{list.FirstName}</td>
                  <td>{list.LastName}</td>
                  <td>{list.Gender}</td>
                  <td>{list.PaymentMethod}</td>
                  <td>{list.Email}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default User;
