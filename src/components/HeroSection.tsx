import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  TrendingUp, 
  Clock, 
  MapPin, 
  Users,
  Compass
} from 'lucide-react';
import { COURSE_STATS } from '../data/courseData';

interface HeroSectionProps {
  onOpenApply: () => void;
  onOpenQuiz: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenApply, onOpenQuiz }) => {
  return (
    <section id="overview" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Glow & Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.25),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                2025 천안시 디지털 대전환 인재육성
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                수강료 전액 100% 무료
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                강사야(gangsaya.co.kr) 공식 연계
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.15] sm:leading-[1.12]">
                생성형 AI로 세상을 배우고,<br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300 bg-clip-text text-transparent">
                  강의로 천안의 내일을 밝히다
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                비전공자·경력단절·시니어 누구나 <strong className="text-white font-semibold">8주 만에 당당한 프로 AI 강사</strong>로 발돋움! 
                교안 기획부터 프롬프트 마스터, 1:1 모의 시강, 대한민국 1위 <span className="text-amber-300 font-semibold underline decoration-amber-400/50 underline-offset-4">강사야 플랫폼 정식 등재</span> 및 천안시 120여 기관 출강 배정까지 원스톱으로 지원합니다.
              </p>
            </div>

            {/* Value Highlights Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="text-xs text-slate-400 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-indigo-400" />
                  수료생 출강 매칭률
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {COURSE_STATS.placementRate}
                </div>
                <div className="text-[11px] text-indigo-300 mt-0.5">관내 128개 기관 매칭</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="text-xs text-slate-400 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  누적 출강 시간
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {COURSE_STATS.cumulativeLectureHours}
                </div>
                <div className="text-[11px] text-emerald-300 mt-0.5">평점 4.95점 달성</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs col-span-2 sm:col-span-1">
                <div className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  교육비 부담
                </div>
                <div className="text-xl sm:text-2xl font-bold text-amber-400 mt-1">
                  전액 무료
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5">유료 AI 계정 일체 지원</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenApply}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-slate-900 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 rounded-xl shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>지금 100% 무료 수강신청하기</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenQuiz}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600 rounded-xl transition-all"
              >
                <Compass className="w-4 h-4 text-indigo-400" />
                <span>3분 맞춤 강사유형 진단</span>
              </button>
            </div>

            {/* Quick trust reassurance */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                컴퓨터 비전공자 환영
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                실습 노트북 및 유료 AI 전액 지원
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                천안시장 공인 수료증 발급
              </span>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Gradient Border */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-indigo-500/40 via-blue-500/20 to-slate-800 shadow-2xl">
                <div className="rounded-[15px] overflow-hidden bg-slate-900 border border-slate-800">
                  
                  {/* Card Header */}
                  <div className="bg-slate-800/90 px-4 py-3 border-b border-slate-700/80 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                      <span className="text-xs font-medium text-slate-300 ml-2">
                        실시간 모집 현황 (제{COURSE_STATS.batchNumber}기)
                      </span>
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      신청 접수중
                    </span>
                  </div>

                  {/* Image Presentation */}
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80" 
                      alt="천안시 시민 AI강사 교육 현장 실습" 
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    {/* Floating Overlay Badge */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-slate-900/90 backdrop-blur-md p-2.5 rounded-lg border border-white/10 text-xs">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-rose-400" />
                        <div>
                          <div className="font-semibold text-white">모두의AI라운지@천안</div>
                          <div className="text-[10px] text-slate-400">천안시 서북구 불당동 실습장</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-slate-400">선발 정원</div>
                        <div className="font-bold text-amber-300">50명 선착순 심사</div>
                      </div>
                    </div>
                  </div>

                  {/* Recruitment Progress & Information */}
                  <div className="p-5 space-y-4">
                    {/* Quota Progress Bar */}
                    <div>
                      <div className="flex justify-between text-xs mb-1.5 font-medium">
                        <span className="text-slate-300 flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-indigo-400" />
                          모집 접수 현황
                        </span>
                        <span className="text-amber-300 font-bold">
                          {COURSE_STATS.currentApplicants}명 / 정원 {COURSE_STATS.targetCount}명 ({Math.round((COURSE_STATS.currentApplicants / COURSE_STATS.targetCount) * 100)}%)
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-indigo-500 via-blue-400 to-amber-400 h-2.5 rounded-full transition-all duration-1000"
                          style={{ width: `${(COURSE_STATS.currentApplicants / COURSE_STATS.targetCount) * 100}%` }}
                        />
                      </div>
                      <div className="text-[11px] text-right text-rose-300 mt-1 font-medium">
                        ※ 마감 임박 (남은 자리: {COURSE_STATS.targetCount - COURSE_STATS.currentApplicants}석)
                      </div>
                    </div>

                    {/* 3 Key Tracks Preview */}
                    <div className="space-y-2 pt-1 border-t border-slate-800">
                      <div className="text-xs font-semibold text-slate-300">개설 트랙 (희망 시간 선택 가능)</div>
                      
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs">
                        <div>
                          <span className="font-semibold text-white">A. 평일 오전반 (화·목 10:00~13:00)</span>
                          <p className="text-[11px] text-slate-400">주부, 프리랜서, 시니어 활동가 추천</p>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                          마감임박
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs">
                        <div>
                          <span className="font-semibold text-white">B. 평일 저녁반 (월·수 19:00~22:00)</span>
                          <p className="text-[11px] text-slate-400">직장인 N잡러, 청년 취준생 추천</p>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          신청가능
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs">
                        <div>
                          <span className="font-semibold text-white">C. 주말 몰입반 (토 10:00~17:00)</span>
                          <p className="text-[11px] text-slate-400">원거리 천안시민, 주말 집중형 추천</p>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          신청가능
                        </span>
                      </div>
                    </div>

                    {/* Quick Button inside card */}
                    <button
                      onClick={onOpenApply}
                      className="w-full py-3 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>간편 지원서 작성하기</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
