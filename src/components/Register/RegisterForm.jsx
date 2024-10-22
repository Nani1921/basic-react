import React, { useState } from "react";

const RegisterForm = ({ addProfile }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, age, gender, password } = formData;
    if (name && email && phone && age && gender && password) {
      addProfile(formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        password: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "16px" }}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "16px" }}
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        required
        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "16px" }}
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
        required
        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "16px" }}
      />
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        required
        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "16px" }}
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "16px" }}
      />
      <button type="submit" style={{ padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "16px" }}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
