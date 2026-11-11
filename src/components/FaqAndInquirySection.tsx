import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  PhoneCall, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Mail
} from 'lucide-react';
import { FAQ_ITEMS } from '../data/courseData';
import { FAQItem } from '../types';

export const FaqAndInquirySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqIds, setOpenFaqIds] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': true,
    'faq-3': true,
  });

  // Quick inquiry state
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryText, setInquiryText] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const categories = [
    { id: 'all', label: '전체 질문' },
    { id: '자격/선발', label: '지원 자격 & 선발' },
    { id: '비용/혜택', label: '수강료 & 혜택' },
    { id: '출강연계', label: '출강 매칭 & 강사료' },
    { id: '교육운영', label: '수업 운영 & 출석' },
  ];

  const filteredFaqs = selectedCategory === 'all'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter(f => f.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqIds(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim()) return;
    setInquirySubmitted(true);
    setTimeout(() => {
      // keep success feedback
    }, 500);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 mb-3">
            <HelpCircle className="w-4 h-4 text-indigo-600" />
            자주 묻는 질문 & 빠른 상담
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            궁금한 점을 미리 확인하세요
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            지원 자격, 교육 환경, 출강 매칭에 관해 예비 지원자분들께서 가장 자주 질문하시는 내용을 모았습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-1.5 pb-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Accordion Items */}
            <div className="space-y-3">
              {filteredFaqs.map((faq: FAQItem) => {
                const isOpen = openFaqIds[faq.id];
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all hover:border-indigo-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left p-5 flex items-start justify-between gap-4 select-none hover:bg-slate-50/70 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-600 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          Q
                        </span>
                        <div>
                          <span className="text-[11px] font-bold text-indigo-600 mr-2">
                            [{faq.category}]
                          </span>
                          <span className="text-sm sm:text-base font-bold text-slate-900">
                            {faq.question}
                          </span>
                        </div>
                      </div>
                      <div className="shrink-0 p-1 text-slate-400">
                        {isOpen ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/60 border-t border-slate-100 flex items-start gap-3">
                        <span className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          A
                        </span>
                        <div className="pt-0.5">
                          {faq.answer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: 1:1 Quick Consultation Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Form Box */}
            <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                    <MessageSquare className="w-3.5 h-3.5" />
                    1:1 빠른 유선 상담 신청
                  </div>
                  <span className="text-[11px] text-slate-400">당일 회신 원칙</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    더 궁금하신 점이 있으신가요?
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    지원 자격, 수업 일정 조율 등 전담 상담사가 친절하고 명쾌하게 안내해 드립니다.
                  </p>
                </div>

                {!inquirySubmitted ? (
                  <form onSubmit={handleInquirySubmit} className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        성함
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="홍길동"
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:border-indigo-400 outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        연락처
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="010-0000-0000"
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:border-indigo-400 outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        문의 사항 (선택)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="예: 주말반과 평일반 중 교차 수강이 가능한지 궁금합니다."
                        value={inquiryText}
                        onChange={(e) => setInquiryText(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:border-indigo-400 outline-hidden resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <Send className="w-3.5 h-3.5" />
                      상담 전화 요청하기 (무료)
                    </button>
                  </form>
                ) : (
                  <div className="p-4 rounded-2xl bg-indigo-950/80 border border-indigo-500/40 text-center space-y-2 py-6">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                    <h4 className="font-bold text-white text-base">
                      상담 요청이 정상 접수되었습니다
                    </h4>
                    <p className="text-xs text-slate-300">
                      {inquiryName} 님의 연락처({inquiryPhone})로 운영시간 내 신속하게 연락드리겠습니다.
                    </p>
                    <button
                      onClick={() => setInquirySubmitted(false)}
                      className="text-xs text-indigo-400 hover:underline pt-2 inline-block"
                    >
                      새로운 문의 남기기
                    </button>
                  </div>
                )}

              </div>
            </div>

            {/* Direct Call & Agency info */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">운영사무국 직통 전화</div>
                  <div className="text-xl font-black text-slate-900">
                    041-521-0000
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-500 space-y-1 pt-1 border-t border-slate-200">
                <div>• 평일 운영: 월~금 09:00 ~ 18:00 (점심 12:00~13:00)</div>
                <div>• 주말 및 공휴일: 1:1 온라인 신청 접수창구 운영</div>
                <div>• 이메일 문의: <span className="text-indigo-600">ai.cheonan@gangsaya.co.kr</span></div>
              </div>

              <div className="pt-2">
                <a
                  href="https://gangsaya.co.kr"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-white border border-slate-300 hover:border-indigo-400 text-slate-700 hover:text-indigo-600 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <span>강사야(gangsaya.co.kr) 공식 플랫폼 둘러보기</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
