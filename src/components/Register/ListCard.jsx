import React from "react";

const ListCard = ({ data }) => {
  return (
    <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
      <h3>ID: {data.id}</h3>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Age: {data.age}</p>
      <p>Gender: {data.gender}</p>
      {/* Typically, you wouldn't display a password, but it's included for demonstration */}
      <p>Password: {data.password}</p>
    </div>
  );
};

export default ListCard;
