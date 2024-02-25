import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import PropTypes from 'prop-types';

const ProcessCarousel = ({ items }) => {

  return (
    <div>
      <Carousel
        className="project-carousel"
        autoPlay={false}
        animation="slide"
        // navButtonsAlwaysVisible={true}
        indicatorContainerProps={{
          style: {
            marginTop: '20px',
          }
        }}
        navButtonsProps={{
          style: {

          }
        }}
      >
        {items.map((item, index) => {
          return (
            <Paper
              style={{
                backgroundColor: '#dcdcdc',
                // opacity: 0,
                padding: '20px',
                height:'350px',
                minHeight: '100%',
              }} 
              id={index}
            >
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </Paper>
          )
        })}
      </Carousel>
    </div>
  )
};

ProcessCarousel.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ProcessCarousel;