import React from 'react';
import { 
  Users2, 
  Award, 
  CheckCircle, 
  Quote, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { INSTRUCTORS } from '../data/courseData';
import { Instructor } from '../types';

export const FacultySection: React.FC = () => {
  return (
    <section id="faculty" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 mb-3">
            <Users2 className="w-4 h-4 text-indigo-600" />
            대한민국 최고 권위 마스터 멘토단
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ‘강사야’ 공인 명사 & 천안시 전담 교수진<br />
            <span className="text-indigo-600">최정상 전문가들의 1:1 밀착 코칭</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            단순 강사가 아닌 강사를 키우는 대한민국 1% 교수설계 전문가와 현직 아나운서 스피치 코치가 여러분의 강의력과 무대 존재감을 완벽하게 빚어냅니다.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTRUCTORS.map((instructor: Instructor) => (
            <div
              key={instructor.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Badges */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={instructor.photo}
                    alt={instructor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Career tag */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-amber-300 border border-white/10">
                    교육 경력 {instructor.careerYears}년
                  </div>

                  {/* Name and Role overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-xs text-indigo-300 font-semibold mb-0.5">
                      {instructor.role}
                    </div>
                    <div className="text-xl font-bold tracking-tight">
                      {instructor.name}
                    </div>
                    <div className="text-[11px] text-slate-300 truncate">
                      {instructor.organization}
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-4">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-1">
                    {instructor.badges.map((b, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {instructor.bio}
                  </p>

                  {/* Quote */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs italic text-slate-700 relative">
                    <Quote className="w-3.5 h-3.5 text-indigo-400 mb-1 inline-block mr-1 opacity-60" />
                    {instructor.teachingPhilosophy}
                  </div>
                </div>
              </div>

              {/* Footer Specialties */}
              <div className="p-4 bg-slate-50/80 border-t border-slate-100">
                <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <Award className="w-3 h-3 text-indigo-600" />
                  전담 지도 영역
                </div>
                <div className="flex flex-wrap gap-1">
                  {instructor.specialties.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-medium text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 1:1 Mentoring Commitment Notice */}
        <div className="mt-12 text-center max-w-2xl mx-auto p-4 rounded-xl bg-white border border-indigo-100 shadow-2xs text-xs sm:text-sm text-slate-700">
          <span className="font-bold text-indigo-600">💡 1:1 멘토링 책임 보증제:</span> 모든 수강생은 수료 전 최소 2회 이상의 개인별 모의 시강에 대해 전담 교수진의 서면 크리틱 리포트를 수령하게 됩니다.
        </div>

      </div>
    </section>
  );
};
