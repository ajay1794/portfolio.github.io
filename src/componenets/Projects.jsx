import '../styles/projects-style.css'
import data from "../data/project-data"
export default function Projects(){
    return(
        <div className='projects' id='project'>
            <h1 className='p-head'>Projects</h1>
            <h2 className='items-center  text-3xl p-subhead'>Here are some of the projects that I have made</h2>
            <div className="project-list mx-auto grid grid-cols-2 gap-8 py-24 px-4 max-w-4xl l">
                {data.map((project,i)=>(
                    <div className="project border rounded-lg border-slate-200 shadow-lg p-8">
                    <h3 className='text-3xl font-extrabold text-center py-4'>{project.title}</h3>
                    <ul className="description">{project.description.split('\n').map((line,index)=>(
                        <li className="py-3"key={index}>{line}</li>
                    ))}</ul>
                    <a href={project.link} class=" items-center mt-8 block text-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        GitHub
                    </a>
                </div>
                ))}
            </div>
            <div className="footer">
                <h3>made with ❤️ by Ajay Singh Rathore</h3>
            </div>
        </div>
    )
}