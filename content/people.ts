export const directorProfile = {
  name: "장지혜",
  role: "낭만커피연구소 소장",
  image: "/images/advisors/jangjh.png",
  education: [
    "이화여자대학교 식품생명공학과 졸업",
    "한국방송통신대학교 농학과 졸업",
    "단국대학교 문화예술대학원 커피학과 석사",
    "이화여자대학교 식품생명공학과 박사과정",
  ],
  credentials: [
    "SCA AST (Specialty Coffee Association Authorized SCA Trainer)",
    "Q Grader Instructor",
    "파스쿠찌 의정부 고산점 대표",
    "코리아 로스팅 커피 어워즈 심사 교육위원장",
  ],
  publications: [
    {
      title: "커피 프랜차이즈 매장의 물리적 환경이 소비자 만족도 및 재방문 의도에 미치는 영향",
      authors: "장지혜, 신혜경",
      journal: "한국커피문화연구",
      publisher: "한국커피협회",
      volume: "11(1)",
      pages: "273–306",
      date: "2025.06",
      field: "학제간연구",
      url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003225446",
    },
    {
      title: "브랜드 인지도·커피 품질·조명·브랜드 충성도가 소비자 웰빙 지각과 구전 행동에 미치는 영향: S-O-R 이론 기반 분석",
      authors: "장지혜",
      journal: "한국커피문화연구",
      publisher: "한국커피협회",
      volume: "12(1)",
      pages: "33–58",
      date: "2026.04",
      field: "학제간연구",
      url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003329120",
    },
    {
      title: "동물 모델에서 커피 체리(Cascara)의 항산화, 항염증 및 대사조절 효과: 체계적 문헌고찰",
      authors: "장지혜",
      journal: "대한통합의학회지",
      publisher: "대한통합의학회",
      volume: "14(2)",
      pages: "273–282",
      date: "2026.05",
      field: "보건학",
      url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003338311",
    },
    {
      title: "커피 품질, 가격 공정성, 물리적 환경, 로열티 프로그램이 브랜드 충성도에 미치는 영향",
      authors: "장지혜",
      journal: "외식경영연구",
      publisher: "한국외식경영학회",
      volume: "28(6)",
      pages: "119–145",
      date: "2025.12",
      field: "관광학",
      url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003293803",
    },
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
    image: "/images/advisors/parkjb.jpg",
  },
  {
    name: "정강현",
    title: "교수",
    details: ["서울과학기술대학교 식품공학과"],
    image: "/images/advisors/jungkh.jpg",
  },
  {
    name: "이길상",
    title: "교수",
    details: [
      "커피역사 인문학자",
      "한국학중앙연구원 교수",
    ],
    image: "/images/advisors/leegs.jpg",
  },
  {
    name: "박상현",
    title: "교수",
    details: [
      "화학자, 커피화학자문",
      // "한국원자력연구원(KAERI) 책임연구원",
      "University of Science and Technology 교수",
    ],
    image: "/images/advisors/parksh.avif",
  },
  {
    name: "전승민",
    title: "언론인",
    details: [
      "과학기술전문저술가",
      "e뉴스투데이 IT과학부장",
    ],
    image: "/images/advisors/jeonsm.jpg",
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
    image: "/images/advisors/yooyh.png",
  },
] as const;
