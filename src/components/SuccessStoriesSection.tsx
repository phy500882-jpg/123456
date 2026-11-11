import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Star, 
  Building2, 
  Clock, 
  Quote, 
  Award,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { SUCCESS_STORIES } from '../data/courseData';
import { SuccessStory } from '../types';

interface SuccessStoriesSectionProps {
  onOpenApply: () => void;
}

export const SuccessStoriesSection: React.FC<SuccessStoriesSectionProps> = ({ onOpenApply }) => {
  const [activeStoryId, setActiveStoryId] = useState<string>(SUCCESS_STORIES[0].id);

  const activeStory = SUCCESS_STORIES.find(s => s.id === activeStoryId) || SUCCESS_STORIES[0];

  return (
    <section id="stories" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 mb-3">
            <HeartHandshake className="w-4 h-4 text-amber-600" />
            선배 수료생들의 생생한 활약상
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            "처음엔 저도 할 수 있을까 망설였습니다"<br />
            <span className="text-amber-600">8주 만에 강사로 데뷔한</span> 천안시민들의 실제 이야기
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            나이도, 이전 직업도 모두 달랐지만 AI를 향한 작은 호기심으로 시작했습니다. 지금은 천안 곳곳에서 디지털 지식을 나누며 존경받는 강사로 활약하고 있습니다.
          </p>
        </div>

        {/* Story Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {SUCCESS_STORIES.map((story: SuccessStory) => (
            <button
              key={story.id}
              onClick={() => setActiveStoryId(story.id)}
              className={`text-left p-5 rounded-2xl border transition-all flex items-center gap-4 ${
                activeStoryId === story.id
                  ? 'bg-amber-50/70 border-amber-300 shadow-md ring-2 ring-amber-400/30'
                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <img
                src={story.photo}
                alt={story.name}
                className="w-14 h-14 rounded-full object-cover shrink-0 border-2 border-white shadow-xs"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-900">
                    {story.batch}
                  </span>
                  <span className="text-xs text-slate-700 font-medium truncate">
                    {story.ageGroup}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm truncate">
                  {story.name}
                </h4>
                <p className="text-xs text-slate-700 truncate mt-0.5">
                  {story.currentRole}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Featured Story Detailed View */}
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Photo & Badges */}
            <div className="lg:col-span-4 text-center lg:text-left space-y-4">
              <div className="relative inline-block mx-auto lg:mx-0">
                <img
                  src={activeStory.photo}
                  alt={activeStory.name}
                  className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover shadow-xl border-4 border-slate-800"
                />
                <div className="absolute -bottom-3 -right-3 bg-amber-400 text-slate-950 text-xs font-black px-3 py-1.5 rounded-xl shadow-lg">
                  월 {activeStory.monthlyLectureHours}시간 출강
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  {activeStory.name}
                </h3>
                <p className="text-amber-300 text-sm font-medium mt-0.5">
                  {activeStory.currentRole}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  이전 경력: {activeStory.previousCareer}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 space-y-1">
                <div className="font-semibold text-amber-300 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  주요 활동 성과
                </div>
                <div>{activeStory.topFeedback}</div>
              </div>
            </div>

            {/* Right Story Content & Testimonial */}
            <div className="lg:col-span-8 space-y-6">
              {/* Quote box */}
              <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700 relative">
                <Quote className="w-8 h-8 text-amber-400/40 absolute top-4 right-4" />
                <h4 className="text-lg sm:text-xl font-bold text-amber-300 leading-snug">
                  {activeStory.quote}
                </h4>
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  "{activeStory.story}"
                </p>
              </div>

              {/* Matched Organizations */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-indigo-400" />
                  현재 정기 출강 중인 천안시 수요처
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeStory.matchedOrgs.map((org, oIdx) => (
                    <span
                      key={oIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700"
                    >
                      📍 {org}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA row */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onOpenApply}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <span>나도 선배들처럼 강사 도전하기</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-400">
                  ※ 제3기 선착순 50명 한정 전액 무료
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
