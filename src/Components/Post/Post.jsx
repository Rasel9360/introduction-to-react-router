import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const navigate = useNavigate();
    const {id, title, body}= post;

    const postStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }

    const handleNavigate = ()=>{
        navigate(`/post/${id}`)
    }

    return (
        <div style={postStyle}>
            <h3>Post id : {id}</h3>
            <h4>Post title : {title}</h4>
            {/* <Link to={`/post/${id}`}>Show Details</Link> */}
            <button onClick={handleNavigate}>Click to see more</button>
        </div>
    );
};

export default Post;