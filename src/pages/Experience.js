import { School, Work } from '@mui/icons-material';
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
function Experience() {
  return (
    <div>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2016 - 2020'
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}>
          <h3 className='vertical-timeline-element-title'>
            Jawaharlal Nehru Technological University, Hyderabad, India.
          </h3>
          <p>Bachelor of Technology in Computer Science and Engineering</p>
          <p>CGPA : 7.5 / 10</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2019 - 2020'
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}>
          <h3 className='vertical-timeline-element-title'>
            Software Developer Intern - High Radius,Hyderabad,India.
          </h3>
          <p> I obtained this internship during my undergraduate studies, where I gained foundational knowledge about the software industry.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2020 - 2022'
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}>
          <h3 className='vertical-timeline-element-title'>
            Software Development Engineer - High Radius,Hyderabad,India.
          </h3>
          <p>Contributed with team in different projects.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2022 - 2024'
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}>
          <h3 className='vertical-timeline-element-title'>
            The University of Memphis, USA </h3>
          <p>Master of Science in Information Technology</p>
          <p>GPA : 3.8 / 4.0</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2024 - Till Date'
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}>
          <h3 className='vertical-timeline-element-title'>
            Technical Analyst - UMRF Ventures,Memphis,TN.
          </h3>
          <p> Collaborated with clients and contributed to multiple projects across different domains.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
};

export default Experience;