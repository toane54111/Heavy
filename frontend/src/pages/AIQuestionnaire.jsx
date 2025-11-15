import { MessageSquare } from 'lucide-react';
import './AIQuestionnaire.css';

const AIQuestionnaire = () => {
  return (
    <div className="ai-questionnaire-container">
      <div className="ai-header">
        <h1 className="ai-title">AI Tư Vấn Học Tập</h1>
        <p className="ai-subtitle">Nhận tư vấn cá nhân hóa từ AI</p>
      </div>

      <div className="ai-empty-state">
        <MessageSquare className="ai-empty-icon" />
        <h3 className="ai-empty-title">Tính năng đang phát triển</h3>
        <p className="ai-empty-description">
          Trang này sẽ cung cấp các câu hỏi và tư vấn từ AI.
        </p>
      </div>
    </div>
  );
};

export default AIQuestionnaire;

