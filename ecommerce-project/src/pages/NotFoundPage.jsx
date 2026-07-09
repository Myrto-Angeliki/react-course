import { Header } from "../components/Header";

import './NotFoundPage.css'


export function NotFoundPage(){
    return (
        <>
            <title>404 Not Found</title>

            <Header />

            <div className="not-found-message">
                <h1>Page Not Found</h1>
            </div>
        </>
    );
}