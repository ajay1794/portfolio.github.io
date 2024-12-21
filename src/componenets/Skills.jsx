import { useRef } from "react";
import { useInView } from "framer-motion";
import '../styles/skills-style.css'
import data from "../data/skills-data"
export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const langs=[]
    const frameworks = []
    const tools = []
   data.map((skill)=>{
    if (skill.type==='lang'){
        langs.push(skill)
    } else if (skill.type==='framework'){
        frameworks.push(skill)
    }else{
        tools.push(skill)
    }
   })
    return (
        <div className="skills" id="skills" >
            <h2 className="skills-head"style={{
            // transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 0 : 1,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>SKILLS</h2>
            <h3 className="langs skill-title">Languages & Databases</h3>
            <div className="lang-icons flex justify-center">
                {langs.map((lang,index)=>{
                    return <img key={index} className="lang skill-icon " src = {lang.loc} alternate={lang.title}/>
                })}
            </div>
            <h3 className="frameworks skill-title">Frameworks & Technologies</h3>
            <div className="flex justify-center">
                {frameworks.map((framework,index)=>{
                    return <img key={index} className="framework skill-icon" src = {framework.loc} alternate={framework.title}/>
                })}
            </div>
            <h3 className="tools skill-title">Tools & Platforms</h3>
            <div className="flex justify-center">
                {tools.map((tool,index)=>{
                    return <img key={index} className="lang skill-icon" src = {tool.loc} alternate={tool.title}/>
                })}
            </div>
            
        </div>
    );
}
