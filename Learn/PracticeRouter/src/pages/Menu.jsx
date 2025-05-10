import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">📜 Menu</h1>
      <Link to="/menu/1" className="text-blue-500">Xem chi tiết món ăn</Link>
    </div>
  );
};

export default Menu;