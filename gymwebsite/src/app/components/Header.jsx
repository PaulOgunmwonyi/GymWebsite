import Link from 'next/link';
import './Header.css';

export default function Header({userFullName}) {
    return <header className="App-header">
        <img src="/dumbbells.png" className="App-logo" alt="logo" />
        <Link href="/">
            <hi className='Home-Page-Link'>SMARTER LIFTS</hi>
        </Link>
        <nav className="App-navigation">
            <ul className='Nav-links'>
                <li><Link href="/login/workoutplans" className='Page-Link'>Workout Plans</Link></li>
                <li><Link href="/login/foodtracking" className='Page-Link'>Food Tracking</Link></li>
                <li><Link href="/login/personalgoals" className='Page-Link'>Personal Goals</Link></li>
            </ul>
        </nav>
        <strong>Welcome {userFullName}!</strong>
        <Link href="/profile"> 
            <img src="/pfp.jpg" className="Profile-pic" alt="pfp" /> 
        </Link>
    </header>
}


