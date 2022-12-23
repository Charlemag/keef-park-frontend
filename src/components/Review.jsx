import axios from 'axios';
import { useState } from 'react';


function Review () {

    const [state, setState] = useState({
        author: '',
        title: '',
        content:''
    });
            
        return (
        <form action="/review" method="post">
          <label> username:
            <input type="text" name="author" />
          </label>
         
          <input type="text" name="postAuthor" value="{author}" hidden />
          <textarea name="content" cols="30" rows="2"></textarea>
         
          <button type="submit">Comment</button>
          <button type="delete">Delete</button>
        </form>
        )
    }

    
 
// function StrainsCard () {
//     return(
//         <div key className ="Strains Card"> 
//         <img src={ strains.imgThumb} />
//           <p>{ strains.strain }</p>
//           <comment>
//           <button onClick={() => deleteMovie(strains._id)} className="btn-delete">
//               Delete 
//             </button>
//           <div>
//     )


export default Review;