"use client";

import React, { useState } from "react";
import './globals.css';
import { Login } from "./pageLogin";
import { Register } from "./pageRegister";

export default function Home() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
      <div className="LoginPage">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
      </div>
  );
}
