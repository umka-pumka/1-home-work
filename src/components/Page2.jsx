import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Page2 = () => {
    const [posts, setPosts] = useState([]); 
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div>
        <h1>Page2</h1>
        <button onClick={() => navigate(-1)} className="go-back-button">go Back</button>
        {posts.map(post => (
          <h2 key={post.id}>{post.title}</h2>
        ))}
      </div>
    );
};

export default Page2;