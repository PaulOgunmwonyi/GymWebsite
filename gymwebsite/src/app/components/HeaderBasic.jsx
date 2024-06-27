import Link from 'next/link';
import './Header.css';

export default function HeaderBasic() {
    return <header className="App-header">
        <img src="/dumbbells.png" className="App-logo" alt="logo" />
        <Link href="/">
            <hi className='Home-Page-Link'>SMARTER LIFTS</hi>
        </Link>
        <Link href="/profile"> 
            <img src="/pfp.jpg" className="Profile-pic" alt="pfp" /> 
        </Link>
    </header>
}
