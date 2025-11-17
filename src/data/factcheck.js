export const factCheckData = [
  {
    id: 1,
    claim: '광주 시민들이 교도소를 습격해서 간첩들을 해방시켰다',
    verdict: '거짓',
    explanation:
      '광주지방법원은 전두환 회고록에 나온 교도소 습격설을 명백한 허위사실로 판결했습니다. 당시 광주교도소 습격 시도는 있었으나 실패했고, 간첩 해방은 사실이 아닙니다.',
    sources: [
      {
        name: '전두환 회고록 허위사실 판결 - 연합뉴스',
        url: 'https://www.yna.co.kr/view/AKR20170511067900054',
        description: '광주지법, 교도소 습격설 허위사실 판결',
      },
      {
        name: '5·18 민주화운동/왜곡 - 나무위키',
        url: 'https://namu.wiki/w/5.18%20민주화운동/왜곡',
        description: '교도소 습격설 팩트체크',
      },
    ],
    category: '무장폭동설',
  },
  {
    id: 2,
    claim: '북한 특수군 600명이 광주에 침투했다',
    verdict: '거짓',
    explanation:
      '지만원 씨가 주장한 "북한군 개입설"은 사실이 아닙니다. 그가 황장엽이라고 지목한 인물은 실제로 당시 시민군이었던 박남선 씨로 확인되었습니다. 법원에서도 명예훼손으로 유죄 판결을 받았습니다.',
    sources: [
      {
        name: '지만원 5·18 명예훼손 유죄 확정 - KBS',
        url: 'https://news.kbs.co.kr/news/view.do?ncd=5198025',
        description: '대법원 유죄 확정 판결',
      },
      {
        name: '5·18 북한군 개입설 팩트체크 - 한겨레',
        url: 'https://www.hani.co.kr/arti/society/society_general/893919.html',
        description: '북한군 개입설 검증 결과',
      },
    ],
    category: '북한군 개입설',
  },
  {
    id: 3,
    claim: '5·18은 북한이 주도한 내란이었다',
    verdict: '거짓',
    explanation:
      '5·18은 신군부의 비상계엄 확대와 민주화 탄압에 대한 시민들의 자발적 저항이었습니다. UNESCO가 세계기록유산으로 등재하며 민주화운동으로 공식 인정했습니다.',
    sources: [
      {
        name: 'UNESCO 세계기록유산 등재',
        url: 'https://heritage.unesco.or.kr/1980년-인권기록유산-5·18-광주-민주화운동-기록물/',
        description: '유네스코 공식 등재 페이지',
      },
      {
        name: '대법원 12·12 및 5·18 판결문',
        url: 'https://www.law.go.kr/판례/대법원%201997.%204.%2017.%20선고%2096도3376%20전원합의체%20판결',
        description: '신군부 내란죄 유죄 판결',
      },
    ],
    category: '북한군 개입설',
  },
  {
    id: 4,
    claim: '계엄군이 발포한 적이 없다',
    verdict: '거짓',
    explanation:
      '2018년 국방부 조사에서 전일빌딩 10층의 총탄자국이 헬기사격에 의한 것임이 확인되었습니다. 또한 5월 21일 전남도청 앞 집단 발포는 수많은 증인과 기록으로 입증되어 있습니다.',
    sources: [
      {
        name: '국방부 전일빌딩 헬기사격 확인 - YTN',
        url: 'https://www.ytn.co.kr/_ln/0103_201801111003225851',
        description: '2018년 국방부 공식 조사 결과',
      },
      {
        name: '5·18 헬기사격 조사 결과 - 국방부',
        url: 'https://www.mnd.go.kr/user/newsInUserRecord.action?newsId=I_669&siteId=mnd&page=1&newsSeq=I_10016',
        description: '국방부 공식 발표',
      },
    ],
    category: '사실 왜곡',
  },
  {
    id: 5,
    claim: '시민들이 먼저 총을 쐈다',
    verdict: '거짓',
    explanation:
      '5월 21일 계엄군의 집단 발포가 먼저 있었고, 이후 분노한 시민들이 예비군 무기고와 경찰서에서 무기를 획득해 무장했습니다. 시민 무장은 계엄군의 발포에 대한 방어적 대응이었습니다.',
    sources: [
      {
        name: '5·18 민주화운동 타임라인 - 우리역사넷',
        url: 'https://contents.history.go.kr/mobile/kc/view.do?levelId=kc_i501000',
        description: '국사편찬위원회 공식 기록',
      },
      {
        name: '5·18 기록관 - 국가기록원',
        url: 'https://theme.archives.go.kr/next/518/paper4.do',
        description: '정부 공식 기록물',
      },
    ],
    category: '사실 왜곡',
  },
  {
    id: 6,
    claim: '사망자 수가 과장되었다',
    verdict: '부분적 사실/맥락 필요',
    explanation:
      '공식 집계된 사망자는 165명이지만, 행방불명자 65명, 상이 후 사망자 376명을 포함하면 606명입니다. 오히려 암매장자와 미신고자를 고려하면 실제 피해는 더 클 것으로 추정됩니다.',
    sources: [
      {
        name: '5·18 사망자 606명 공식 발표 - 노컷뉴스',
        url: 'https://www.nocutnews.co.kr/news/55243',
        description: '5·18 단체 공식 통계 발표 (2005년)',
      },
      {
        name: '5·18 희생자 기록 - 국가기록원',
        url: 'https://theme.archives.go.kr/next/518/paper4.do',
        description: '정부 공식 희생자 통계',
      },
      {
        name: '민주화운동기념사업회 통계',
        url: 'https://archives.kdemo.or.kr/isad/view/00881172',
        description: '신원확인 사망자 명단',
      },
    ],
    category: '사실 왜곡',
  },
  {
    id: 7,
    claim: '광주사태는 폭동이었다',
    verdict: '거짓',
    explanation:
      '신군부가 붙인 "폭동" 딱지는 1988년 국회 청문회와 이후 법적 절차를 통해 공식적으로 부정되었습니다. 5·18은 민주화운동으로 재규정되었고, 관련 특별법이 제정되었습니다.',
    sources: [
      {
        name: '5·18 민주화운동 등에 관한 특별법',
        url: 'https://www.law.go.kr/법령/5·18민주화운동등에관한특별법',
        description: '1995년 제정, 민주화운동으로 법적 규정',
      },
      {
        name: 'UNESCO 세계기록유산 등재',
        url: 'https://heritage.unesco.or.kr/1980년-인권기록유산-5·18-광주-민주화운동-기록물/',
        description: '2011년 세계기록유산 등재',
      },
      {
        name: '한국민족문화대백과사전 - 5·18',
        url: 'https://encykorea.aks.ac.kr/Article/E0038496',
        description: '학술적 정의와 역사적 평가',
      },
    ],
    category: '명칭/성격 왜곡',
  },
];

export const commonMisconceptions = [
  {
    question: '5·18 때 광주 시민들이 마구잡이로 총을 쐈나요?',
    answer:
      '아닙니다. 시민들은 계엄군의 집단 발포(5월 21일) 이후에야 자위적 목적으로 무장했습니다. 시민군은 오히려 질서정연하게 활동했고, 무기 회수에도 협조했습니다. 계엄군 철수 후에도 약탈이나 범죄가 거의 없었던 것이 이를 증명합니다.',
    sources: [
      {
        name: '우리역사넷 - 5·18 기록',
        url: 'https://contents.history.go.kr/mobile/kc/view.do?levelId=kc_i501000',
      },
    ],
  },
  {
    question: '왜 광주에서만 이런 일이 일어났나요?',
    answer:
      '신군부가 광주를 집중 타겟으로 삼았기 때문입니다. 김대중이 전라도 출신이라는 이유로 호남 지역을 "불순세력의 본거지"로 규정했고, 다른 지역보다 훨씬 강경한 진압을 했습니다. 또한 광주의 저항이 강력했기 때문에 더 큰 희생이 발생했습니다.',
    sources: [
      {
        name: '한국민족문화대백과사전',
        url: 'https://encykorea.aks.ac.kr/Article/E0038496',
      },
    ],
  },
  {
    question: '군인들도 많이 죽었나요?',
    answer:
      '계엄사령부 발표에 따르면 군인 22명, 경찰 4명이 사망했습니다. 하지만 민간인 사망자(공식 165명, 추정 그 이상)에 비하면 현저히 적습니다. 군의 피해 대부분은 시민군과의 교전보다는 작전 중 사고로 발생했습니다.',
    sources: [
      {
        name: '국가기록원 5·18 기록',
        url: 'https://theme.archives.go.kr/next/518/paper4.do',
      },
    ],
  },
];
