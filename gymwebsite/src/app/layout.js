"use client"

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body>  
          <main className="App">
            {children}
          </main>
       </body>
    </html>
  );
}
