// 직업 적성 테스트 질문 (Holland의 RIASEC 모델 기반)
const careerQuestions = [
    {
        id: 1,
        question: "기계나 도구를 다루는 작업을 할 때 어떤 기분이 드나요?",
        icon: "fas fa-tools",
        options: [
            { text: "매우 흥미롭고 재미있다", type: "realistic", score: 3 },
            { text: "어느 정도 할 만하다", type: "realistic", score: 2 },
            { text: "별로 관심이 없다", type: "social", score: 1 },
            { text: "전혀 하고 싶지 않다", type: "artistic", score: 1 }
        ]
    },
    {
        id: 2,
        question: "복잡한 문제를 분석하고 해결하는 일에 대해 어떻게 생각하나요?",
        icon: "fas fa-microscope",
        options: [
            { text: "매우 흥미진진하고 도전적이다", type: "investigative", score: 3 },
            { text: "시간이 걸리지만 보람있다", type: "investigative", score: 2 },
            { text: "너무 복잡해서 피하고 싶다", type: "conventional", score: 1 },
            { text: "혼자서는 힘들 것 같다", type: "social", score: 1 }
        ]
    },
    {
        id: 3,
        question: "창작 활동(그림, 음악, 글쓰기 등)을 할 때의 기분은?",
        icon: "fas fa-palette",
        options: [
            { text: "시간 가는 줄 모르고 몰입한다", type: "artistic", score: 3 },
            { text: "표현하는 재미가 있다", type: "artistic", score: 2 },
            { text: "가끔 하는 정도면 충분하다", type: "social", score: 1 },
            { text: "재능이 없어서 어렵다", type: "conventional", score: 1 }
        ]
    },
    {
        id: 4,
        question: "다른 사람을 도와주거나 가르치는 일에 대한 생각은?",
        icon: "fas fa-hands-helping",
        options: [
            { text: "매우 보람되고 의미있다", type: "social", score: 3 },
            { text: "사람들과 함께하는 것이 즐겁다", type: "social", score: 2 },
            { text: "가끔은 괜찮지만 부담스럽다", type: "artistic", score: 1 },
            { text: "혼자 일하는 것이 더 편하다", type: "investigative", score: 1 }
        ]
    },
    {
        id: 5,
        question: "새로운 사업이나 프로젝트를 기획하고 추진하는 것은?",
        icon: "fas fa-rocket",
        options: [
            { text: "매우 흥미롭고 도전하고 싶다", type: "enterprising", score: 3 },
            { text: "성공했을 때의 성취감이 클 것 같다", type: "enterprising", score: 2 },
            { text: "리스크가 너무 커서 부담스럽다", type: "conventional", score: 1 },
            { text: "안정적인 일을 선호한다", type: "conventional", score: 2 }
        ]
    },
    {
        id: 6,
        question: "규칙적이고 체계적인 사무 업무에 대한 생각은?",
        icon: "fas fa-clipboard-list",
        options: [
            { text: "정확하고 질서있게 처리하는 것이 좋다", type: "conventional", score: 3 },
            { text: "안정적이고 예측 가능해서 좋다", type: "conventional", score: 2 },
            { text: "반복적이어서 지루할 것 같다", type: "artistic", score: 1 },
            { text: "더 창의적인 일을 하고 싶다", type: "artistic", score: 2 }
        ]
    },
    {
        id: 7,
        question: "실험실에서 연구하는 과학자의 일상이 어떨 것 같나요?",
        icon: "fas fa-flask",
        options: [
            { text: "새로운 발견의 연속이라 흥미로울 것 같다", type: "investigative", score: 3 },
            { text: "깊이 있는 지식을 쌓을 수 있어 좋을 것 같다", type: "investigative", score: 2 },
            { text: "너무 혼자만의 시간이 많을 것 같다", type: "social", score: 1 },
            { text: "실용적이지 않아 보인다", type: "realistic", score: 1 }
        ]
    },
    {
        id: 8,
        question: "건축 현장에서 건물을 짓는 일에 대한 생각은?",
        icon: "fas fa-hard-hat",
        options: [
            { text: "눈에 보이는 결과물이 있어 보람될 것 같다", type: "realistic", score: 3 },
            { text: "손으로 만드는 일이 재미있을 것 같다", type: "realistic", score: 2 },
            { text: "너무 힘들고 위험할 것 같다", type: "conventional", score: 1 },
            { text: "실내 작업을 선호한다", type: "conventional", score: 1 }
        ]
    },
    {
        id: 9,
        question: "예술 작품을 만들거나 공연하는 일에 대해서는?",
        icon: "fas fa-theater-masks",
        options: [
            { text: "나만의 독창적인 작품을 만들고 싶다", type: "artistic", score: 3 },
            { text: "사람들에게 감동을 주고 싶다", type: "artistic", score: 2 },
            { text: "재능이 있다면 해보고 싶다", type: "social", score: 1 },
            { text: "안정적이지 않아 걱정된다", type: "conventional", score: 1 }
        ]
    },
    {
        id: 10,
        question: "상담사나 교사로 일하는 것에 대한 생각은?",
        icon: "fas fa-chalkboard-teacher",
        options: [
            { text: "사람들의 성장을 돕는 일이 의미있다", type: "social", score: 3 },
            { text: "소통하며 함께 발전하는 것이 좋다", type: "social", score: 2 },
            { text: "감정적으로 힘들 것 같다", type: "investigative", score: 1 },
            { text: "객관적인 업무를 선호한다", type: "conventional", score: 1 }
        ]
    },
    {
        id: 11,
        question: "CEO나 팀장으로서 조직을 이끄는 일은?",
        icon: "fas fa-crown",
        options: [
            { text: "리더십을 발휘할 수 있어 흥미롭다", type: "enterprising", score: 3 },
            { text: "목표 달성의 짜릿함이 있을 것 같다", type: "enterprising", score: 2 },
            { text: "책임이 너무 무거울 것 같다", type: "conventional", score: 1 },
            { text: "팀원으로 일하는 것이 더 편하다", type: "social", score: 1 }
        ]
    },
    {
        id: 12,
        question: "회계나 데이터 분석 업무에 대한 생각은?",
        icon: "fas fa-calculator",
        options: [
            { text: "정확한 숫자로 일하는 것이 좋다", type: "conventional", score: 3 },
            { text: "체계적이고 논리적이어서 만족스럽다", type: "conventional", score: 2 },
            { text: "너무 반복적이어서 지루하다", type: "artistic", score: 1 },
            { text: "더 창의적인 일을 원한다", type: "artistic", score: 1 }
        ]
    },
    {
        id: 13,
        question: "자동차 정비나 컴퓨터 수리 같은 기술직은?",
        icon: "fas fa-wrench",
        options: [
            { text: "문제를 해결하는 재미가 있을 것 같다", type: "realistic", score: 3 },
            { text: "실용적인 기술을 배울 수 있어 좋다", type: "realistic", score: 2 },
            { text: "너무 복잡해 보인다", type: "social", score: 1 },
            { text: "손재주가 없어서 어려울 것 같다", type: "artistic", score: 1 }
        ]
    },
    {
        id: 14,
        question: "연구 논문을 쓰거나 학술 연구를 하는 일은?",
        icon: "fas fa-book-open",
        options: [
            { text: "깊이 있게 탐구하는 것이 즐겁다", type: "investigative", score: 3 },
            { text: "새로운 지식을 발견하는 기쁨이 있다", type: "investigative", score: 2 },
            { text: "너무 이론적이어서 지루하다", type: "realistic", score: 1 },
            { text: "실용적인 일을 선호한다", type: "enterprising", score: 1 }
        ]
    },
    {
        id: 15,
        question: "디자이너나 작가로 창작 활동을 하는 것은?",
        icon: "fas fa-pen-nib",
        options: [
            { text: "자유롭게 표현할 수 있어 매력적이다", type: "artistic", score: 3 },
            { text: "창의성을 발휘할 수 있어 좋다", type: "artistic", score: 2 },
            { text: "수입이 불안정할 것 같아 걱정된다", type: "conventional", score: 1 },
            { text: "안정적인 직장이 더 좋다", type: "conventional", score: 2 }
        ]
    },
    {
        id: 16,
        question: "새로운 제품을 개발하고 시장에 출시하는 일은?",
        icon: "fas fa-rocket",
        options: [
            { text: "혁신적이고 도전적이어서 흥미롭다", type: "enterprising", score: 3 },
            { text: "시장 분석과 기획이 재미있을 것 같다", type: "enterprising", score: 2 },
            { text: "기술적 연구개발에 더 관심있다", type: "investigative", score: 2 },
            { text: "안정적인 업무를 선호한다", type: "conventional", score: 1 }
        ]
    },
    {
        id: 17,
        question: "팀 프로젝트에서 어떤 역할을 선호하나요?",
        icon: "fas fa-users",
        options: [
            { text: "팀원들의 의견을 조율하고 이끄는 리더", type: "enterprising", score: 2 },
            { text: "창의적 아이디어를 제공하는 기획자", type: "artistic", score: 3 },
            { text: "정확한 데이터 분석을 담당하는 연구자", type: "investigative", score: 3 },
            { text: "팀원들을 도우며 협력하는 지원자", type: "social", score: 3 }
        ]
    },
    {
        id: 18,
        question: "직업을 선택할 때 가장 중요하게 생각하는 것은?",
        icon: "fas fa-balance-scale",
        options: [
            { text: "사회에 기여하고 도움이 되는 일", type: "social", score: 3 },
            { text: "내 흥미와 적성에 맞는 일", type: "artistic", score: 2 },
            { text: "안정적인 수입과 복리후생", type: "conventional", score: 3 },
            { text: "성취감과 성장 가능성", type: "realistic", score: 2 }
        ]
    }
];

// 직업 유형별 특성 (Holland의 RIASEC 모델)
const careerTypes = {
    realistic: {
        title: "실용적 기능인",
        subtitle: "손으로 만들고 기계를 다루는 실용주의자",
        description: "당신은 실용적이고 현실적인 성향을 가진 기능인입니다. 구체적이고 물리적인 결과물을 만들어내는 일에서 큰 만족을 느끼며, 손재주가 뛰어나고 기계나 도구를 능숙하게 다룹니다. 체계적이고 안정적인 환경에서 실무적인 기술을 발휘하는 것을 선호합니다.",
        icon: "fas fa-hard-hat",
        color: "#8B4513",
        jobs: [
            "건축기사", "기계공학기술자", "자동차정비사", "전기기사", 
            "목수", "요리사", "농업기술자", "컴퓨터하드웨어기사", 
            "항공정비사", "용접기사", "조경기사", "건설현장관리자"
        ],
        characteristics: [
            "실용적이고 현실적인 사고",
            "손재주와 기술적 능력",
            "체계적이고 논리적인 접근",
            "안정성과 예측가능성 선호",
            "구체적인 결과물 창출 능력"
        ],
        advice: "당신의 기술적 능력을 지속적으로 발전시키고, 새로운 기술과 도구에 대한 학습을 게을리하지 마세요. 실무 경험을 쌓으며 전문성을 키워나가는 것이 중요합니다.",
        workEnvironment: "실외 또는 작업장, 기계와 도구가 있는 환경",
        salary: "중상 수준 (경험과 기술에 따라 상승)",
        future: "기술 발전과 함께 지속적인 수요 증가"
    },
    investigative: {
        title: "탐구적 연구자",
        subtitle: "지식을 탐구하고 문제를 해결하는 분석가",
        description: "당신은 호기심이 많고 분석적인 사고를 가진 연구자입니다. 복잡한 문제를 체계적으로 분석하고 해결하는 과정에서 큰 즐거움을 느끼며, 새로운 지식과 이론을 탐구하는 것을 좋아합니다. 독립적이고 창의적인 사고로 혁신적인 해결책을 찾아냅니다.",
        icon: "fas fa-microscope",
        color: "#4169E1",
        jobs: [
            "연구원", "의사", "교수", "데이터분석가", 
            "심리학자", "생명과학자", "통계학자", "약사", 
            "수학자", "물리학자", "화학자", "소프트웨어개발자"
        ],
        characteristics: [
            "강한 호기심과 탐구 정신",
            "논리적이고 분석적인 사고",
            "독립적인 연구 능력",
            "복잡한 문제 해결 능력",
            "이론과 개념에 대한 이해력"
        ],
        advice: "지속적인 학습과 연구를 통해 전문성을 심화시키고, 다양한 분야와의 융합을 통해 새로운 관점을 개발해보세요. 논문 작성과 발표 능력도 함께 기르는 것이 중요합니다.",
        workEnvironment: "연구실, 대학, 병원, 연구기관",
        salary: "중상-고수준 (학위와 경력에 따라)",
        future: "AI와 빅데이터 시대에 더욱 중요해지는 분야"
    },
    artistic: {
        title: "창의적 예술가",
        subtitle: "상상력과 창의성으로 세상을 표현하는 창작자",
        description: "당신은 풍부한 상상력과 독창적인 아이디어를 가진 예술가입니다. 자유로운 표현과 창작 활동을 통해 자신만의 세계를 구축하며, 미적 감각과 창의성으로 사람들에게 영감을 주는 작품을 만들어냅니다. 관습에 얽매이지 않는 자유로운 사고를 추구합니다.",
        icon: "fas fa-palette",
        color: "#FF6347",
        jobs: [
            "그래픽디자이너", "일러스트레이터", "작가", "영화감독", 
            "음악가", "배우", "웹디자이너", "광고크리에이터", 
            "건축가", "패션디자이너", "게임디자이너", "아트디렉터"
        ],
        characteristics: [
            "풍부한 상상력과 창의성",
            "독창적이고 혁신적인 사고",
            "미적 감각과 표현 능력",
            "자유로운 작업 환경 선호",
            "감성적이고 직관적인 접근"
        ],
        advice: "자신만의 독특한 스타일을 개발하고, 다양한 분야의 예술을 접하며 영감을 얻으세요. 비즈니스 감각도 함께 기른다면 더욱 성공적인 커리어를 쌓을 수 있습니다.",
        workEnvironment: "스튜디오, 갤러리, 광고회사, 프리랜서",
        salary: "매우 다양 (실력과 인지도에 따라)",
        future: "디지털 컨텐츠 시대에 수요 증가"
    },
    social: {
        title: "사회적 조력자",
        subtitle: "사람들을 돕고 사회에 기여하는 봉사자",
        description: "당신은 따뜻한 마음과 공감 능력을 가진 조력자입니다. 다른 사람들의 성장과 발전을 돕는 일에서 큰 보람을 느끼며, 소통과 협력을 통해 조화로운 관계를 만들어갑니다. 사회적 책임감이 강하고 타인의 복지에 관심이 많습니다.",
        icon: "fas fa-hands-helping",
        color: "#32CD32",
        jobs: [
            "교사", "상담사", "사회복지사", "간호사", 
            "HR전문가", "목사/신부", "심리치료사", "트레이너", 
            "NGO활동가", "의료진", "유치원교사", "재활치료사"
        ],
        characteristics: [
            "뛰어난 공감 능력과 소통 기술",
            "타인을 돕고자 하는 봉사 정신",
            "팀워크와 협력 능력",
            "사회적 책임감과 윤리의식",
            "인간관계 형성 및 유지 능력"
        ],
        advice: "자신의 감정 관리 능력을 기르고, 번아웃을 방지하기 위한 자기관리 방법을 익히세요. 전문성을 높이기 위한 지속적인 교육과 훈련도 중요합니다.",
        workEnvironment: "학교, 병원, 복지기관, 상담센터",
        salary: "중간 수준 (공공부문이 많아 안정적)",
        future: "고령화 사회에서 지속적 수요 증가"
    },
    enterprising: {
        title: "도전적 사업가",
        subtitle: "리더십과 추진력으로 성공을 만들어가는 개척자",
        description: "당신은 강한 추진력과 리더십을 가진 사업가입니다. 새로운 기회를 포착하고 도전하는 것을 두려워하지 않으며, 목표 달성을 위해 적극적으로 행동합니다. 경쟁적인 환경에서 성과를 내는 것에서 큰 성취감을 느끼고, 조직을 이끌어가는 능력이 뛰어납니다.",
        icon: "fas fa-rocket",
        color: "#FF4500",
        jobs: [
            "CEO/경영진", "영업관리자", "마케팅전문가", "컨설턴트", 
            "투자전문가", "부동산중개사", "창업가", "정치인", 
            "변호사", "광고기획자", "펀드매니저", "사업개발자"
        ],
        characteristics: [
            "강한 리더십과 추진력",
            "목표 지향적이고 성과 중심적",
            "위험을 감수하는 도전 정신",
            "설득력과 영향력",
            "경쟁 상황에서의 승부욕"
        ],
        advice: "팀워크와 협력의 중요성을 인식하고, 다른 사람들의 의견에도 귀 기울이는 자세를 기르세요. 지속적인 네트워킹과 트렌드 파악도 성공의 열쇠입니다.",
        workEnvironment: "기업 본사, 금융기관, 법무법인",
        salary: "고수준 (성과에 따라 매우 높음)",
        future: "창업과 혁신이 중요한 시대에 핵심 역할"
    },
    conventional: {
        title: "체계적 관리자",
        subtitle: "정확성과 효율성으로 조직을 운영하는 안정추구자",
        description: "당신은 체계적이고 신중한 성향을 가진 관리자입니다. 정확한 업무 처리와 규칙 준수를 중시하며, 안정적이고 예측 가능한 환경에서 최고의 성과를 발휘합니다. 세심한 주의력과 책임감으로 조직의 효율성을 높이는 데 기여합니다.",
        icon: "fas fa-clipboard-list",
        color: "#4682B4",
        jobs: [
            "회계사", "세무사", "은행원", "공무원", 
            "비서", "사무관리자", "품질관리자", "감사원", 
            "보험전문가", "재무분석가", "행정관리자", "법무팀"
        ],
        characteristics: [
            "정확성과 세심한 주의력",
            "체계적이고 조직적인 업무 처리",
            "규칙과 절차 준수",
            "안정성과 신뢰성",
            "효율적인 시간 관리 능력"
        ],
        advice: "변화하는 업무 환경에 적응할 수 있는 유연성을 기르고, 새로운 기술과 시스템 활용 능력을 향상시키세요. 의사소통 능력도 함께 개발하면 더욱 발전할 수 있습니다.",
        workEnvironment: "사무실, 은행, 정부기관, 회계법인",
        salary: "중상 수준 (안정적이고 예측 가능)",
        future: "디지털화로 변화하지만 여전히 필요한 분야"
    }
};