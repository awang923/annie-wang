import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import  { Container, Row, Col } from 'react-bootstrap';
import mindCube from '../../assets/img/mindCube.png';

export const MindtappTechFlow = () => {
    return (
       <div className='techflow'>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Task 1"
                dateClassName='tech-title-text'
                iconStyle={{ background: 'rgb(49, 84, 165)', color: '#fff' }}
                // icon={url('../../assets/img/github.svg')}
            >
                <Container>
                    <p>
                    Collaborated with one other developer to implement the game MindCube using Dart. 
                    A demo of the game can be seen in the demo section below. 
                    </p>
                    <img className='techflow-phone-img' src={mindCube} alt='scoop' />
                </Container>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Task 2"
                dateClassName='tech-title-text'
                iconStyle={{ background: 'rgb(63, 63, 63)', color: '#fff' }}
                // icon={url('../../assets/img/github.svg')}
            >
                <p>
                Upon joining the team during the early development stage of the app and with no 
                official UI/UX designer, I took up on that role. I noticed that there are some 
                inconsistent styling with the interface as well as reused code throughout the app. 
                To address these issues, I redesigned the game interface in the project by developing 
                a reusable and extendable template for the homepage of games, which resulted in 
                cleaner code and a more efficient workflow. 
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
       </div>
    )
}