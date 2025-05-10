import img1 from "/images/anh1.jpg";
import img2 from "/images/anh2.jpg";
import img3 from "/images/anh3.jpg";
import img4 from "/images/anh4.webp";
import img5 from "/images/anh5.webp";
import img6 from "/images/anh6.jpg";
import img7 from "/images/anh7.jpg";
import img8 from "/images/anh8.jpg";
import img9 from "/images/anh9.jpg";
import img10 from "/images/anh10.jpg";
import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      id: 1,
      image: img1,
      title: "Gợi ý menu tiệc mini gia cho 12-15 người siêu ngon",
      description:
        "Kế thừa tinh hoa ẩm thực Việt, chúng tôi cung cấp dịch vụ đặt tiệc chuyên nghiệp, giao hàng tận nơi và công sức, dành cho khoảng khách sum vầy bên những người thân yêu...",
      date: "12.02.2018",
    },
    {
      id: 2,
      image: img2,
      title: "Hà Nội: Mách bạn những địa chỉ đặt cỗ Tết chất lượng giá",
      description: "Dịch vụ đặt tiệc có thể giúp bạn tiết kiệm thời gian...",
      date: "12.02.2018",
    },
    {
      id: 3,
      image: img3,
      title: "Dịch vụ đặt cỗ tết bội thu mùa Covid",
      description: "Những món ăn ngon, chuẩn vị tiệc nhà hàng...",
      date: "12.02.2018",
    },
    {
      id: 4,
      image: img4,
      title: "Điểm tên 5 món ăn nóng chuẩn vị tiệc nhà hàng",
      description: "Một gợi ý menu tiệc mini cho gia đình hoặc bạn bè...",
      date: "12.02.2018",
    },
    {
      id: 5,
      image: img5,
      title: "Gợi ý menu tiệc mini gia cho 12-15 người siêu ngon",
      description: "Dịch vụ đặt tiệc có thể giúp bạn tiết kiệm thời gian...",
      date: "12.02.2018",
    },
  ];

  const posts1 = [
    {
      id: 6,
      image: img6,
      title:
        "ĐẶT CỖ TẾT, 3 địa chỉ đặt cỗ Tết online siêu tiện lợi để lười vẫn có đồ ăn ngon",
      description:
        "Kế thừa tinh hoa ẩm thực Việt, chúng tôi cung cấp dịch vụ đặt tiệc chuyên nghiệp, giao hàng tận nơi và công sức, dành cho khoảng khách sum vầy bên những người thân yêu...",
      date: "12.02.2018",
    },
    {
      id: 7,
      image: img7,
      title: "Hà Nội: Mách bạn những địa chỉ đặt tiệc Tết chất lượng",
      description: "Dịch vụ đặt tiệc có thể giúp bạn tiết kiệm thời gian...",
      date: "12.02.2018",
    },
    {
      id: 8,
      image: img8,
      title: "Điểm tên 5 món ăn ngon chuẩn vị tiệc nhà hàng",
      description: "Những món ăn ngon, chuẩn vị tiệc nhà hàng...",
      date: "12.02.2018",
    },
    {
      id: 9,
      image: img9,
      title: "Gợi ý menu tiệc mini gia cho 12-15 người siêu ngon",
      description: "Một gợi ý menu tiệc mini cho gia đình hoặc bạn bè...",
      date: "12.02.2018",
    },
    {
      id: 10,
      image: img10,
      title: "Dịch vụ đặt tiệc có thể giúp bạn tiết kiệm thời gian",
      description: "Dịch vụ đặt tiệc có thể giúp bạn tiết kiệm thời gian...",
      date: "12.02.2018",
    },
  ];

  return (
    <div className="p-6 bg-gray-300 min-h-screen">
      <h1 className="mx-160 my-20 font-bold">TIN TỨC SỰ KIỆN</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-170">
            <img
              src={posts[0].image}
              alt={posts[0].title}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">
                {posts[0].title}
              </h3>
              <p className="text-gray-600 mt-3">{posts[0].description}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-sm text-gray-400">{posts[0].date}</p>
                <Link
                  to={`/new/${posts[0].id}`}
                  className="text-blue-500 hover:underline"
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-170">
            {posts.slice(1).map((post, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-30 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mt-2 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-sm text-gray-400">{post.date}</p>
                    <Link
                      to={`/new/${post.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-80">
          {posts1.slice(1).map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-30 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 mt-2 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-sm text-gray-400">{post.date}</p>
                  <Link
                    to={`/new/${post.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-80">
          {posts.slice(1).map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-30 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 mt-2 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-sm text-gray-400">{post.date}</p>
                  <Link
                    to={`/new/${post.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-80">
          {posts1.slice(1).map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-30 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 mt-2 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-sm text-gray-400">{post.date}</p>
                  <a href="#" className="text-blue-500 hover:underline">
                    Xem chi tiết
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-80">
          {posts.slice(1).map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-30 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 mt-2 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-sm text-gray-400">{post.date}</p>
                  <Link
                    to={`/new/${post.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
