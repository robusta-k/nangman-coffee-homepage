export const directorProfile = {
  name: "장지혜",
  role: "낭만커피연구소 소장",
  education: [
    "이화여자대학교 식품공학과 졸업",
    "단국대학교 문화예술대학원 커피학과 석사",
  ],
  credentials: [
    "SCA AST",
    "Q Grader Instructor",
    "코리아 로스팅 커피 어워즈 운영위원",
  ],
} as const;

/**
 * 자문위원 표시 순서는 아래 배열의 행 순서와 같습니다.
 * 사진을 추가할 때는 public/images/advisors 폴더에 파일을 넣고
 * image에 "/images/advisors/파일명.jpg" 형식으로 경로를 입력하세요.
 */
export const advisors = [
  {
    name: "박진병",
    title: "교수",
    details: ["이화여자대학교 식품공학과"],
    image: null,
  },
  {
    name: "정강현",
    title: "교수",
    details: ["서울과학기술대학교 식품공학과"],
    image: null,
  },
  {
    name: "이길상",
    title: "교수",
    details: [
      "커피역사 인문학자",
      "한국학중앙연구원 교수",
    ],
    image: null,
  },
  {
    name: "박상현",
    title: "교수",
    details: [
      "화학자, 커피화학자문",
      // "한국원자력연구원(KAERI) 책임연구원",
      "University of Science and Technology 교수",
    ],
    image: null,
  },
  {
    name: "전승민",
    title: "언론인",
    details: [
      "과학기술전문저술가",
      "e뉴스투데이 IT과학부장",
    ],
    image: null,
  },
  {
    name: "김천수",
    title: "원장",
    details: ["김천수 한의원 원장"],
    image: null,
  },
  {
    name: "유용혁",
    title: "변리사",
    details: [
      "지적재산법률자문",
      "특허법인 영비 대표변리사",
    ],
    image: null,
  },
] as const;
