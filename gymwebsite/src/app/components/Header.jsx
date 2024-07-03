import Link from 'next/link';
import './Header.css';
import { useAuth } from '../contexts/LoginContext';

export default function Header({userFullName}) {
    const { isLoggedIn, setIsLoggedIn } = useAuth();

    return <header className="App-header">
        <img src="/dumbbells.png" className="App-logo" alt="logo" />
        <hi className='Home-Page-Link'>SMARTER LIFTS</hi>
        <nav className="App-navigation">
            <ul className='Nav-links'>
                <li><Link href="/login/workoutplans" className='Page-Link'>Workout Plans</Link></li>
                <li><Link href="/login/foodtracking" className='Page-Link'>Food Tracking</Link></li>
                <li><Link href="/login/personalgoals" className='Page-Link'>Personal Goals</Link></li>
            </ul>
        </nav>
        <strong>Welcome {userFullName}!</strong>
        <li><Link href="/" className='LogoutButton'>
                    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log Out</button>
        </Link></li>
        <Link href="/profile"> 
            <img src="/pfp.jpg" className="Profile-pic" alt="pfp" /> 
        </Link>
    </header>
}


