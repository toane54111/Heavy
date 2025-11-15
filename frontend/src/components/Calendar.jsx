import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Plus } from 'lucide-react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';

const localizer = momentLocalizer(moment);

const Calendar = ({ events = [], onSelectSlot, onSelectEvent, onAddEvent, showAddButton = true, height = 500 }) => {
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
    'Toán', 'Vật Lý', 'Hóa Học', 'Ngữ Văn', 'Lịch Sử',
    'Địa Lý', 'Tiếng Anh', 'Tin Học', 'GDCD', 'Thể Dục',
    'Âm Nhạc', 'Mỹ Thuật'
  ];

  const colors = [
    '#3b82f6', '#ef4444', '#10b981', '#f59e0b',
    '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'
  ];

  const handleSelectSlot = ({ start, end }) => {
    if (onSelectSlot) {
      onSelectSlot({ start, end });
    } else {
      setSelectedSlot({ start, end });
      setNewEvent({
        ...newEvent,
        start: start,
        end: end
      });
      setShowModal(true);
    }
  };

  const handleAddEvent = () => {
    if (!newEvent.subject) {
      alert('Vui lòng chọn môn học');
      return;
    }

    const eventData = {
      ...newEvent,
      title: `${newEvent.subject} - ${newEvent.teacher || 'Chưa có GV'}`
    };

    if (onAddEvent) {
      onAddEvent(eventData);
    }
    
    setShowModal(false);
    resetNewEvent();
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
        backgroundColor: event.color || '#3b82f6',
        borderRadius: '8px',
        opacity: 0.9,
        color: 'white',
        border: 'none',
        fontSize: '0.875rem',
        padding: '2px 6px'
      }
    };
  };

  return (
    <div className="calendar-component">
      {showAddButton && (
        <button
          onClick={() => setShowModal(true)}
          className="calendar-add-button"
        >
          <Plus size={20} />
          <span>Thêm Tiết Học</span>
        </button>
      )}

      <div className="calendar-wrapper">
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: height }}
          onSelectSlot={handleSelectSlot}
          onSelectEvent={onSelectEvent}
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
        <div className="calendar-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="calendar-modal" onClick={(e) => e.stopPropagation()}>
            <div className="calendar-modal-header">
              <h2 className="calendar-modal-title">Thêm Tiết Học Mới</h2>
            </div>
            
            <div className="calendar-modal-body">
              <div className="calendar-form-group">
                <label className="calendar-form-label">Môn học *</label>
                <input
                  type="text"
                  list="subjects-list"
                  value={newEvent.subject}
                  onChange={(e) => setNewEvent({...newEvent, subject: e.target.value})}
                  className="calendar-form-input"
                  placeholder="Nhập tên môn học hoặc chọn từ danh sách"
                  required
                />
                <datalist id="subjects-list">
                  {subjects.map((subject, index) => (
                    <option key={index} value={subject} />
                  ))}
                </datalist>
              </div>

              <div className="calendar-form-group">
                <label className="calendar-form-label">Giáo viên</label>
                <input
                  type="text"
                  value={newEvent.teacher}
                  onChange={(e) => setNewEvent({...newEvent, teacher: e.target.value})}
                  className="calendar-form-input"
                  placeholder="Tên giáo viên"
                />
              </div>

              <div className="calendar-form-group">
                <label className="calendar-form-label">Phòng học</label>
                <input
                  type="text"
                  value={newEvent.room}
                  onChange={(e) => setNewEvent({...newEvent, room: e.target.value})}
                  className="calendar-form-input"
                  placeholder="Số phòng học"
                />
              </div>

              <div className="calendar-form-group">
                <label className="calendar-form-label">Màu sắc</label>
                <div className="calendar-color-picker">
                  {colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      className={`calendar-color-option ${newEvent.color === color ? 'selected' : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => setNewEvent({...newEvent, color})}
                    />
                  ))}
                </div>
              </div>

              <div className="calendar-form-group">
                <label className="calendar-form-label">Mô tả</label>
                <textarea
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                  className="calendar-form-textarea"
                  rows="3"
                  placeholder="Ghi chú về buổi học..."
                />
              </div>

              <div className="calendar-form-row">
                <div className="calendar-form-group">
                  <label className="calendar-form-label">Bắt đầu</label>
                  <input
                    type="datetime-local"
                    value={moment(newEvent.start).format('YYYY-MM-DDTHH:mm')}
                    onChange={(e) => setNewEvent({...newEvent, start: new Date(e.target.value)})}
                    className="calendar-form-input"
                  />
                </div>
                <div className="calendar-form-group">
                  <label className="calendar-form-label">Kết thúc</label>
                  <input
                    type="datetime-local"
                    value={moment(newEvent.end).format('YYYY-MM-DDTHH:mm')}
                    onChange={(e) => setNewEvent({...newEvent, end: new Date(e.target.value)})}
                    className="calendar-form-input"
                  />
                </div>
              </div>
            </div>

            <div className="calendar-modal-footer">
              <button
                onClick={() => setShowModal(false)}
                className="calendar-button calendar-button-secondary"
              >
                Hủy
              </button>
              <button
                onClick={handleAddEvent}
                disabled={!newEvent.subject}
                className="calendar-button calendar-button-primary"
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

export default Calendar;

