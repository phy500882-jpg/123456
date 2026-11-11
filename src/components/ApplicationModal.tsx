import React, { useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Printer, 
  FileText, 
  ShieldCheck, 
  Sparkles, 
  HelpCircle,
  Clock,
  Calendar
} from 'lucide-react';
import { ApplicationFormData, ApplicationReceipt } from '../types';
import { COURSE_STATS } from '../data/courseData';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrack?: string;
  initialTargetAudience?: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  initialTrack,
  initialTargetAudience,
}) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    phone: '',
    email: '',
    birthdate: '',
    residenceArea: '천안시 서북구 거주',
    preferredTrack: (initialTrack?.includes('저녁') ? '평일 저녁반' : initialTrack?.includes('주말') ? '주말 몰입반' : '평일 오전반'),
    targetAudience: initialTargetAudience ? [initialTargetAudience] : ['시니어 어르신 디지털'],
    teachingExperience: '경험 없음(초보)',
    motivation: '',
    hasLaptop: true,
    agreedPrivacy: true,
  });

  const [receipt, setReceipt] = useState<ApplicationReceipt | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const audienceOptions = [
    '시니어 어르신 디지털',
    '초·중·고 학생 에듀테크',
    '직장인 & 소상공인 업무자동화',
    '도서관 & 문화예술 창작 AI',
  ];

  const handleAudienceToggle = (item: string) => {
    setFormData(prev => {
      const exists = prev.targetAudience.includes(item);
      if (exists) {
        if (prev.targetAudience.length === 1) return prev; // keep at least 1
        return { ...prev, targetAudience: prev.targetAudience.filter(t => t !== item) };
      } else {
        return { ...prev, targetAudience: [...prev.targetAudience, item] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('지원자 성명을 입력해주세요.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage('올바른 휴대폰 번호를 입력해주세요. (예: 010-1234-5678)');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('유효한 이메일 주소를 입력해주세요.');
      return;
    }
    if (!formData.motivation.trim()) {
      setErrorMessage('지원 동기 및 향후 활동 포부를 간단히 작성해주세요.');
      return;
    }
    if (!formData.agreedPrivacy) {
      setErrorMessage('개인정보 수집 및 활용에 동의하셔야 신청이 완료됩니다.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const randomReceiptNum = `CAI-2025-${Math.floor(1000 + Math.random() * 9000)}`;
      const newReceipt: ApplicationReceipt = {
        receiptId: randomReceiptNum,
        submittedAt: new Date().toLocaleString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }),
        applicant: { ...formData },
        interviewDate: '2025년 04월 17일(목) ~ 18일(금) 개별 안내',
        status: '접수완료',
      };
      setReceipt(newReceipt);
      setIsSubmitting(false);
    }, 600);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-slate-200 relative flex flex-col max-h-[94vh]">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-amber-300 border border-blue-400/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-blue-300 uppercase tracking-wider">
                  천안시 공식 인재양성 공모
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-rose-500 text-white font-bold">
                  수강료 0원
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold">
                {receipt ? '수강신청 접수증 (정상 접수)' : `천안시 시민 AI강사 양성과정 무료 수강신청`}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6">
          {!receipt ? (
            /* Application Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Notice Banner */}
              <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong>천안시민 우선 선발 혜택 안내:</strong> 천안시 거주자 및 관내 재직/재학 중인 분은 전액 무료(수강료·교재·AI계정)로 수강 가능하며, 수료 후 관내 128개 기관 및 강사야 플랫폼 출강 우선권이 주어집니다.
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-semibold">
                  ⚠️ {errorMessage}
                </div>
              )}

              {/* 1. 기본 인적사항 */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  1. 지원자 기본 인적사항
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      성명 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="홍길동"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      생년월일 (6자리) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="예: 820514"
                      maxLength={8}
                      value={formData.birthdate}
                      onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      휴대전화 번호 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="010-1234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      이메일 주소 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="example@naver.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    천안시 연고 확인 <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.residenceArea}
                    onChange={(e) => setFormData({ ...formData, residenceArea: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-hidden"
                  >
                    <option value="천안시 서북구 거주">천안시 서북구 거주 (불당, 두정, 쌍용, 백석, 성정, 직산 등)</option>
                    <option value="천안시 동남구 거주">천안시 동남구 거주 (신부, 청수, 신방, 원성, 목천 등)</option>
                    <option value="천안시 소재 직장 재직자">천안시 소재 직장 재직 중 (증빙 가능)</option>
                    <option value="천안시 소재 대학교 재학/휴학생">천안시 소재 대학교 재학/휴학 중 (나사렛대, 백석대, 단국대, 상명대 등)</option>
                    <option value="충남도내 인접 시군 거주자">인접 시군 거주자 (아산, 세종, 평택 등 - 정원 외 심사)</option>
                  </select>
                </div>
              </div>

              {/* 2. 희망 트랙 및 관심 분야 */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  2. 희망 트랙 및 활동 분야
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    수강 희망 트랙 선택 <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { id: '평일 오전반', time: '화·목 10:00~13:00' },
                      { id: '평일 저녁반', time: '월·수 19:00~22:00' },
                      { id: '주말 몰입반', time: '매주 토 10:00~17:00' },
                    ].map(tr => (
                      <button
                        type="button"
                        key={tr.id}
                        onClick={() => setFormData({ ...formData, preferredTrack: tr.id as any })}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          formData.preferredTrack === tr.id
                            ? 'border-indigo-600 bg-indigo-50/80 text-indigo-900 ring-2 ring-indigo-500/20 font-bold'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className="text-xs">{tr.id}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{tr.time}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    향후 희망 강의 대상 (중복 선택 가능)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {audienceOptions.map(aud => {
                      const isChecked = formData.targetAudience.includes(aud);
                      return (
                        <button
                          type="button"
                          key={aud}
                          onClick={() => handleAudienceToggle(aud)}
                          className={`p-2.5 rounded-lg border text-left text-xs transition-all flex items-center justify-between ${
                            isChecked
                              ? 'border-indigo-500 bg-indigo-50 text-indigo-900 font-semibold'
                              : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <span>{aud}</span>
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    이전 강의 또는 교육 지도 경험
                  </label>
                  <select
                    value={formData.teachingExperience}
                    onChange={(e) => setFormData({ ...formData, teachingExperience: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-hidden"
                  >
                    <option value="경험 없음(초보)">경험 없음 (완전 초보자 - 눈높이 맞춤 지도)</option>
                    <option value="1년 미만">1년 미만 (사내 교육 또는 소규모 스터디 경험)</option>
                    <option value="1~3년">1~3년 (방과후, 문화센터, 학원 등 출강 이력 있음)</option>
                    <option value="3년 이상">3년 이상 (전문 강사 경력 보유 - AI 심화 전향)</option>
                  </select>
                </div>
              </div>

              {/* 3. 지원 동기 및 포부 */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  3. 지원 동기 및 향후 활동 포부 <span className="text-rose-500">*</span>
                </div>
                <div>
                  <textarea
                    required
                    rows={3}
                    placeholder="본 과정에 지원하게 된 계기와 수료 후 천안시민들을 위해 어떤 AI 강의를 진행하고 싶으신지 자유롭게 적어주세요. (컴퓨터 초보라도 열정과 나눔 의지만 있다면 충분합니다)"
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-hidden resize-none"
                  />
                </div>

                {/* Laptop confirmation */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="laptopCheck"
                    checked={formData.hasLaptop}
                    onChange={(e) => setFormData({ ...formData, hasLaptop: e.target.checked })}
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                  />
                  <label htmlFor="laptopCheck" className="text-xs text-slate-700 select-none">
                    실습 시 개인 노트북 지참 가능 (※ 미지참 시 교육장 고사양 PC 무료 이용 가능)
                  </label>
                </div>

                {/* Privacy agreement */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="privacyCheck"
                    required
                    checked={formData.agreedPrivacy}
                    onChange={(e) => setFormData({ ...formData, agreedPrivacy: e.target.checked })}
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300 mt-0.5"
                  />
                  <label htmlFor="privacyCheck" className="select-none leading-relaxed">
                    <strong className="text-slate-800">[필수] 개인정보 수집 및 이용 동의:</strong> 천안시 시민 AI강사 양성과정 선발 심사, 교육 운영, 출석 관리 및 ‘강사야’ 출강 매칭을 위한 개인정보 처리에 동의합니다.
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>접수 처리 중...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>천안시 시민 AI강사 수강신청 완료하기 (전액 무료)</span>
                    </>
                  )}
                </button>
                <div className="text-[11px] text-center text-slate-600 mt-2">
                  신청 즉시 접수증이 발행되며, 기재하신 연락처로 알림톡이 자동 발송됩니다.
                </div>
              </div>

            </form>
          ) : (
            /* Application Receipt Modal View */
            <div className="space-y-6 animate-fade-in" id="printable-receipt">
              
              {/* Receipt Header Callout */}
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1.5">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-2 shadow-sm">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  정상 접수 완료
                </span>
                <h4 className="text-2xl font-extrabold text-slate-900">
                  수강신청이 성공적으로 접수되었습니다
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  {receipt.applicant.fullName} 님의 소중한 지원에 감사드립니다. 기재하신 휴대전화({receipt.applicant.phone})로 접수 확인 문자가 발송되었습니다.
                </p>
              </div>

              {/* Official Receipt Box */}
              <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-[10px] font-bold text-slate-700 uppercase">공식 접수번호</span>
                    <div className="text-xl font-black text-indigo-700 font-mono">
                      {receipt.receiptId}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-medium text-slate-700">접수 일시</span>
                    <div className="text-xs font-semibold text-slate-700">
                      {receipt.submittedAt}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-700">지원자 성명:</span>
                    <strong className="text-slate-900 ml-1.5">{receipt.applicant.fullName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-700">거주 구분:</span>
                    <strong className="text-slate-900 ml-1.5">{receipt.applicant.residenceArea}</strong>
                  </div>
                  <div>
                    <span className="text-slate-700">신청 트랙:</span>
                    <strong className="text-indigo-600 ml-1.5">{receipt.applicant.preferredTrack}</strong>
                  </div>
                  <div>
                    <span className="text-slate-700">수강료:</span>
                    <strong className="text-emerald-600 ml-1.5">0원 (전액 국비·시비 지원)</strong>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 text-xs">
                  <div className="text-slate-700 mb-1">희망 강의 대상:</div>
                  <div className="flex flex-wrap gap-1">
                    {receipt.applicant.targetAudience.map((aud, aIdx) => (
                      <span key={aIdx} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                        {aud}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 space-y-1">
                  <div className="font-bold flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-700" />
                    향후 일정 안내 (서류 심사 및 비대면 인터뷰)
                  </div>
                  <div>• 서류 검토: 접수 마감 후 순차 심사</div>
                  <div>• 온라인 인터뷰: {receipt.interviewDate}</div>
                  <div>• 최종 합격자 발표: 2025. 04. 21 (월) 개별 문자 통보</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors flex items-center justify-center gap-1.5 border border-slate-300"
                >
                  <Printer className="w-4 h-4 text-slate-600" />
                  <span>접수증 인쇄 / PDF 저장</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:flex-1 py-3 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors flex items-center justify-center"
                >
                  확인 완료 (홈페이지로 이동)
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
