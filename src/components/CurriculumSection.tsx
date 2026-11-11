import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Wrench, 
  CheckCircle, 
  FolderGit2, 
  Download, 
  ChevronDown, 
  ChevronUp,
  Layers,
  Sparkles
} from 'lucide-react';
import { CURRICULUM_WEEKS } from '../data/courseData';
import { CurriculumWeek } from '../types';

interface CurriculumSectionProps {
  onOpenBrochure: () => void;
  onOpenApply: () => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({ 
  onOpenBrochure, 
  onOpenApply 
}) => {
  const [selectedStage, setSelectedStage] = useState<string>('all');
  const [expandedWeeks, setExpandedWeeks] = useState<Record<number, boolean>>({
    1: true,
    4: true,
    7: true,
  });

  const toggleExpand = (week: number) => {
    setExpandedWeeks((prev) => ({
      ...prev,
      [week]: !prev[week],
    }));
  };

  const stages = [
    { id: 'all', label: '전체 8주 한눈에 보기' },
    { id: 'STAGE 1. 기초 리터러시', label: '1단계. 기초 리터러시 (1~2주)' },
    { id: 'STAGE 2. 콘텐츠 제작', label: '2단계. AI 콘텐츠 창작 (3~5주)' },
    { id: 'STAGE 3. 교수법 & 스피치', label: '3단계. 교수법 & 스피치 (6주)' },
    { id: 'STAGE 4. 실전 시강 & 데모데이', label: '4단계. 실전 시강 & 데모데이 (7~8주)' },
  ];

  const filteredWeeks = selectedStage === 'all'
    ? CURRICULUM_WEEKS
    : CURRICULUM_WEEKS.filter((w) => w.stage === selectedStage);

  return (
    <section id="curriculum" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 mb-3">
            <BookOpen className="w-4 h-4 text-blue-600" />
            체계적인 8주 완성 마스터 플랜
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            초보자도 무대 위의 명강사로 만드는<br />
            <span className="text-blue-600">이론 20% + 실습 50% + 시강 30%</span> 실전 커리큘럼
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            단순히 AI 프롬프트만 치고 끝나는 강의가 아닙니다. 
            학습자의 마음을 사로잡는 교수 설계, 4K 모의 시강, 교안 자동화까지 실전 출강에 즉시 쓰이는 현장형 교육입니다.
          </p>

          {/* Action to download syllabus */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenBrochure}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300 transition-colors"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span>상세 강의계획서 PDF 다운로드</span>
            </button>
            <span className="text-xs text-slate-400">총 8주 (48시간) 과정 / 수료 기준 출석률 80% 이상</span>
          </div>
        </div>

        {/* Stage Filter Buttons */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-4 mb-8 no-scrollbar">
          {stages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(stage.id)}
              className={`shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedStage === stage.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              {stage.label}
            </button>
          ))}
        </div>

        {/* Weekly Cards List */}
        <div className="space-y-5">
          {filteredWeeks.map((weekItem: CurriculumWeek) => {
            const isExpanded = expandedWeeks[weekItem.week];
            return (
              <div
                key={weekItem.week}
                className="rounded-2xl border border-slate-200 bg-white hover:border-blue-300 transition-all shadow-xs overflow-hidden"
              >
                {/* Card Main Bar */}
                <div 
                  onClick={() => toggleExpand(weekItem.week)}
                  className="p-5 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none hover:bg-slate-50/60 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex flex-col items-center justify-center font-extrabold text-blue-700">
                      <span className="text-[10px] leading-none uppercase font-semibold text-blue-500">WEEK</span>
                      <span className="text-lg leading-none">{weekItem.week}</span>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${weekItem.stageColor}`}>
                          {weekItem.stage}
                        </span>
                        <span className="text-xs text-slate-700 font-medium flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-600" />
                          {weekItem.hours}시간 집중 실습
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        {weekItem.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        {weekItem.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right tools preview & Toggle button */}
                  <div className="flex items-center justify-between md:justify-end gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <div className="flex flex-wrap gap-1.5 max-w-xs">
                      {weekItem.tools.slice(0, 3).map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {tool}
                        </span>
                      ))}
                      {weekItem.tools.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded text-[11px] text-slate-700 bg-slate-100 font-medium">
                          +{weekItem.tools.length - 3}
                        </span>
                      )}
                    </div>

                    <button 
                      type="button"
                      aria-label={isExpanded ? "주차 상세 접기" : "주차 상세 펼치기"}
                      className="p-1.5 text-slate-600 hover:text-slate-700 rounded-lg hover:bg-slate-200/60"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-blue-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Details Accordion Body */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 pt-2 bg-slate-50/50 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-6 text-sm">
                    {/* Left: Key Learnings */}
                    <div className="lg:col-span-7 space-y-3">
                      <div className="font-bold text-slate-900 text-xs flex items-center gap-1.5 uppercase tracking-wider text-blue-700">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        주요 학습 목표 & 교수 기법
                      </div>
                      <ul className="space-y-2">
                        {weekItem.keyLearnings.map((learning, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-700 text-xs sm:text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                            <span>{learning}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Competency Output */}
                      <div className="mt-3 p-3 rounded-xl bg-blue-50/70 border border-blue-200/70 text-xs text-blue-900 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                        <div>
                          <strong>달성 역량:</strong> {weekItem.competencyOutcome}
                        </div>
                      </div>
                    </div>

                    {/* Right: Practice Project & Tools */}
                    <div className="lg:col-span-5 space-y-4">
                      {/* Practice Project Box */}
                      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <FolderGit2 className="w-4 h-4 text-amber-500" />
                          해당 주차 실습 산출물 (포트폴리오)
                        </div>
                        <p className="text-xs sm:text-sm text-slate-800 font-medium bg-amber-50/60 p-2.5 rounded-lg border border-amber-200/60">
                          {weekItem.practiceProject}
                        </p>
                      </div>

                      {/* Complete Tools Used */}
                      <div>
                        <div className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1">
                          <Wrench className="w-3.5 h-3.5 text-slate-500" />
                          다루는 핵심 생성형 AI 도구
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {weekItem.tools.map((tool, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white text-indigo-700 border border-indigo-100 shadow-2xs"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-slate-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-slate-900">
              더 자세한 회차별 교재 목차와 실습 계획이 궁금하신가요?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              전체 48시간 상세 강의계획서와 주차별 실습 예제 가이드를 확인해보세요.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBrochure}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs"
            >
              계획서 보기
            </button>
            <button
              onClick={onOpenApply}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm"
            >
              수강 신청하기
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
