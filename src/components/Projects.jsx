import React from 'react';
import '../styles/Project.css';

const Projects = () => {
  return (
    <div className='project-container'>
      <h1>Welcome to My Projects</h1>
      <h4>Personally, I believe building projects is the best way to learn more about 
        programming languages and frameworks. Here are the few projects I've done or still working on
        since I commenced my tech journey. Feel free to click on the buttons on each to view them.</h4>
      <div className='projects'>
        <div className="project-card">
          <p>A responsive landing page for a learning product for students between the age of 6 - 10. <br />
            Built with HTML, CSS and JavaScript.
          </p>
          <a href="https://omolaso.github.io/Bright/" target="_blank" rel="noopener noreferrer"> <button className='btn'>Brightly landing page</button></a>
        </div>

        <div className="project-card">
          <p>Todo-list App for keeping record of daily todos which has both light and dark mode
            for the user<span>&#39;</span>s preference <br /> Built with HTML, CSS and JavaScript.
          </p>
          <a href="https://omolaso.github.io/toDo/" target="_blank" rel="noopener noreferrer"> <button className="btn"> Todo List App</button> </a>
        </div>

        <div className="project-card">
          <p>A basic calculator built with HTML, SASS and JavaScript.</p>
          <a href="https://omolaso.github.io/BasicCalculator/" target="_blank" rel="noopener noreferrer"> <button className="btn">Basic Calculator</button> </a>
        </div>

        <div className="project-card">
          <p>Built an application form with HTML, CSS and JavaScript where interested candidates can fill up
            the form and their details is stored in the local storage of the brower.</p>
          <a href="https://developeraccessment.netlify.app/" target="_blank" rel="noopener noreferrer"> <button className="btn">Application Form</button> </a>
        </div>

        <div className="project-card">
          <p>A Joke App built with ReactJs for regular humor by fetching a free JSON API.</p>
          <a href="https://myjokeapp.netlify.app/" target="_blank" rel="noopener noreferrer"><button className="btn">My Joke App</button></a>

        </div>

        <div className="project-card">
          <p>Built an E-commerce groceries website with ReactJs by fetching an API where entries to the forms in the website are stored in the local storage of the browser.</p>
          <a href="https://foodwebzerohunger.netlify.app/" target="_blank" rel="noopener noreferrer"> <button className="btn">Zerohunger</button> </a>
        </div>

      </div>
    </div>
  )
}

export default Projects