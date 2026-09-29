import { Header } from "../components/Header";

import './NotFoundPage.css'


export function NotFoundPage({ cart }){
    return (
        <>
            <title>404 Not Found</title>

            <Header cart={cart} />

            <div className="not-found-message">
                <h1>Page Not Found</h1>
            </div>
        </>
    );
}