import axios from "axios";
import React, { useEffect, useState } from "react";
import { Post } from "../interfaces/interfaces";
import { DICT } from "../consts/consts";

interface MenuProps {
cat: string
}

const Menu = ({cat}:MenuProps) => {
  const {MENU_TITLE, READ_MORE} = DICT;
  const [posts, setPosts] = useState<Post[]>([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menu">
      <h1>{MENU_TITLE}</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post?.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>{READ_MORE}</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;