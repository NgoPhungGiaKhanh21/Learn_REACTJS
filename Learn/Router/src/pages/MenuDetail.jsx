import { useParams } from "react-router-dom";

const MenuDetail = () => {
  let { id } = useParams();
  return <h1 className="text-3xl font-bold">Chi tiết món ăn {id}</h1>;
};

export default MenuDetail;
