import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  FileText, 
  CheckCircle2, 
  Building2, 
  Award,
  Calendar,
  Clock,
  Sparkles
} from 'lucide-react';
import { COURSE_STATS, CURRICULUM_WEEKS, SCHEDULE_TRACKS } from '../data/courseData';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApply: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  onOpenApply,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl border border-slate-200 relative flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                천안시 공고 제2025-04호 공식 요강
              </div>
              <h3 className="text-sm sm:text-base font-bold">
                천안시 시민 AI강사 양성과정 모집요강 & 종합 강의계획서
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-1 text-xs"
              title="인쇄 또는 PDF로 저장"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">인쇄/저장</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Content View */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-800 text-sm leading-relaxed print:p-0">
          
          {/* Document Top Title */}
          <div className="text-center pb-6 border-b-2 border-slate-900 space-y-2">
            <div className="inline-block px-3 py-1 bg-slate-100 rounded text-xs font-bold text-slate-700">
              [2025 천안시 디지털 리터러시 인재 양성 사업]
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              제{COURSE_STATS.batchNumber}기 천안시 시민 AI강사 양성 아카데미 모집요강
            </h1>
            <p className="text-xs text-slate-700">
              주최: 천안시 | 주관: 모두의AI라운지@천안 | 협력: (주)강사야 (gangsaya.co.kr)
            </p>
          </div>

          {/* Section 1: Objective */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-slate-950 flex items-center gap-2 border-l-4 border-indigo-600 pl-2">
              1. 추진 목적 및 교육 개요
            </h2>
            <p className="text-xs sm:text-sm text-slate-700">
              본 과정은 생성형 인공지능(AI)의 급격한 확산에 발맞추어 천안시민의 디지털 격차를 해소하고, 경력단절 여성, 시니어, 청년 등 시민 스스로가 지역사회 내 전문 강사로 활동할 수 있도록 지원하는 <strong>‘배움에서 나눔과 일자리로’</strong>의 선순환 공공 교육 프로젝트입니다.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs">
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-700 block">수강료</span>
                <strong className="text-indigo-600 text-sm">전액 무료 (0원)</strong>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-700 block">총 이수시간</span>
                <strong className="text-slate-900 text-sm">8주 (총 48시간)</strong>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-700 block">선발 인원</span>
                <strong className="text-slate-900 text-sm">50명 (3개 트랙)</strong>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-700 block">지원 자격</span>
                <strong className="text-slate-900 text-sm">천안시민 및 재직자</strong>
              </div>
            </div>
          </div>

          {/* Section 2: Tracks */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-slate-950 flex items-center gap-2 border-l-4 border-indigo-600 pl-2">
              2. 개설 트랙 및 일정 안내
            </h2>
            <div className="space-y-2">
              {SCHEDULE_TRACKS.map(tr => (
                <div key={tr.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="font-bold text-slate-900 text-sm">{tr.name}</span>
                    <span className="ml-2 text-slate-700">({tr.days} / {tr.time})</span>
                    <p className="text-slate-700 mt-0.5">{tr.target}</p>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 rounded-md bg-white border border-slate-300 font-semibold text-slate-700">
                    정원 {tr.capacity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Curriculum Overview */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-slate-950 flex items-center gap-2 border-l-4 border-indigo-600 pl-2">
              3. 8주 정규 커리큘럼 및 주요 산출물
            </h2>
            <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-100 font-bold text-slate-700 border-b border-slate-200">
                  <tr>
                    <th className="p-2.5 w-16 text-center">주차</th>
                    <th className="p-2.5 w-32">단계</th>
                    <th className="p-2.5">교과목명 및 핵심 실습 내용</th>
                    <th className="p-2.5 w-44">실습 산출물</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {CURRICULUM_WEEKS.map(w => (
                    <tr key={w.week} className="hover:bg-slate-50">
                      <td className="p-2.5 text-center font-bold text-indigo-700">{w.week}주</td>
                      <td className="p-2.5 font-medium text-slate-700">{w.stage}</td>
                      <td className="p-2.5 font-semibold text-slate-900">
                        {w.title}
                        <div className="text-[11px] font-normal text-slate-700 mt-0.5">{w.subtitle}</div>
                      </td>
                      <td className="p-2.5 text-slate-700 font-medium">{w.practiceProject}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Benefits & Placement */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-slate-950 flex items-center gap-2 border-l-4 border-indigo-600 pl-2">
              4. 수료자 특전 및 사후 출강 지원
            </h2>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-5">
              <li>천안시장 명의 공인 수료증 발급 (출석률 80% 및 최종 시강 통과 시)</li>
              <li>대한민국 No.1 강사 섭외 플랫폼 <strong>‘강사야(gangsaya.co.kr)’</strong> 인증 강사 Pool 공식 등재</li>
              <li>수료자 1인당 4K 모의 시강 비디오 포트폴리오 및 전문 프로필 사진 무료 제작</li>
              <li>천안시 관내 128개 수요처(초·중·고교, 노인종합복지관, 도서관, 주민자치센터 등) 우선 파견 및 공공 강사료 지급</li>
              <li>한국직업능력연구원 등록 민간자격 ‘생성형AI 교육전문가’ 취득 지원</li>
            </ul>
          </div>

          {/* Official Seal / Contact */}
          <div className="pt-6 border-t border-slate-200 text-center space-y-1 text-xs text-slate-700">
            <p className="font-bold text-slate-900 text-sm">
              천 안 시 장 · 모 두 의 A I 라 운 지 @ 천 안 · ( 주 ) 강 사 야
            </p>
            <p>문의처: 천안시 인재양성과 (041-521-0000) | 이메일: ai.cheonan@gangsaya.co.kr</p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-200 transition-colors flex items-center gap-1.5 border border-slate-300"
          >
            <Download className="w-3.5 h-3.5" />
            PDF 저장 / 인쇄
          </button>
          
          <button
            onClick={() => {
              onClose();
              onOpenApply();
            }}
            className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <span>지금 바로 수강신청하기</span>
          </button>
        </div>

      </div>
    </div>
  );
};
