export interface CurriculumWeek {
  week: number;
  stage: string;
  stageColor: string;
  title: string;
  subtitle: string;
  hours: number;
  tools: string[];
  keyLearnings: string[];
  practiceProject: string;
  competencyOutcome: string;
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  photo: string;
  organization: string;
  careerYears: number;
  badges: string[];
  bio: string;
  specialties: string[];
  teachingPhilosophy: string;
  keyLectures: string[];
}

export interface SuccessStory {
  id: string;
  name: string;
  batch: string;
  ageGroup: string;
  previousCareer: string;
  currentRole: string;
  photo: string;
  quote: string;
  story: string;
  monthlyLectureHours: number;
  matchedOrgs: string[];
  topFeedback: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: '자격/선발' | '교육운영' | '출강연계' | '비용/혜택';
}

export interface PartnerOrg {
  id: string;
  name: string;
  category: '초·중·고교' | '노인/복지관' | '시민평생원' | '도서관/문화센터' | '청년/스타트업';
  location: string;
  activeLectures: number;
  description: string;
  requestedFields: string[];
}

export interface ApplicationFormData {
  fullName: string;
  phone: string;
  email: string;
  birthdate: string;
  residenceArea: string; // 천안 서북구, 천안 동남구, 천안 관내 직장인/대학생 등
  preferredTrack: '평일 오전반' | '평일 저녁반' | '주말 몰입반';
  targetAudience: string[]; // 시니어, 초중고, 직장인/소상공인, 다문화 등
  teachingExperience: '경험 없음(초보)' | '1년 미만' | '1~3년' | '3년 이상';
  motivation: string;
  hasLaptop: boolean;
  agreedPrivacy: boolean;
}

export interface ApplicationReceipt {
  receiptId: string;
  submittedAt: string;
  applicant: ApplicationFormData;
  interviewDate: string;
  status: '접수완료' | '서류검토중';
}

export interface QuizOption {
  id: string;
  text: string;
  subtext?: string;
  profileScore: {
    seniorFriendly?: number;
    youthEdutech?: number;
    businessProductivity?: number;
    creativeContent?: number;
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  helperText: string;
  options: QuizOption[];
}

export interface QuizResultProfile {
  typeCode: string;
  title: string;
  tagline: string;
  badge: string;
  matchScore: number;
  summary: string;
  strengths: string[];
  recommendedModules: string[];
  bestMatchingInstitutions: string[];
  recommendedTrack: string;
}
