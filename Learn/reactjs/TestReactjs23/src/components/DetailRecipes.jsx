import React, { useEffect, useState } from "react";

const DetailRecipe = ({ id }) => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchRecipe = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết món ăn:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!id) return <div className="text-center">Chưa chọn món ăn</div>;
  if (loading) return <div className="text-center">Đang tải thông tin...</div>;
  if (!recipe) return <div className="text-center">Không tìm thấy món ăn</div>;

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold">{recipe.name}</h2>
      <p>
        <strong className="pr-5">Nguyên liệu:</strong>{" "}
        {recipe.ingredients
          ? recipe.ingredients.join(", ")
          : "Không có thông tin"}
      </p>
      <p>
        <strong className="pr-5">Hướng dẫn:</strong>{" "}
        {recipe.instructions
          ? recipe.instructions.join(". ")
          : "Không có thông tin"}
      </p>
      <p>
        <strong className="pr-5">Thời gian chuẩn bị:</strong>
        {recipe.prepTimeMinutes}
      </p>
      <p>
        <strong className="pr-5">Thời gian nấu:</strong>
        {recipe.cookTimeMinutes}
      </p>
      <p>
        <strong className="pr-5">Phục vụ:</strong>
        {recipe.servings}
      </p>
      <p>
        <strong className="pr-5">Độ khó:</strong>
        {recipe.difficulty}
      </p>
    </div>
  );
};

export default DetailRecipe;
