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
    // Kiểm tra kết nối backend khi component load
    apiService.get('/')
      .then(response => {
        setBackendStatus('✅ Đã kết nối: ' + response.data.message);
        setIsConnected(true);
      })
      .catch(error => {
        console.error("Lỗi khi gọi API!", error);
        setBackendStatus('❌ Không thể kết nối tới backend. Vui lòng kiểm tra backend có đang chạy không.');
        setIsConnected(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App min-h-screen bg-gray-50">
        {/* Thông báo trạng thái kết nối backend */}
        <div className={`${isConnected ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} border-b px-4 py-2 text-sm text-center`}>
          <strong>Trạng thái Backend:</strong> {backendStatus}
        </div>

        {/* Navigation */}
        <Navbar />
        
        {/* Layout chính */}
        <div className="flex">
          {/* Sidebar */}
          <Sidebar />
          
          {/* Nội dung chính */}
          <main className="flex-1 p-6">
            <AppRoutes />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;