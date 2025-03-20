import { useParams } from "react-router-dom";

function AboutInfo(){
    let {id} = useParams();
    return(
        <div>
            {id}
        </div>
    )
}

export default AboutInfo;