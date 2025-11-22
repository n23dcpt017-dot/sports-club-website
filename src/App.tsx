import { useState } from 'react';
import { Home } from './components/Home';
import { About } from './components/About';
import { Sports } from './components/Sports';
import { News } from './components/News';
import { Contact } from './components/Contact';
import { Menu, X } from 'lucide-react';

type Page = 'home' | 'about' | 'sports' | 'news' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Giới thiệu' },
    { id: 'sports', label: 'Môn thể thao' },
    { id: 'news', label: 'Tin tức' },
    { id: 'contact', label: 'Liên hệ' },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'sports':
        return <Sports />;
      case 'news':
        return <News />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-900 text-xl">⚽</span>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-wide">Câu Lạc Bộ Thể Thao</h1>
                <p className="text-xs text-blue-200">Nơi đam mê thể thao hội tụ</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id as Page)}
                  className={`px-5 py-2 rounded-lg transition-all duration-300 font-medium ${
                    currentPage === item.id
                      ? 'bg-white text-blue-900 shadow-md'
                      : 'hover:bg-blue-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id as Page);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-all font-medium ${
                    currentPage === item.id
                      ? 'bg-white text-blue-900'
                      : 'hover:bg-blue-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{renderPage()}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Câu Lạc Bộ Thể Thao</h3>
              <p className="text-gray-400 text-sm">
                Nơi hội tụ đam mê thể thao, rèn luyện sức khỏe và kết nối cộng đồng.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Liên hệ</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>📍 123 Đường Thể Thao, Quận 1, TP.HCM</li>
                <li>📞 0123 456 789</li>
                <li>✉️ info@clbtheathao.vn</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Giờ hoạt động</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Thứ 2 - Thứ 6: 6:00 - 22:00</li>
                <li>Thứ 7 - Chủ nhật: 7:00 - 21:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Câu Lạc Bộ Thể Thao. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
