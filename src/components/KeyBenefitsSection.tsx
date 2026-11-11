import React from 'react';
import { 
  Sparkles, 
  Award, 
  Video, 
  Briefcase, 
  Check, 
  X, 
  ShieldCheck, 
  ArrowRight,
  Zap,
  Globe2
} from 'lucide-react';
import { CORE_BENEFITS } from '../data/courseData';

interface KeyBenefitsSectionProps {
  onOpenApply: () => void;
}

export const KeyBenefitsSection: React.FC<KeyBenefitsSectionProps> = ({ onOpenApply }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-blue-600" />;
      case 'Award':
        return <Award className="w-6 h-6 text-emerald-600" />;
      case 'Video':
        return <Video className="w-6 h-6 text-amber-600" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-purple-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-indigo-600" />;
    }
  };

  const comparisonRows = [
    {
      feature: '교육 수강료',
      cheonan: '전액 무료 (0원 / 국비·시비 100% 지원)',
      others: '150만원 ~ 250만원 (자부담 발생)',
    },
    {
      feature: '실습용 최신 AI 유료 계정',
      cheonan: 'ChatGPT Plus, 미드저니 등 전액 지원',
      others: '수강생 본인 개인 카드 결제',
    },
    {
      feature: '강사 플랫폼 공식 등록',
      cheonan: '대한민국 1위 \'강사야\' 인증 Pool 자동 등재',
      others: '단순 수료증 발급 후 각자 알아서 구직',
    },
    {
      feature: '실전 시강 & 피드백',
      cheonan: '1:1 명사 코칭 + 4K 포트폴리오 비디오 촬영',
      others: '이론 중심이거나 짧은 팀 발표에 그침',
    },
    {
      feature: '지역사회 공공 출강 연계',
      cheonan: '천안시 학교·복지관·도서관 120여 곳 즉시 매칭',
      others: '출강 보장 없음, 실습처 부재',
    },
    {
      feature: '공인 수료증 및 자격증',
      cheonan: '천안시장 명의 수료증 + 등록 민간자격 전액 지원',
      others: '자격증 응시료·발급비 별도 청구 (10~20만원)',
    },
  ];

  return (
    <section id="benefits" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 mb-3">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            왜 천안시 시민 AI강사 과정인가요?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            배우고 끝나는 교육은 이제 그만!<br />
            <span className="text-indigo-600">진짜 출강하고 수익을 창출하는</span> 4대 독점 혜택
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            천안시의 적극적인 공공 지원과 국내 최고 강사 섭외 플랫폼 <strong>‘강사야(gangsaya.co.kr)’</strong>의 현장 네트워크가 결합하여 가장 완벽한 강사 데뷔 로드맵을 제공합니다.
          </p>
        </div>

        {/* 4 Core Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-slate-100 to-transparent -mr-8 -mt-8 rounded-full pointer-events-none group-hover:scale-125 transition-transform" />
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(benefit.iconName)}
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors">
                    {benefit.highlight}
                  </span>
                </div>

                <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                  {benefit.subtitle}
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center text-xs font-semibold text-indigo-600 group-hover:translate-x-1 transition-transform">
                <span>상세 내용 보기</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Gangsaya Collaboration Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 shadow-xl border border-indigo-900/60 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-400 text-slate-950">
                대한민국 No.1 강사 플랫폼 연계
              </span>
              <span className="text-xs text-indigo-300">
                (주)강사야 협약 공식 과정
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold">
              수료생 전원 ‘강사야’ 인증 강사 등록 및 전국 강사 검색 시스템 노출
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              기업체, 관공서, 학교 등 연간 1만 건 이상의 강사 섭외 요청이 발생하는 강사야에 수료생 전원의 프로필이 정식 등록되어 지속적인 강의 섭외 기회를 지원합니다.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a
              href="https://gangsaya.co.kr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-md"
            >
              <Globe2 className="w-4 h-4 text-indigo-600" />
              강사야 플랫폼 둘러보기
            </a>
          </div>
        </div>

        {/* Comparison Table: Cheonan Program vs Other Academies */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              비교할수록 명확한 <span className="text-indigo-600">천안시 과정의 압도적 차이</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              일반 사설 학원과 꼼꼼히 비교해 보세요. 공공이 보증하고 플랫폼이 연결합니다.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/70">
                    <th className="py-4 px-6 font-bold text-slate-700 w-1/4">비교 항목</th>
                    <th className="py-4 px-6 font-bold text-indigo-900 bg-indigo-50/80 w-5/12 border-x border-indigo-200">
                      <div className="flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-indigo-600 fill-indigo-600" />
                        <span>천안시 시민 AI강사 아카데미</span>
                        <span className="text-[11px] px-1.5 py-0.5 rounded bg-indigo-600 text-white font-semibold">본 과정</span>
                      </div>
                    </th>
                    <th className="py-4 px-6 font-medium text-slate-500 w-1/3">
                      일반 사설 AI 아카데미 / 타 교육
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-slate-900">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 font-bold text-indigo-700 bg-indigo-50/40 border-x border-indigo-100">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                          <span>{row.cheonan}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-slate-500">
                        <div className="flex items-center gap-2">
                          <X className="w-4 h-4 text-slate-400 shrink-0" />
                          <span>{row.others}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onOpenApply}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md transition-all active:scale-95"
            >
              <span>이 모든 혜택으로 지금 무료 신청하기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
