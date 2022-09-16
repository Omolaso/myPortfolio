// import { useEffect } from 'react';
import { Link } from "react-router-dom";
// import { elastic as Menu } from "react-burger-menu";
// import { stack as Menu } from "react-burger-menu";
// import { bubble as Menu } from "react-burger-menu";
import { slide as Menu } from "react-burger-menu";
// import { useSelector, useDispatch } from 'react-redux';
// import { removeSideBar } from '../redux-slice/HamburgerSlice';
import '../styles/Sidebar.css'

const SideBar = () => {
    // const dispatch = useDispatch();
    // const { isHamActive } = useSelector((store) => store.hamburger);

    // useEffect(() => {
    //     function removeSide() {
    //       dispatch(removeSideBar())
    //     }
    
    //     window.addEventListener('resize', removeSide);
    //     window.addEventListener('scroll', removeSide);
    //   })

    // function removeSide() {
    //     dispatch(removeSideBar())
    //   }
  
    //   window.addEventListener('resize', removeSide);
    //   window.addEventListener('scroll', removeSide);
     
  
    return (
        <Menu 
            pageWrapId={ "page-wrap" } 
            outerContainerId={ "outer-container" }
            disableCloseOnEsc
            left
            // noOverlay
            // isOpen={true}
            // width={300}
            // className='flex-col items-center justify-center min-h-screen'
            >

            <ol className='text-lightGrey text-xl'>
                <li> <Link to='/Home' className='hover:text-lightGreen hover:transition ease-in-out'> Home </Link> </li>
                <li> <Link to='/About' className='hover:text-lightGreen hover:transition ease-in-out'> About </Link> </li>
                <li> <Link to='/Projects' className='hover:text-lightGreen hover:transition ease-in-out'> My Projects </Link> </li>
                <li> <Link to='/Contact' className='hover:text-lightGreen hover:transition ease-in-out' > Contact Me</Link> </li>
                <li> 
                  <a href="https://drive.google.com/file/d/1XLGTFc-7hCA1IF97vLYhOdAIvwmNok2J/view?usp=sharing" target="_blank"
                     rel="noopener noreferrer">
                    <button 
                      className='border border-lightGreen py-2 px-3 rounded-md text-lightGreen hover:bg-opacity-80'>
                         Resume 
                    </button>
                  </a>
                </li>
            </ol>
        </Menu>
    )
}

export default SideBar