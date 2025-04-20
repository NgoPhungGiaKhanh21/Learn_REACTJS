import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import DetailRecipe from "./components/DetailRecipes";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [idRecipe, setIdRecipe] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const result = await response.json();
        setData(result.recipes); // Sửa lại key đúng
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center text-lg">Đang tải...</div>;

  return (
    <Layout>
      <div className="flex gap-4">
        <div className="w-1/3 p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Danh sách món ăn</h2>
          <div className="grid grid-cols-1 gap-4">
            {data.length > 0 ? (
              data.map((recipe) => (
                <div
                  key={recipe.id}
                  className="p-4 border rounded-lg shadow bg-white"
                >
                  <p className="font-semibold">{recipe.name}</p>
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-32 h-32 rounded-full mt-2"
                  />
                  <button
                    onClick={() => setIdRecipe(recipe.id)}
                    className="mt-2 px-3 py-1 bg-gray-500  text-black rounded hover:bg-blue-600"
                  >
                    Xem chi tiết
                  </button>
                </div>
              ))
            ) : (
              <p>Không có dữ liệu</p>
            )}
          </div>
        </div>
        <div className="w-2/3 p-4 bg-gray-100 rounded-lg shadow-md">
          <DetailRecipe id={idRecipe} />
        </div>
      </div>
    </Layout>
  );
}

export default App;
