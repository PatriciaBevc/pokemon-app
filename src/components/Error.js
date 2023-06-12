import { NavLink } from 'react-router-dom';

const ErrorPage = ()=>{
    return(
        <div className="error">
            <h1>Error</h1>
            <p>This page does not exist</p>

            <button>
                <NavLink to="/" className="back_link">Home</NavLink>
            </button>
        </div>
    )
}

export default ErrorPage;