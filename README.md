# Hướng Dẫn Chạy Chương Trình Student Tracker

Đây là ứng dụng quản lý học tập với backend FastAPI và frontend React.

## 📋 Yêu Cầu Hệ Thống

### Backend
- Python 3.8 trở lên
- pip (Python package manager)
- PostgreSQL (tùy chọn, có thể dùng SQLite cho development)

### Frontend
- Node.js 16.x trở lên
- npm hoặc yarn

## 🚀 Cài Đặt và Chạy Chương Trình

### Bước 1: Cài Đặt Backend

1. Di chuyển vào thư mục backend:
```bash
cd backend
```

2. Tạo môi trường ảo Python (khuyến nghị):
```bash
# Trên Windows
python -m venv venv
venv\Scripts\activate

# Trên Mac/Linux
python3 -m venv venv
source venv/bin/activate
```

3. Cài đặt các dependencies:
```bash
pip install -r requirements.txt
```

4. Chạy backend server:
```bash
# Di chuyển vào thư mục app
cd app

# Chạy với uvicorn
uvicorn main:app --reload --port 8000

# Hoặc nếu bạn ở thư mục backend/app, có thể chạy:
# python -m uvicorn main:app --reload --port 8000
```

Backend sẽ chạy tại: `http://localhost:8000`

Bạn có thể kiểm tra API documentation tại: `http://localhost:8000/docs`

### Bước 2: Cài Đặt Frontend

1. Mở terminal mới và di chuyển vào thư mục frontend:
```bash
cd frontend
```

2. Cài đặt các dependencies:
```bash
npm install
```

3. Chạy frontend development server:
```bash
npm run dev
```

Frontend sẽ chạy tại: `http://localhost:5173` (hoặc cổng khác nếu 5173 đã được sử dụng)

## 📝 Cách Sử Dụng Tính Năng Nhập Môn Học

### Tính Năng Mới: Nhập Tự Do Môn Học

Bây giờ bạn có thể **chủ động nhập tên môn học** theo cách bạn muốn:

1. Vào trang **Schedule** (Thời Khóa Biểu)
2. Click nút **"Thêm Tiết Học"**
3. Trong trường **"Môn học"**:
   - Bạn có thể **nhập tự do** bất kỳ tên môn học nào (ví dụ: "Toán Học", "Vật Lý 12", "Lập Trình Python", v.v.)
   - Hoặc **chọn từ danh sách gợi ý** bằng cách click vào dropdown khi đang nhập
4. Điền thông tin còn lại (Giáo viên, Phòng học, Thời gian, v.v.)
5. Click **"Thêm vào thời khóa biểu"**

### Danh Sách Môn Học Gợi Ý

Hệ thống có sẵn danh sách gợi ý các môn học phổ biến:
- Toán
- Vật Lý
- Hóa Học
- Ngữ Văn
- Lịch Sử
- Địa Lý
- Tiếng Anh
- Tin Học
- GDCD
- Thể Dục
- Âm Nhạc
- Mỹ Thuật

Tuy nhiên, bạn hoàn toàn có thể nhập bất kỳ tên môn học nào khác mà bạn muốn!

## 🔧 Cấu Hình

### Cấu Hình Backend

Nếu bạn cần thay đổi cổng backend, sửa file `backend/app/main.py`:

```python
# Thay đổi cổng trong lệnh chạy:
uvicorn main:app --reload --port 8000  # Thay 8000 bằng cổng bạn muốn
```

### Cấu Hình Frontend API

Kiểm tra file `frontend/src/api/timetableApi.js` để đảm bảo API URL đúng với backend của bạn.

Mặc định, frontend sẽ gọi API tại: `/api/timetable`

Nếu backend chạy ở cổng khác hoặc domain khác, bạn có thể cần cấu hình proxy trong `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
})
```

## 🐛 Xử Lý Lỗi Thường Gặp

### Backend không chạy được

1. Kiểm tra Python version: `python --version` (cần 3.8+)
2. Đảm bảo đã kích hoạt virtual environment
3. Kiểm tra xem tất cả packages đã được cài đặt: `pip list`

### Frontend không kết nối được với Backend

1. Đảm bảo backend đang chạy tại `http://localhost:8000`
2. Kiểm tra CORS settings trong `backend/app/main.py`
3. Kiểm tra console trong browser để xem lỗi cụ thể

### Lỗi khi cài đặt npm packages

```bash
# Xóa node_modules và cài lại
rm -rf node_modules package-lock.json
npm install
```

Trên Windows:
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

## 📁 Cấu Trúc Dự Án

```
heavy/
├── backend/              # Backend FastAPI
│   ├── app/
│   │   ├── main.py      # Entry point
│   │   ├── core/        # Configurations
│   │   ├── db/          # Database models
│   │   ├── routers/     # API routes
│   │   └── schemas/     # Pydantic schemas
│   └── requirements.txt
├── frontend/            # Frontend React
│   ├── src/
│   │   ├── pages/      # React pages (Schedule.jsx, etc.)
│   │   ├── api/        # API services
│   │   ├── components/ # React components
│   │   └── ...
│   └── package.json
└── README.md
```

## 🎯 Các Tính Năng Chính

- ✅ Quản lý thời khóa biểu với calendar view
- ✅ **Nhập tự do tên môn học** (tính năng mới)
- ✅ Thêm, sửa, xóa tiết học
- ✅ Theo dõi thống kê học tập
- ✅ Quản lý thói quen học tập

## 💡 Mẹo Sử Dụng

- Sử dụng view **Tuần** để xem lịch học chi tiết
- Click vào một khoảng thời gian trống trên calendar để thêm tiết học nhanh
- Click vào tiết học đã có để xóa
- Bạn có thể tùy chỉnh màu sắc cho từng môn học để dễ phân biệt

## 📞 Hỗ Trợ

Nếu gặp vấn đề, vui lòng kiểm tra:
1. Console trong browser (F12)
2. Terminal logs của backend
3. Đảm bảo tất cả dependencies đã được cài đặt đầy đủ

---

Chúc bạn sử dụng ứng dụng hiệu quả! 🎓

