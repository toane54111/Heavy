# 📚 GIẢI THÍCH ĐỒ ÁN: STUDENT TRACKER

## 🎯 TỔNG QUAN DỰ ÁN

**Student Tracker** là một ứng dụng web quản lý học tập toàn diện, được xây dựng để giúp học sinh/sinh viên:
- Quản lý thời khóa biểu cá nhân
- Theo dõi thói quen học tập
- Lập kế hoạch học tập
- Nhận tư vấn từ AI
- Theo dõi tiến độ và tích lũy điểm XP

---

## 🏗️ KIẾN TRÚC HỆ THỐNG

### **Mô hình Client-Server (Frontend-Backend)**

```
┌─────────────────┐         HTTP/REST API         ┌─────────────────┐
│                 │  <──────────────────────────>  │                 │
│   FRONTEND      │                                │    BACKEND      │
│   (React)       │                                │   (FastAPI)     │
│   Port: 5173    │                                │   Port: 8000    │
│                 │                                │                 │
└─────────────────┘                                └─────────────────┘
                                                           │
                                                           │
                                                           ▼
                                                  ┌─────────────────┐
                                                  │   DATABASE      │
                                                  │   (PostgreSQL/  │
                                                  │    SQLite)      │
                                                  └─────────────────┘
```

### **Frontend (React + Vite)**
- **Công nghệ**: React 18, React Router DOM, TailwindCSS
- **Công cụ**: Vite (build tool nhanh), Axios (HTTP client)
- **UI Libraries**: 
  - react-big-calendar (hiển thị lịch)
  - lucide-react (icons)
  - moment.js (xử lý ngày tháng)

### **Backend (FastAPI)**
- **Framework**: FastAPI (Python web framework hiện đại, nhanh)
- **Database**: SQLAlchemy (ORM) với PostgreSQL/SQLite
- **API**: RESTful API với auto-documentation (Swagger UI)
- **Security**: CORS middleware, JWT (đã chuẩn bị)

---

## 📂 CẤU TRÚC DỰ ÁN

```
heavy/
├── backend/                          # Backend Python
│   ├── app/
│   │   ├── main.py                  # Entry point - FastAPI app
│   │   ├── core/
│   │   │   └── config.py            # Cấu hình (database, env)
│   │   ├── db/
│   │   │   ├── database.py          # Kết nối database
│   │   │   └── models.py            # SQLAlchemy models
│   │   ├── routers/                 # API routes
│   │   │   └── (auth, timetable...) # Các endpoint API
│   │   └── schemas/                 # Pydantic schemas (validation)
│   └── requirements.txt             # Python dependencies
│
└── frontend/                         # Frontend React
    ├── src/
    │   ├── pages/                   # Các trang chính
    │   │   ├── Dashboard.jsx        # Trang chủ
    │   │   ├── Schedule.jsx         # Thời khóa biểu ⭐
    │   │   ├── HabitTracker.jsx     # Theo dõi thói quen
    │   │   ├── StudyPlan.jsx        # Kế hoạch học tập
    │   │   ├── AIQuestionnaire.jsx  # Tư vấn AI
    │   │   ├── Login.jsx            # Đăng nhập
    │   │   └── Register.jsx         # Đăng ký
    │   │
    │   ├── componets/               # Components tái sử dụng
    │   │   ├── Navbar.jsx           # Thanh điều hướng trên
    │   │   ├── Sidebar.jsx          # Menu bên trái
    │   │   ├── Calendar.jsx         # Component lịch
    │   │   ├── HabitCard.jsx        # Card thói quen
    │   │   └── ...
    │   │
    │   ├── api/                     # API services
    │   │   ├── apiService.js        # Base axios instance
    │   │   ├── timetableApi.js      # API thời khóa biểu
    │   │   ├── habitApi.js          # API thói quen
    │   │   └── userApi.js           # API người dùng
    │   │
    │   ├── context/                 # React Context (state management)
    │   │   ├── HabitContext.jsx     # Global state thói quen
    │   │   └── UserContext.jsx      # Global state user
    │   │
    │   ├── hooks/                   # Custom React hooks
    │   │   ├── useHabit.js          # Logic thói quen
    │   │   └── useSchedule.js       # Logic lịch học
    │   │
    │   ├── utils/                   # Utilities functions
    │   │   ├── calculateXP.js       # Tính điểm XP
    │   │   └── formatDate.js        # Format ngày tháng
    │   │
    │   ├── routes/                  # Routing
    │   │   └── AppRoutes.jsx        # Định nghĩa routes
    │   │
    │   ├── App.jsx                  # Root component
    │   └── main.jsx                 # Entry point React
    │
    ├── package.json                 # Dependencies
    └── vite.config.js               # Vite configuration
```

---

## 🔑 CÁC TÍNH NĂNG CHÍNH

### 1. **Dashboard (Trang Chủ)**
- Hiển thị tổng quan thống kê:
  - Số tiết học trong tuần
  - Số thói quen đang theo dõi
  - Số kế hoạch học tập
  - Tổng điểm XP
- Quick actions: Nút nhanh để truy cập các tính năng khác

### 2. **Schedule (Thời Khóa Biểu)** ⭐ **TÍNH NĂNG CHÍNH**
- **Hiển thị**: Calendar với 3 views (Tháng/Tuần/Ngày)
- **Thêm tiết học**:
  - Click vào khoảng thời gian trống → Mở modal thêm tiết
  - **Nhập tự do tên môn học** (có thể nhập bất kỳ, không bị giới hạn)
  - Gợi ý danh sách môn học phổ biến
  - Điền thông tin: Giáo viên, Phòng học, Mô tả, Màu sắc
  - Chọn thời gian bắt đầu/kết thúc
- **Xóa tiết học**: Click vào tiết học → Xác nhận xóa
- **Thống kê**: Hiển thị số môn học, tiết học, giáo viên, phòng học

### 3. **Habit Tracker (Theo Dõi Thói Quen)**
- Tạo và theo dõi thói quen học tập hàng ngày
- Đánh dấu hoàn thành thói quen
- Thống kê tiến độ (progress bar)

### 4. **Study Plan (Kế Hoạch Học Tập)**
- Lập kế hoạch học tập dài hạn
- Theo dõi tiến độ từng mục tiêu

### 5. **AI Questionnaire (Tư Vấn AI)**
- Trả lời câu hỏi → AI đưa ra lời khuyên học tập cá nhân hóa

### 6. **Authentication (Xác Thực)**
- Đăng ký tài khoản mới
- Đăng nhập/Đăng xuất
- JWT token authentication (đã chuẩn bị)

---

## 🔄 LUỒNG HOẠT ĐỘNG

### **Luồng Thêm Tiết Học:**

```
1. User vào trang Schedule
   ↓
2. Click vào khoảng thời gian trống trên calendar
   ↓
3. Modal "Thêm Tiết Học" hiện lên
   ↓
4. User nhập thông tin:
   - Môn học (có thể nhập tự do hoặc chọn từ gợi ý)
   - Giáo viên
   - Phòng học
   - Thời gian
   - Màu sắc
   ↓
5. Click "Thêm vào thời khóa biểu"
   ↓
6. Frontend gọi API: POST /api/timetable/
   ↓
7. Backend lưu vào database
   ↓
8. Trả về dữ liệu đã lưu
   ↓
9. Frontend cập nhật calendar ngay lập tức
```

### **Luồng Tải Dữ Liệu:**

```
1. User vào trang Schedule
   ↓
2. Component Schedule.jsx mount
   ↓
3. useEffect() trigger → gọi loadTimetable()
   ↓
4. Frontend gọi API: GET /api/timetable/
   ↓
5. Backend query database → trả về danh sách tiết học
   ↓
6. Frontend format dữ liệu và hiển thị lên calendar
```

---

## 💾 CẤU TRÚC DATABASE (Dự Kiến)

```sql
-- Bảng User (Người dùng)
Users
├── id (PK)
├── email (unique)
├── password (hashed)
├── name
└── created_at

-- Bảng Timetable (Thời khóa biểu)
Timetable
├── id (PK)
├── user_id (FK -> Users)
├── subject (Tên môn học)
├── teacher (Giáo viên)
├── room (Phòng học)
├── description
├── start_time (DateTime)
├── end_time (DateTime)
├── color (Hex color)
└── created_at

-- Bảng Habit (Thói quen)
Habits
├── id (PK)
├── user_id (FK -> Users)
├── name (Tên thói quen)
├── description
├── frequency (Hàng ngày/Tuần...)
└── created_at

-- Bảng HabitCompletion (Hoàn thành thói quen)
HabitCompletions
├── id (PK)
├── habit_id (FK -> Habits)
├── date (Ngày hoàn thành)
└── completed (Boolean)
```

---

## 🛠️ CÔNG NGHỆ SỬ DỤNG

### **Frontend Stack:**
| Công nghệ | Mục đích |
|-----------|----------|
| **React 18** | UI framework, component-based |
| **React Router DOM** | Client-side routing |
| **Vite** | Build tool nhanh, HMR |
| **TailwindCSS** | Utility-first CSS framework |
| **Axios** | HTTP client để gọi API |
| **react-big-calendar** | Component hiển thị lịch |
| **moment.js** | Xử lý và format ngày tháng |
| **lucide-react** | Icon library |

### **Backend Stack:**
| Công nghệ | Mục đích |
|-----------|----------|
| **FastAPI** | Python web framework (nhanh, hiện đại) |
| **SQLAlchemy** | ORM để làm việc với database |
| **Pydantic** | Data validation và serialization |
| **PostgreSQL** | Database (hoặc SQLite cho dev) |
| **Alembic** | Database migration tool |
| **Uvicorn** | ASGI server để chạy FastAPI |
| **python-dotenv** | Quản lý biến môi trường |

---

## 🔌 API ENDPOINTS (Dự Kiến)

### **Timetable API:**
```
GET    /api/timetable/              # Lấy tất cả tiết học
POST   /api/timetable/              # Thêm tiết học mới
GET    /api/timetable/{id}          # Lấy tiết học theo ID
PUT    /api/timetable/{id}          # Cập nhật tiết học
DELETE /api/timetable/{id}          # Xóa tiết học
GET    /api/timetable/range?start={}&end={}  # Lấy theo khoảng thời gian
```

### **Auth API:**
```
POST   /api/auth/register           # Đăng ký
POST   /api/auth/login              # Đăng nhập
POST   /api/auth/logout             # Đăng xuất
GET    /api/auth/me                 # Lấy thông tin user hiện tại
```

### **Habit API:**
```
GET    /api/habits/                 # Lấy tất cả thói quen
POST   /api/habits/                 # Tạo thói quen mới
PUT    /api/habits/{id}             # Cập nhật thói quen
DELETE /api/habits/{id}             # Xóa thói quen
POST   /api/habits/{id}/complete    # Đánh dấu hoàn thành
```

---

## 🎨 UI/UX DESIGN

### **Màu sắc chủ đạo:**
- **Primary**: Blue (#3b82f6) - Màu chính
- **Success**: Green (#10b981) - Thành công
- **Warning**: Orange (#f59e0b) - Cảnh báo
- **Danger**: Red (#ef4444) - Lỗi/Xóa

### **Layout:**
- **Top**: Navbar với logo và nút đăng nhập
- **Left**: Sidebar với menu điều hướng (responsive)
- **Center**: Main content area (trang hiện tại)
- **Status bar**: Hiển thị trạng thái kết nối backend (màu xanh/đỏ)

---

## 🚀 CÁCH CHẠY DỰ ÁN

### **Bước 1: Backend**
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
cd app
uvicorn main:app --reload --port 8000
```

### **Bước 2: Frontend**
```bash
cd frontend
npm install
npm run dev
```

### **Truy cập:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs

---

## ⚡ ĐIỂM NỔI BẬT CỦA DỰ ÁN

1. **Nhập tự do môn học**: Không bị giới hạn bởi danh sách có sẵn
2. **Calendar trực quan**: Dễ dàng xem và quản lý lịch học
3. **Responsive design**: Hoạt động tốt trên mobile và desktop
4. **Modern tech stack**: Sử dụng công nghệ mới nhất
5. **Modular architecture**: Code dễ bảo trì và mở rộng
6. **Real-time status**: Hiển thị trạng thái kết nối backend

---

## 📊 HIỆN TRẠNG DỰ ÁN

### ✅ **Đã hoàn thành:**
- [x] Cấu trúc dự án cơ bản
- [x] Frontend routing và navigation
- [x] Trang Schedule với calendar
- [x] Tính năng nhập tự do môn học
- [x] UI components (Navbar, Sidebar, Dashboard)
- [x] API services structure
- [x] Backend FastAPI setup
- [x] CORS configuration

### 🔄 **Đang phát triển:**
- [ ] Backend API endpoints đầy đủ
- [ ] Database models và migrations
- [ ] Authentication system
- [ ] Habit tracker logic
- [ ] Study plan features
- [ ] AI integration

### 📝 **Cần cải thiện:**
- [ ] Thêm error handling đầy đủ
- [ ] Validation form tốt hơn
- [ ] Loading states
- [ ] Toast notifications
- [ ] Unit tests
- [ ] E2E tests

---

## 🎓 KẾT LUẬN

**Student Tracker** là một dự án học tập toàn diện, giúp học sinh/sinh viên:
- **Quản lý thời gian** hiệu quả với thời khóa biểu cá nhân
- **Xây dựng thói quen** học tập tốt
- **Theo dõi tiến độ** và động lực học tập
- **Nhận tư vấn** cá nhân hóa từ AI

Dự án sử dụng **kiến trúc hiện đại**, **công nghệ mới nhất**, và **best practices** trong phát triển web application.

---

**Tác giả**: [Tên nhóm/Tác giả]
**Ngày**: 2024
**Phiên bản**: 0.0.1

