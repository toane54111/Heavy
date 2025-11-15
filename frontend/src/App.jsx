import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiService from './api/apiService';
import AppRoutes from './routes/AppRoutes';
import Navbar from './componets/Navbar';
import Sidebar from './componets/Sidebar';
import './App.css';

function App() {
  const [backendStatus, setBackendStatus] = useState('Đang kiểm tra...');
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Kiểm tra kết nối backend khi component load (không bắt buộc)
    apiService.get('/')
      .then(response => {
        setBackendStatus('✅ Đã kết nối: ' + response.data.message);
        setIsConnected(true);
      })
      .catch(error => {
        // Không hiển thị lỗi, chỉ log để debug
        console.log("Backend chưa sẵn sàng, frontend vẫn hoạt động bình thường");
        setBackendStatus('⚠️ Backend chưa kết nối (Frontend vẫn hoạt động)');
        setIsConnected(false);
      });
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