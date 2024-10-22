import React, { useState } from "react";
import ListCard from "./ListCard";
import RegisterForm from "./RegisterForm";
import Login from "./Login";

const Register = () => {
  const [profiles, setProfiles] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const addProfile = (newProfile) => {
    const updatedProfile = { ...newProfile, id: profiles.length + 1 };
    setProfiles([...profiles, updatedProfile]);
  };

  const handleLogin = (email, password) => {
    const user = profiles.find(
      (profile) => profile.email === email && profile.password === password
    );
    if (user) {
      setLoggedInUser(user);
    } else {
      alert("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
        <div
          style={{
            backgroundColor: "#f4f4f4",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "300px",
          }}
        >
          <h2>Register</h2>
          <RegisterForm addProfile={addProfile} />
        </div>
        <div
          style={{
            backgroundColor: "#f4f4f4",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "300px",
          }}
        >
          <h2>Login</h2>
          <Login handleLogin={handleLogin} />
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        {profiles.length > 0 && (
          <>
            <h2>Registered Users</h2>
            {profiles.map((profile) => (
              <ListCard data={profile} key={profile.id} />
            ))}
          </>
        )}
      </div>

      {loggedInUser && (
        <div
          style={{
            marginTop: "40px",
            backgroundColor: "#e0ffe0",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2>Welcome, {loggedInUser.name}!</h2>
          <ListCard data={loggedInUser} />
        </div>
      )}
    </div>
  );
};

export default Register;
