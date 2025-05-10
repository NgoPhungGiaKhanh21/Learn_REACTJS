import React, { useState } from "react";
import { Card, Typography, Row, Col } from "antd";
import { PlayCircleFilled } from "@ant-design/icons";
const { Title, Paragraph } = Typography;

const Event = () => {
  const [isVideoPlay, setVideoPlay] = useState(false);
  const ytbVideo = "https://www.youtube.com/embed/oUFJJNQGwhk?autoplay=1"; // Video tự động phát
  const thumbnail =
    "https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg";

  const handlePlayClick = () => {
    setVideoPlay(true);
  };

  const handleCloseVideo = () => {
    setVideoPlay(false);
  };

  return (
    <div className="container w-full p-6 bg-gray-200">
      <Row gutter={16}>
        <Col span={12}>
          <div className="h-100 mt-20">
            <Title level={2} className="text-center">
              Tiệc tại gia chất lượng
            </Title>
            <Paragraph className="p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae
              fugit accusantium commodi esse modi pariatur praesentium, voluptas
              dolor ea qui? Vel dolore ipsam vitae voluptatem esse repellat
              nobis sint. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eum quae fugit accusantium commodi esse modi pariatur
              praesentium, voluptas dolor ea qui? Vel dolore ipsam vitae
              voluptatem esse repellat nobis sint.
            </Paragraph>
            <Paragraph className="p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae
              fugit accusantium commodi esse modi pariatur praesentium, voluptas
              dolor ea qui? Vel dolore ipsam vitae voluptatem esse repellat
              nobis sint.
            </Paragraph>
          </div>
        </Col>
        <Col span={12}>
          <div className="mt-2 ml-20 w-150 relative">
            {isVideoPlay ? (
              <div
                className="fixed inset-0 bg-gray bg-opacity-75 flex items-center justify-center z-50"
                onClick={handleCloseVideo}
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-[80%] h-[80%]"
                >
                  <iframe
                    src={ytbVideo}
                    title="YTB video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            ) : (
              <div className="relative">
                <img
                  src={thumbnail}
                  alt="Video thumbnail"
                  className="w-full h-64 md:h-96 cursor-pointer"
                />
                <div
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                >
                  <PlayCircleFilled
                    style={{
                      fontSize: "50px",
                      color: "#ff0000",
                      opacity: 0.8,
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Event;
