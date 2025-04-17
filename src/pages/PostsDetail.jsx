//IMPORTAZIONI
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//CREO FUNZIONE POSTSDETAIL
function PostsDetail() {
  //ESTRAGGO I PARAMETRI DELLA ROTTA USANDO USE PARAMS
  const { id } = useParams();
  // CREO STATO PER RIEMPIRE I POST
  const [posts, setPosts] = useState(null);
  //CREO STATO PER CREARE UN CARICAMENTO
  const [loading, SetLoading] = useState(true);
  //CREO CHIAMATA AXIOS CON USE EFFECT
  const endpoint = `https://jsonplaceholder.typicode.com/posts/${id}`;
  useEffect(() => {
    SetLoading(true);
    axios
      .get(endpoint)
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Errore:", err))
      //FINALLY E' UNA PROMISE CHE MI SERVE PER ESEGUIRE SEMPRE L'OPERAZIONE ANCHE IN CASO DI ERRORE
      .finally(() => SetLoading(false));
  }, [id]);
  const navigate = useNavigate();
  //CREO CONDIZIONI PER IL LOADING
  //SE STIAMO CARICANDO, ALLORA SCRIVIAMO CARICAMENTO IN PAGINA
  if (loading) return <p>Loading...Sii paziente!</p>;
  //SE IL POST NON VIENE TROVATO, SCRIVIAMO UN MESSAGGIO DI POST NON TROVATO
  if (!posts) return <p>Ahia! Post non trovato, mi dispiace!</p>;
  return (
    <div className="post-detail">
      <h3>{posts.title}</h3>
      <p>{posts.body}</p>
      <button onClick={() => navigate(`/posts/${posts.id - 1}`)}>
        Torna al post precedente! ♥
      </button>
      <button onClick={() => navigate(`/posts/${posts.id + 1}`)}>
        Vai al post sucessivo! ♥
      </button>
    </div>
  );
}

//ESPORTO
export default PostsDetail;
