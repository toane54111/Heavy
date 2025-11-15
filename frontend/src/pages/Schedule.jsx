import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Plus, BookOpen, Clock, Users, MapPin } from 'lucide-react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { timetableApi } from '../api/timetableApi';
import './Schedule.css';

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
    <div className="schedule-container">
      {/* Header */}
      <div className="schedule-header">
        <div className="schedule-header-content">
          <h1>Thời Khóa Biểu</h1>
          <p>Quản lý lịch học và thời khóa biểu cá nhân</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="schedule-add-button"
        >
          <Plus size={20} />
          <span>Thêm Tiết Học</span>
        </button>
      </div>

      {/* Stats */}
      <div className="schedule-stats">
        <div className="schedule-stat-card">
          <div className="schedule-stat-icon blue">
            <BookOpen size={24} />
          </div>
          <div className="schedule-stat-content">
            <div className="schedule-stat-label">Tổng môn học</div>
            <div className="schedule-stat-value">
              {[...new Set(events.map(event => event.subject))].length}
            </div>
          </div>
        </div>

        <div className="schedule-stat-card">
          <div className="schedule-stat-icon green">
            <Clock size={24} />
          </div>
          <div className="schedule-stat-content">
            <div className="schedule-stat-label">Tiết học/tuần</div>
            <div className="schedule-stat-value">{events.length}</div>
          </div>
        </div>

        <div className="schedule-stat-card">
          <div className="schedule-stat-icon purple">
            <Users size={24} />
          </div>
          <div className="schedule-stat-content">
            <div className="schedule-stat-label">Giáo viên</div>
            <div className="schedule-stat-value">
              {[...new Set(events.map(event => event.teacher))].length}
            </div>
          </div>
        </div>

        <div className="schedule-stat-card">
          <div className="schedule-stat-icon orange">
            <MapPin size={24} />
          </div>
          <div className="schedule-stat-content">
            <div className="schedule-stat-label">Phòng học</div>
            <div className="schedule-stat-value">
              {[...new Set(events.map(event => event.room))].length}
            </div>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="schedule-calendar-container">
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
        <div className="schedule-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="schedule-modal" onClick={(e) => e.stopPropagation()}>
            <div className="schedule-modal-header">
              <h2 className="schedule-modal-title">Thêm Tiết Học Mới</h2>
            </div>
            
            <div className="schedule-modal-body">
              <div className="schedule-form-group">
                <label className="schedule-form-label">Môn học *</label>
                <input
                  type="text"
                  list="subjects-list"
                  value={newEvent.subject}
                  onChange={(e) => setNewEvent({...newEvent, subject: e.target.value})}
                  className="schedule-form-input"
                  placeholder="Nhập tên môn học hoặc chọn từ danh sách"
                  required
                />
                <datalist id="subjects-list">
                  {subjects.map((subject, index) => (
                    <option key={index} value={subject} />
                  ))}
                </datalist>
                <p className="schedule-hint">
                  💡 Bạn có thể nhập tên môn học tự do hoặc chọn từ danh sách gợi ý
                </p>
              </div>

              <div className="schedule-form-group">
                <label className="schedule-form-label">Giáo viên</label>
                <input
                  type="text"
                  value={newEvent.teacher}
                  onChange={(e) => setNewEvent({...newEvent, teacher: e.target.value})}
                  className="schedule-form-input"
                  placeholder="Tên giáo viên"
                />
              </div>

              <div className="schedule-form-group">
                <label className="schedule-form-label">Phòng học</label>
                <input
                  type="text"
                  value={newEvent.room}
                  onChange={(e) => setNewEvent({...newEvent, room: e.target.value})}
                  className="schedule-form-input"
                  placeholder="Số phòng học"
                />
              </div>

              <div className="schedule-form-group">
                <label className="schedule-form-label">Màu sắc</label>
                <div className="schedule-color-picker">
                  {colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      className={`schedule-color-option ${newEvent.color === color ? 'selected' : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => setNewEvent({...newEvent, color})}
                    />
                  ))}
                </div>
              </div>

              <div className="schedule-form-group">
                <label className="schedule-form-label">Mô tả</label>
                <textarea
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                  className="schedule-form-textarea"
                  rows="3"
                  placeholder="Ghi chú về buổi học..."
                />
              </div>

              <div className="schedule-form-row">
                <div className="schedule-form-group">
                  <label className="schedule-form-label">Bắt đầu</label>
                  <input
                    type="datetime-local"
                    value={moment(newEvent.start).format('YYYY-MM-DDTHH:mm')}
                    onChange={(e) => setNewEvent({...newEvent, start: new Date(e.target.value)})}
                    className="schedule-form-input"
                  />
                </div>
                <div className="schedule-form-group">
                  <label className="schedule-form-label">Kết thúc</label>
                  <input
                    type="datetime-local"
                    value={moment(newEvent.end).format('YYYY-MM-DDTHH:mm')}
                    onChange={(e) => setNewEvent({...newEvent, end: new Date(e.target.value)})}
                    className="schedule-form-input"
                  />
                </div>
              </div>
            </div>

            <div className="schedule-modal-footer">
              <button
                onClick={() => setShowModal(false)}
                className="schedule-button schedule-button-secondary"
              >
                Hủy
              </button>
              <button
                onClick={handleAddEvent}
                disabled={!newEvent.subject}
                className="schedule-button schedule-button-primary"
              >
                Thêm vào thời khóa biểu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;