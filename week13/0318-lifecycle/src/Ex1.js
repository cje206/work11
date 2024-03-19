import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Ex1() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts',
    }).then((res) => {
      setTimeout(() => {
        setPosts(res.data);
      }, 2000);
    });
  }, []);

  return (
    <div>
      <h4 className="name">📬Post List</h4>
      {posts.length === 0 ? (
        <h1>loading</h1>
      ) : (
        posts.map((value) => {
          return (
            <div className="post" key={value.id}>
              <p className="title">
                No.{value.id}
                <span>- {value.title}</span>
              </p>
              <p className="content">{value.body}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
