import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";
import { Post } from '../interfaces/interfaces';
import { DICT } from '../consts/consts';



const Home = () => {
 const [posts, setPosts] = useState<Post[]>([])
 const cat = useLocation().search;
 const {READ_MORE} = DICT;

 useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(`/posts${cat}`);
      setPosts(res.data);
    } catch (error) {
      console.log(error)
    }
  }
  fetchData();
 },[cat]);

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              {post.desc}
              <button>{READ_MORE}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home