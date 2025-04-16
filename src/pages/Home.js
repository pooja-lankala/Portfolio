import React from 'react'
import { Diversity1, LinkedIn } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import { Email } from '@mui/icons-material';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about" >
          <h1> Hi, My Name is Pooja Lankala</h1>
          <div className='prompt'>
            <p> I am a software Developer, I specialize in designing, building, and maintaining efficient, scalable, and user-friendly software solutions.I have a strong foundation in both front-end and back-end technologies. </p>
      <Email/>
      <LinkedIn/>
      <GitHub/> 
    </div> 
    </div>  
    
    <div className='skills'>
      <h1>Skills</h1>
        <ol className='list'>
        <li className='item'>
          <h2> Front-End  </h2>
            <span>HTML, CSS, JavaScript, Bootstrap, XML. </span>
          </li>
          <li className='item'>
          <h2> Hands-On  </h2>
            <span>Docker, Jenkins, Postman, Maven, Swagger, AWS, Azure, GitHub , Git.</span>
          </li>
          <li className='item'>
            <h2> Frameworks </h2>
            <span>Spring Boot, Hibernate, React JS. </span>
          </li>
          <li className='item'>
            <h2> Programming Languages</h2>
            <span>Python, C. SQL. </span>
          </li>
        </ol>
    </div>
    </div>
  );
}

export default Home;