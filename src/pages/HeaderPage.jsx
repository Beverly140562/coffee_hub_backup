import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router";

export default function HeaderPage() {
  const [userName, setUserName] = useState("Guest");
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser?.id) {
      navigate("/signup"); 
      return;
    }

    setUserName(savedUser.first_name || "Guest");
    setUserId(savedUser.id);
  }, [navigate]);

  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-5xl font-bold text-black m-2 pt-10">
          Hi, {userName}
        </h1>
        <p className="text-lg text-black mt-3 pl-5">
          Good ideas start with coffee.
        </p>
      </div>
      <img src={Logo} alt="Logo" className="w-33 h-33 object-cover" />
    </div>
  );
}
