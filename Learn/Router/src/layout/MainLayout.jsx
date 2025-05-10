import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <div className="flex min-h-screen">
            <div className="w-64 bg-gray-900 text-white p-5 fixed top-0 left-0 h-full">
                <h1 className="text-2xl font-bold mb-6">Navigation</h1>
                <div className="space-y-4">
                    <Link to = "/" className="block hover:text-gray-300">Home</Link>
                    <Link to = "/login" className="block hover:text-gray-300">Login</Link>
                    <Link to = "/menu" className="block hover:text-gray-300">Menu</Link>
                    <Link to = "/register" className="block hover:text-gray-300">Register</Link>
                </div>
            </div>

            <div className="flex-1 p-6">
                <Outlet/>
            </div>
        </div>
    )
};
export default Layout;