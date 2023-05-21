import { Link, useRouteError } from "react-router-dom";

// This is default Error page
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="rounded-lg bg-gray-300 p-12 mx-auto my-12 max-w-3xl text-center border-gray-400">
            <img className="block mx-auto" src="https://usabilitygeek.com/wp-content/uploads/2020/06/1_TzFF6NMADHPbCQBxmHv3lQ.png" alt="" />
            <h2 className="my-5 text-4xl">Sorry, an unexpected error has occurred.</h2>
            <p className="text-2xl mb-6">
                <i>{error.statusText || error.message}</i>
            </p>
            <p className="text-2xl mb-6">
                Please Refresh the page
            </p>
            <Link to="/">
                <button className="btn btn-secondary">Go to Home</button>
            </Link>
        </div>
    );
}