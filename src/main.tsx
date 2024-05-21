import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RecoilRoot } from 'recoil';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './routes/error';

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>HelloWorld!</h1>,
        errorElement: <ErrorPage></ErrorPage>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RecoilRoot>
        <React.StrictMode>
            <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
    </RecoilRoot>,
);
