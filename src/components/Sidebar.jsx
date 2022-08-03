import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { removeSideBar } from '../redux-slice/HamburgerSlice';
import '../styles/Sidebar.css'

const SideBar = () => {
    const dispatch = useDispatch();
    const { isHamActive } = useSelector((store) => store.hamburger);

    // useEffect(() => {
    //     function removeSide() {
    //       dispatch(removeSideBar())
    //     }
    
    //     window.addEventListener('resize', removeSide);
    //     window.addEventListener('scroll', removeSide);
    //   })

    function removeSide() {
        dispatch(removeSideBar())
      }
  
      window.addEventListener('resize', removeSide);
      window.addEventListener('scroll', removeSide);
  
  
    return (
        <ul className={`sidebar ${isHamActive ? "show-sidebar" : ""}`}>
            <li> <Link to='/Home' id='link'> Home </Link> </li>
            <li> <Link to='/About' id='link'> About </Link> </li>
            <li> <Link to='/Projects' id='link'> My Projects </Link> </li>
            <li> <Link to='/Contact' id='link'> Contact </Link> </li>
        </ul>
    )
}

export default SideBar