import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Main from "../layouts/Main";
import NewsLayout from "../layouts/NewsLayout";
import Category from "../pages/Home/Category/Category";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";
import News from "../pages/News/News/News";
import TermAndCondition from "../pages/Shared/TermAndCondition/TermAndCondition";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Category></Category>,
        loader: () =>
          fetch("https://the-news-dragon-server-naimuralltime.vercel.app/news"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://the-news-dragon-server-naimuralltime.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://the-news-dragon-server-naimuralltime.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <TermAndCondition></TermAndCondition>,
      },
    ],
  },
]);

export default router;
