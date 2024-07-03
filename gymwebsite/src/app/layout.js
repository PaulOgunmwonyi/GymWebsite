"use client"

import "./globals.css";
import React, { useState } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import TheHeader from "./components/TheHeader";

export default function RootLayout({ children }) {


  return (
    <AuthProvider>
      <html lang="en">
        <body>  
            <TheHeader></TheHeader>
            <main className="App">
              {children}
            </main>
        </body>
      </html>
    </AuthProvider>
  );
}
