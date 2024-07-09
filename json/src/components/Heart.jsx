import './Heart.css';

import { IoMdHeart } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { useState } from 'react';



const Heart = () => {
    const [liked, setLiked] = useState(false);
    
    const handleClick = () => {
        liked == true ? setLiked(false): setLiked(true)
    }


    return (
        <div onClick= {handleClick} > 
        {liked == true ? <GrFavorite className='heart'/> : <IoMdHeart className='heart'/> }
            
        </div>
    )
}
export {Heart}
 