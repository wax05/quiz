import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './routes/error';
import { GlobalFontStyle } from './style/global';
import { RootPage } from './routes/root';
import { QuizMain } from './routes/quiz/quiz';
import { QuizDetailShow } from './routes/quiz/quizDitail';
import { QuizSolve } from './routes/quiz/quizSolve';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/quiz',
                element: <QuizMain />,
            },
            {
                path: '/quiz/create',
                element: <p>HELLO</p>,
            },
            {
                path: '/quiz/:quizId',
                element: <QuizDetailShow />,
            },
            {
                path: '/quiz/:quizId/solve',
                element: <QuizSolve />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RecoilRoot>
        <React.StrictMode>
            <GlobalFontStyle />
            <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
    </RecoilRoot>,
);
