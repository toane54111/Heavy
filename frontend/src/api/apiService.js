import axios from 'axios';

// Đây là nơi bạn sẽ gọi API backend
const API_URL = "http://127.0.0.1:8000"; // URL của FastAPI đang chạy

const apiService = axios.create({
  baseURL: API_URL,
});

// (Sau này, bạn sẽ thêm logic đính kèm JWT token vào đây)
// apiService.interceptors.request.use( ... )

export default apiService;