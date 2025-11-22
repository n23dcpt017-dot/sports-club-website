import { useState } from 'react';
import { X, Clock, Users, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Sport {
  id: number;
  name: string;
  description: string;
  image: string;
  schedule: string;
  members: number;
  location: string;
  details: string;
  benefits: string[];
}

const sports: Sport[] = [
  {
    id: 1,
    name: 'Bóng đá',
    description: 'Môn thể thao vua với sân cỏ nhân tạo tiêu chuẩn FIFA',
    image: 'https://images.unsplash.com/flagged/photo-1568105631375-d992b82a905b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwbGF5ZXJzJTIwZ2FtZXxlbnwxfHx8fDE3NjM3MzY2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    schedule: 'Thứ 2, 4, 6: 18:00 - 20:00',
    members: 250,
    location: 'Sân A - Tầng 1',
    details: 'Chương trình huấn luyện bóng đá chuyên nghiệp với đội ngũ HLV giàu kinh nghiệm. Phù hợp cho mọi lứa tuổi từ 6 tuổi trở lên.',
    benefits: [
      'Cải thiện thể lực và sức bền',
      'Phát triển kỹ năng làm việc nhóm',
      'Tham gia giải đấu nội bộ và giao hữu',
      'Cơ hội thi đấu cấp quốc gia',
    ],
  },
  {
    id: 2,
    name: 'Bóng rổ',
    description: 'Sân trong nhà điều hòa với thiết bị hiện đại',
    image: 'https://images.unsplash.com/photo-1705440373795-36ef2a3ff1d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnQlMjBwbGF5ZXJzfGVufDF8fHx8MTc2MzcyMjA0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    schedule: 'Thứ 3, 5, 7: 17:00 - 19:00',
    members: 180,
    location: 'Sân B - Tầng 2',
    details: 'Lớp học bóng rổ từ cơ bản đến nâng cao. Phát triển chiều cao, phản xạ và kỹ năng phối hợp.',
    benefits: [
      'Tăng chiều cao tự nhiên',
      'Rèn luyện phản xạ nhanh nhạy',
      'Cải thiện khả năng phối hợp',
      'Tham gia giải đấu chuyên nghiệp',
    ],
  },
  {
    id: 3,
    name: 'Quần vợt',
    description: 'Sân tennis tiêu chuẩn quốc tế với bề mặt chuyên nghiệp',
    image: 'https://images.unsplash.com/photo-1761927055601-7ad2decee719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBtYXRjaCUyMGNvdXJ0fGVufDF8fHx8MTc2MzczNjY3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    schedule: 'Mỗi ngày: 6:00 - 21:00',
    members: 120,
    location: 'Sân C - Khu ngoài trời',
    details: 'Lớp tennis cho người mới bắt đầu và nâng cao. Học viên được cung cấp vợt và bóng trong quá trình tập luyện.',
    benefits: [
      'Rèn luyện sự tập trung cao độ',
      'Cải thiện thể lực toàn diện',
      'Phát triển tư duy chiến thuật',
      'Thi đấu các giải quần vợt',
    ],
  },
  {
    id: 4,
    name: 'Bơi lội',
    description: 'Bể bơi Olympic 50m với hệ thống lọc nước hiện đại',
    image: 'https://images.unsplash.com/photo-1490084993229-bd7bd7959894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjBzcG9ydHxlbnwxfHx8fDE3NjM3MzY2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    schedule: 'Mỗi ngày: 5:00 - 22:00',
    members: 300,
    location: 'Bể bơi chính - Tầng B1',
    details: 'Dạy bơi từ cơ bản đến nâng cao. Các lớp dành riêng cho trẻ em, người lớn và vận động viên chuyên nghiệp.',
    benefits: [
      'Phát triển toàn diện cơ thể',
      'Tăng cường sức khỏe tim mạch',
      'An toàn khi xuống nước',
      'Huấn luyện vận động viên bơi lội',
    ],
  },
  {
    id: 5,
    name: 'Bóng chuyền',
    description: 'Sân trong nhà với mặt sàn đàn hồi chuyên dụng',
    image: 'https://images.unsplash.com/photo-1514376310173-54eb2d6d1ba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2xsZXliYWxsJTIwYmVhY2glMjBnYW1lfGVufDF8fHx8MTc2MzY4MzQ4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    schedule: 'Thứ 2, 4, 6: 19:00 - 21:00',
    members: 150,
    location: 'Sân D - Tầng 2',
    details: 'Lớp bóng chuyền cho người mới và nâng cao. Tập trung vào kỹ thuật smash, chuyền bóng và phòng thủ.',
    benefits: [
      'Tăng sức bật và độ cao nhảy',
      'Rèn luyện tinh thần đồng đội',
      'Cải thiện phản xạ',
      'Tham gia giải bóng chuyền',
    ],
  },
  {
    id: 6,
    name: 'Fitness & Gym',
    description: 'Phòng tập hiện đại với máy móc nhập khẩu cao cấp',
    image: 'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwdHJhaW5pbmd8ZW58MXx8fHwxNjM3MzUyODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    schedule: 'Mỗi ngày: 5:00 - 23:00',
    members: 450,
    location: 'Phòng Gym - Tầng 3',
    details: 'Chương trình tập gym cá nhân hóa với PT riêng. Đa dạng các lớp group class: Yoga, Zumba, Boxing.',
    benefits: [
      'Giảm cân hiệu quả',
      'Tăng cơ săn chắc',
      'Cải thiện sức khỏe tổng thể',
      'PT tư vấn chế độ ăn',
    ],
  },
];

export function Sports() {
  const [selectedSport, setSelectedSport] = useState<Sport | null>(null);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Các môn thể thao</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Đa dạng môn thể thao với trang thiết bị hiện đại và đội ngũ HLV chuyên nghiệp
          </p>
        </div>
      </div>

      {/* Sports Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sports.map((sport) => (
            <div
              key={sport.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedSport(sport)}
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  {sport.members} thành viên
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{sport.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{sport.description}</p>

                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>{sport.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>{sport.location}</span>
                  </div>
                </div>

                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-bold">
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedSport && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full my-8 animate-modal-in">
            {/* Modal Header */}
            <div className="relative h-64">
              <ImageWithFallback
                src={selectedSport.image}
                alt={selectedSport.name}
                className="w-full h-full object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedSport(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedSport.name}</h2>
                <p className="text-white/90">{selectedSport.description}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-600 font-bold">Lịch tập</p>
                    <p className="text-sm">{selectedSport.schedule}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-600 font-bold">Thành viên</p>
                    <p className="text-sm">{selectedSport.members} người</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-600 font-bold">Địa điểm</p>
                    <p className="text-sm">{selectedSport.location}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">Giới thiệu</h3>
                <p className="text-gray-700 leading-relaxed">{selectedSport.details}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">Lợi ích</h3>
                <ul className="space-y-2">
                  {selectedSport.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-blue-600 mt-1 font-bold">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold">
                  Đăng ký ngay
                </button>
                <button
                  onClick={() => setSelectedSport(null)}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-bold"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bạn muốn tham gia?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Đăng ký thành viên ngay hôm nay để được tham gia miễn phí buổi tập đầu tiên và nhận ưu đãi đặc biệt
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold">
            Liên hệ đăng ký
          </button>
        </div>
      </div>
    </div>
  );
}