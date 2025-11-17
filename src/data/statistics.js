export const casualtyStatistics = {
  official2005: {
    title: '5·18 단체 공식 발표 (2005년)',
    total: 606,
    breakdown: [
      { category: '항쟁 당시 사망', count: 165 },
      { category: '행방불명', count: 65 },
      { category: '상이 후 사망', count: 376 },
    ],
    note: '암매장자 및 미신고 인원을 고려하면 실제 피해는 더 클 것으로 추정',
  },
  democratizationFoundation: {
    title: '민주화운동기념사업회 통계',
    total: 5060,
    breakdown: [
      { category: '당시 사망', count: 154 },
      { category: '행방불명', count: 70 },
      { category: '부상자', count: 3208 },
      { category: '기타 피해', count: 1628 },
    ],
    note: '부상자와 구금자 등 모든 피해자 포함',
  },
  martial1980: {
    title: '1980년 계엄사령부 발표',
    total: 170,
    breakdown: [
      { category: '민간인', count: 144 },
      { category: '군인', count: 22 },
      { category: '경찰', count: 4 },
    ],
    note: '신군부 발표로 신뢰성에 의문. 실제보다 축소되었을 가능성 높음',
  },
};

export const unescoRecords = {
  registrationDate: '2011년 5월 25일',
  totalDocuments: 4271,
  totalFilms: 2017,
  totalPhotos: 1733,
  categories: [
    '공공기관 작성 공문서',
    '군 사법기관 재판 자료',
    '시민 성명서, 선언문, 일기, 취재수첩',
    '흑백 필름 및 사진',
    '항쟁 이후 시민 기록과 증언',
    '병원 치료 기록',
    '국회 진상조사 회의록',
    '국가 피해자 보상 자료',
    '미국 비밀 해제 문서',
  ],
  significance: [
    '동아시아 민주화 운동의 모범 사례',
    'UN 인권위원회 보상 규칙의 기준',
    '인류의 보편적 가치인 인권과 민주주의의 상징',
  ],
};

export const legalActions = [
  {
    year: 1988,
    event: '국회 5·18 진상조사특별위원회 구성',
    result: '광주청문회 실시',
  },
  {
    year: 1995,
    event: '5·18 민주화운동 등에 관한 특별법 제정',
    result: '법적 근거 마련',
  },
  {
    year: 1996,
    event: '전두환, 노태우 재판',
    result: '내란죄 및 내란목적살인죄 유죄 판결',
  },
  {
    year: 2018,
    event: '5·18 진상규명 특별법 제정',
    result: '진상규명조사위원회 설치',
  },
  {
    year: 2018,
    event: '국방부 헬기사격 조사',
    result: '전일빌딩 총탄자국이 헬기사격에 의한 것 확인',
  },
];

export const unresolvedIssues = [
  {
    issue: '최초 발포명령자',
    status: '미규명',
    description:
      '누가 시민들에게 발포하라는 명령을 내렸는지 여전히 밝혀지지 않음',
  },
  {
    issue: '헬기사격 명령자',
    status: '미규명',
    description: '헬기사격은 확인되었으나 누가 명령했는지는 불명',
  },
  {
    issue: '암매장 실태',
    status: '조사 중',
    description: '행방불명자들의 실제 매장 장소와 규모',
  },
  {
    issue: '전체 사망자 수',
    status: '미확정',
    description: '미신고 사망자를 포함한 실제 피해 규모',
  },
];
