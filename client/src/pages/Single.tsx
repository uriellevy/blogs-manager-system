import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext, AuthContextType } from '../context/authContext';
import axios from 'axios';
import Menu from '../components/Menu';
import moment from 'moment';
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import test from "../../public/logo192.png"
import { Post } from '../interfaces/interfaces';

const Single = () => {
  const [post, setPost] = useState<Post>();
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext) as AuthContextType;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (error) {
      console.log(error)
    }
  }
  console.log(post)

  return (
    <>
      {post &&
        <div className="single">
          <div className="content">
            <img src="../upload/1692008900682delete(1).png" alt="" />
            <div className="user">
              {post.userImg && <img
                src={post.userImg}
                alt=""
              />}
              <div className="info">
                <span>{post.username}</span>
                <p>Posted {moment(post.date).fromNow()}</p>
              </div>
              {currentUser?.username === post.username && (
                <div className="edit">
                  <Link to={`/write?edit=2`} state={post}>
                    <img src={Edit} alt="" />
                  </Link>
                  <img onClick={handleDelete} src={Delete} alt="" />
                </div>
              )}
            </div>
            <h1>{post.title}</h1>
            {/* <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.desc),
              }}
            ></p> */}
          </div>
          <Menu cat={post.cat} />
        </div>
      }
    </>
  );
}

export default Single