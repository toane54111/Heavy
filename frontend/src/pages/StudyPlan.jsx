import { BookOpen } from 'lucide-react';

const StudyPlan = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Kế Hoạch Học Tập</h1>
        <p className="text-gray-600 mt-2">Quản lý và theo dõi tiến độ học tập của bạn</p>
      </div>

      <div className="card text-center py-12">
        <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Tính năng đang phát triển
        </h3>
        <p className="text-gray-600">
          Trang này sẽ hiển thị kế hoạch học tập chi tiết của bạn.
        </p>
      </div>
    </div>
  );
};

export default StudyPlan;

