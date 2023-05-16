import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const RedfinTechFlow = () => {
    return (
       <div className='techflow'>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Product Spec"
                dateClassName='tech-title-text'
                iconStyle={{ background: 'rgb(200, 32, 33)', color: '#fff' }}
                // icon={url('../../assets/img/github.svg')}
            >
                <p>
                    I began the project by thoroughly reviewing the product specifications 
                    in order to gain a clear understanding of which features needed to be implemented. 
                    I then met with the product manager to determine the minimum viable product (MVP) and 
                    set priorities for the development process.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Technical Spec"
                dateClassName='tech-title-text'
                iconStyle={{ background: 'rgb(63, 63, 63)', color: '#fff' }}
                // icon={url('../../assets/img/github.svg')}
            >
                <p>
                    After reviewing the product specifications, I proceeded to the technical specifications 
                    phase. During this stage, I thoroughly examined the code base and meticulously documented 
                    the step-by-step process required to implement each feature. This involved investing 
                    significant time in exploring various implementation options and determining the optimal 
                    approach. Additionally, I conducted research on leveraging the built-in GoogleMapView component, 
                    as it offered potential cost savings compared to obtaining a new API key. This comprehensive 
                    technical analysis allowed me to make informed decisions and lay a solid foundation for the 
                    project\'s development.    
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date='Jira Tickets'
                dateClassName='tech-title-text'
                iconStyle={{ background: 'rgb(200, 32, 33)', color: '#fff' }}
                // icon={url('../../assets/img/github.svg')}
            >
                <p>
                    Once the technical spec was approved by the team, I created Jira tickets by breaking 
                    down each feature into smaller tasks and assigning them with story points. This helped me to 
                    manage the project effectively and ensured that everything was completed within the given 
                    timeline. By breaking down the tasks into smaller chunks, it made it easier to focus on each 
                    feature individually and make sure it was implemented correctly before moving on to the next one.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date='Implementation'
                dateClassName='tech-title-text'
                iconStyle={{ background: 'rgb(63, 63, 63)', color: '#fff' }}
                // icon={url('../../assets/img/github.svg')}
            >
                <p>
                    As the Map View project was primarily a frontend development project, I worked 
                    extensively with ReactJS to create new pages and components. Additionally, I utilized GraphQL 
                    to request data from the database. To retrieve the geographic information of Redfin home 
                    renovations, we leveraged the Google Maps API and Geocoder. These tools helped me create a 
                    responsive and user-friendly interface for the home services market managers, superintendents, 
                    and procurement coordinators to visualize jobs and retailers in a specific area.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Bug Bash"
                dateClassName='tech-title-text'
                iconStyle={{ background: 'rgb(200, 32, 33)', color: '#fff' }}
                // icon={url('../../assets/img/github.svg')}
            >
                <p>
                    After completing the project, I organized a bug bash session with the team to 
                    identify any critical bugs so I can fix any issues that were found before deploying the project.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
       </div>
    )
}