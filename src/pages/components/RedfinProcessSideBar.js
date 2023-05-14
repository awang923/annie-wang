import { useState, createRef } from 'react';
import { Stepper, Step } from 'react-vertical-stepper';
import 'react-vertical-stepper/dist/index.css';
import { Container, Row, Col } from 'react-bootstrap';

const steps = [
  {
    label: 'Product Spec',
    description: `I began the project by thoroughly reviewing the product specifications 
    in order to gain a clear understanding of which features needed to be implemented. 
    I then met with the product manager to determine the minimum viable product (MVP) and 
    set priorities for the development process.`,
  },
  {
    label: 'Technical Spec',
    description:
      `After reviewing the product specifications, I proceeded to the technical specifications 
      phase. During this stage, I thoroughly examined the code base and meticulously documented 
      the step-by-step process required to implement each feature. This involved investing 
      significant time in exploring various implementation options and determining the optimal 
      approach. Additionally, I conducted research on leveraging the built-in GoogleMapView component, 
      as it offered potential cost savings compared to obtaining a new API key. This comprehensive 
      technical analysis allowed me to make informed decisions and lay a solid foundation for the 
      project\'s development.`,
  },
  {
    label: 'Jira Tickets',
    description: `Once the technical spec was approved by the team, I created Jira tickets by breaking 
    down each feature into smaller tasks and assigning them with story points. This helped me to 
    manage the project effectively and ensured that everything was completed within the given 
    timeline. By breaking down the tasks into smaller chunks, it made it easier to focus on each 
    feature individually and make sure it was implemented correctly before moving on to the next one.`,
  },
  {
    label: 'Implementation',
    description: `As the Map View project was primarily a frontend development project, I worked 
    extensively with ReactJS to create new pages and components. Additionally, I utilized GraphQL 
    to request data from the database. To retrieve the geographic information of Redfin home 
    renovations, we leveraged the Google Maps API and Geocoder. These tools helped me create a 
    responsive and user-friendly interface for the home services market managers, superintendents, 
    and procurement coordinators to visualize jobs and retailers in a specific area.`,
  },
  {
    label: 'Bug Bash',
    description: `After completing the project, I organized a bug bash session with the team to 
    identify any critical bugs so I can fix any issues that were found before deploying the project.`,
  },
];

export const RedfinProcessSideBar = () => {
    const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Stepper activeStep={activeStep} orientation="vertical">
      <Step>
        <h2>Step 1</h2>
        <p>Step 1 content goes here.</p>
        <button onClick={handleNext}>Next</button>
      </Step>
      <Step>
        <h2>Step 2</h2>
        <p>Step 2 content goes here.</p>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </Step>
      <Step>
        <h2>Step 3</h2>
        <p>Step 3 content goes here.</p>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </Step>
    </Stepper>
    //   <Container>
    //     <Stepper activeStep={activeStep} orientation="vertical">
    //       {steps.map((step, index) => (
    //         <Step key={step.label}>
    //           <StepLabel>
    //             <h4>
    //                 {step.label}
    //             </h4>
    //           </StepLabel>
    //           <StepContent>
    //             <p>{step.description}</p>
    //             <Container>
    //                 <button
    //                     variant="contained"
    //                     onClick={handleNext(index)}
    //                 >
    //                     {index === steps.length - 1 ? 'Done' : 'Continue'}
    //                 </button>
    //             </Container>
    //           </StepContent>
    //         </Step>
    //       ))}
    //     </Stepper>
    //     {/* {activeStep === steps.length && (
    //         setActiveStep(step.length - 1)
    //     )} */}
    //   </Container>
    );
  }
