import React from 'react';
import { 
  GraduationCap, 
  ShieldCheck, 
  ExternalLink, 
  PhoneCall, 
  Mail, 
  MapPin, 
  ArrowUp 
} from 'lucide-react';

interface FooterProps {
  onOpenApply: () => void;
  onOpenBrochure: () => void;
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenApply,
  onOpenBrochure,
  onOpenQuiz,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Top Footer Banner */}
      <div className="border-b border-slate-900 bg-slate-900/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-white text-base font-bold">
                천안시 시민 AI강사 양성 아카데미
              </div>
              <div className="text-slate-700 text-xs">
                천안시 X 강사야(gangsaya.co.kr) 디지털 상생 협력 프로젝트
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenQuiz}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
            >
              강사 적합도 진단
            </button>
            <button
              onClick={onOpenBrochure}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
            >
              모집요강 PDF
            </button>
            <button
              onClick={onOpenApply}
              className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-colors"
            >
              무료 수강신청
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: About Organization */}
          <div className="space-y-3">
            <div className="text-white font-bold text-sm">사업 주관 및 협력 기관</div>
            <p className="text-slate-700 leading-relaxed">
              본 아카데미는 천안시민의 평생학습권 신장과 디지털 전환 일자리 창출을 위해 천안시와 대한민국 대표 강사 플랫폼 강사야가 공동 추진하는 실무형 강사 양성 사업입니다.
            </p>
            <div className="flex items-center gap-2 pt-1 text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>전액 국비·시비 보조금 지원 사업</span>
            </div>
          </div>

          {/* Col 2: Contact & Office */}
          <div className="space-y-3">
            <div className="text-white font-bold text-sm">운영 사무국 안내</div>
            <div className="space-y-2 text-slate-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>충청남도 천안시 서북구 불당21로 67-12 천안미래산업창업파크 3층 모두의AI라운지</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>대표전화: 041-521-0000 (평일 09:00~18:00)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>공식 이메일: ai.cheonan@gangsaya.co.kr</span>
              </div>
            </div>
          </div>

          {/* Col 3: Platform Gangsaya Network */}
          <div className="space-y-3">
            <div className="text-white font-bold text-sm">강사야(Gangsaya) 네트워크</div>
            <p className="text-slate-700 leading-relaxed">
              대한민국 1위 강사 섭외·교육 프로그램 플랫폼. 수료생 대상 프로필 등록, 관공서·기업 출강 매칭, 전국 강사 네트워크를 지원합니다.
            </p>
            <div>
              <a
                href="https://gangsaya.co.kr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-semibold"
              >
                <span>gangsaya.co.kr 방문하기</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-3">
            <div className="text-white font-bold text-sm">바로가기</div>
            <ul className="space-y-2 text-slate-700">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">과정 소개 및 배경</a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-white transition-colors">4대 핵심 혜택</a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors">8주 정규 커리큘럼</a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-white transition-colors">천안시 128개 기관 매칭</a>
              </li>
              <li>
                <a href="#faculty" className="hover:text-white transition-colors">명사 교수진 소개</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">자주 묻는 질문(FAQ)</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-700">
          <div>
            © 2025 천안시 시민 AI강사 양성 아카데미 & (주)강사야. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">개인정보처리방침</span>
            <span>|</span>
            <span className="hover:text-slate-400 cursor-pointer">이용약관</span>
            <span>|</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors ml-2"
            >
              <span>맨 위로</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
