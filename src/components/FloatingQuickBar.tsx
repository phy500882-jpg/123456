import React from 'react';
import { 
  Sparkles, 
  Send, 
  PhoneCall, 
  Clock, 
  ChevronRight,
  Flame
} from 'lucide-react';
import { COURSE_STATS } from '../data/courseData';

interface FloatingQuickBarProps {
  onOpenApply: () => void;
  onOpenQuiz: () => void;
}

export const FloatingQuickBar: React.FC<FloatingQuickBarProps> = ({
  onOpenApply,
  onOpenQuiz,
}) => {
  return (
    <aside aria-label="빠른 신청 안내" className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md text-white border-t border-slate-700/80 py-3 px-4 shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left Status Info (Desktop & Mobile) */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping inline-block" />
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-rose-500 text-white">
              D-{COURSE_STATS.dDay}
            </span>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>제{COURSE_STATS.batchNumber}기 마감 임박 (잔여 8석)</span>
            </div>
            <div className="text-[11px] text-slate-300 hidden md:block">
              수강료 전액 0원 · 교재 및 AI 계정 무상 지원 · 강사야 공식 매칭
            </div>
          </div>
        </div>

        {/* Right CTA Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenQuiz}
            className="hidden sm:inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-indigo-400/30 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>적합도 진단</span>
          </button>

          <a
            href="tel:041-521-0000"
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center justify-center sm:hidden"
            title="전화 문의"
          >
            <PhoneCall className="w-4 h-4 text-emerald-400" />
          </a>

          <button
            onClick={onOpenApply}
            className="inline-flex items-center gap-1.5 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 transition-all shadow-md active:scale-95"
          >
            <span>지금 무료 수강신청</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </aside>
  );
};
