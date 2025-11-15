import { MessageSquare } from 'lucide-react';

const AIQuestionnaire = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">AI Tư Vấn Học Tập</h1>
        <p className="text-gray-600 mt-2">Nhận tư vấn cá nhân hóa từ AI</p>
      </div>

      <div className="card text-center py-12">
        <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Tính năng đang phát triển
        </h3>
        <p className="text-gray-600">
          Trang này sẽ cung cấp các câu hỏi và tư vấn từ AI.
        </p>
      </div>
    </div>
  );
};

export default AIQuestionnaire;

