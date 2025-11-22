import { Calendar, User, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const news = [
  {
    id: 1,
    title: 'Giải bóng đá CLB lần thứ 10 - Thành công rực rỡ',
    excerpt: 'Giải đấu thu hút hơn 500 vận động viên từ 32 đội tham gia, mang đến những trận cầu đỉnh cao.',
    image: 'https://images.unsplash.com/flagged/photo-1568105631375-d992b82a905b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwbGF5ZXJzJTIwZ2FtZXxlbnwxfHx8fDE3NjM3MzY2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '15/11/2025',
    author: 'Ban tổ chức',
    category: 'Giải đấu',
  },
  {
    id: 2,
    title: 'Khai trương sân bóng rổ mới với trang thiết bị hiện đại',
    excerpt: 'Sân bóng rổ trong nhà rộng 800m² với hệ thống điều hòa và ánh sáng chuyên nghiệp.',
    image: 'https://images.unsplash.com/photo-1705440373795-36ef2a3ff1d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnQlMjBwbGF5ZXJzfGVufDF8fHx8MTc2MzcyMjA0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    date: '10/11/2025',
    author: 'Nguyễn Văn A',
    category: 'Cơ sở vật chất',
  },
  {
    id: 3,
    title: 'Lớp bơi miễn phí cho trẻ em dịp hè 2025',
    excerpt: 'Chương trình dạy bơi miễn phí cho 200 trẻ em có hoàn cảnh khó khăn trong tháng 6-7.',
    image: 'https://images.unsplash.com/photo-1490084993229-bd7bd7959894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjBzcG9ydHxlbnwxfHx8fDE3NjM3MzY2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '05/11/2025',
    author: 'Trần Thị B',
    category: 'Hoạt động cộng đồng',
  },
  {
    id: 4,
    title: 'Thành viên CLB đạt huy chương vàng SEA Games',
    excerpt: 'Vận động viên Lê Văn C giành HCV 100m tự do tại SEA Games 32, mang về vinh quang cho CLB.',
    image: 'https://images.unsplash.com/photo-1691675996849-78a298efe96a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwdHJhY2slMjBhdGhsZXRlfGVufDF8fHx8MTc2MzY3MDM5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    date: '01/11/2025',
    author: 'Ban biên tập',
    category: 'Thành tích',
  },
  {
    id: 5,
    title: 'Hội thảo dinh dưỡng thể thao cùng chuyên gia',
    excerpt: 'Buổi hội thảo với sự tham gia của Tiến sĩ Dinh dưỡng nổi tiếng, hướng dẫn chế độ ăn khoa học.',
    image: 'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwdHJhaW5pbmd8ZW58MXx8fHwxNjM3MzUyODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '28/10/2025',
    author: 'Phạm Văn D',
    category: 'Sự kiện',
  },
  {
    id: 6,
    title: 'Giải Tennis mở rộng - Chào mừng năm mới 2025',
    excerpt: 'Giải đấu quy tụ hơn 100 tay vợt xuất sắc, tổng giá trị giải thưởng lên đến 500 triệu đồng.',
    image: 'https://images.unsplash.com/photo-1761927055601-7ad2decee719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBtYXRjaCUyMGNvdXJ0fGVufDF8fHx8MTc2MzczNjY3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    date: '20/10/2025',
    author: 'Ban tổ chức',
    category: 'Giải đấu',
  },
];

export function News() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tin tức & Sự kiện</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Cập nhật thông tin mới nhất về các hoạt động, giải đấu và thành tích của CLB
          </p>
        </div>
      </div>

      {/* Marquee Text - CHẠY LIÊN TỤC */}
      <div className="bg-blue-600 text-white py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap inline-block">
          <span className="mx-8">🏆 Chúc mừng VĐV Lê Văn C giành HCV SEA Games 32</span>
          <span className="mx-8">🎉 Khai trương sân bóng rổ mới - Ưu đãi 30% tháng đầu</span>
          <span className="mx-8">📅 Giải Tennis mở rộng - Đăng ký trước 30/11</span>
          <span className="mx-8">🌟 Tuyển sinh lớp bơi hè miễn phí cho trẻ em</span>
          <span className="mx-8">🏃 Chương trình chạy bộ cộng đồng mỗi Chủ nhật</span>
          <span className="mx-8">🏆 Chúc mừng VĐV Lê Văn C giành HCV SEA Games 32</span>
          <span className="mx-8">🎉 Khai trương sân bóng rổ mới - Ưu đãi 30% tháng đầu</span>
        </div>
      </div>

      {/* Featured News */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Tin nổi bật</h2>
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
            <ImageWithFallback
              src={news[0].image}
              alt={news[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
              <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs mb-3 w-fit font-bold">
                {news[0].category}
              </span>
              <h2 className="text-2xl font-bold text-white mb-3">{news[0].title}</h2>
              <p className="text-gray-200 text-sm mb-4">{news[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{news[0].date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{news[0].author}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
            <ImageWithFallback
              src={news[1].image}
              alt={news[1].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
              <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs mb-3 w-fit font-bold">
                {news[1].category}
              </span>
              <h2 className="text-2xl font-bold text-white mb-3">{news[1].title}</h2>
              <p className="text-gray-200 text-sm mb-4">{news[1].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{news[1].date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{news[1].author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News List */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Tin tức khác</h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.slice(2).map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-48 h-48 flex-shrink-0 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-bold mb-2 line-clamp-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.excerpt}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{item.author}</span>
                        </div>
                      </div>

                      <button className="flex items-center gap-1 text-blue-600 hover:gap-2 transition-all text-sm font-bold">
                        Đọc thêm
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold">
            Xem thêm tin tức
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Đăng ký nhận tin</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Nhận thông tin mới nhất về các sự kiện, giải đấu và ưu đãi đặc biệt qua email
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 outline-none"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap font-bold">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
