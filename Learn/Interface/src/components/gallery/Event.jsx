import React, { useState } from "react";
import { Modal } from "antd";

const event = [
  {
    images:
      "https://intern-project-chi.vercel.app/static/media/14.bf2b343aa41a0b31d7b2.jpg",
    url: "https://www.youtube.com/watch?v=_Up9g2iRkxE",
  },
  {
    images:
      "https://intern-project-chi.vercel.app/static/media/15.06b6e523c3d1c55250c4.jpg",
    url: "https://www.youtube.com/watch?v=tpgZkyBESYw",
  },
  {
    images:
      "https://intern-project-chi.vercel.app/static/media/16.97d3a97be30d4d0e840a.jpg",
    url: "https://www.youtube.com/watch?v=1vsYj06F4Z8",
  },
];

const Event = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const showModal = (url) => {
    // Chuyển URL YouTube thành URL nhúng
    const videoId = url.split("v=")[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    setSelectedVideo(embedUrl);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedVideo(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">TIỆC SỰ KIỆN ĐA TỔ CHỨC</h2>
      {/* Hiển thị 3 video trên cùng một trang */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {event.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.images}
              alt={`Event ${index + 1}`}
              className="w-full h-48 object-cover"
            />
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={() => showModal(item.url)}
            >
              <div className="bg-white bg-opacity-50 rounded-full p-2">
                <svg
                  className="w-12 h-12 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal to display the video */}
      <Modal
        title="Video Sự Kiện"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        {selectedVideo && (
          <div className="w-full h-96">
            <iframe
              width="100%"
              height="100%"
              src={selectedVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Event;
