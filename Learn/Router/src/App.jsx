import { useRoutes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import MenuDetail from "./pages/MenuDetail";
import Register from "./pages/Register";
import "./App.css";

function App() {
  const elementsRoutes = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "menu", element: <Menu /> },
        { path: "menu/:id", element: <MenuDetail /> },
        { path: "register", element: <Register /> },

        {
          path: "*",
          element: <>Not Found</>,
          children: [],
        },
      ],
    },
  ]);
  return <div className="App">{elementsRoutes}</div>;
}

export default App;
