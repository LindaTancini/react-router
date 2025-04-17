//IMPORTAZIONI
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

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
  //CREO CONDIZIONI PER IL LOADING
  //SE STIAMO CARICANDO, ALLORA SCRIVIAMO CARICAMENTO IN PAGINA
  if (loading) return <p>Loading...Sii paziente!</p>;
  //SE IL POST NON VIENE TROVATO, SCRIVIAMO UN MESSAGGIO DI POST NON TROVATO
  if (!posts) return <p>Ahia! Post non trovato, mi dispiace!</p>;
  return (
    <div>
      <h3>{posts.title}</h3>
      <p>{posts.body}</p>
    </div>
  );
}

//ESPORTO
export default PostsDetail;
