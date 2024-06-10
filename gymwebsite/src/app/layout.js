import "./globals.css";
import Header from './components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body>
          <Header></Header>
          <main className="App">
            {children}
          </main>
       </body>
    </html>
  );
}
