import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  Award, 
  Compass,
  Building2,
  BookOpen
} from 'lucide-react';
import { DIAGNOSTIC_QUESTIONS, QUIZ_PROFILES } from '../data/courseData';
import { QuizResultProfile } from '../types';

interface DiagnosisQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTrackAndApply: (recommendedTrack: string, targetAudience: string) => void;
}

export const DiagnosisQuizModal: React.FC<DiagnosisQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectTrackAndApply,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({
    seniorFriendly: 0,
    youthEdutech: 0,
    businessProductivity: 0,
    creativeContent: 0,
  });
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [resultProfile, setResultProfile] = useState<QuizResultProfile | null>(null);

  if (!isOpen) return null;

  const currentQ = DIAGNOSTIC_QUESTIONS[currentQuestionIndex];
  const totalQuestions = DIAGNOSTIC_QUESTIONS.length;

  const handleSelectOption = (optionId: string, profileScore: Record<string, number | undefined>) => {
    setSelectedAnswers(prev => ({ ...prev, [currentQ.id]: optionId }));

    // Accumulate scores
    const newScores = { ...scores };
    Object.entries(profileScore).forEach(([key, val]) => {
      if (val && key in newScores) {
        newScores[key as keyof typeof scores] += val;
      }
    });
    setScores(newScores);

    // If last question, compute winning profile
    if (currentQuestionIndex + 1 >= totalQuestions) {
      let maxKey = 'seniorFriendly';
      let maxVal = -1;
      Object.entries(newScores).forEach(([k, v]) => {
        if (v > maxVal) {
          maxVal = v;
          maxKey = k;
        }
      });
      const resolved = QUIZ_PROFILES[maxKey] || QUIZ_PROFILES.seniorFriendly;
      setResultProfile(resolved);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setScores({
      seniorFriendly: 0,
      youthEdutech: 0,
      businessProductivity: 0,
      creativeContent: 0,
    });
    setSelectedAnswers({});
    setResultProfile(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-slate-200 relative flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-amber-400 border border-indigo-400/30">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider">
                천안시민 맞춤형 AI 강사 역량 진단
              </div>
              <h3 className="text-lg sm:text-xl font-bold">
                {resultProfile ? '진단 결과 : 나의 AI 강사 프로필' : `3분 맞춤 강사유형 진단 (${currentQuestionIndex + 1}/${totalQuestions})`}
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
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {!resultProfile ? (
            /* Questions Flow */
            <div className="space-y-6">
              {/* Progress bar */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1.5">
                  <span>진행률</span>
                  <span className="text-indigo-600 font-bold">{Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-indigo-50 text-indigo-700">
                  QUESTION {currentQ.id}
                </span>
                <h4 className="text-xl font-bold text-slate-900 leading-snug">
                  {currentQ.question}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500">
                  {currentQ.helperText}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {currentQ.options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id, opt.profileScore)}
                    className="w-full text-left p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/40 transition-all flex items-start gap-4 group"
                  >
                    <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors">
                      {opt.id.split('-')[1].toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                        {opt.text}
                      </div>
                      {opt.subtext && (
                        <div className="text-xs text-slate-500 mt-1">
                          {opt.subtext}
                        </div>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 shrink-0 mt-1 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Profile Flow */
            <div className="space-y-6 animate-fade-in">
              {/* Match Header Badge */}
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  적합도 일치율 {resultProfile.matchScore}%
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {resultProfile.title}
                </h4>
                <p className="text-sm text-indigo-600 font-semibold">
                  "{resultProfile.tagline}"
                </p>
              </div>

              {/* Summary card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-slate-700 text-sm leading-relaxed">
                {resultProfile.summary}
              </div>

              {/* Strengths */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  발휘될 나만의 핵심 강점
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {resultProfile.strengths.map((str, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span>{str}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Institutions & Modules */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    추천 천안시 출강처
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {resultProfile.bestMatchingInstitutions.map((ins, iIdx) => (
                      <li key={iIdx}>• {ins}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    집중 추천 모듈
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {resultProfile.recommendedModules.map((mod, mIdx) => (
                      <li key={mIdx}>• {mod}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recommended Track Callout */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-bold text-amber-800">
                    가장 최적화된 추천 수강 트랙
                  </div>
                  <div className="text-base font-bold text-slate-900">
                    {resultProfile.recommendedTrack}
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-amber-400 text-slate-950 shrink-0">
                  우선 선발 대상
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          {resultProfile ? (
            <>
              <button
                onClick={handleReset}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                다시 테스트하기
              </button>
              <button
                onClick={() => {
                  onSelectTrackAndApply(
                    resultProfile.recommendedTrack.split(' : ')[0] || 'A트랙 : 평일 오전반',
                    resultProfile.title
                  );
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>이 진단 결과로 무료 수강신청하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            <div className="w-full text-center text-xs text-slate-400">
              선택 시 다음 문항으로 자동 이동합니다. (총 3문항)
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
