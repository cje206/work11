import { useEffect, useState } from 'react';
import PostItem from './PostItem';
import axios from 'axios';
import './styles/post.scss';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

      setTimeout(() => {
        setPosts(res.data.slice(0, 10));
      }, 2000);
    };
    getPosts();
  }, []);

  return (
    <div className="wrap">
      <header>Post List</header>
      {posts.length > 0 ? (
        posts.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
