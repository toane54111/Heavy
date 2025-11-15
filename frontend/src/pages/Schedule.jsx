import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Plus, BookOpen, Clock, Users, MapPin } from 'lucide-react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { timetableApi } from '../api/timetableApi';

const localizer = momentLocalizer(moment);

const Schedule = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: '',
    subject: '',
    teacher: '',
    room: '',
    description: '',
    start: new Date(),
    end: new Date(),
    color: '#3b82f6'
  });

  const subjects = [
    'Toán',
    'Vật Lý', 
    'Hóa Học',
    'Ngữ Văn',
    'Lịch Sử',
    'Địa Lý',
    'Tiếng Anh',
    'Tin Học',
    'GDCD',
    'Thể Dục',
    'Âm Nhạc',
    'Mỹ Thuật'
  ];

  const colors = [
    '#3b82f6', '#ef4444', '#10b981', '#f59e0b',
    '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'
  ];

  useEffect(() => {
    loadTimetable();
  }, []);

  const loadTimetable = async () => {
    try {
      const timetableData = await timetableApi.getTimetable();
      const formattedEvents = timetableData.map(item => ({
        ...item,
        start: new Date(item.start),
        end: new Date(item.end),
        title: `${item.subject} - ${item.teacher || 'Chưa có GV'}`
      }));
      setEvents(formattedEvents);
    } catch (error) {
      console.error('Error loading timetable:', error);
    }
  };

  const handleSelectSlot = ({ start, end }) => {
    setSelectedSlot({ start, end });
    setNewEvent({
      ...newEvent,
      start: start,
      end: end
    });
    setShowModal(true);
  };

  const handleAddEvent = async () => {
    if (!newEvent.subject) {
      alert('Vui lòng chọn môn học');
      return;
    }

    try {
      const eventData = {
        ...newEvent,
        title: `${newEvent.subject} - ${newEvent.teacher || 'Chưa có GV'}`
      };

      const savedEvent = await timetableApi.addEvent(eventData);
      
      setEvents([...events, {
        ...savedEvent,
        start: new Date(savedEvent.start),
        end: new Date(savedEvent.end)
      }]);
      
      setShowModal(false);
      resetNewEvent();
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Có lỗi xảy ra khi thêm sự kiện');
    }
  };

  const handleDeleteEvent = async (event) => {
    if (window.confirm('Bạn có chắc muốn xóa tiết học này?')) {
      try {
        await timetableApi.deleteEvent(event.id);
        setEvents(events.filter(e => e.id !== event.id));
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  const resetNewEvent = () => {
    setNewEvent({
      title: '',
      subject: '',
      teacher: '',
      room: '',
      description: '',
      start: new Date(),
      end: new Date(),
      color: '#3b82f6'
    });
  };

  const eventStyleGetter = (event) => {
    return {
      style: {
        backgroundColor: event.color,
        borderRadius: '8px',
        opacity: 0.9,
        color: 'white',
        border: 'none',
        fontSize: '0.875rem',
        padding: '2px 6px'
      }
    };
  };

  const formatTime = (date) => {
    return moment(date).format('HH:mm');
  };

  const formatDate = (date) => {
    return moment(date).format('DD/MM/YYYY');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Thời Khóa Biểu</h1>
          <p className="text-gray-600">Quản lý lịch học và thời khóa biểu cá nhân</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Thêm Tiết Học</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Tổng môn học</p>
              <p className="text-2xl font-bold text-gray-900">
                {[...new Set(events.map(event => event.subject))].length}
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Tiết học/tuần</p>
              <p className="text-2xl font-bold text-gray-900">{events.length}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Giáo viên</p>
              <p className="text-2xl font-bold text-gray-900">
                {[...new Set(events.map(event => event.teacher))].length}
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <MapPin className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Phòng học</p>
              <p className="text-2xl font-bold text-gray-900">
                {[...new Set(events.map(event => event.room))].length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="card">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleDeleteEvent}
          selectable
          views={['month', 'week', 'day']}
          defaultView="week"
          min={new Date(2024, 0, 1, 6, 0, 0)}
          max={new Date(2024, 0, 1, 22, 0, 0)}
          eventPropGetter={eventStyleGetter}
          messages={{
            next: "Tiếp",
            previous: "Trước",
            today: "Hôm nay",
            month: "Tháng",
            week: "Tuần",
            day: "Ngày",
            agenda: "Lịch trình",
            date: "Ngày",
            time: "Thời gian",
            event: "Sự kiện",
            noEventsInRange: "Không có tiết học nào trong khoảng thời gian này."
          }}
        />
      </div>

      {/* Add Event Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Thêm Tiết Học Mới</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Môn học *
                  </label>
                  <input
                    type="text"
                    list="subjects-list"
                    value={newEvent.subject}
                    onChange={(e) => setNewEvent({...newEvent, subject: e.target.value})}
                    className="input-field"
                    placeholder="Nhập tên môn học hoặc chọn từ danh sách"
                    required
                  />
                  <datalist id="subjects-list">
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject} />
                    ))}
                  </datalist>
                  <p className="text-xs text-gray-500 mt-1">
                    💡 Bạn có thể nhập tên môn học tự do hoặc chọn từ danh sách gợi ý
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Giáo viên
                  </label>
                  <input
                    type="text"
                    value={newEvent.teacher}
                    onChange={(e) => setNewEvent({...newEvent, teacher: e.target.value})}
                    className="input-field"
                    placeholder="Tên giáo viên"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phòng học
                  </label>
                  <input
                    type="text"
                    value={newEvent.room}
                    onChange={(e) => setNewEvent({...newEvent, room: e.target.value})}
                    className="input-field"
                    placeholder="Số phòng học"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Màu sắc
                  </label>
                  <div className="flex space-x-2">
                    {colors.map((color) => (
                      <button
                        key={color}
                        type="button"
                        className={`w-8 h-8 rounded-full border-2 ${
                          newEvent.color === color ? 'border-gray-800' : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setNewEvent({...newEvent, color})}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mô tả
                  </label>
                  <textarea
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                    className="input-field"
                    rows="3"
                    placeholder="Ghi chú về buổi học..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bắt đầu
                    </label>
                    <input
                      type="datetime-local"
                      value={moment(newEvent.start).format('YYYY-MM-DDTHH:mm')}
                      onChange={(e) => setNewEvent({...newEvent, start: new Date(e.target.value)})}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kết thúc
                    </label>
                    <input
                      type="datetime-local"
                      value={moment(newEvent.end).format('YYYY-MM-DDTHH:mm')}
                      onChange={(e) => setNewEvent({...newEvent, end: new Date(e.target.value)})}
                      className="input-field"
                    />
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="btn-secondary flex-1"
                >
                  Hủy
                </button>
                <button
                  onClick={handleAddEvent}
                  disabled={!newEvent.subject}
                  className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Thêm vào thời khóa biểu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;