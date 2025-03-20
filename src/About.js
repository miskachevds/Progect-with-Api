import { useState,useEffect } from "react"; //хуки state создание состояния функ комп
                                            // effect загрузка данных один раз после рендеринга компонента
function About(){
    let [posts, setPosts] = useState([]);//созд сост posts изнач массив пустой
                                         //далее изм сост и закинем в setPosts массив данных
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')//один раз загр данные с API jsonplaceholder
        .then(response => response.json())//ждем когда данные все загр и преобр js методом в json формат
        .then(data => setPosts(data))//затем данные передаются в setPosts и наз Data
    },[]);                           //мустой массив озн что эф будет выполнен один раз

    return(
        <div>
            <h2>About page</h2>
        </div>
    )
}

export default About;