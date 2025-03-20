import { useParams,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

function AboutInfo(){
    let {id} = useParams();
    let navigate = useNavigate();

    let [post, setPost] = useState([null]);

    let goBack = () => navigate(-1);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)//один раз загр данные с API jsonplaceholder
        .then(response => response.json())//ждем когда данные все загр и преобр объект json,js методом в объект javascript
        .then(data => setPost(data))//данные лежат в перем data
    },[id])

    return(
        <div className="content">
            {
                post && (
                    <>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <button onClick={goBack}>Назад</button>
                    </>
                )
            }
        </div>
    )
}

export default AboutInfo;