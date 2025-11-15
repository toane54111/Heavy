import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiService from './api/apiService';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const [backendStatus, setBackendStatus] = useState('Đang kiểm tra...');
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Kiểm tra kết nối backend khi component load (không bắt buộc)
    // Sử dụng timeout để tránh chặn render nếu backend không phản hồi
    let timeoutId;
    let isMounted = true;

    try {
      timeoutId = setTimeout(() => {
        if (isMounted) {
          setBackendStatus('⚠️ Backend chưa kết nối (Frontend vẫn hoạt động)');
          setIsConnected(false);
        }
      }, 2000); // Timeout sau 2 giây

      // Gọi API với timeout ngắn để không chặn render
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 2000);

      apiService.get('/', { 
        timeout: 2000,
        signal: controller.signal 
      })
        .then(response => {
          clearTimeout(timeout);
          if (isMounted && response?.data) {
            clearTimeout(timeoutId);
            setBackendStatus('✅ Đã kết nối: ' + (response.data.message || 'Backend đã sẵn sàng'));
            setIsConnected(true);
          }
        })
        .catch(error => {
          clearTimeout(timeout);
          if (isMounted) {
            clearTimeout(timeoutId);
            // Không hiển thị lỗi, chỉ log để debug
            if (error.code !== 'ERR_CANCELED' && error.code !== 'ECONNABORTED') {
              console.log("Backend chưa sẵn sàng, frontend vẫn hoạt động bình thường");
            }
            setBackendStatus('⚠️ Backend chưa kết nối (Frontend vẫn hoạt động)');
            setIsConnected(false);
          }
        });
    } catch (error) {
      // Bắt mọi lỗi không mong đợi
      console.log("Lỗi khi kiểm tra backend:", error);
      if (isMounted) {
        setBackendStatus('⚠️ Backend chưa kết nối (Frontend vẫn hoạt động)');
        setIsConnected(false);
      }
    }

    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="App min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
        {/* Thông báo trạng thái kết nối backend - có thể ẩn nếu muốn */}
        {!isConnected && (
          <div className="bg-yellow-50 border-yellow-200 border-b px-4 py-2 text-sm text-center animate-fade-in">
            <strong>Trạng thái Backend:</strong> {backendStatus}
          </div>
        )}

        {/* Navigation */}
        <Navbar />
        
        {/* Layout chính */}
        <div className="flex">
          {/* Sidebar */}
          <Sidebar />
          
          {/* Nội dung chính */}
          <main className="flex-1 p-4 md:p-6 fade-in max-w-7xl mx-auto w-full">
            <AppRoutes />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;