import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import ProcessCarousel from './ProcessCarousel';
import ddTreeview from '../../assets/img/ddTreeview.png';
import 'react-vertical-timeline-component/style.min.css';

export const DigitalDomainTechFlow = () => {
  const contextFeatures = [
    {
      title: 'Feature 1: Assets For Selected Artist',
      description: `Initially, users are only able to view assets through file paths. 
      This feature leverages API communication to retrieve a comprehensive artist list, 
      presented with a drop down menu. Upon user selection, a dynamic API call fetches 
      a tailored set of assets.`,
    },
    {
      title: 'Feature 2: Assets For All Artists',
      description: `In addition to selecting a specific artist, this feature displays 
      all artists, sorted by their total asset size. However, retrieving data for 
      hundreds of artists with diverse asset counts affected the app performance. 
      I tackled this by implementing pagination and refined the SQLAlchemy ORM queries 
      to optimize data retrieval. Using Redux state management, I ensured smooth interaction 
      by tracking loaded data and appending new data.`,
    },
    {
      title: 'Feature 3: Assets For Seq/Shot Level',
      description: `Building upon the “All Artists” and “Selected Artist” functionalities, 
      this feature showcases all sequences and shots, sorted by their total asset size. 
      Upon user’s selection, a dynamic API call retrieves a tailored set of assets.`,
    },
  ];

  const searchFeatures = [
    {
      title: 'Feature 1: Quick Navigation',
      description: `This feature introduces a "shift+click" functionality to empower 
      users to navigate tree structures efficiently . Using a recursive algorithm to 
      traverse the tree, comparing leaf node footprints to identify the one with the 
      highest footprint regardless of its depth. This "highest footprint node" then becomes 
      the new current view, effectively jumping the user directly to their desired location.`,
    },
    {
      title: 'Feature 2: Date, Name and Size sorting',
      description: `This feature adds "creation date" to the sorting criteria alongside 
      "size" and "name," offering ascending or descending order options. The data model 
      is extended to incorporate the new attribute, and the sorting algorithm is adapted 
      to handle creation date comparisons efficiently.`,
    }
  ];
  return (
    <div className='techflow'>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Core - Explore assets in context"
          dateClassName='tech-title-text'
          iconStyle={{ background: 'rgb(170, 31, 47)', color: '#fff' }}
        >
         <ProcessCarousel items={contextFeatures} />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Core - Enhanced asset search"
          dateClassName='tech-title-text'
          iconStyle={{ background: 'rgb(63, 63, 63)', color: '#fff' }}
        >
          <ProcessCarousel items={searchFeatures} />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date='Core - Tree View '
          dateClassName='tech-title-text'
          iconStyle={{ background: 'rgb(170, 31, 47)', color: '#fff' }}
        >
          <p style={{marginBottom: '20px'}}>
            This feature replaces the single-level selection with a dynamic, multi-level 
            tree view using D3.js Observable. Users can now visualize and navigate the entire asset 
            directory structure, expanding/collapsing branches and selecting assets for deletion 
            across multiple levels simultaneously. The view seamlessly updates via ReactJS hooks, 
            and users switch between list and tree view on the fly. Leverages D3.js's strengths in 
            visualizing hierarchical data and React's component-based architecture, this upgrade 
            delivers a performant and user-friendly experience. Notably, the tree view retains all 
            functionalities of the original list view, including multi-item selection and quick navigation.
          </p>
          <img src={ddTreeview} alt='tree-view' />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date='Tools - Active Shows Management'
          dateClassName='tech-title-text'
          iconStyle={{ background: 'rgb(63, 63, 63)', color: '#fff' }}
        >
          <p>
            Previously, managing active shows required administrators to manually edit a YAML file 
            using terminal commands. This feature streamlines the process by displaying all active 
            shows directly within Diskard. Normal users can now view the active show list for better 
            transparency, and administrators can edit the active show list directly within the 
            application. The changes made to the list within Diskard automatically update the 
            relevant YAML file and install the changes. 
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div  >
  )
}