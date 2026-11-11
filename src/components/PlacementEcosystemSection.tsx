import React, { useState } from 'react';
import { 
  Network, 
  Building2, 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  DollarSign, 
  ArrowRight, 
  Share2,
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';
import { PARTNER_ORGS } from '../data/courseData';
import { PartnerOrg } from '../types';

interface PlacementEcosystemSectionProps {
  onOpenApply: () => void;
}

export const PlacementEcosystemSection: React.FC<PlacementEcosystemSectionProps> = ({ onOpenApply }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [targetWeeklyHours, setTargetWeeklyHours] = useState<number>(8);

  const categories = [
    { id: 'all', label: '전체 수요 기관 (128곳)' },
    { id: '초·중·고교', label: '초·중·고교 (45곳)' },
    { id: '노인/복지관', label: '노인·사회복지관 (32곳)' },
    { id: '도서관/문화센터', label: '도서관·문화센터 (24곳)' },
    { id: '시민평생원', label: '주민자치센터 (31곳)' },
    { id: '청년/스타트업', label: '청년·창업타운 (8곳)' },
  ];

  const filteredOrgs = selectedCategory === 'all'
    ? PARTNER_ORGS
    : PARTNER_ORGS.filter(org => org.category === selectedCategory);

  // Approximate hourly rate in Korean public lectures: ~50,000 KRW/hr
  const calculatedMonthlyIncome = (targetWeeklyHours * 4 * 50000).toLocaleString('ko-KR');

  const steps = [
    {
      step: '01',
      title: '8주 집중 교육 & 시강 통과',
      desc: '프롬프트 실무부터 대상별 교수법, 4K 모의 시강 전문가 평가 통과 후 천안시장 명의 수료증 발급',
      badge: '수료 인증',
    },
    {
      step: '02',
      title: '‘강사야’ 인증 강사 등록',
      desc: '대한민국 1위 강사 플랫폼 강사야(gangsaya.co.kr)에 프로필 등록 및 전국 기관 섭외 노출',
      badge: '프로필 등재',
    },
    {
      step: '03',
      title: '천안시 관내 128개 기관 매칭',
      desc: '전담 코디네이터가 강사의 희망 지역/시간대/선호 대상(시니어, 학생 등)에 맞춘 출강처 1:1 매칭',
      badge: '맞춤 파견',
    },
    {
      step: '04',
      title: '공공 강사료 지급 & 보수교육',
      desc: '공공 규정에 따른 정규 강사료 정산 지급 및 최신 AI 트렌드 업데이트 보수 교육과 강사 스터디 지원',
      badge: '수익 & 성장',
    },
  ];

  return (
    <section id="ecosystem" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-3">
            <Network className="w-4 h-4 text-indigo-400" />
            수료 후 진로 & 출강 매칭 네트워크
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            교육 수료 후, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300">어디로 강의를 나가게 되나요?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            강사야의 섭외 시스템과 천안시의 128개 공공 수요 기관이 유기적으로 연계되어,<br className="hidden sm:inline" />
            단순 수료증 수여를 넘어 실제 현장 출강과 정당한 강사료 수익 창출을 확실하게 뒷받침합니다.
          </p>
        </div>

        {/* 4-Step Matching Flow Diagram */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {steps.map((st, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-xs relative flex flex-col justify-between hover:border-indigo-500/60 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-indigo-400 group-hover:scale-110 transition-transform inline-block">
                    {st.step}
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-900/60 text-indigo-300 border border-indigo-700/50">
                    {st.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-700/50 flex items-center text-xs text-slate-400 group-hover:text-indigo-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-1.5" />
                <span>체계적 공식 절차</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Partner Institutions Directory */}
        <div className="rounded-2xl bg-slate-800/60 border border-slate-700 p-6 sm:p-8 backdrop-blur-md mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-indigo-400" />
                천안시 관내 주요 출강 수요 기관 안내
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                현재 시민 AI강사를 기다리고 있는 천안 지역 수요처와 요청 강의 분야입니다.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-700/60 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Org Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredOrgs.map((org: PartnerOrg) => (
              <div 
                key={org.id} 
                className="p-5 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-indigo-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {org.category}
                    </span>
                    <span className="text-xs text-amber-400 font-semibold">
                      연간 {org.activeLectures}회 출강 수요
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-1">
                    {org.name}
                  </h4>
                  <div className="text-xs text-slate-400 flex items-center gap-1 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>{org.location}</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {org.description}
                  </p>
                </div>

                <div>
                  <div className="text-[11px] font-semibold text-slate-400 mb-1.5">
                    요청 강좌 분야:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {org.requestedFields.map((field, fIdx) => (
                      <span 
                        key={fIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {field}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expected Income / Activity Calculator */}
        <div className="rounded-2xl bg-gradient-to-r from-indigo-900/60 via-slate-800 to-indigo-900/60 border border-indigo-700/60 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1 text-xs font-bold text-amber-300 bg-amber-500/20 px-2.5 py-0.5 rounded">
                <DollarSign className="w-3.5 h-3.5" />
                활동 기대 소득 시뮬레이터
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                내가 원하는 주당 출강 시간으로 예상 활동비를 확인하세요
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                천안시 공공 평생학습 강사료 및 학교 강사료 지급 기준(시간당 평균 4만~7만원)을 바탕으로 산출된 권장 활동 모델입니다. (본인의 가용 시간에 맞춰 탄력적 조정 가능)
              </p>

              {/* Slider for Hours */}
              <div className="pt-3">
                <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                  <span>희망 주당 출강 시간: <strong className="text-indigo-400 text-sm">{targetWeeklyHours}시간 / 주</strong></span>
                  <span>(월 약 {targetWeeklyHours * 4}시간 활동)</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="20"
                  step="2"
                  value={targetWeeklyHours}
                  onChange={(e) => setTargetWeeklyHours(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-[11px] text-slate-700 mt-1">
                  <span>주 2시간 (가벼운 나눔)</span>
                  <span>주 8시간 (균형있는 N잡)</span>
                  <span>주 20시간 (전업 강사)</span>
                </div>
              </div>
            </div>

            {/* Calculated Box */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-slate-900/90 border border-indigo-500/30 text-center">
              <div className="text-xs text-slate-400">예상 월간 강사 활동 수익</div>
              <div className="text-3xl sm:text-4xl font-black text-amber-400 mt-1">
                월 약 {calculatedMonthlyIncome}원
              </div>
              <div className="text-xs text-slate-400 mt-1">
                (시간당 공공 강사료 50,000원 기준 추산)
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] text-slate-400 text-left space-y-1">
                <div>✔ 천안시 평생교육 진흥조례 강사료 기준 준수</div>
                <div>✔ 강사야 플랫폼 전국 출강 매칭 시 추가 수입 가능</div>
              </div>
              <button
                onClick={onOpenApply}
                className="mt-5 w-full py-2.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
              >
                지금 AI 강사로 첫걸음 내딛기
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
