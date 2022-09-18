import * as React from 'react';
import '../styles/Project.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Brightly from '../images/Brightly.png';
import Todo from '../images/todo.png';
import Zerohunger from '../images/Zerohunger.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Projects = () => {
  return (
    <div id='projects' className='py-20'>

     <header>
        <h1 className='text-3xl text-lightGrey font-bold mb-2'> <span className='text-lightGreen text-xl mr-2'>02.</span> Some things I&apos;ve built</h1>
     </header>

      <div className='text-deepGrey text-lg mt-4 font-medium'>

        {/* ZEROHUNGER */}

        <Card className='w-full mx-auto max-w-4xl mt-10 mb-24 hover:opacity-80' id='resume-btn'>
            <CardMedia
              component="img"
              height="100"
              image={Zerohunger}
              alt="zerohunger"
            />
            <CardContent className='bg-black'>
              <Typography variant='header' component="div">
              <h2 className='text-xl text-lightGrey font-bold text-center'> Zerohunger</h2> 
              </Typography>

              <Typography variant="div" color="text.secondary">
                <p className='text-lightGreen'>An e-commerce website for shopping groceries. Entries to the forms in the website
                are stored in the local storage of the browser.
                </p>
                <div className="flex items-center justify-around mx-auto text-lightGrey text-xs w-full max-w-xs mt-3">
                  <span>React</span>
                  <span>CSS</span>
                  <span>Zerohunger API</span>
                </div>
              </Typography>
            </CardContent>

            <CardActions className='flex items-center justify-center bg-black'>
              
              <a href="https://github.com/Omolaso/zeroHunger_react" target='_blank' rel="noopener noreferrer">
                <Button size="small" title='GitHub'>
                  <FontAwesomeIcon icon={faGithub} className='text-lg'/>
                </Button>
              </a>
              
              <a href="https://foodwebzerohunger.netlify.app/" target='_blank' rel="noopener noreferrer">
                <Button size="small" title='External Link'>
                  <FontAwesomeIcon icon={faLink} className='text-lg'/>
                </Button>
              </a>
            </CardActions>
          </Card>



        {/* BRIGHTLY */}

        <Card className='w-full mx-auto max-w-4xl mt-10 mb-24 hover:opacity-80' id='resume-btn'>
          <CardMedia
            component="img"
            height="100"
            image={Brightly}
            alt="Brightly"
          />
          <CardContent className='bg-black'>
            <Typography variant='header' component="div">
            <h2 className='text-xl text-lightGrey font-bold text-center'> Brightly Landing Page </h2>
            </Typography>

            <Typography variant="div" color="text.secondary">
              <p className='text-lightGreen text-center'>Built a landing page for a learning product for students between the ages of 6 - 10.</p>
              <div className="flex items-center justify-around mx-auto text-lightGrey text-xs w-full max-w-xs mt-3">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </Typography>
          </CardContent>

          <CardActions className='flex items-center justify-center bg-black'>
           
            <a href="https://github.com/omolaso/Bright/" target='_blank' rel="noopener noreferrer">
              <Button size="large" title='GitHub'>
                <FontAwesomeIcon icon={faGithub} className='text-lg'/>
              </Button>
            </a>
          
            <a href="https://omolaso.github.io/Bright/" target='_blank' rel="noopener noreferrer">
              <Button size="small" title='External Link'>
                <FontAwesomeIcon icon={faLink} className='text-lg'/>
              </Button>
            </a>
            
           
          </CardActions>

        </Card>


        {/* TODO-LIST */}

        <Card className='w-full mx-auto max-w-4xl mt-10 mb-24 hover:opacity-80' id='resume-btn'>
          <CardMedia
            component="img"
            height="100"
            image={Todo}
            alt="TodoList App"
          />
          <CardContent className='bg-black'>

            <Typography variant='header' component="div">
            <h2 className='text-xl text-lightGrey font-bold text-center'>Todo-List App</h2>
            </Typography>

            <Typography variant="div" color="text.secondary">
              <p className='text-lightGreen'>Todo-list App for keeping record of daily todos. It has a light and dark mode toggler for the user<span>&#39;</span>s preference.</p>
              <div className="flex items-center justify-around mx-auto text-lightGrey text-xs w-full max-w-xs mt-3">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </Typography>

          </CardContent>

          <CardActions className='flex items-center justify-center bg-black'>
          <a href="https://github.com/omolaso/toDo/" target='_blank' rel="noopener noreferrer">
            <Button size="large" title='GitHub'>
              <FontAwesomeIcon icon={faGithub} className='text-lg'/>
            </Button>
          </a>
            

            <a href="https://omolaso.github.io/toDo/" target='_blank' rel="noopener noreferrer">
              <Button size="small" title='External Link'>
                <FontAwesomeIcon icon={faLink} className='text-lg'/>
              </Button>
            </a>
          </CardActions>
        </Card>










       

        
          {/* CALCULATOR */}
        {/* <div className="project-card">
          <p>A basic calculator built with HTML, SASS and JavaScript.</p>
          <a href="https://omolaso.github.io/BasicCalculator/" target="_blank" rel="noopener noreferrer"> <button className="btn">Basic Calculator</button> </a>
        </div> */}

        {/* INTERSWITCH FORM */}
        {/* <div className="project-card">
          <p>Built an application form with HTML, CSS and JavaScript for a Point Of Sale &#40;POS&#41; registration 
            where interested candidates can fill up the form and their details is stored in the local storage of the browser.</p>
          <a href="https://developeraccessment.netlify.app/" target="_blank" rel="noopener noreferrer"> <button className="btn">Application Form</button> </a>
        </div> */}
        {/* 
        <div className="project-card">
          <p>A Joke App built with ReactJs for regular humor by fetching a free JSON API.</p>
          <a href="https://myjokeapp.netlify.app/" target="_blank" rel="noopener noreferrer"><button className="btn">My Joke App</button></a>
        </div> */}

      </div>
    </div>
  )
}

export default Projects