import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  age: string;
  sport: string;
  experience: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  age?: string;
  sport?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    age: '',
    sport: '',
    experience: 'beginner',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ tên';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Họ tên phải có ít nhất 2 ký tự';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    // Validate phone
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Số điện thoại phải có 10-11 chữ số';
    }

    // Validate age
    const ageNum = parseInt(formData.age);
    if (!formData.age) {
      newErrors.age = 'Vui lòng nhập tuổi';
    } else if (isNaN(ageNum) || ageNum < 6 || ageNum > 100) {
      newErrors.age = 'Tuổi phải từ 6 đến 100';
    }

    // Validate sport
    if (!formData.sport) {
      newErrors.sport = 'Vui lòng chọn môn thể thao';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid - simulate submission
      console.log('Form submitted:', formData);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          age: '',
          sport: '',
          experience: 'beginner',
          message: '',
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Liên hệ & Đăng ký</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Hãy để lại thông tin để chúng tôi tư vấn chi tiết về các gói tập và chương trình phù hợp
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-full mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">Địa chỉ</h3>
            <p className="text-gray-600 text-sm">123 Đường Thể Thao, Quận 1, TP.HCM</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-full mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">Điện thoại</h3>
            <p className="text-gray-600 text-sm">0123 456 789</p>
            <p className="text-gray-600 text-sm">0987 654 321</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-full mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-gray-600 text-sm">info@clbtheathao.vn</p>
            <p className="text-gray-600 text-sm">support@clbtheathao.vn</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-full mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">Giờ làm việc</h3>
            <p className="text-gray-600 text-sm">T2 - T6: 6:00 - 22:00</p>
            <p className="text-gray-600 text-sm">T7 - CN: 7:00 - 21:00</p>
          </div>
        </div>

        {/* Registration Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-2">Đăng ký thành viên</h2>
            <p className="text-gray-600 mb-6">
              Điền thông tin dưới đây để đăng ký thành viên hoặc tư vấn chi tiết
            </p>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-green-800 font-bold mb-2">Đăng ký thành công!</h3>
                <p className="text-green-700 text-sm">
                  Cảm ơn bạn đã đăng ký. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg outline-none transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="Nhập họ và tên của bạn"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1 font-bold">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg outline-none transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 font-bold">{errors.email}</p>
                  )}
                </div>

                {/* Phone & Age */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold mb-2">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg outline-none transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="0123456789"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1 font-bold">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="age" className="block text-sm font-bold mb-2">
                      Tuổi <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg outline-none transition-colors ${
                        errors.age ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="18"
                      min="6"
                      max="100"
                    />
                    {errors.age && (
                      <p className="text-red-500 text-xs mt-1 font-bold">{errors.age}</p>
                    )}
                  </div>
                </div>

                {/* Sport */}
                <div>
                  <label htmlFor="sport" className="block text-sm font-bold mb-2">
                    Môn thể thao quan tâm <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="sport"
                    name="sport"
                    value={formData.sport}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg outline-none transition-colors ${
                      errors.sport ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                  >
                    <option value="">Chọn môn thể thao</option>
                    <option value="football">Bóng đá</option>
                    <option value="basketball">Bóng rổ</option>
                    <option value="tennis">Quần vợt</option>
                    <option value="swimming">Bơi lội</option>
                    <option value="volleyball">Bóng chuyền</option>
                    <option value="fitness">Fitness & Gym</option>
                  </select>
                  {errors.sport && (
                    <p className="text-red-500 text-xs mt-1 font-bold">{errors.sport}</p>
                  )}
                </div>

                {/* Experience */}
                <div>
                  <label htmlFor="experience" className="block text-sm font-bold mb-2">
                    Trình độ
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="beginner">Người mới bắt đầu</option>
                    <option value="intermediate">Trung bình</option>
                    <option value="advanced">Nâng cao</option>
                    <option value="professional">Chuyên nghiệp</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2">
                    Lời nhắn (không bắt buộc)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Nhập câu hỏi hoặc yêu cầu của bạn..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold"
                >
                  Đăng ký ngay
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Bằng cách đăng ký, bạn đồng ý với{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                    Điều khoản sử dụng
                  </a>{' '}
                  và{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                    Chính sách bảo mật
                  </a>
                </p>
              </form>
            )}
          </div>

          {/* Map & Info */}
          <div className="space-y-8">
            {/* Google Map */}
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <h3 className="font-bold mb-4">Vị trí câu lạc bộ</h3>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4946814857487!2d106.69750731533477!3d10.776620192319954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc3%3A0xf45c5d34ac580517!2zTmjDoCBIw6F0IE9wZXJhIFPDoGkgR8Oybg!5e0!3m2!1svi!2s!4v1647856789012!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="CLB Location"
                />
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-xl text-white">
              <h3 className="font-bold mb-6">Ưu đãi thành viên mới</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Giảm 30% phí đăng ký tháng đầu tiên</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Tặng 1 buổi PT cá nhân miễn phí</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Tư vấn chế độ dinh dưỡng chuyên nghiệp</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Tặng bộ quà tập luyện CLB trị giá 500k</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Miễn phí tham gia các sự kiện và giải đấu nội bộ</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-white/30">
                <p className="text-sm text-blue-100">
                  🎉 Ưu đãi áp dụng cho 100 khách hàng đăng ký đầu tiên trong tháng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
