import { useState,useEffect } from "react"; //хуки state создание состояния функ комп
                                            // effect загрузка данных один раз после рендеринга компонента
import { Link } from "react-router"; //навлинк = навигация а линк = ссылка

function About(){
    let [posts, setPosts] = useState([]);//созд сост posts изнач массив пустой
                                         //далее изм сост и закинем в setPosts массив данных
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')//один раз загр данные с API jsonplaceholder
        .then(response => response.json())//ждем когда данные все загр и преобр объект json,js методом в объект javascript
        .then(data => setPosts(data))//изм сост posts c пустого массива на данные кот придут по текущ ссылке 
    },[]);                           //мустой массив озн что эф будет выполнен один раз

    return(
        <div className="content"> 
            <h2>About page</h2>
            <ul style={{display: "block"}}>
                {
                    posts.map(post => (
                        <li key={post.id} >
                            <Link to={`/about/${post.id}`}>
                            {post.title}
                            </Link>
                            
                        
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default About;