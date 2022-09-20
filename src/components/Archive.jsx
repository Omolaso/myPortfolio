import * as React from 'react';
// import { Link } from 'react-router-dom';
// import  React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Archive = () => {

    const back = () => {
        window.history.back();
    }

  return (
    <div className='min-h-screen bg-black p-8'>
        <header className='mb-8'>
            <h1 className='text-7xl text-lightGrey font-bold mb-2'>Archive</h1>
        </header>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* BRIGHTLY */}

            <Card className='w-full bg-black' id='archive-card'>
                <CardContent className='bg-black'>

                    <Typography variant='header' className='text-lightGrey'>
                        <h2 className='text-xl text-lightGrey font-bold text-center'> Brightly Landing Page </h2>
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} variant='div' className='text-lightGrey text-center'>
                        <p>A responsive landing page for a learning product for students between the ages of 6 - 10 </p>
                    </Typography>

                    <Typography variant="div">
                        <section className="flex items-center justify-around mx-auto text-lightGreen text-xs font-medium w-full max-w-xs mt-3">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </section>
                    </Typography>
                </CardContent>

                <CardActions className='flex items-center justify-center bg-black'>
                    <a href="https://github.com/Omolaso/Bright.git" target='_blank' rel="noopener noreferrer">
                        <Button size="large" title='GitHub'>
                            <FontAwesomeIcon icon={faGithub}/>
                        </Button>
                    </a>
                    <a href="https://omolaso.github.io/Bright/" target='_blank' rel="noopener noreferrer">
                        <Button size="large" title='External Link'>
                            <FontAwesomeIcon icon={faLink}/>
                        </Button>
                    </a>
                        
                </CardActions>
            </Card>

        {/* JOKE APP */}


            <Card className='w-full'  id='archive-card'>
                <CardContent className='bg-black'>

                    <Typography variant='header' className='text-lightGrey'>
                        <h2 className='text-xl text-lightGrey font-bold text-center'> Joke App </h2>
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} variant='div' className='text-lightGrey text-center'>
                        <p>A Joke App for regular humor. </p>
                    </Typography>

                    <Typography variant="div">
                        <section className="flex items-center justify-around mx-auto text-lightGreen text-xs font-medium w-full max-w-xs mt-3">
                            <span>React</span>
                            <span>CSS</span>
                            <span>Chuck Norris Joke API</span>
                        </section>
                    </Typography>
                </CardContent>

                <CardActions className='flex items-center justify-center bg-black'>
                    <a href="https://github.com/Omolaso/myJokeApp.git" target='_blank' rel="noopener noreferrer">
                        <Button size="large" title='GitHub'>
                            <FontAwesomeIcon icon={faGithub}/>
                        </Button>
                    </a>
                    <a href="https://myjokeapp.netlify.app/" target='_blank' rel="noopener noreferrer">
                        <Button size="large" title='External Link'>
                            <FontAwesomeIcon icon={faLink}/>
                        </Button>
                    </a>
                        
                </CardActions>
            </Card>


        {/* APPLICATION FORM */}


            <Card className='w-full bg-black'  id='archive-card'>
                <CardContent className='bg-black'>

                    <Typography variant='header' className='text-lightGrey'>
                        <h2 className='text-xl text-lightGrey font-bold text-center'> Application Form </h2>
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} variant='div' className='text-lightGrey text-center'>
                        <p> An application form for a POS product where data inputs in the form are stored in the local storage of the browser. </p>
                    </Typography>

                    <Typography variant="div">
                        <section className="flex items-center justify-around mx-auto text-lightGreen text-xs font-medium w-full max-w-xs mt-3">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </section>
                    </Typography>
                </CardContent>

                <CardActions className='flex items-center justify-center bg-black'>
                    <a href="https://github.com/Omolaso/DeveloperAssessment.git" target='_blank' rel="noopener noreferrer">
                        <Button size="large" title='GitHub'>
                            <FontAwesomeIcon icon={faGithub}/>
                        </Button>
                    </a>
                    <a href="https://developeraccessment.netlify.app/" target='_blank' rel="noopener noreferrer">
                        <Button size="large" title='External Link'>
                            <FontAwesomeIcon icon={faLink}/>
                        </Button>
                    </a>
                </CardActions>
            </Card>

        {/* BASIC CALCULATOR */}


            <Card className='w-full bg-black'  id='archive-card'>
                <CardContent className='bg-black'>

                    <Typography variant='header' className='text-lightGrey'>
                        <h2 className='text-xl text-lightGrey font-bold text-center'> Basic Calculator </h2>
                    </Typography>

                    {/* <Typography sx={{ mb: 1.5 }} variant='div' className='text-lightGrey text-center'>
                        <p>  </p>
                    </Typography> */}

                    <Typography variant="div">
                        <section className="flex items-center justify-around mx-auto text-lightGreen text-xs font-medium w-full max-w-xs mt-3">
                            <span>HTML</span>
                            <span>SASS</span>
                            <span>JavaScript</span>
                        </section>
                    </Typography>
                </CardContent>

                <CardActions className='flex items-center justify-center bg-black'>
                    <a href="https://github.com/Omolaso/BasicCalculator.git" target='_blank' rel="noopener noreferrer">
                        <Button size="large" title='GitHub'>
                            <FontAwesomeIcon icon={faGithub}/>
                        </Button>
                    </a>
                    <a href="https://omolaso.github.io/BasicCalculator/" target='_blank' rel="noopener noreferrer">
                        <Button size="large" title='External Link'>
                            <FontAwesomeIcon icon={faLink}/>
                        </Button>
                    </a>
                </CardActions>
            </Card>

       </div>














        {/* <Link to='/'> Back </Link> */}
        <div className='absolute left-0 right-10 mt-10 text-right'>
            <button 
                onClick={back}
                title='Projects'
                className='border border-lightGreen py-2 px-3 rounded-md text-lightGreen'
                id='resume-btn'
            >
                <FontAwesomeIcon icon={faArrowLeft}/> Back 
            </button>
        </div>
        
    </div>
  )
}

export default Archive