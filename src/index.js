import React from "react";
import { createRoot } from 'react-dom/client';

const appElement = document.getElementById("root");

const root = createRoot(appElement);

const App = () => {
    return <>
        <h1>testing</h1>
    </>
}

root.render(<App />)