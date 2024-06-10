import Link from 'next/link';
import './Header.css';

function Header({userFullName}) {
    return <header className="App-header">
        <img src="/dumbbells.png" classname="App-logo" alt="logo" />
        <Link href="/">
            <hi className="App-title">App Title</hi>
        </Link>
        <strong>Welcome {userFullName}!</strong>
    </header>
}

export default Header;