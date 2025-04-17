//IMPORTAZIONI
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//CREO FUNZIONE POSTLIST
function PostList() {
  //CREO STATO PER METTERE I POST IN PAGINA
  const [posts, setPosts] = useState([]);
  //CREO CHIAMATA AXIOS CON USE EFFECT
  const endpoint = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Errore:", err));
  }, []);

  return (
    <div>
      <h3>Lista dei miei post:</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

//ESPORTO
export default PostList;
