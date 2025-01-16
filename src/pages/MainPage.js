// const MainPage = ()=>{

// }
// export default MainPage;
import React,{useState,useEffect} from 'react'
// import Axios from 'axios'
// import {useHistory} from 'react-router-dom'
// import {useHistory}
import '../App.css'

function MainPage() {

const [loftList,setLoftList]=useState([]);

// let history = useHistory();

useEffect(()=>{
fetch("http://localhost:3002/api/get")
      .then(response => response.json())
      .then(json => setLoftList(json))
},[])

return (
    <div className="MainPage">
     <div className="LostContainer">
       {loftList.map((val,key)=>{
         return (
          <div className="Loft" >
           {/* <h1 className="loft-name" onClick={()=>(history.push(`/loft/${val.id}`))}>{val.name}</h1> */}
            {/* <p>{val.post_text.length > 300 ? val.post_text.substring(0,300)+ " ..." : val.post_text}</p>
            <h4>{val.user_name}</h4> */}
{/* <button className="like_btn" onClick={(() => LikePost(val.id))}>Like</button> */}

           {/* <h5>Likes: {val.likes}</h5> */}
            </div>
           )  })}  
          </div>
        </div>
    )}

export default MainPage;