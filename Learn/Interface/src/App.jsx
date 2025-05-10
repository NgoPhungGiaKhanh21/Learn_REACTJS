import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "./components/config/ThemeContext";
import Header from "./components/home/Header"; // Import Header
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import New from "./pages/New";
import Profile from "./pages/User-profile";
import Info from "./components/profile/Info";
import Address from "./components/profile/Address";
import Coupon from "./components/profile/Coupons";
import Order from "./pages/Order";
import NewDetail from "./pages/NewDetail";
import Login from "./pages/Login";
import Gallery from "./pages/Gallery";
import "./App.css";
import { AuthProvider } from "./components/auth/AuthContext";

function App() {
  const elementRouter = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/menu", element: <Menu /> },
    { path: "/new", element: <New /> },
    { path: "/login", element: <Login /> },
    { path: "/new/:id", element: <NewDetail /> },
    {
      path: "user-profile",
      element: <Profile />,
      children: [
        { path: "profile", element: <Info /> },
        { path: "address-settings", element: <Address /> },
        { path: "coupons", element: <Coupon /> },
      ],
    },
    { path: "/order", element: <Order /> },
    { path: "/gallery", element: <Gallery /> },
  ]);

  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="App" data-theme="light">
          {elementRouter}
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
