"use client"

import "./globals.css";
import { AuthProvider } from "./contexts/LoginContext";
import TheHeader from "./components/HeaderOverall";

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
