import '../styles/navbar-style.css'
import logo from '../assets/logo.png'
export default function Navbar(){
    return(
        <div className="navbar">
            <a href="#"><img  className="logo"src={logo} alt="" /></a>
            
            <div className="nav-links">
                <a href="#" className='nav-link'>Home</a>
                <a href="#about" className='nav-link'>About</a>
                <a href="#skills" className='nav-link'>Skills</a>
                <a href="#education" className='nav-link'>Education</a>
                <a href="#project" className='nav-link'>Projects</a>
                <a href="https://drive.google.com/file/d/14wS9xKED_rb4WRoB8Tx48aog1ycAHrQI/view?usp=drive_link" target='_blank' className='nav-link resume-link'>Resume</a>
            </div>
        </div>
    )
}