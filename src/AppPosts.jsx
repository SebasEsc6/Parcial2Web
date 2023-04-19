import React, { useEffect, useState } from "react";
import axios from "axios";

const AppPosts = () => {

    const [Post, setPost] = useState([]);
    
    const fetchPost = async () => {
		const res = await axios.get(`https://jsonplaceholder.typicode.com/photos/`);
		const { data } = res;
		setPost(data);
		console.log(data);
	};

    useEffect(() => {
        fetchPost();
      });


    return (
        <div className="container">
          {Post.map((item, index) => (
            <div key={index} className="DivPost">
              <h1>{item.title}</h1>
              <img src={item.url}/>            
            </div>
          ))}
        </div>
      );
}
export default AppPosts;