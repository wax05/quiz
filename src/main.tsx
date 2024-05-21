import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RecoilRoot } from 'recoil';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    { path: '/', element: <h1>HelloWorld!</h1> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RecoilRoot>
        <React.StrictMode>
            <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
    </RecoilRoot>,
);
