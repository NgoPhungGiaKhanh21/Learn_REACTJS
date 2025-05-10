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
import { Link, useParams } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

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

const imgEvent = [img1, img2, img3, img4, img5, img6];

const BlogDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div>Không tìm thấy bài viết!</div>;
  }
  return (
    <div className="container flex p-6 bg-gray-300 min-h-screen mt-20">
      <div className="w-2/3 pr-6 bg-white rounded-lg h-full pb-10">
        <div className="container">
          <div className="flex">
            <Link to="/">Trang chủ</Link>
            <ArrowRightOutlined />
            <p>Tin tức sự kiện</p>
          </div>
        </div>
        <div className="mt-10 px-8">
          <h1 className="text-2xl text-gray-800 mb-4">{post.title}</h1>
          <p className="text-sm text-gray-800 mb-4">{post.date}</p>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg mb-6"
          />
          <p className="py-3">
            Mở tiệc ăn mừng hết giãn cách cùng chương trình Flash Sale siêu hấp
            dẫn: Chỉ từ 99.000 VNĐ trên ứng dụng Shoppe
          </p>
          <p className="py-3">
            Khung giờ "vàng" săn Sale: 10H và 14H vào THỨ 6 HÀNG TUẦN(từ 10/01 -
            21/01)
          </p>
          <p>
            Duy nhất hơn 2000 Coupon áp dụng giảm giá khi đặt món từ 13 thương
            hiệu nổi tiếng..
          </p>
          <p>
            Hạn sử dụng Coupon đến ngày 21/02 để khách hàng thoải mái mở tiệc
            tại gia.
          </p>
          <p>
            Chỉ vớ vài bước đặt hàng đơn giản, Shopee mang đại tiệc món ngon
            chuẩn vị nhà hàng từ hương vị lẩu Thái chua cay,...
          </p>
          <p>
            Dê sườn nướng đậm đà từ ... đến ... nóng hổi ... đến tận nhà bạn.
          </p>
          <h1 className="pt-10 font-bold">SỐ LƯỢNG GIẢI THƯỞNG</h1>
          <p>
            Bên cạnh đó, ... sẽ cập nhật thường xuyên số lượng giải thưởng còn
            lại mỗi tuần trên trang .., theo dõi ngay để cập nhật thông tin mới
            nhất về chương trình.
          </p>
          <p className="pt-5">
            ... diễn ra từ ngày 10/01/2022 đến ngày 20/01/2022 trên ứng dụng
            Shopee và chỉ áp dụng cho ứng dụng Shopee phiên bản mới nhất, đừng
            quên cập nhật ứng dụng vào ngày 10/01 để sẵn sàng ...
          </p>
          <h1 className="pt-10 pb-3 font-bold">BÀN GHẾ VÀ DUNG CỤ TIỆC</h1>
          <p>
            Chúng tôi đầu tư và trang bị tất cả bàn ghế, dụng cụ ăn uống,trang
            trí và cá trang thiết bị sân khấu, âm thanh-cao cấp và chất lượng
            theo mọi như cầu của khách hàng, từ bình dân đến sang trọn đẳng cấp
            để mang lại sự tiện lợi và chu đáo nhất cho Khách hàng khi đặt tiệc
            tại nhà.
          </p>
          <div className="container mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src="/images/anh2.jpg"
                className="w-full h-96 object-cover rounded-lg mb-6"
              />
              <img
                src="/images/anh3.jpg"
                className="w-full h-96 object-cover rounded-lg mb-6"
              />
            </div>
          </div>
          <p className="mt-5">
            Hiện nay, TIỆC TẠI GIA tr chức và nấu tại nhà tất cả các quận trong
            thành phố Tp.HCM: như nấu tiệc tại quận 1, tiệc tại quận 2, tiệc tại
            quận 3, tiệc tại quận 4, tiệc tại quận 5, tiệc tại quận 6, tiệc tại
            quận 7, tiệc tại quận 8, tiệc tại quận 9, tiệc tại quận 10, tiệc tại
            quận 11, tiệc tại quận Bình Thuận, tiệc tại quận Gò Vấp, tiệc tại
            quận Phú Nhuận, tiệc tại quận Bình Tân, tiệc tại quận Tân Bình, tiệc
            tại quận Tân Phú, tiệc tại quận Thủ Đức,...
          </p>
          <p className="mt-5">
            Ngoài ra TIỆC TẠI GIA cũng tổ chức nấu tiệc tại nhà ở các tỉnh lân
            cận như: Long An, Tiền Giang, Bến Tre, Tây Ninh, Bình Dương, Đông
            Nai, Vũng Tàu.
          </p>
          <p className="mt-5">
            Với mong muốn mang lại trải nghiệm tốt nhất cho Quý khách hàng, TIỆC
            TẠI GIA đầu tư tất cả tâm huyết, tiện ích và dịch vụ để phục vụ Quý
            khách một cách chuyên nghiệp nhất, giúp Quý khách có thể tận hưởng
            trọn vẹn những phút giây vui vẻ, thân thiết bên cạnh người thân, bạn
            bè, đồng nghiệp trong dịp đặc biệt mà không cần phải vất vả lo toan
            nhiều.
          </p>
          <div className="relative">
            <img
              src="/images/anh7.jpg"
              alt="anh7"
              className="w-full rounded-lg h-auto object-cover max-h-[300px] mt-10"
            />
            <div className="container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <img
                    src="https://intern-project-chi.vercel.app/static/media/icon-logo-detail.93d86c1c369582897832.png"
                    alt="logo"
                    className="w-full h-30"
                  />
                </div>
                <div>
                  <div className="container flex text-2xl">
                    <p>LIÊN HỆ NGAY</p>
                    <p className="underline ml-2">1800 6261</p>
                  </div>
                  <p className="mt-5 font-bold w-80">
                    Đại tiệc ngay hôm nay để những sự kiện quan trọng của bạn
                    trở nên đơn giản và dễ dàng hơn bao giờ hết
                  </p>
                </div>
                <div>
                  <Link
                    to="/order"
                    style={{
                      backgroundColor: "orangered",
                      padding: "10px",
                      marginRight: "10px",
                      marginLeft: "5px",
                    }}
                  >
                    ĐẶT TIỆC NGAY
                  </Link>
                  <button
                    style={{
                      border: "1px solid white",
                      padding: "10px",
                      marginTop: "20px",
                    }}
                  >
                    ĐẶT TIỆC NGAY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <div className="sticky top-6">
          <div className="bg-white rounded-lg p-4 mb-6 ml-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              CÓ THỂ BẠN QUAN TÂM
            </h3>
            <hr className="mb-10" />
            {posts.map((relatedPost) => (
              <div key={relatedPost.id} className="mb-4 flex">
                <img
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  className="w-20 h-20 object-cover rounded-lg mr-4"
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    {relatedPost.title}
                  </h4>
                  <p className="text-xs text-gray-400">{relatedPost.date}</p>
                </div>
              </div>
            ))}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              HÌNH ẢNH SỰ KIỆN
            </h3>
            <hr />
            <div className="grid grid-cols-2 gap-2 mt-10">
              {imgEvent.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Event ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-600 font-semibold">+100</span>
              <button className="text-blue-500 hover:underline">
                Xem thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogDetail;
