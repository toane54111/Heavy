import { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Leaf, Truck, Home, Bell, Droplet, CheckSquare, User, Plus, Clock, MapPin, BookOpen } from 'lucide-react';
import { timetableApi } from '../api/timetableApi';
import moment from 'moment';
import Calendar from '../components/Calendar';
import './StudyPlan.css';

const StudyPlan = () => {
  const [activeTab, setActiveTab] = useState('tree'); // 'tree', 'timetable', 'exams', 'history'
  const [growthProgress, setGrowthProgress] = useState(10);
  const [waterCount, setWaterCount] = useState(5);
  const [fertilizerCount, setFertilizerCount] = useState(3);
  const [treeAge, setTreeAge] = useState(1);
  const [waterTotal, setWaterTotal] = useState(24);
  const [activeStage, setActiveStage] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  
  // Timetable state
  const [timetableEvents, setTimetableEvents] = useState([]);
  
  // Exam state
  const [exams, setExams] = useState([
    { id: 1, subject: 'Toán', date: '2025-12-20', time: '08:00', room: 'A101', type: 'Giữa kỳ', status: 'upcoming' },
    { id: 2, subject: 'Vật Lý', date: '2025-12-22', time: '08:00', room: 'B205', type: 'Giữa kỳ', status: 'upcoming' },
  ]);
  
  // Exam history state
  const [examHistory, setExamHistory] = useState([
    { id: 1, subject: 'Hóa Học', date: '2025-11-15', score: 8.5, status: 'passed' },
    { id: 2, subject: 'Sinh Học', date: '2025-11-10', score: 6.5, status: 'passed' },
    { id: 3, subject: 'Lịch Sử', date: '2025-10-25', score: 4.5, status: 'failed' },
  ]);

  const stages = [
    { name: "Hạt giống", minProgress: 0, maxProgress: 20 },
    { name: "Mầm cây", minProgress: 21, maxProgress: 40 },
    { name: "Cây non", minProgress: 41, maxProgress: 70 },
    { name: "Cây trưởng thành", minProgress: 71, maxProgress: 90 },
    { name: "Cây ra quả", minProgress: 91, maxProgress: 100 }
  ];

  const SidebarItem = ({ Icon, label, isActive = false, onClick }) => (
    <div 
      className={`sidebar-item-wrapper ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="sidebar-item-icon">
        <Icon size={24} />
      </div>
      <span className="sidebar-item-label">{label}</span>
    </div>
  );

  const ResourceItem = ({ icon: Icon, count, label, colorClass, onClick }) => {
    const colorMap = {
      'water': 'linear-gradient(135deg, #2196F3, #0D47A1)',
      'fertilizer': 'linear-gradient(135deg, #FF9800, #E65100)'
    };
    const bgColor = colorClass === 'water' ? colorMap.water : colorMap.fertilizer;
    
    return (
      <div className="resource-item" onClick={onClick}>
        <div className="resource-icon-wrapper" style={{ background: bgColor }}>
          <Icon size={28} />
        </div>
        <div className="resource-count">{count}</div>
        <div className="resource-label">{label}</div>
      </div>
    );
  };

  const TreeStage = ({ stage, isActive }) => {
    const stages = {
      0: (
        <div className="flex flex-col items-center justify-end">
          <div className="w-20 h-16 bg-gradient-to-b from-amber-800 to-amber-900 rounded-lg rounded-b-none shadow-md"></div>
          <div className="w-6 h-4 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full -mt-2 shadow-sm"></div>
        </div>
      ),
      1: (
        <div className="flex flex-col items-center justify-end">
          <div className="w-24 h-18 bg-gradient-to-b from-amber-800 to-amber-900 rounded-lg rounded-b-none shadow-md"></div>
          <div className="w-3 h-12 bg-gradient-to-b from-emerald-500 to-emerald-700 rounded-full -mt-1 shadow-sm"></div>
          <div className="w-16 h-12 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full -mt-6 shadow-sm"></div>
        </div>
      ),
      2: (
        <div className="flex flex-col items-center justify-end">
          <div className="w-28 h-20 bg-gradient-to-b from-amber-800 to-amber-900 rounded-lg rounded-b-none shadow-md"></div>
          <div className="w-4 h-20 bg-gradient-to-b from-amber-700 to-amber-900 rounded-full -mt-2 shadow-sm"></div>
          <div className="w-24 h-16 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full -mt-8 shadow-md"></div>
        </div>
      ),
      3: (
        <div className="flex flex-col items-center justify-end">
          <div className="w-32 h-22 bg-gradient-to-b from-amber-800 to-amber-900 rounded-lg rounded-b-none shadow-md"></div>
          <div className="w-6 h-28 bg-gradient-to-b from-amber-700 to-amber-900 rounded-full -mt-2 shadow-sm"></div>
          <div className="w-40 h-24 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full -mt-12 shadow-lg"></div>
        </div>
      ),
      4: (
        <div className="flex flex-col items-center justify-end">
          <div className="w-36 h-24 bg-gradient-to-b from-amber-800 to-amber-900 rounded-lg rounded-b-none shadow-md"></div>
          <div className="w-8 h-36 bg-gradient-to-b from-amber-700 to-amber-900 rounded-full -mt-2 shadow-sm"></div>
          <div className="w-56 h-32 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full -mt-16 shadow-xl relative">
            {/* Fruits */}
            <div className="absolute top-8 left-12 w-6 h-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-md animate-bounce"></div>
            <div className="absolute top-12 right-16 w-6 h-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-md animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-10 left-20 w-6 h-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-md animate-bounce" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      )
    };

    return (
      <div className={`tree-stage-container ${isActive ? 'active' : 'inactive'}`}>
        {stages[stage]}
      </div>
    );
  };

  const showToast = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const waterTree = () => {
    if (waterCount > 0 && growthProgress < 100) {
      setWaterCount(prev => prev - 1);
      setGrowthProgress(prev => Math.min(prev + 5, 100));
      setTreeAge(prev => prev + 0.5);
      showToast('Đã tưới nước cho cây! 🌱');
    }
  };

  const fertilizeTree = () => {
    if (fertilizerCount > 0 && growthProgress < 100) {
      setFertilizerCount(prev => prev - 1);
      setGrowthProgress(prev => Math.min(prev + 10, 100));
      setTreeAge(prev => prev + 1);
      showToast('Đã bón phân cho cây! 🌿');
    }
  };

  const getWater = () => {
    setWaterCount(prev => prev + 2);
    setWaterTotal(prev => prev + 2);
    showToast('Đã nhận thêm 2 nước! 💧');
  };

  useEffect(() => {
    const currentStage = stages.findIndex(stage => 
      growthProgress >= stage.minProgress && growthProgress <= stage.maxProgress
    );
    setActiveStage(currentStage);
  }, [growthProgress]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (growthProgress < 100) {
        setGrowthProgress(prev => prev + 0.1);
        setTreeAge(prev => prev + 0.01);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Load timetable
  useEffect(() => {
    if (activeTab === 'timetable') {
      loadTimetable();
    }
  }, [activeTab]);

  const loadTimetable = async () => {
    try {
      const events = await timetableApi.getTimetable();
      setTimetableEvents(events.map(item => ({
        ...item,
        start: new Date(item.start),
        end: new Date(item.end)
      })));
    } catch (error) {
      console.error('Error loading timetable:', error);
    }
  };

  const handleAddTimetableEvent = async (eventData) => {
    try {
      const savedEvent = await timetableApi.addEvent(eventData);
      setTimetableEvents([...timetableEvents, {
        ...savedEvent,
        start: new Date(savedEvent.start),
        end: new Date(savedEvent.end)
      }]);
      showToast('Đã thêm tiết học mới! 📚');
    } catch (error) {
      console.error('Error adding event:', error);
      showToast('Có lỗi xảy ra khi thêm tiết học');
    }
  };

  const handleDeleteTimetableEvent = async (event) => {
    if (window.confirm('Bạn có chắc muốn xóa tiết học này?')) {
      try {
        await timetableApi.deleteEvent(event.id);
        setTimetableEvents(timetableEvents.filter(e => e.id !== event.id));
        showToast('Đã xóa tiết học! 🗑️');
      } catch (error) {
        console.error('Error deleting event:', error);
        showToast('Có lỗi xảy ra khi xóa tiết học');
      }
    }
  };

  // Get current week days
  const getWeekDays = () => {
    const startOfWeek = moment().startOf('week');
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(moment(startOfWeek).add(i, 'days'));
    }
    return days;
  };

  // Get events for a specific day
  const getEventsForDay = (day) => {
    return timetableEvents.filter(event => {
      const eventDate = moment(event.start);
      return eventDate.isSame(day, 'day');
    });
  };

  const currentStageData = stages[activeStage];

  return (
    <div className="study-plan-container">
      {/* Background Decorations */}
      <div className="bg-decoration">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
      </div>

      {/* Notification Toast */}
      {showNotification && (
        <div className="notification-toast">
          {notificationMessage}
        </div>
      )}

      <div className="study-plan-main">
        {/* Left sidebar */}
        <aside className="study-plan-sidebar">
          <div className="user-profile">
            <div className="user-avatar">
              <User size={32} />
            </div>
            <div className="user-name">Người dùng</div>
            <div className="user-username">@username</div>
          </div>

          <nav className="sidebar-nav">
            <SidebarItem 
              Icon={CalendarIcon} 
              label="Thời khóa biểu" 
              isActive={activeTab === 'timetable'}
              onClick={() => setActiveTab('timetable')}
            />
            <SidebarItem 
              Icon={Leaf} 
              label="Cây của bạn" 
              isActive={activeTab === 'tree'}
              onClick={() => setActiveTab('tree')}
            />
            <SidebarItem 
              Icon={Truck} 
              label="Lịch thi" 
              isActive={activeTab === 'exams'}
              onClick={() => setActiveTab('exams')}
            />
            <SidebarItem 
              Icon={Home} 
              label="Lịch sử thi" 
              isActive={activeTab === 'history'}
              onClick={() => setActiveTab('history')}
            />
          </nav>

          <div style={{ fontSize: '0.75rem', color: '#999', background: 'rgba(255,255,255,0.5)', padding: '6px 12px', borderRadius: '20px' }}>
            Phiên bản beta
          </div>
        </aside>

        {/* Main content */}
        <main className="study-plan-content">
          <header className="content-header">
            <h1 className="content-title">Nông Trại Học Tập</h1>
            <p className="content-subtitle">Chăm sóc cây, nhận thưởng, và quản lý lịch học của bạn.</p>
          </header>

          {/* Tab Navigation */}
          <div className="study-plan-tabs">
            <button 
              className={`study-plan-tab ${activeTab === 'tree' ? 'active' : ''}`}
              onClick={() => setActiveTab('tree')}
            >
              🌱 Cây của bạn
            </button>
            <button 
              className={`study-plan-tab ${activeTab === 'timetable' ? 'active' : ''}`}
              onClick={() => setActiveTab('timetable')}
            >
              📅 Thời khóa biểu
            </button>
            <button 
              className={`study-plan-tab ${activeTab === 'exams' ? 'active' : ''}`}
              onClick={() => setActiveTab('exams')}
            >
              📝 Lịch thi
            </button>
            <button 
              className={`study-plan-tab ${activeTab === 'history' ? 'active' : ''}`}
              onClick={() => setActiveTab('history')}
            >
              📚 Lịch sử thi
            </button>
          </div>

          {/* Tree Tab Content */}
          <div className={`study-plan-tab-content ${activeTab === 'tree' ? 'active' : ''}`}>
            <section className="tree-section-wrapper">
            <div className="tree-container-wrapper">
              {stages.map((_, index) => (
                <TreeStage 
                  key={index} 
                  stage={index} 
                  isActive={activeStage === index} 
                />
              ))}
            </div>
            
            <div className="tree-info-card">
              <div className="tree-name">Cây học tập của bạn</div>
              <div className="tree-description">Nhận nước để cây lớn hơn mỗi ngày</div>
              
              <div className="progress-wrapper">
                <div className="progress-label">
                  <span>Tiến độ phát triển</span>
                  <span>{Math.round(growthProgress)}%</span>
                </div>
                <div className="progress-container">
                  <div 
                    className="progress-bar"
                    style={{ width: `${growthProgress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="tree-stats">
                <div className="tree-stat">
                  <div className="stat-value">{currentStageData?.name}</div>
                  <div className="stat-label">Giai đoạn</div>
                </div>
                <div className="tree-stat">
                  <div className="stat-value">{Math.round(treeAge)}</div>
                  <div className="stat-label">Ngày</div>
                </div>
              </div>
            </div>
            
            <div className="resources-grid">
              <ResourceItem
                icon={Droplet}
                count={waterCount}
                label="Nước"
                colorClass="water"
                onClick={waterTree}
              />
              <ResourceItem
                icon={CheckSquare}
                count={fertilizerCount}
                label="Phân bón"
                colorClass="fertilizer"
                onClick={fertilizeTree}
              />
            </div>
          </section>
          </div>

          {/* Timetable Tab Content */}
          <div className={`study-plan-tab-content ${activeTab === 'timetable' ? 'active' : ''}`}>
            <div className="timetable-full-view">
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e293b', marginBottom: '20px' }}>
                Thời khóa biểu
              </h2>
              <Calendar
                events={timetableEvents}
                onSelectEvent={handleDeleteTimetableEvent}
                onAddEvent={handleAddTimetableEvent}
                showAddButton={true}
                height={600}
              />
            </div>
          </div>

          {/* Exams Tab Content */}
          <div className={`study-plan-tab-content ${activeTab === 'exams' ? 'active' : ''}`}>
            <div className="exam-schedule-container">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e293b' }}>
                  Lịch thi sắp tới
                </h2>
                <button className="add-exam-button">
                  <Plus size={18} />
                  <span>Thêm kỳ thi</span>
                </button>
              </div>
              <div className="exam-list">
                {exams.map((exam) => (
                  <div key={exam.id} className={`exam-item ${exam.status}`}>
                    <div className="exam-header">
                      <div className="exam-subject">{exam.subject}</div>
                      <div className="exam-date">
                        {moment(exam.date).format('DD/MM/YYYY')} - {exam.time}
                      </div>
                    </div>
                    <div className="exam-details">
                      <div className="exam-detail-item">
                        <Clock className="exam-detail-icon" size={16} />
                        <span>{exam.time}</span>
                      </div>
                      <div className="exam-detail-item">
                        <MapPin className="exam-detail-icon" size={16} />
                        <span>Phòng {exam.room}</span>
                      </div>
                      <div className="exam-detail-item">
                        <BookOpen className="exam-detail-icon" size={16} />
                        <span>{exam.type}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Exam History Tab Content */}
          <div className={`study-plan-tab-content ${activeTab === 'history' ? 'active' : ''}`}>
            <div className="exam-history-container">
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e293b', marginBottom: '20px' }}>
                Lịch sử thi
              </h2>
              <div className="exam-history-list">
                {examHistory.map((exam) => (
                  <div key={exam.id} className={`exam-history-item ${exam.status}`}>
                    <div className="exam-header">
                      <div className="exam-subject">
                        {exam.subject}
                        <span className={`exam-score ${exam.status}`}>
                          {exam.score}/10
                        </span>
                      </div>
                      <div className="exam-date">
                        {moment(exam.date).format('DD/MM/YYYY')}
                      </div>
                    </div>
                    <div style={{ marginTop: '8px', fontSize: '0.875rem', color: '#64748b' }}>
                      {exam.status === 'passed' ? '✅ Đã đạt' : '❌ Chưa đạt'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom taskbar - Only show on tree tab */}
          {activeTab === 'tree' && (
            <div className="bottom-taskbar">
              <div className="taskbar-content">
                <div className="taskbar-actions">
                  <div className="taskbar-action">
                    <div className="taskbar-action-icon" style={{ background: 'linear-gradient(135deg, #f43f5e, #e11d48)' }}>
                      <Bell size={20} />
                    </div>
                    <span className="taskbar-action-label">Thông báo</span>
                  </div>

                  <div className="taskbar-action" onClick={getWater}>
                    <div className="taskbar-action-icon" style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', position: 'relative' }}>
                      <Droplet size={20} />
                      <div className="water-ripple-effect"></div>
                    </div>
                    <span className="taskbar-action-label">Nhận nước</span>
                  </div>

                  <div className="taskbar-action">
                    <div className="taskbar-action-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                      <CheckSquare size={20} />
                    </div>
                    <span className="taskbar-action-label">Nhiệm vụ phụ</span>
                  </div>
                </div>

                <div className="taskbar-water-count">
                  <Droplet size={24} style={{ color: '#2E7D32' }} />
                  <div className="water-count-value">{waterTotal}</div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default StudyPlan;
