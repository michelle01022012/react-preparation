import React from 'react'
import { useParams } from 'react-router-dom';

Const Posts = () => {
    const params = useParams();
    console.log(params);
  return (
    <div>
      Posts      
    </div>
  );
}

export default Posts;