import { useState } from 'react';
import React from 'react';
import Menu from './Menu';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const [p] = useState([]);

    /* Use the map() function to render multiple Blocks! */
    const posts = p.map((item) => (<li> (item) </li>)); // TODO: edit this variable

    return (
        <div>
            <Menu></Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;