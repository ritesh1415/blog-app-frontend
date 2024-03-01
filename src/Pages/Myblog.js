import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Blogcard from '../Component/Blogcard.js';

const Myblog = () => {
  const [userBlog, setBlogs] = useState([]);

  const getuserblog = async () => {
    try {
      const id = localStorage.getItem('userId');
      console.log('UserID:', id);

      const { data } = await axios.get(`http://localhost:8080/user/${id}`);
      console.log(data);

      if (data?.success) {
        setBlogs(data?.userBlog); // Ensure blogs is always an array
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getuserblog();
  }, []);

  console.log(userBlog);

  return (
    <div>
      {Array.isArray(userBlog) && userBlog.length > 0 ? (
       userBlog.map((blog) => (
          <Blogcard
          id={blog._id}
          isUser={true}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          username={blog.user.username}
          time={blog.createdAt}
        />

        ))
      ) : (
        <h1>You have not created any blogs</h1>
      )}
    </div>
  );
};

export default Myblog;
