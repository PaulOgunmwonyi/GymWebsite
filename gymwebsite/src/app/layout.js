import "./globals.css";
import Header from './components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body>
          <Header userFullName={"Sample User"}></Header>
          <main className="App">
            {children}
          </main>
       </body>
    </html>
  );
}
