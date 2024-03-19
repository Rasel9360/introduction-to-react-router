import { Link, useRouteError } from "react-router-dom";

const ErrorPages = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops !!!</h1>
            <p>{error.statusText || error.massage}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <Link to="/"><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPages;