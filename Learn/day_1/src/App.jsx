import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import DetailUser from "./components/DetailUser";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [idUser, setIdUser] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/users");
        const result = await response.json();
        setData(result.users);
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
          <h2 className="text-lg font-bold mb-4">Danh sách người dùng</h2>
          <div className="grid grid-cols-1 gap-4">
            {data.length > 0 ? (
              data.map((user) => (
                <div
                  key={user.id}
                  className="p-4 border rounded-lg shadow bg-white"
                >
                  <p className="font-semibold">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                  <button
                    onClick={() => setIdUser(user.id)}
                    className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
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
          <DetailUser id={idUser} />
        </div>
      </div>
    </Layout>
  );
}

export default App;
