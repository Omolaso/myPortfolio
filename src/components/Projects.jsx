import * as React from 'react';
import '../styles/Project.css';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import QR from '../images/QR.png';
import Todo from '../images/todo.png';
import Netflix from '../images/netflix.png';
import Zerohunger from '../images/Zerohunger.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useRef } from "react";
import { useInView } from "framer-motion";

function Div({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(500px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  )
}

const Projects = () => {
  return (
    <div id='projects' className='py-20'>

     <header>
        <h1 className='text-3xl text-lightGrey font-bold mb-2'> <span className='text-lightGreen text-xl mr-2'>02.</span> Some things I&apos;ve built</h1>
     </header>



      <div className='text-deepGrey text-lg mt-4 font-medium'>

        {/* ZEROHUNGER */}
        <Div>
          <Card 
            className='w-full mx-auto max-w-4xl mt-10 mb-24' 
            >
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
                <Button size="large" title='GitHub'>
                  <FontAwesomeIcon icon={faGithub} className='text-lg'/>
                </Button>
              </a>
              
              <a href="https://foodwebzerohunger.netlify.app/" target='_blank' rel="noopener noreferrer">
                <Button size="large" title='External Link'>
                  <FontAwesomeIcon icon={faLink} className='text-lg'/>
                </Button>
              </a>
            </CardActions>
          </Card>
        </Div>
        


        {/* QR CODE GENERATOR */}

        <Card className='w-full mx-auto max-w-4xl mt-10 mb-24'>
          <CardMedia
            component="img"
            height="100"
            image={QR}
            alt="Brightly"
          />
          <CardContent className='bg-black'>
            <Typography variant='header' component="div">
            <h2 className='text-xl text-lightGrey font-bold text-center'> QR Code Generator </h2>
            </Typography>

            <Typography variant="div" color="text.secondary">
              <p className='text-lightGreen text-center'>A code generator for generating rapid codes to access websites.</p>
              <div className="flex items-center justify-around mx-auto text-lightGrey text-xs w-full max-w-xs mt-3">
                <span>HTML</span>
                <span>Tailwind</span>
                <span>JavaScript</span>
              </div>
            </Typography>
          </CardContent>

          <CardActions className='flex items-center justify-center bg-black'>
           
            <a href="https://github.com/Omolaso/QR-Code-Generator" target='_blank' rel="noopener noreferrer">
              <Button size="large" title='GitHub'>
                <FontAwesomeIcon icon={faGithub} className='text-lg'/>
              </Button>
            </a>
          
            <a href="https://omolaso.github.io/QR-Code-Generator/" target='_blank' rel="noopener noreferrer">
              <Button size="large" title='External Link'>
                <FontAwesomeIcon icon={faLink} className='text-lg'/>
              </Button>
            </a>
          </CardActions>
        </Card>



        {/* NETFLIX */}

        <Card className='w-full mx-auto max-w-4xl mt-10 mb-24'>
            <CardMedia
              component="img"
              height="100"
              image={Netflix}
              alt="Netflix"
            />
            <CardContent className='bg-black'>
              <Typography variant='header' component="div">
              <h2 className='text-xl text-lightGrey font-bold text-center'> Netflix </h2> 
              </Typography>

              <Typography variant="div" color="text.secondary">
                <p className='text-lightGreen text-center'>A movie streaming platform clone.</p>
                <div className="flex items-center justify-around mx-auto text-lightGrey text-xs w-full max-w-xs mt-3">
                  <span>React</span>
                  <span>CSS</span>
                  <span>Tailwind</span>
                  <span>MovieDB API</span>
                </div>
              </Typography>
            </CardContent>

            <CardActions className='flex items-center justify-center bg-black'>
              
              <a href="https://github.com/ELIJAHJOHNNY/GROUP-A-PROJECT" target='_blank' rel="noopener noreferrer">
                <Button size="large" title='GitHub'>
                  <FontAwesomeIcon icon={faGithub} className='text-lg'/>
                </Button>
              </a>
              
              <a href="https://netflix-duplicate.netlify.app/" target='_blank' rel="noopener noreferrer">
                <Button size="large" title='External Link'>
                  <FontAwesomeIcon icon={faLink} className='text-lg'/>
                </Button>
              </a>
            </CardActions>
          </Card>



        {/* TODO-LIST */}

        <Card className='w-full mx-auto max-w-4xl mt-10 mb-24'>
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
              <Button size="large" title='External Link'>
                <FontAwesomeIcon icon={faLink} className='text-lg'/>
              </Button>
            </a>
          </CardActions>
        </Card>

        <div className="text-center text-lightGreen">
        <Link to='/archive'> 
          <button 
            className='border border-lightGreen py-2 px-3 rounded-md text-lightGreen'
            id="resume-btn"
          >
            View other projects
          </button>
        </Link>
        </div>
      
      </div>

    </div>
  )
}

export default Projects