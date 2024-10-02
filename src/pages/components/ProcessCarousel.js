import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { Row, Col } from 'react-bootstrap';
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
        }}
      >
        {items.map((item, index) => {
          return (
            <Paper
              style={{
                backgroundColor: '#f9f9f9',
                boxShadow: '3px 3px 10px rgb(0, 0, 0, 0.1)',
                padding: '20px',
                height:'auto',
                minHeight: 'unset',
                borderRadius: '15px',
                padding: '25px',
              }} 
              id={index}
            >
              <h3>{item.title}</h3>
              {/* <Row>
                <Col>
                  <p>{item.description}</p>
                </Col>
                <Col>
                  {item.src}
                </Col>
              </Row> */}
              <p>{item.description}</p>
              {item.src}
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