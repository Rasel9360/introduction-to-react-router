import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const navigate = useNavigate();
    const post = useLoaderData();
    const {id, title, body} = post

    const handleGoBack = ()=>{
        navigate(-1)
    }
    return (
        <div>
            <h2>Post Id : {id} </h2>
            <h4>Title : {title} </h4>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;