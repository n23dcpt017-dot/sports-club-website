import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Trophy, Users, Calendar, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1762013315117-1c8005ad2b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzdGFkaXVtJTIwYWN0aW9ufGVufDF8fHx8MTc2MzczNjY3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Chào mừng đến với CLB Thể Thao',
    description: 'Nơi đam mê thể thao được thăng hoa',
  },
  {
    image: 'https://images.unsplash.com/flagged/photo-1568105631375-d992b82a905b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwbGF5ZXJzJTIwZ2FtZXxlbnwxfHx8fDE3NjM3MzY2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Rèn luyện cùng nhau',
    description: 'Phát triển kỹ năng và tinh thần đồng đội',
  },
  {
    image: 'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwdHJhaW5pbmd8ZW58MXx8fHwxNjM3MzUyODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Cơ sở vật chất hiện đại',
    description: 'Trang thiết bị tiêu chuẩn quốc tế',
  },
];

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const activities = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Thi đấu chuyên nghiệp',
      description: 'Tham gia các giải đấu cấp quốc gia và quốc tế',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Cộng đồng năng động',
      description: 'Hơn 1000 thành viên tích cực hoạt động',
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Lịch tập linh hoạt',
      description: 'Mở cửa 7 ngày trong tuần với nhiều khung giờ',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Huấn luyện viên giỏi',
      description: 'Đội ngũ HLV giàu kinh nghiệm và tâm huyết',
    },
  ];

  return (
    <div>
      {/* Banner Slideshow */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden bg-gray-900">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center px-4 max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">{slide.title}</h2>
                <p className="text-lg md:text-2xl text-gray-200 animate-fade-in-delay">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Activities Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hoạt động câu lạc bộ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cung cấp môi trường tập luyện chuyên nghiệp và nhiều hoạt động thể thao đa dạng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                {activity.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{activity.title}</h3>
              <p className="text-gray-600 text-sm">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hình ảnh hoạt động</h2>
            <p className="text-gray-600">Những khoảnh khắc đáng nhớ tại CLB</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 overflow-hidden rounded-xl shadow-lg group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1705440373795-36ef2a3ff1d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnQlMjBwbGF5ZXJzfGVufDF8fHx8MTc2MzcyMjA0OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Basketball"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-lg font-bold">Bóng rổ</h3>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden rounded-xl shadow-lg group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761927055601-7ad2decee719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBtYXRjaCUyMGNvdXJ0fGVufDF8fHx8MTc2MzczNjY3OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tennis"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-lg font-bold">Quần vợt</h3>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden rounded-xl shadow-lg group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1490084993229-bd7bd7959894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjBzcG9ydHxlbnwxfHx8fDE3NjM3MzY2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Swimming"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-lg font-bold">Bơi lội</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tham gia cùng chúng tôi ngay hôm nay!</h2>
          <p className="text-lg mb-8 text-blue-100">
            Đăng ký thành viên để nhận ưu đãi đặc biệt
          </p>
          <button className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all font-bold">
            Đăng ký ngay
          </button>
        </div>
      </div>
    </div>
  );
}