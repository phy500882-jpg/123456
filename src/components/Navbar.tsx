import React, { useState } from 'react';
import { 
  GraduationCap, 
  Menu, 
  X, 
  PhoneCall, 
  FileText, 
  Sparkles, 
  ChevronRight,
  Clock,
  ExternalLink
} from 'lucide-react';
import { COURSE_STATS } from '../data/courseData';

interface NavbarProps {
  onOpenApply: () => void;
  onOpenQuiz: () => void;
  onOpenBrochure: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenApply,
  onOpenQuiz,
  onOpenBrochure,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: '과정 소개', href: '#overview' },
    { name: '핵심 혜택', href: '#benefits' },
    { name: '8주 커리큘럼', href: '#curriculum' },
    { name: '출강 매칭 시스템', href: '#ecosystem' },
    { name: '명사 교수진', href: '#faculty' },
    { name: '수료생 후기', href: '#stories' },
    { name: '모집 요강', href: '#schedule' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Banner Ticker */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white text-xs sm:text-sm py-2 px-4 border-b border-indigo-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-rose-500 text-white animate-pulse">
              D-{COURSE_STATS.dDay} 마감임박
            </span>
            <span className="text-slate-300 hidden sm:inline">
              제{COURSE_STATS.batchNumber}기 천안시민 AI강사 양성 아카데미
            </span>
            <span className="text-amber-300 font-medium">
              정원 50명 중 {COURSE_STATS.currentApplicants}명 접수 완료! (잔여 8석)
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              접수마감: {COURSE_STATS.applicationDeadline}
            </span>
            <span className="hidden md:inline-block text-slate-400">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              수강료 전액 <strong className="text-emerald-400">0원(무료)</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & City Brand */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                    천안시 X 강사야
                  </span>
                  <span className="text-[11px] text-slate-700 hidden sm:inline">
                    공공-플랫폼 상생 프로젝트
                  </span>
                </div>
                <div className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight flex items-center gap-1.5">
                  천안시 시민 AI강사 아카데미
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-lg hover:text-indigo-600 hover:bg-slate-100/70 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-2.5">
              <button
                onClick={onOpenQuiz}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors border border-indigo-200"
                title="나에게 맞는 AI 강사 유형 알아보기"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                적합도 진단
              </button>
              
              <button
                onClick={onOpenBrochure}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                title="모집요강 및 강의계획서 PDF 보기"
              >
                <FileText className="w-3.5 h-3.5 text-slate-600" />
                요강 보기
              </button>

              <button
                onClick={onOpenApply}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                무료 수강신청
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenApply}
                className="px-3 py-1.5 text-xs font-bold text-white bg-indigo-600 rounded-lg shadow-xs"
              >
                수강신청
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-hidden"
                aria-label="메뉴 열기"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="grid grid-cols-2 gap-2 pb-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuiz();
                }}
                className="flex items-center justify-center gap-1.5 p-2.5 text-xs font-semibold text-indigo-700 bg-indigo-50 rounded-lg border border-indigo-200"
              >
                <Sparkles className="w-3.5 h-3.5" />
                적합도 진단
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrochure();
                }}
                className="flex items-center justify-center gap-1.5 p-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg"
              >
                <FileText className="w-3.5 h-3.5" />
                모집요강 보기
              </button>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-700">
              <span className="flex items-center gap-1">
                <PhoneCall className="w-3.5 h-3.5 text-indigo-600" />
                문의: 041-521-0000 (평일 9-18시)
              </span>
              <a
                href="https://gangsaya.co.kr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-slate-600 hover:text-indigo-600"
              >
                강사야 바로가기
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
