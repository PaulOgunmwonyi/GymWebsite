import Link from 'next/link';
import './Header.css';

export default function HeaderBasic() {
    return <header className="App-header">
        <div className="left-section">
            <img src="/dumbbells.png" className="App-logo" alt="logo" />
            <hi className='Home-Page-Link'>SMARTER LIFTS</hi>
        </div>
        <div className="right-section">
            <img src="/pfp.jpg" className="Profile-pic" alt="pfp" /> 
        </div>
    </header>
}
