import React , {useState, useEffect} from 'react'
import axios from 'axios'


function Data(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res => {
        setPosts(res.data)
        })
    })

    return(
     <div className="posts">
        <div className="container">
        {posts.map(posts => (
                     <div className="posts-card">
                        
                         <div className="posts-card__text">
                             <span>{posts.email}</span>
                             <h2>#{posts.name}</h2>
                             <p>{posts.body}</p>
                         </div>
                     </div>
                 ))}
        </div>
     </div>
    )
   
}
export default Data;