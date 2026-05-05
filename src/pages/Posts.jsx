import React, { use, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Posts = () => {
    const { id } = useParams();

    useEffect(() => {
      async function fetchPosts() {
      const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    console.log(data)
    const data2 = await data.json()
    console.log(data2)
      }
      fetchPosts();
      }, []);
  return (
    <div>
      {id}   
    </div>
  );
}

export default Posts;