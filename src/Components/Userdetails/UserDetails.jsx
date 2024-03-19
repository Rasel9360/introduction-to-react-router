import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, website, username} = user;
    return (
        <div>
            <h3>User Details : {name}</h3>
            <p>User Name : {username}</p>
            <p>Visit website : {website}</p>
        </div>
    );
};

export default UserDetails;