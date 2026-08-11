export const navigation = [
  { label: "연구소 소개", href: "/about" },
  { label: "커피 연구", href: "/research" },
  { label: "교육·콘텐츠개발", href: "/education" },
  { label: "카페 솔루션", href: "/solutions" },
  { label: "프로젝트·협력", href: "/collaboration" },
  { label: "커피아카이브", href: "/archive" },
  { label: "소식", href: "/news" },
  { label: "문의", href: "/contact" },
] as const;

export const activityAreas = [
  { number: "01", title: "커피 연구", description: "자연적·과학적·인문적·사회적 현상을 통합적으로 탐구합니다.", href: "/research" },
  { number: "02", title: "교육·콘텐츠개발", description: "연구 지식을 체계화해 전문교육과 맞춤형 과정으로 발전시킵니다.", href: "/education" },
  { number: "03", title: "카페 솔루션", description: "기획과 운영부터 장비 유지관리까지 현장을 하나의 시스템으로 지원합니다.", href: "/solutions" },
  { number: "04", title: "프로젝트·협력", description: "대학·기업·기관·전문가를 연결해 새로운 가치를 함께 만듭니다.", href: "/collaboration" },
  { number: "05", title: "커피아카이브", description: "커피의 지식과 기술, 역사와 산업기록을 수집하고 보존합니다.", href: "/archive" },
] as const;

export const researchAreas = [
  ["01", "환경과 생명", "기후와 토양, 생태계와 커피식물의 생명현상을 연구합니다."],
  ["02", "생산과 가공", "테루아에서 수확, 발효, 건조, 저장과 유통까지 품질의 흐름을 살핍니다."],
  ["03", "과학과 기술", "로스팅 반응, 향기성분, 물과 추출, 장비기술을 탐구합니다."],
  ["04", "감각과 인간", "향미의 지각, 기억과 정서, 선호와 선택을 데이터로 이해합니다."],
  ["05", "문화와 사회", "커피의 역사와 문화, 예술, 공간 그리고 한국 커피산업의 기록을 연구합니다."],
  ["06", "산업과 데이터", "가치사슬과 경영, 소비자행동, IT와 지속 가능한 비즈니스를 연결합니다."],
] as const;

export const coffeeJourney = [
  "환경과 생명",
  "생산과 테루아",
  "가공과 저장",
  "과학과 기술",
  "감각과 인간",
  "역사와 문화",
  "산업과 사회",
] as const;
