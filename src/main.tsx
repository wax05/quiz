import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './routes/error';
import { GlobalFontStyle } from './style/global';
import { RootPage } from './routes/root';
import { QuizMain } from './routes/quiz/quiz';
import { QuizSolve } from './routes/quiz/quizSolve';
import { QuizCreate } from './routes/quiz/create/quizCreate';
import { QuizResult } from './routes/quiz/result';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';

library.add(fas, faTwitter, faFontAwesome);

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
                element: <QuizCreate />,
            },
            {
                path: '/quiz/:quizId/solve',
                element: <QuizSolve />,
            },
            {
                path: '/result',
                element: <QuizResult />,
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
