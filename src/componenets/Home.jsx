import '../styles/home_style.css'
import  linkedin from '../assets/linkedin.png'
import  github from '../assets/github.png'
import email from '../assets/email.png'
export default function Home(){
    return(
        <div className="home">
            <div className="home-content">
                <p className='text text-top'>Hi! I am</p>
                <div className="container">
                    <p className='name'>Ajay Singh Rathore!</p>
                </div>
                <p className='text text-bottom' >I am a <span className='design'>Developer</span></p>
                <div className="links">
                    <a href="https://github.com/ajay1794" className='icon' target='_blank'><img className='icon-image'src={github} alt="github" /></a>
                    <a href="https://www.linkedin.com/in/ajaysinghrathore11/" className='icon' target='_blank'><img className='icon-image' src={linkedin} alt="linkedin" /></a>
                    <a href="mailto:ajaysinghrathore1794@gmail.com" className='icon' target='_blank'><img className='icon-image' src={email} alt="email" /></a>
                </div>
            </div>
           
        </div>
        
    )
}
// <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a>