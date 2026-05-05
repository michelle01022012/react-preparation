import React from 'react'
import { useParams } from 'react-router-dom';

const Posts = () => {
    const { id } = useParams();
    console.log(params.id);
  return (
    <div>
      Posts      
    </div>
  );
}

export default Posts;