import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Certificates from './certificates';
import '../styles/education-style.css'
import cbse from "../assets/cbse.png"
import amu from "../assets/amu.png"
import slides from '../data/certificates-data'
export default function Education(){
    return(
        <div className="education" id='education'>
            <h1 className='edu-head items-center'>EDUCATION</h1>
            <VerticalTimeline lineColor='#fff'>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                iconStyle={{background:'#fff', color:'#000'}}
                icon={<img src={amu} alt="AMU logo" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
                date="2026">
                    <h3 className='qualification vertical-timeline-element-title'>B.Tech</h3>
                    <p className='school vertical-timeline-element-subtitle'>Aligarh Muslim University</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <VerticalTimeline lineColor='#fff'>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                iconStyle={{background:'#fff', color:'#000'}}
                icon={<img src={cbse} alt="CBSE logo" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
                date="2021">
                    <h3 className='qualification vertical-timeline-element-title'>Intermediate</h3>
                    <p className='school vertical-timeline-element-subtitle'>Central Board of Secondary Education</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <VerticalTimeline lineColor='#fff'>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                iconStyle={{background:'#fff', color:'#000'}}
                icon={<img src={cbse} alt="CBSE logo" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
                date="2019">
                    <h3 className='qualification vertical-timeline-element-title'>High School</h3>
                    <p className='school vertical-timeline-element-subtitle'>Central Board of Secondary Education</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <h1 className='edu-head items-center'>CERTIFICATES</h1>
            <div className="carousel max-w-lg  flex items-center
            justify-between">
                <Certificates autoSlide={true}>
                    {slides.map((s,i)=>(
                            <img className=" bg-opacity-90"key={i} src={s.loc}/>
                            
                    ))}
                    {slides.map((s,i)=>(
                            <h3 style={{backgroundColor:"red"}} key={i}>{s.title}</h3>
                            
                    ))}
                </Certificates>
            </div>

        </div>
    )
}