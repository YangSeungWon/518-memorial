export const factCheckData = [
  {
    id: 1,
    claim: '광주 시민들이 교도소를 습격해서 간첩들을 해방시켰다',
    verdict: '거짓',
    explanation:
      '1995년 검찰 수사와 당시 광주교도소장 한도희의 증언에 따르면, 실제 "교도소 습격"은 없었습니다. 당시 교도소에는 3공수여단 1,392명이 중무장 상태로 주둔 중이었고, 5차례 충돌은 모두 교도소 정문이 아닌 국도와 고속도로에서 발생했습니다. 피해자 대부분은 광주 상황을 외부에 알리러 나가던 일반 시민이었으며, 12명이 사망하여 교도소 부근에 가매장되었습니다. 한도희 교도소장은 "습격이 있었다면 시체가 교도소 주변에 있어야지, 왜 도로에 있나"라고 증언했습니다.',
    sources: [
      {
        name: '전두환 회고록 허위사실 판결 - 연합뉴스',
        url: 'https://www.yna.co.kr/view/AKR20170511067900054',
        description: '광주지법, 교도소 습격설 허위사실 판결',
      },
      {
        name: '광주교도소장 한도희 증언 - 연합뉴스 (1995)',
        url: 'https://n.news.naver.com/mnews/article/001/0003988115',
        description: '"습격 주장은 사실이 아니다" 당시 교도소장 직접 증언',
      },
      {
        name: '1995년 검찰 수사 결과 - 뉴스타파',
        url: 'https://newstapa.org/article/adGl-',
        description: '5차례 충돌 모두 국도/고속도로에서 발생, 외곽 봉쇄작전 중 민간인 사망',
      },
    ],
    category: '무장폭동설',
  },
  {
    id: 2,
    claim: '북한 특수군 600명이 광주에 침투했다',
    verdict: '거짓',
    explanation:
      '지만원 씨가 주장한 "북한군 개입설"은 사실이 아닙니다. 그가 북한군이라고 지목한 인물들은 실제로 당시 시민군이었던 광주 시민들로 확인되었습니다. 대법원은 2023년 지만원에게 명예훼손으로 징역 2년을 확정했습니다. 국군기무사령부도 1980년 당시 북한군 개입 증거를 찾지 못했다고 밝혔습니다.',
    sources: [
      {
        name: '지만원 징역 2년 확정 - YTN',
        url: 'https://www.ytn.co.kr/_ln/0103_202306151027168322',
        description: '2023년 대법원, 5·18 비하 발언으로 징역 2년 확정',
      },
      {
        name: '지만원 대법원 판결 - 한국경제',
        url: 'https://www.hankyung.com/article/202306157444i',
        description: '5·18 참여자를 북한군으로 지목한 혐의 유죄 확정',
      },
      {
        name: '5·18 북한군 개입설 팩트체크 - SBS',
        url: 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005765090',
        description: '기무사 자료에도 북한 개입 증거 없음',
      },
    ],
    category: '북한군 개입설',
  },
  {
    id: 3,
    claim: '5·18은 북한이 주도한 내란이었다',
    verdict: '거짓',
    explanation:
      '5·18은 신군부의 비상계엄 확대와 민주화 탄압에 대한 시민들의 자발적 저항이었습니다. 2011년 5월 25일 UNESCO가 5·18 기록물(문서 4,271권, 필름 2,017컷, 사진 1,733점)을 세계기록유산으로 등재하며 민주화운동으로 국제적 공인을 받았습니다. 1997년 대법원은 전두환, 노태우 등에게 내란죄를 확정했습니다.',
    sources: [
      {
        name: 'UNESCO 세계기록유산 등재 - 유네스코한국위원회',
        url: 'https://unesco.or.kr/1980년-인권기록유산-5-18-광주민주화운동-기록물/',
        description: '2011년 5월 25일 공식 등재, 세계 인권 역사적 가치 인정',
      },
      {
        name: '5·18 기록물 세계기록유산 - 518기념재단',
        url: 'https://518.org/base/menu/baseView?menuLevel=2&menuNo=3',
        description: '등재 과정 및 의의 공식 자료',
      },
      {
        name: '대법원 1997.4.17 선고 96도3376 판결',
        url: 'https://www.law.go.kr/판례/(1997.4.17,96도3376)',
        description: '전두환·노태우 내란죄 유죄 확정 판결문',
      },
    ],
    category: '북한군 개입설',
  },
  {
    id: 4,
    claim: '계엄군이 발포한 적이 없다',
    verdict: '거짓',
    explanation:
      '2017년 국립과학수사연구원이 전일빌딩에서 245개의 탄흔을 발견했고, 이 중 193개가 헬기에서 발사된 것으로 확인되었습니다. 2018년 2월 국방부는 이를 공식 인정했습니다. 또한 5월 21일 전남도청 앞 집단 발포는 수많은 증인과 영상 기록으로 명백히 입증되어 있습니다.',
    sources: [
      {
        name: '전일빌딩 탄흔 245개 발견 - 연합뉴스',
        url: 'https://www.yna.co.kr/view/AKR20170117152100054',
        description: '국과수, 193개가 헬기 사격에 의한 것으로 확인',
      },
      {
        name: '국방부 헬기사격 공식 인정 - KBS',
        url: 'https://news.kbs.co.kr/news/view.do?ncd=3603873',
        description: '2018년 2월 국방부 공식 발표',
      },
      {
        name: '5·18 헬기사격 조사위원회 보고서 - 한겨레',
        url: 'https://www.hani.co.kr/arti/society/society_general/830617.html',
        description: '헬기사격 진상규명 최종 보고',
      },
    ],
    category: '사실 왜곡',
  },
  {
    id: 5,
    claim: '시민들이 먼저 총을 쐈다',
    verdict: '거짓',
    explanation:
      '1980년 5월 21일 오후 1시경, 전남도청 앞에서 계엄군의 집단 발포가 먼저 있었고 30명 이상이 사망했습니다. 시민들이 무기를 탈취하기 시작한 것은 이 발포 직후인 오후 2시 30분경부터입니다(육군본부 자료: 나주경찰서 삼포지서가 최초). 시민 무장은 계엄군의 발포에 대한 자위적 대응이었습니다.',
    sources: [
      {
        name: '5·18 민주화운동 - 우리역사넷',
        url: 'https://contents.history.go.kr/mobile/kc/view.do?levelId=kc_i501000',
        description: '국사편찬위원회: 정오 집단발포 후 시민 무장 시작',
      },
      {
        name: '5·18 집단발포 시간순 기록 - 518기념재단',
        url: 'https://518.org/nsub.php?PID=010103',
        description: '5월 21일 오후 1시 도청앞 집단발포 공식 기록',
      },
      {
        name: '5·18 미국 비밀문서 집단발포 기록 - MBC',
        url: 'https://imnews.imbc.com/replay/2024/nwdesk/article/6599504_36515.html',
        description: '미국 비밀해제 문서에서도 계엄군 선발포 확인',
      },
    ],
    category: '사실 왜곡',
  },
  {
    id: 6,
    claim: '사망자 수가 과장되었다',
    verdict: '거짓',
    explanation:
      '2005년 5·18 민주유공자 유족회 등 4개 단체의 공식 발표에 따르면, 항쟁 당시 사망자 165명(총상 129명, 자상 9명, 타박상 17명), 행방불명자 65명, 상이 후 사망자 376명을 포함해 총 606명입니다. 사망자 평균연령은 27.5세이며, 최연소 사망자는 2세, 최고령은 72세입니다. 이 수치는 엄격한 심사를 거쳐 확정된 것이며, 오히려 암매장자와 미신고자를 고려하면 실제 피해는 더 클 것으로 추정됩니다. 과장이 아니라 오히려 축소되었을 가능성이 높습니다.',
    sources: [
      {
        name: '5·18 사망자 606명 공식 통계 - 노컷뉴스',
        url: 'https://www.nocutnews.co.kr/news/55243',
        description: '2005년 5월 4개 단체 공동발표, 세부 통계 포함',
      },
      {
        name: '5·18 사망자 중립적 DB 구축 - 노컷뉴스',
        url: 'https://www.nocutnews.co.kr/news/1037381',
        description: '최초 중립적·종합적 사망자 데이터베이스',
      },
      {
        name: '5·18 민주화운동 - 우리역사넷',
        url: 'https://contents.history.go.kr/mobile/kc/view.do?levelId=kc_i501000&code=kc_age_50',
        description: '국사편찬위원회 공식 희생자 통계',
      },
    ],
    category: '사실 왜곡',
  },
  {
    id: 7,
    claim: '광주사태는 폭동이었다',
    verdict: '거짓',
    explanation:
      '신군부가 붙인 "폭동" 명칭은 1988년 국회 청문회와 이후 법적 절차를 통해 공식적으로 부정되었습니다. 1995년 12월 21일 "5·18민주화운동 등에 관한 특별법"이 제정되어 민주화운동으로 법적 지위를 획득했고, 이에 따라 전두환·노태우 등 신군부가 사법 심판을 받았습니다.',
    sources: [
      {
        name: '5·18민주화운동 등에 관한 특별법 - 국가법령정보센터',
        url: 'https://www.law.go.kr/법령/5·18민주화운동등에관한특별법',
        description: '1995년 12월 21일 제정, 민주화운동으로 법적 규정',
      },
      {
        name: '5·18특별법 - 한국민족문화대백과사전',
        url: 'https://encykorea.aks.ac.kr/Article/E0078661',
        description: '특별법 제정 배경과 의의',
      },
      {
        name: '국가기록원 5·18민주화운동 등에 관한 특별법',
        url: 'https://theme.archives.go.kr//next/chronology/archiveDetail.do?isPop=Y&flag=1&evntId=0000012999',
        description: '법률 제5029호 원문 및 기록',
      },
    ],
    category: '명칭/성격 왜곡',
  },
  {
    id: 8,
    claim: '5·18 유공자만 명단을 숨기고 있다',
    verdict: '대부분 거짓',
    explanation:
      '실제로 피해 보상을 받은 4,296명의 이름은 1999년부터 광주 5·18기념공원 지하 "추모승화공간"에 오석 명패로 공개되어 있어 누구나 확인할 수 있습니다. 국가보훈처의 공식 유공자 데이터베이스만 개인정보보호법에 따라 비공개이며, 이는 다른 모든 유공자(국가유공자, 고엽제 후유증 환자, 특수임무유공자 등)에게 동일하게 적용됩니다. 대법원도 2020년 "명단 비공개가 정당하다"고 확정했습니다.',
    sources: [
      {
        name: '5·18기념공원 명단 공개 현황 - 한국일보',
        url: 'https://www.hankookilbo.com/News/Read/201902151274732475',
        description: '기념공원에 4,296명 이름 오석 명패로 공개',
      },
      {
        name: '대법원 5·18 유공자 명단 비공개 정당 판결 - KBC',
        url: 'https://www.ikbc.co.kr/사회/article/view/kbc202010100009',
        description: '2020년 대법원 확정 판결 (보훈처 DB 비공개)',
      },
      {
        name: '독립유공자와 5·18유공자 명단 공개 차이 - 뉴시스',
        url: 'https://www.newsis.com/view/NISX20190212_0000556276',
        description: '다른 유공자 명단도 동일하게 비공개',
      },
    ],
    category: '유공자 관련 왜곡',
  },
  {
    id: 9,
    claim: '5·18 유공자가 매달 420만원 연금을 받는다',
    verdict: '거짓',
    explanation:
      '5·18 민주유공자는 다른 국가유공자와 달리 매월 지급되는 연금이 없습니다. 1990년 이후 1회성 보상금(평균 4,324만원)을 받았을 뿐입니다. 반면 다른 국가유공자는 월 최저 39만원~최대 684만원의 연금을 받습니다. 오히려 5·18 유공자 10명 중 4명은 월 소득 100만원 이하로 최저생계비 이하입니다.',
    sources: [
      {
        name: '"매달 420만원 받는 유공자?" 5·18 소문의 진실 - SBS',
        url: 'https://news.sbs.co.kr/news/endPage.do?news_id=N1007195584',
        description: '5·18 유공자 연금 없음, 평균 보상금 4,324만원',
      },
      {
        name: '5·18 민주유공자 지원내용 - 국가보훈부',
        url: 'https://www.mpva.go.kr/mpva/contents.do?key=126',
        description: '국가보훈부 공식 지원내용 안내',
      },
      {
        name: '"5·18유공자가 연금받는다고요?" 가짜뉴스 피해 - 뉴스1',
        url: 'https://www.news1.kr/local/gwangju-jeonnam/4833573',
        description: '유공자 40%가 월 소득 100만원 이하',
      },
    ],
    category: '유공자 관련 왜곡',
  },
  {
    id: 10,
    claim: '5·18 유공자만 특별한 혜택을 받는다',
    verdict: '거짓',
    explanation:
      '5·18 유공자의 혜택(취업 가산점 5~10%, 의료지원, 교육지원 등)은 동일한 수준의 희생을 입은 다른 국가유공자와 동일합니다. 가스비·전기세 면제, 대출 특혜, 항공기 50% 할인 등은 존재하지 않는 혜택입니다. 취업 가산점 수혜자 중 5·18 유공자는 전체의 1.2%에 불과합니다(2017년 기준 391명/32,751명).',
    sources: [
      {
        name: '5·18 유공자·6·25 참전용사 혜택 비교 팩트체크 - 아주경제',
        url: 'https://www.ajunews.com/view/20200519143155587',
        description: '비교대상 오류, 동일 등급 국가유공자와 혜택 같음',
      },
      {
        name: '5·18민주유공자 대상요건 - 국가보훈부',
        url: 'https://www.mpva.go.kr/mpva/contents.do?key=124',
        description: '국가보훈부 공식 대상요건',
      },
      {
        name: '5·18유공자 귀족 예우설 - 518기념재단',
        url: 'https://518.org/base/board/read?boardManagementNo=61&boardNo=23040',
        description: '취업 가산점 수혜자 1.2%에 불과',
      },
    ],
    category: '유공자 관련 왜곡',
  },
  {
    id: 11,
    claim: '김대중이 5·18을 배후에서 조종했다',
    verdict: '거짓',
    explanation:
      '김대중은 5·18 하루 전인 5월 17일 밤에 이미 체포되어 감금 상태였습니다. 물리적으로 배후조종이 불가능했습니다. 신군부는 "학생·노조소요관련 배후조종" 혐의로 기소했으나, 이는 조작된 혐의였으며 2004년 재심에서 최종 무죄 판결을 받았습니다. 김대중은 감금 상태에서 50여 일이 지난 후에야 광주 상황을 알게 되었습니다.',
    sources: [
      {
        name: '5·18 전날 체포 "사형수 김대중 옥중 영상" 최초 공개 - MBC',
        url: 'https://imnews.imbc.com/replay/2020/nwdesk/article/5778057_32524.html',
        description: '5월 17일 체포, 50여 일 후 광주 상황 인지',
      },
      {
        name: '김대중 내란음모 조작 사건 - 위키백과',
        url: 'https://ko.wikipedia.org/wiki/김대중_내란음모사건',
        description: '2004년 재심 무죄 판결',
      },
      {
        name: '5·18 그날의 기록과 진실 - 518기념재단',
        url: 'https://518.org/base/contents/view?contentsNo=1&menuLevel=3&menuNo=1',
        description: '5월 17일 김대중 체포 기록',
      },
    ],
    category: '배후조종설',
  },
  {
    id: 12,
    claim: '5·18 유공자가 4,600명에서 9,700명으로 급증했다',
    verdict: '거짓',
    explanation:
      '카카오톡으로 퍼진 완전한 가짜뉴스입니다. 2018년 국가보훈처 공식 등록 기준 5·18 민주유공자는 4,415명입니다. "2억을 주면 유공자 가정에 입양되어 유공자가 될 수 있다"는 주장도 완전한 허위입니다. 입양으로 유공자 지위를 취득하는 것은 법적으로 불가능합니다.',
    sources: [
      {
        name: '"매달 420만원 받는 유공자?" 5·18 소문의 진실 - SBS',
        url: 'https://news.sbs.co.kr/news/endPage.do?news_id=N1007195584',
        description: '2018년 국가보훈처 기준 4,415명 확인',
      },
      {
        name: '5·18 민주유공자 대상요건 - 국가보훈부',
        url: 'https://www.mpva.go.kr/mpva/contents.do?key=124',
        description: '유공자 등록 요건 공식 안내',
      },
      {
        name: '"5·18유공자가 연금받는다고요?" 가짜뉴스 피해 - 뉴스1',
        url: 'https://www.news1.kr/local/gwangju-jeonnam/4833573',
        description: '카카오톡 허위정보 실태 보도',
      },
    ],
    category: '유공자 관련 왜곡',
  },
  {
    id: 13,
    claim: '전두환 회고록의 5·18 관련 내용은 사실이다',
    verdict: '거짓',
    explanation:
      '광주지법과 광주고법은 전두환 회고록의 51곳을 허위사실로 판단하고 출판·배포 금지 및 손해배상(7천만원)을 명령했습니다. 법원이 허위로 인정한 내용: 헬기사격 부인, 5·18을 "폭동"으로 규정, 광주교도소 북한 간첩 개입 주장, 계엄군 발포 명령 부인 등. 재판부는 "고증을 거친 객관적 자료에 기초하지 않은 것은 역사의 왜곡"이라고 판시했습니다.',
    sources: [
      {
        name: '전두환 회고록 출판·배포 금지 판결 - 법률신문',
        url: 'https://www.lawtimes.co.kr/news/120127',
        description: '2017년 광주지법 가처분 인용',
      },
      {
        name: '전두환 회고록 5·18 왜곡 판단 손해배상 판결 - 노컷뉴스',
        url: 'https://www.nocutnews.co.kr/news/5817247',
        description: '광주고법 항소심 7천만원 배상 판결',
      },
      {
        name: '전두환 회고록 담긴 33가지 허위 내용 - 518유족회',
        url: 'http://518kdfamily.org/article/34342',
        description: '법원 인정 허위사실 상세 목록',
      },
    ],
    category: '사실 왜곡',
  },
];

export const commonMisconceptions = [
  {
    question: '5·18 때 광주 시민들이 마구잡이로 총을 쐈나요?',
    answer:
      '아닙니다. 시민들은 계엄군의 집단 발포(5월 21일 오후 1시경) 이후에야 자위적 목적으로 무장했습니다. 시민군은 오히려 질서정연하게 활동했고, 무기 회수에도 협조했습니다. 계엄군 철수 후에도 약탈이나 범죄가 거의 없었던 것이 이를 증명합니다.',
    sources: [
      {
        name: '5·18 민주화운동 - 우리역사넷',
        url: 'https://contents.history.go.kr/mobile/kc/view.do?levelId=kc_i501000',
        description: '국사편찬위원회 공식 기록',
      },
      {
        name: '5·18 집단발포 기록 - 518기념재단',
        url: 'https://518.org/nsub.php?PID=010103',
        description: '시간순 기록',
      },
    ],
  },
  {
    question: '왜 광주에서만 이런 일이 일어났나요?',
    answer:
      '신군부가 광주를 집중 타겟으로 삼았기 때문입니다. 김대중이 전라도 출신이라는 이유로 호남 지역을 "불순세력의 본거지"로 규정했고, 다른 지역보다 훨씬 강경한 진압을 했습니다. 또한 광주의 저항이 강력했기 때문에 더 큰 희생이 발생했습니다.',
    sources: [
      {
        name: '5·18 광주 민주화 운동 - 한국민족문화대백과사전',
        url: 'https://encykorea.aks.ac.kr/Article/E0038496',
        description: '한국학중앙연구원 공식 기록',
      },
      {
        name: '12·12 및 5·18 사건 사법처리 - 민주화운동기념사업회',
        url: 'https://archives.kdemo.or.kr/contents/view/116',
        description: '신군부 내란 관련 사법처리 기록',
      },
    ],
  },
  {
    question: '군인들도 많이 죽었나요?',
    answer:
      '계엄사령부 발표에 따르면 군인 23명, 경찰 4명이 사망했습니다. 하지만 민간인 사망자(공식 165명 + 행방불명 65명 + 상이후사망 376명 = 606명)에 비하면 현저히 적습니다. 군의 피해 대부분은 시민군과의 교전보다는 작전 중 사고로 발생했습니다.',
    sources: [
      {
        name: '5·18 민주화운동 - 우리역사넷',
        url: 'https://contents.history.go.kr/mobile/kc/view.do?levelId=kc_i501000',
        description: '국사편찬위원회 공식 희생자 통계',
      },
      {
        name: '5·18 사망자 606명 통계 - 노컷뉴스',
        url: 'https://www.nocutnews.co.kr/news/55243',
        description: '2005년 4개 단체 공동발표',
      },
    ],
  },
];
