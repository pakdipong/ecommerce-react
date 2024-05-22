import { Link, useRouteError } from "react-router-dom"

function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="h-screen flex">
            <div className="text-center m-auto">
                <h1 className="text-6xl">Oops!</h1>
                <p className="mt-6">Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <div className="mt-6"></div>
                <Link to={'/'}>
                    <button className="btn">Back to myShop</button>
                </Link>
            </div>
        </div>
    );
}

export default ErrorPage