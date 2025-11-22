import { Target, Heart, Star, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Tầm nhìn',
      description: 'Trở thành câu lạc bộ thể thao hàng đầu khu vực, đào tạo vận động viên chuyên nghiệp.',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Sứ mệnh',
      description: 'Phát triển thể chất và tinh thần cho cộng đồng qua hoạt động thể thao.',
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Giá trị cốt lõi',
      description: 'Chuyên nghiệp - Tận tâm - Đoàn kết - Phát triển bền vững.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Cam kết',
      description: 'Mang đến môi trường tập luyện an toàn, hiện đại và chất lượng cao.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Giới thiệu về chúng tôi</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Câu lạc bộ thể thao với hơn 10 năm kinh nghiệm, nơi đam mê thể thao được nuôi dưỡng và phát triển
          </p>
        </div>
      </div>

      {/* Story Section - Layout Text + Image with Hover Effect */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Câu chuyện của chúng tôi</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Được thành lập vào năm 2015, Câu lạc bộ Thể thao đã không ngừng phát triển và trở thành một trong những trung tâm thể thao uy tín hàng đầu. Chúng tôi bắt đầu với một nhóm nhỏ những người đam mê thể thao, và giờ đây đã phát triển thành một cộng đồng với hơn 1000 thành viên.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Với sứ mệnh mang lại sức khỏe và niềm vui thông qua thể thao, chúng tôi cung cấp môi trường tập luyện chuyên nghiệp, đội ngũ huấn luyện viên giàu kinh nghiệm và các chương trình đào tạo đa dạng phù hợp với mọi lứa tuổi.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Không chỉ dừng lại ở việc rèn luyện thể chất, chúng tôi còn chú trọng xây dựng tinh thần đồng đội, kỷ luật và lối sống lành mạnh cho tất cả thành viên.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-2xl group h-[400px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1762013315117-1c8005ad2b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzdGFkaXVtJTIwYWN0aW9ufGVufDF8fHx8MTc2MzczNjY3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Sports Stadium"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Reverse Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative overflow-hidden rounded-2xl shadow-2xl group h-[400px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwdHJhaW5pbmd8ZW58MXx8fHwxNjM3MzUyODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Gym Training"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Cơ sở vật chất hiện đại</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Chúng tôi tự hào sở hữu hệ thống cơ sở vật chất hiện đại với tổng diện tích hơn 5000m², bao gồm:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">✓</span>
                <span>Phòng tập Gym với máy móc nhập khẩu từ các thương hiệu hàng đầu</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">✓</span>
                <span>Sân bóng đá cỏ nhân tạo tiêu chuẩn FIFA</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">✓</span>
                <span>Sân bóng rổ, tennis, cầu lông trong nhà điều hòa</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">✓</span>
                <span>Bể bơi Olympic tiêu chuẩn quốc tế</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">✓</span>
                <span>Khu vực thư giãn, xông hơi và massage phục hồi</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Giá trị cốt lõi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Những giá trị mà chúng tôi luôn theo đuổi và cam kết mang đến cho thành viên
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-blue-600"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section with Hover Effect */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Đội ngũ huấn luyện viên</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Các huấn luyện viên giàu kinh nghiệm, tận tâm và chuyên nghiệp
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Nguyễn Văn A',
              role: 'HLV Bóng đá',
              image: 'https://images.unsplash.com/flagged/photo-1568105631375-d992b82a905b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwbGF5ZXJzJTIwZ2FtZXxlbnwxfHx8fDE3NjM3MzY2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
            },
            {
              name: 'Trần Thị B',
              role: 'HLV Bơi lội',
              image: 'https://images.unsplash.com/photo-1490084993229-bd7bd7959894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjBzcG9ydHxlbnwxfHx8fDE3NjM3MzY2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
            },
            {
              name: 'Lê Văn C',
              role: 'HLV Fitness',
              image: 'https://images.unsplash.com/photo-1691675996849-78a298efe96a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwdHJhY2slMjBhdGhsZXRlfGVufDF8fHx8MTc2MzY3MDM5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
            },
          ].map((coach, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group h-80"
            >
              <ImageWithFallback
                src={coach.image}
                alt={coach.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-lg font-bold mb-1">{coach.name}</h3>
                <p className="text-sm text-gray-300">{coach.role}</p>
              </div>
              <div className="absolute inset-0 bg-blue-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                <div className="text-white text-center">
                  <h3 className="text-lg font-bold mb-2">{coach.name}</h3>
                  <p className="text-sm mb-4">{coach.role}</p>
                  <p className="text-xs leading-relaxed">
                    Chứng chỉ quốc tế, hơn 10 năm kinh nghiệm huấn luyện vận động viên chuyên nghiệp.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <p className="text-blue-100">Năm kinh nghiệm</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <p className="text-blue-100">Thành viên</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Huấn luyện viên</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <p className="text-blue-100">Giải thưởng</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}