import { useState, useEffect } from 'react'
import apiService from './api/apiService' // Import file ta vừa tạo

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    // Thử gọi API backend khi component load
    apiService.get('/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error("Lỗi khi gọi API!", error);
        setMessage("Lỗi: Không thể kết nối tới backend.");
      });
  }, []);

  return (
    <div className="App">
      <h1>Student Tracker Hackathon</h1>
      <h2>Trạng thái kết nối Backend:</h2>
      <p><strong>{message}</strong></p>
    </div>
  )
}

export default App