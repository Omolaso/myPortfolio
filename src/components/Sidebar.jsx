// import { useEffect } from 'react';
// import { Link } from "react-router-dom";
// import { elastic as Menu } from "react-burger-menu";
// import { stack as Menu } from "react-burger-menu";
// import { bubble as Menu } from "react-burger-menu";
import { slide as Menu } from "react-burger-menu";
// import { useState } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { removeSideBar } from '../redux-slice/HamburgerSlice';
import '../styles/Sidebar.css'
// import menu from '../images/menu.png'

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

    // constructor (props); {
    //   super(props)
    //   this.state = {
    //     menuOpen: false
    //   }
    // }
     
    
    // const [ state, setState ] = useState(false);

    // function handleStateChange(state) {
    //   this.setState({menuOpen: state.isOpen})  
    // }

    // function closeMenu() {
    //   this.setState({menuOpen: false})
    // }
  
    return (
        <div id="outer-container">
            <Menu 
              pageWrapId={ "page-wrap" } 
              outerContainerId={ "outer-container" }
              disableCloseOnEsc
              left
              itemListElement="div"
              disableAutoFocus
              // isOpen={this.state.menuOpen}
              // onStateChange={(state) => this.handleStateChange(state)}
              // isOpen = {false}
              // customBurgerIcon={ <img src={menu} /> }
              // onOpen={ handleOnOpen }
              // noOverlay
              // width={300}
              // className='flex-col items-center justify-center min-h-screen'
              >

              <ul className='text-lightGrey text-xl overflow-auto' id="page-wrap">
                  {/* <li> <a href='#home' className='hover:text-lightGreen hover:transition ease-in-out'> Home </a> </li> */}
                  <li id="nav-list"> <a href='#about' className='hover:text-lightGreen hover:transition ease-in-out'> About </a> </li>
                  <li id="nav-list"> <a href='#projects' className='hover:text-lightGreen hover:transition ease-in-out'> My Projects </a> </li>
                  <li id="nav-list"> <a href='#contact' className='hover:text-lightGreen hover:transition ease-in-out' > Contact Me</a> </li>
                  <li id="nav-list"> 
                    <a href="https://drive.google.com/file/d/1XLGTFc-7hCA1IF97vLYhOdAIvwmNok2J/view?usp=sharing" target="_blank"
                      rel="noopener noreferrer">
                      <button 
                        id="resume-btn"
                        className='border border-lightGreen py-2 px-3 rounded-md text-lightGreen'>
                          Resume 
                      </button>
                    </a>
                  </li>
              </ul>
            </Menu>
          </div>
    )
}

export default SideBar