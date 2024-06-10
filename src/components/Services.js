import React from 'react';
import './Services.css';

const services = [
  { title: 'Presentation Design', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.', icon: '🖼' },
  { title: 'Audio - Visual Production', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.', icon: '🎥' },
  { title: 'Translation Services', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.', icon: '🌐' },
  { title: 'Graphic Design', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.', icon: '🎨' },
  { title: 'Research & Analytics', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.', icon: '🔍' },
  { title: 'Data Processing', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.', icon: '💾' },
];

const Services = () => {
  return (
    <div className="services">
      {services.map((service, index) => (
        <div key={index} className="service">
          <div className="icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
