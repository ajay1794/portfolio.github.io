import '../styles/about-style.css'
import { motion } from "motion/react"
import aboutImage from '../assets/about-image.jpg'  
export default function About(){
    return(
        <div id="about"className="about">
            <h2 className='about-text-head'>ABOUT</h2>
            <div className="about-detail">
                <p className='about-text'>Hi! I'm <span className='about-name'>Ajay Singh Rathore</span>, a tech enthusiast and problem-solver passionate about leveraging technology to create impactful solutions. With expertise in AI, machine learning, and web development, I thrive on turning ideas into functional, user-friendly applications.
                                            I’ve built projects ranging from a snake species identification app powered by TensorFlow to a Shopify-Amazon integration plugin that streamlines e-commerce fulfillment. My certifications in Deep Learning, Data Science, and SQL have honed my ability to tackle challenges with innovative tools and approaches.
                                        When I’m not coding, I enjoy exploring emerging technologies, contributing to open-source projects, and collaborating with like-minded individuals. Feel free to check out my work and get in touch if you’d like to team up!</p>
                <img className="about-image"src={aboutImage} alt="" />
            </div>
        </div>
        // <motion.h1 className="temp" 
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{ duration: 0.3, delay: 1, ease: "linear" }}>
        //     This is About
        // </motion.h1>
    )
}