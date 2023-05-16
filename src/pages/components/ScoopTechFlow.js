import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import  { Container, Row, Col } from 'react-bootstrap';
import scoopFeedback from '../../assets/img/scoopFeedback.png';
import scoopProfile from '../../assets/img/scoopProfile.png';

export const ScoopTechFlow = () => {
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
                        I worked on a few content pages such as Feedback form, Booking Tours and 
                        Create User Profile using React native. 
                    </p>
                    <Row>
                        <Col>
                            <img className='techflow-phone-img' src={scoopFeedback} alt='scoop' />
                        </Col>
                        <Col>
                            <img className='techflow-phone-img' src={scoopProfile} alt='scoop' />
                        </Col>
                    </Row>
                    {/* <img className='techflow-phone-img' src={scoopFeedback} alt='scoop' /> */}
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
                    After creating the feedback page, I implemented a sorting function in Firebase to manage saved user feedback, which 
                    is sorted in ascending order based on the time of submission. Moreover, I developed 
                    the editing feedback feature, allowing the admin to update the feedback status such 
                    as 'in progress,' 'complete,' or 'to-do.' This function helps to maintain the user's 
                    feedback and ensures that it is addressed promptly.   
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date='Task 3'
                dateClassName='tech-title-text'
                iconStyle={{ background: 'rgb(49, 84, 165)', color: '#fff' }}
                // icon={url('../../assets/img/github.svg')}
            >
                <p>
                    For my last task, I worked closely with our UI/UX designer to meticulously review each page of 
                    the project and ensure that all styling errors were resolved. Additionally, I 
                    created a consistent typography system to be used across the app for future 
                    ease of maintenance and visual consistency.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
       </div>
    )
}