import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
    <nav style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', backgroundColor:'grey'}}>
        <h2>Dev</h2>
        <ul style={{display:'flex', justifyContent:'space-evenly', alignItems:'center',width:'40%', listStyle:'none'}}>
            <Link to="/"><li style={{color:'white'}}>home</li></Link>
            <Link to="/about"><li style={{color:'white'}}>About Us</li></Link>
            <Link to="/blog"><li style={{color:'white'}}>Blog</li></Link>
        </ul>
        
    </nav>
    );
}



export default Navbar;