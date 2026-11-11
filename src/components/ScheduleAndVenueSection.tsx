import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  CheckCircle, 
  Car, 
  Train, 
  Bus, 
  AlertCircle,
  FileCheck,
  Send,
  UserCheck,
  Award
} from 'lucide-react';
import { SCHEDULE_TRACKS, COURSE_STATS } from '../data/courseData';

interface ScheduleAndVenueSectionProps {
  onOpenApply: () => void;
  onOpenBrochure: () => void;
}

export const ScheduleAndVenueSection: React.FC<ScheduleAndVenueSectionProps> = ({
  onOpenApply,
  onOpenBrochure,
}) => {
  const steps = [
    {
      num: 'STEP 1',
      title: '온라인 서류 접수',
      date: `~ ${COURSE_STATS.applicationDeadline}`,
      desc: '본 홈페이지에서 간편 신청서 작성 (거주지 확인 및 관심 분야 선택)',
      icon: <Send className="w-5 h-5 text-blue-600" />,
    },
    {
      num: 'STEP 2',
      title: '온라인 화상 인터뷰',
      date: '2025. 04. 17 (목) ~ 18 (금)',
      desc: '간단한 학습 의지 및 일정 참여 가능 여부 10분 비대면 확인',
      icon: <UserCheck className="w-5 h-5 text-indigo-600" />,
    },
    {
      num: 'STEP 3',
      title: '최종 합격자 발표',
      date: '2025. 04. 21 (월) 14:00',
      desc: '개별 SMS 문자 및 알림톡 발송 (트랙별 예비 합격자 별도 안내)',
      icon: <FileCheck className="w-5 h-5 text-emerald-600" />,
    },
    {
      num: 'STEP 4',
      title: '정규 개강 & 오리엔테이션',
      date: '2025. 04. 23 (수) 순차 개강',
      desc: '트랙별 첫 수업 진행 (AI 유료 계정 지급 및 실습 노트북 세팅)',
      icon: <Award className="w-5 h-5 text-amber-600" />,
    },
  ];

  return (
    <section id="schedule" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 mb-3">
            <Calendar className="w-4 h-4 text-blue-600" />
            제{COURSE_STATS.batchNumber}기 공식 모집 요강
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            내 일정에 맞게 선택하는<br />
            <span className="text-blue-600">3개 맞춤 트랙 & 교육 일정</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            평일 오전, 평일 저녁, 주말 몰입반 중 본인의 생활 패턴에 맞는 트랙을 선택하실 수 있습니다. (모든 트랙 총 48시간 동일 커리큘럼 제공)
          </p>
        </div>

        {/* 3 Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {SCHEDULE_TRACKS.map((track) => (
            <div
              key={track.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${track.badgeColor}`}>
                    {track.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    정원 {track.capacity}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {track.name}
                </h3>

                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">일정:</strong> {track.days}
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">시간:</strong> {track.time}
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">추천 대상:</strong> {track.target}
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">장소:</strong> {track.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <button
                  onClick={onOpenApply}
                  className="w-full py-3 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 hover:bg-blue-600 text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>이 트랙으로 지원하기</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selection Procedure Steps */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              선발 및 개강 절차 안내
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              공정하고 투명한 공공 절차에 따라 최종 수강생 50명을 선발합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((st, sIdx) => (
              <div
                key={sIdx}
                className="p-5 rounded-2xl bg-white border border-slate-200 relative shadow-2xs hover:border-blue-300 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
                  {st.icon}
                </div>
                <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-0.5">
                  {st.num}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  {st.title}
                </h4>
                <div className="text-xs font-semibold text-indigo-600 mb-2">
                  {st.date}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Venue & Directions */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Venue info */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
                <MapPin className="w-3.5 h-3.5" />
                오시는 길 및 실습 환경
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  모두의AI라운지@천안
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  충청남도 천안시 서북구 불당21로 67-12 (천안미래산업창업파크 3층 AI실습관)
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <Train className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">지하철/KTX:</strong> KTX·SRT 천안아산역 도보 10분 (1호선 아산역 환승 가능 / 쌍용역 차로 7분)
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <Bus className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">시내버스:</strong> 불당아이파크 / 불당상업지구 정류장 하차 (간선 1, 3, 20, 90번)
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <Car className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">주차 안내:</strong> 건물 지하 전용 주차장 수강생 전원 3시간 무료 주차 등록 지원
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <AlertCircle className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>실습용 듀얼모니터 PC 및 기가비트 무선 와이파이가 완비되어 있습니다.</span>
              </div>
            </div>

            {/* Right: Map Visual Mockup */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-300 relative shadow-md bg-slate-100 h-72 sm:h-80 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center mb-3">
                  <MapPin className="w-8 h-8 text-blue-600 animate-bounce" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  모두의AI라운지@천안 (불당동)
                </h4>
                <p className="text-xs text-slate-600 mt-1 max-w-sm">
                  천안 불당동 번화가 인접, 쾌적한 1인 1실습 환경과 첨단 4K 스튜디오 완비
                </p>
                <div className="mt-4 flex gap-2">
                  <a
                    href="https://map.naver.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  >
                    네이버 지도 길찾기
                  </a>
                  <a
                    href="https://map.kakao.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-yellow-400 text-slate-900 hover:bg-yellow-500 transition-colors"
                  >
                    카카오맵 길찾기
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
