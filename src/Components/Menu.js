import React from 'react';
import Color from './Color';
import Block from './Block';
import { useState } from 'react';
/* Add any imports you think you might need here! */

const Menu = () => { 
  const [p, setP] = useState([]);
  function clicked(color2) {
    setP(block => [<Block color = {color2}/>, ...block]);
  }
  const posts = p.map((il) => (il));
    return (
      <div> 
        <div className="colorOptions">
          {/* TODO */}
          <Color color="purple" handleClick = {clicked}/>
          <Color color="pink" handleClick = {clicked}/>
          <Color color="blue" handleClick = {clicked}/>
          <Color color="orange" handleClick = {clicked}/>
        </div>
        {posts}
      </div>
    );
}

export default Menu;