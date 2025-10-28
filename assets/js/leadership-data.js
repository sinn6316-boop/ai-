// 리더십 유형 테스트 질문
const leadershipQuestions = [
    {
        id: 1,
        question: "팀에서 중요한 결정을 내릴 때 어떤 방식을 선호하나요?",
        icon: "fas fa-balance-scale",
        options: [
            { text: "신속하게 혼자 결정하고 팀에게 명확히 전달한다", type: "authoritative", score: 3 },
            { text: "팀원들의 의견을 충분히 수렴한 후 결정한다", type: "democratic", score: 3 },
            { text: "상황에 따라 유연하게 결정 방식을 조정한다", type: "situational", score: 3 },
            { text: "팀원들이 스스로 결정할 수 있도록 지원한다", type: "servant", score: 3 }
        ]
    },
    {
        id: 2,
        question: "팀원이 업무에서 어려움을 겪을 때 어떻게 대응하나요?",
        icon: "fas fa-helping-hand",
        options: [
            { text: "명확한 지시사항과 해결 방안을 제시한다", type: "authoritative", score: 2 },
            { text: "함께 문제를 분석하고 해결 과정을 코칭한다", type: "coaching", score: 3 },
            { text: "필요한 자원과 지원을 제공하며 도움을 준다", type: "servant", score: 3 },
            { text: "팀원의 역량에 맞는 적절한 도움을 제공한다", type: "situational", score: 2 }
        ]
    },
    {
        id: 3,
        question: "새로운 프로젝트를 시작할 때 어떤 접근 방식을 취하나요?",
        icon: "fas fa-rocket",
        options: [
            { text: "명확한 비전과 목표를 제시하고 열정적으로 추진한다", type: "transformational", score: 3 },
            { text: "체계적인 계획을 세우고 단계별로 실행한다", type: "authoritative", score: 2 },
            { text: "팀원들의 아이디어를 적극 수용하고 협력한다", type: "democratic", score: 3 },
            { text: "각자의 강점을 파악하여 적절한 역할을 배분한다", type: "coaching", score: 2 }
        ]
    },
    {
        id: 4,
        question: "팀원들의 동기부여를 위해 어떤 방법을 사용하나요?",
        icon: "fas fa-fire",
        options: [
            { text: "큰 그림과 비전을 공유하여 영감을 준다", type: "transformational", score: 3 },
            { text: "각자의 성장 목표를 설정하고 발전을 돕는다", type: "coaching", score: 3 },
            { text: "팀원들의 의견을 존중하고 참여를 격려한다", type: "democratic", score: 2 },
            { text: "개인의 필요와 성장을 우선적으로 지원한다", type: "servant", score: 3 }
        ]
    },
    {
        id: 5,
        question: "갈등 상황이 발생했을 때 어떻게 해결하나요?",
        icon: "fas fa-handshake",
        options: [
            { text: "명확한 기준과 원칙에 따라 판단하고 결정한다", type: "authoritative", score: 3 },
            { text: "모든 당사자의 의견을 듣고 합의점을 찾는다", type: "democratic", score: 3 },
            { text: "상황과 사람에 따라 다른 접근 방식을 사용한다", type: "situational", score: 3 },
            { text: "대화를 통해 서로를 이해할 수 있도록 돕는다", type: "coaching", score: 2 }
        ]
    },
    {
        id: 6,
        question: "팀의 성과 관리에 대한 당신의 철학은?",
        icon: "fas fa-chart-line",
        options: [
            { text: "명확한 목표와 기준을 설정하여 관리한다", type: "authoritative", score: 2 },
            { text: "지속적인 변화와 혁신을 추구한다", type: "transformational", score: 3 },
            { text: "개인의 성장과 팀의 성과를 균형있게 추구한다", type: "coaching", score: 3 },
            { text: "팀원들의 자율성을 존중하며 지원한다", type: "servant", score: 2 }
        ]
    },
    {
        id: 7,
        question: "부하직원과의 커뮤니케이션에서 중요하게 생각하는 것은?",
        icon: "fas fa-comments",
        options: [
            { text: "명확하고 일관된 메시지 전달", type: "authoritative", score: 2 },
            { text: "열린 대화와 상호 피드백", type: "democratic", score: 3 },
            { text: "개인별 맞춤형 소통 방식", type: "situational", score: 3 },
            { text: "경청과 공감을 통한 이해", type: "servant", score: 3 }
        ]
    },
    {
        id: 8,
        question: "조직 변화를 이끌어야 할 때 어떤 방식을 선택하나요?",
        icon: "fas fa-exchange-alt",
        options: [
            { text: "강력한 비전과 열정으로 변화를 이끈다", type: "transformational", score: 3 },
            { text: "체계적인 계획과 실행으로 변화를 관리한다", type: "authoritative", score: 2 },
            { text: "구성원들의 참여와 합의를 통해 변화한다", type: "democratic", score: 3 },
            { text: "변화의 필요성과 상황을 고려하여 유연하게 접근한다", type: "situational", score: 2 }
        ]
    },
    {
        id: 9,
        question: "팀원의 실수나 실패에 대해 어떻게 대응하나요?",
        icon: "fas fa-exclamation-circle",
        options: [
            { text: "명확한 피드백과 개선 방안을 제시한다", type: "authoritative", score: 2 },
            { text: "실패를 학습의 기회로 만들어 성장을 돕는다", type: "coaching", score: 3 },
            { text: "함께 원인을 분석하고 해결책을 찾는다", type: "democratic", score: 2 },
            { text: "격려와 지원을 통해 다시 도전할 수 있도록 돕는다", type: "servant", score: 3 }
        ]
    },
    {
        id: 10,
        question: "리더로서 가장 중요하게 생각하는 역할은?",
        icon: "fas fa-crown",
        options: [
            { text: "명확한 방향 제시와 목표 달성", type: "authoritative", score: 3 },
            { text: "혁신과 변화를 통한 조직 발전", type: "transformational", score: 3 },
            { text: "팀원들의 성장과 발전을 위한 지원", type: "coaching", score: 3 },
            { text: "팀원들을 섬기며 그들의 성공을 돕는 것", type: "servant", score: 3 }
        ]
    },
    {
        id: 11,
        question: "위기 상황에서 리더십을 발휘하는 방식은?",
        icon: "fas fa-shield-alt",
        options: [
            { text: "신속하고 결단력 있는 의사결정으로 위기를 극복한다", type: "authoritative", score: 3 },
            { text: "위기를 기회로 전환하는 창의적 해결책을 제시한다", type: "transformational", score: 2 },
            { text: "상황의 심각성과 팀의 역량을 고려하여 대응한다", type: "situational", score: 3 },
            { text: "팀원들의 안전과 복지를 우선적으로 고려한다", type: "servant", score: 2 }
        ]
    },
    {
        id: 12,
        question: "신입 팀원을 효과적으로 지도하는 방법은?",
        icon: "fas fa-graduation-cap",
        options: [
            { text: "명확한 업무 매뉴얼과 규칙을 제공한다", type: "authoritative", score: 2 },
            { text: "점진적인 학습과 성장 과정을 설계한다", type: "coaching", score: 3 },
            { text: "경험 많은 팀원들과의 협력을 장려한다", type: "democratic", score: 2 },
            { text: "개인의 학습 스타일과 속도에 맞춰 지원한다", type: "situational", score: 3 }
        ]
    },
    {
        id: 13,
        question: "팀의 창의성과 혁신을 촉진하기 위해 어떻게 하나요?",
        icon: "fas fa-lightbulb",
        options: [
            { text: "도전적인 비전과 목표를 제시한다", type: "transformational", score: 3 },
            { text: "자유로운 토론과 아이디어 공유를 격려한다", type: "democratic", score: 3 },
            { text: "개인별 창의적 잠재력을 발견하고 개발한다", type: "coaching", score: 3 },
            { text: "실패를 두려워하지 않는 안전한 환경을 조성한다", type: "servant", score: 2 }
        ]
    },
    {
        id: 14,
        question: "팀원들과의 신뢰 관계를 구축하는 방법은?",
        icon: "fas fa-heart",
        options: [
            { text: "일관된 행동과 공정한 판단으로 신뢰를 얻는다", type: "authoritative", score: 2 },
            { text: "진정성 있는 관심과 배려를 보인다", type: "servant", score: 3 },
            { text: "열린 소통과 투명한 정보 공유를 한다", type: "democratic", score: 3 },
            { text: "각자의 상황과 필요를 이해하고 맞춤형 관계를 형성한다", type: "situational", score: 2 }
        ]
    },
    {
        id: 15,
        question: "조직의 장기적 발전을 위해 가장 중요한 것은?",
        icon: "fas fa-tree",
        options: [
            { text: "강력한 리더십과 체계적인 시스템 구축", type: "authoritative", score: 3 },
            { text: "지속적인 혁신과 변화에 대한 적응력", type: "transformational", score: 3 },
            { text: "구성원들의 자발적 참여와 헌신", type: "democratic", score: 2 },
            { text: "차세대 리더들의 육성과 성장", type: "coaching", score: 3 }
        ]
    },
    {
        id: 16,
        question: "성공적인 리더가 되기 위해 가장 필요한 자질은?",
        icon: "fas fa-star",
        options: [
            { text: "팀원들을 섬기고 지원하는 마음", type: "servant", score: 3 },
            { text: "빠르고 정확한 의사결정 능력", type: "authoritative", score: 2 },
            { text: "상황에 맞는 유연한 적응력", type: "situational", score: 3 },
            { text: "팀원들에게 영감을 주는 비전", type: "transformational", score: 2 }
        ]
    }
];

// 리더십 유형별 특성
const leadershipTypes = {
    authoritative: {
        title: "권위적 리더",
        subtitle: "명확한 방향 제시와 강력한 실행력의 리더",
        description: "당신은 명확한 비전을 제시하고 강력한 실행력으로 조직을 이끄는 권위적 리더입니다. 목표 지향적이며 효율성을 중시하고, 명확한 의사결정으로 팀에게 안정감을 제공합니다. 위기 상황에서 특히 강한 리더십을 발휘하며, 체계적인 시스템과 프로세스를 통해 조직을 관리합니다.",
        icon: "fas fa-crown",
        color: "#8B0000",
        traits: [
            "강력한 의사결정력",
            "명확한 목표 설정",
            "체계적인 관리 능력",
            "위기 상황 대처 능력",
            "효율성 추구"
        ],
        strengths: [
            "신속하고 명확한 의사결정",
            "강력한 실행력과 추진력",
            "목표 달성에 대한 집중력",
            "체계적인 조직 관리",
            "위기 상황에서의 안정적 리더십",
            "팀원들에게 명확한 방향 제시"
        ],
        weaknesses: [
            "일방향적 소통의 위험",
            "창의성 저해 가능성",
            "팀원들의 자율성 제한",
            "변화에 대한 경직성",
            "감정적 배려 부족"
        ],
        suitableSituations: [
            "위기 상황이나 긴급한 의사결정이 필요할 때",
            "명확한 목표와 방향 설정이 중요할 때",
            "신속한 실행이 요구되는 프로젝트",
            "체계적인 관리가 필요한 대규모 조직",
            "경험이 부족한 팀원들을 이끌 때"
        ],
        developmentTips: [
            "팀원들의 의견을 더 적극적으로 수렴하세요",
            "감정적 지능을 개발하여 공감 능력을 키우세요",
            "창의성과 혁신을 장려하는 환경을 조성하세요",
            "위임을 통해 팀원들의 자율성을 높이세요",
            "변화와 유연성의 가치를 인식하세요"
        ],
        famousLeaders: ["스티브 잡스", "잭 웰치", "마거릿 대처", "빈스 롬바르디"],
        careerPath: ["CEO", "COO", "프로젝트 매니저", "부서장", "팀장"]
    },
    democratic: {
        title: "민주적 리더",
        subtitle: "참여와 협력을 통해 함께 성장하는 리더",
        description: "당신은 팀원들의 참여와 협력을 중시하는 민주적 리더입니다. 열린 소통을 통해 다양한 의견을 수렴하고, 합의를 통한 의사결정을 선호합니다. 팀워크를 강화하고 구성원들의 만족도를 높이는데 탁월하며, 창의적이고 혁신적인 아이디어를 이끌어내는 능력이 뛰어납니다.",
        icon: "fas fa-users",
        color: "#4169E1",
        traits: [
            "열린 소통과 경청",
            "참여적 의사결정",
            "팀워크 중시",
            "다양성 존중",
            "합의 지향적"
        ],
        strengths: [
            "높은 팀 만족도와 참여도",
            "창의적 아이디어 도출",
            "강한 팀 결속력",
            "다양한 관점의 수용",
            "변화에 대한 적응력",
            "협력적 업무 환경 조성"
        ],
        weaknesses: [
            "의사결정 속도 저하",
            "책임 소재 불분명",
            "갈등 조정의 어려움",
            "비효율적 회의 운영",
            "위기 상황 대응 한계"
        ],
        suitableSituations: [
            "창의적 아이디어가 필요한 프로젝트",
            "팀워크가 중요한 업무 환경",
            "다양한 전문성이 요구되는 상황",
            "장기적 계획 수립 시",
            "변화 관리가 필요할 때"
        ],
        developmentTips: [
            "의사결정 속도를 높이는 방법을 학습하세요",
            "갈등 해결 기술을 개발하세요",
            "때로는 강력한 리더십이 필요함을 인식하세요",
            "효율적인 회의 진행 기술을 익히세요",
            "책임과 권한의 명확한 분배를 실행하세요"
        ],
        famousLeaders: ["넬슨 만델라", "빌 게이츠", "워렌 버핏", "오프라 윈프리"],
        careerPath: ["HR 디렉터", "컨설턴트", "프로젝트 매니저", "연구팀장", "NGO 리더"]
    },
    transformational: {
        title: "변혁적 리더",
        subtitle: "비전과 영감으로 변화를 이끄는 혁신가",
        description: "당신은 강력한 비전과 카리스마로 조직을 변화시키는 변혁적 리더입니다. 현상 유지에 안주하지 않고 지속적인 혁신과 발전을 추구하며, 팀원들에게 영감을 주어 그들의 잠재력을 최대한 발휘하게 합니다. 미래 지향적 사고와 창의적 해결책으로 조직을 새로운 차원으로 이끌어갑니다.",
        icon: "fas fa-rocket",
        color: "#FF4500",
        traits: [
            "강력한 비전 제시",
            "카리스마와 영향력",
            "혁신 추구",
            "영감을 주는 커뮤니케이션",
            "미래 지향적 사고"
        ],
        strengths: [
            "조직 변화와 혁신 주도",
            "높은 동기부여 능력",
            "창의적 문제 해결",
            "장기적 비전 구현",
            "팀원들의 잠재력 개발",
            "변화에 대한 저항 극복"
        ],
        weaknesses: [
            "현실적 제약 간과",
            "세부사항 관리 부족",
            "과도한 변화 추진",
            "단기 성과 소홀",
            "실행력 부족 위험"
        ],
        suitableSituations: [
            "조직 변화와 혁신이 필요할 때",
            "새로운 시장 진출이나 사업 확장 시",
            "팀의 동기부여가 필요한 상황",
            "창의적 돌파구가 필요할 때",
            "장기적 비전 구현이 중요할 때"
        ],
        developmentTips: [
            "현실적 제약과 실행 가능성을 고려하세요",
            "세부 계획과 실행력을 강화하세요",
            "단기 목표와 성과도 중시하세요",
            "팀원들의 부담을 고려한 변화 속도 조절하세요",
            "데이터와 분석에 기반한 의사결정을 하세요"
        ],
        famousLeaders: ["일론 머스크", "스티브 잡스", "존 F. 케네디", "리처드 브랜슨"],
        careerPath: ["스타트업 CEO", "혁신 담당임원", "변화관리 컨설턴트", "크리에이티브 디렉터", "벤처 캐피털리스트"]
    },
    servant: {
        title: "서번트 리더",
        subtitle: "섬김을 통해 팀원들의 성장을 돕는 조력자",
        description: "당신은 팀원들을 섬기며 그들의 성공을 돕는 서번트 리더입니다. 겸손한 자세로 팀원들의 필요를 우선시하고, 그들의 성장과 발전을 위해 자신을 희생할 수 있는 마음을 가지고 있습니다. 신뢰와 존중을 바탕으로 한 관계 형성에 탁월하며, 윤리적이고 가치 지향적인 리더십을 발휘합니다.",
        icon: "fas fa-hands-helping",
        color: "#32CD32",
        traits: [
            "겸손과 섬김의 자세",
            "팀원 중심적 사고",
            "높은 도덕성과 윤리의식",
            "공감과 배려",
            "장기적 관계 중시"
        ],
        strengths: [
            "높은 신뢰와 존경 획득",
            "팀원들의 자발적 헌신 유도",
            "강한 팀 결속력 형성",
            "윤리적 조직 문화 구축",
            "지속 가능한 성장 추구",
            "팀원들의 복지와 성장 우선"
        ],
        weaknesses: [
            "때로는 결단력 부족",
            "자기주장 능력 부족",
            "갈등 상황 회피 경향",
            "성과 압박 상황에서의 한계",
            "권위 확립의 어려움"
        ],
        suitableSituations: [
            "팀원들의 성장과 개발이 중요할 때",
            "신뢰 회복이나 관계 개선이 필요한 상황",
            "윤리적 이슈가 중요한 조직",
            "장기적 관점에서의 조직 발전",
            "자율적이고 성숙한 팀원들과 일할 때"
        ],
        developmentTips: [
            "필요할 때는 강력한 의사결정을 내리는 용기를 기르세요",
            "성과와 결과에 대한 책임감을 강화하세요",
            "갈등 상황에서도 적극적으로 개입하는 능력을 개발하세요",
            "자신의 비전과 의견을 명확히 표현하는 법을 배우세요",
            "때로는 어려운 결정도 내릴 수 있는 결단력을 기르세요"
        ],
        famousLeaders: ["마더 테레사", "넬슨 만델라", "마틴 루터 킹", "간디"],
        careerPath: ["비영리단체 리더", "HR 임원", "교육기관 관리자", "사회적 기업 CEO", "상담 및 코칭 전문가"]
    },
    situational: {
        title: "상황적 리더",
        subtitle: "상황에 맞는 유연한 리더십의 달인",
        description: "당신은 상황과 팀원의 역량에 따라 리더십 스타일을 유연하게 조정하는 상황적 리더입니다. 높은 적응력과 판단력으로 각 상황에 가장 적합한 접근 방식을 선택하며, 개인별 맞춤형 리더십을 통해 최적의 성과를 이끌어냅니다. 복잡하고 변화무쌍한 환경에서 특히 강한 리더십을 발휘합니다.",
        icon: "fas fa-compass",
        color: "#9370DB",
        traits: [
            "높은 적응력과 유연성",
            "상황 판단 능력",
            "개별 맞춤형 접근",
            "다양한 리더십 스킬",
            "변화에 대한 민감성"
        ],
        strengths: [
            "다양한 상황에서의 효과적 대응",
            "개인별 최적화된 리더십 제공",
            "높은 문제 해결 능력",
            "변화에 대한 빠른 적응",
            "팀원들의 개별 성장 촉진",
            "유연한 의사결정과 실행"
        ],
        weaknesses: [
            "일관성 부족으로 인한 혼란",
            "복잡한 의사결정 과정",
            "명확한 리더십 정체성 부족",
            "과도한 분석으로 인한 지연",
            "팀원들의 예측 어려움"
        ],
        suitableSituations: [
            "다양한 역량의 팀원들이 있는 환경",
            "빠르게 변화하는 업무 환경",
            "복잡하고 다면적인 프로젝트",
            "위기와 기회가 공존하는 상황",
            "개별 맞춤형 관리가 필요할 때"
        ],
        developmentTips: [
            "일관된 핵심 가치와 원칙을 확립하세요",
            "의사결정 기준과 프로세스를 명확히 하세요",
            "팀원들에게 리더십 접근 방식을 설명하세요",
            "과도한 분석보다는 적절한 타이밍의 결정을 하세요",
            "자신만의 리더십 철학을 정립하세요"
        ],
        famousLeaders: ["앤젤라 메르켈", "잭 웰치", "콘돌리자 라이스", "제프 베조스"],
        careerPath: ["컨설턴트", "프로젝트 매니저", "변화관리 전문가", "멀티태스킹 리더", "크로스펑셔널 팀장"]
    },
    coaching: {
        title: "코칭 리더",
        subtitle: "성장과 개발을 통해 잠재력을 이끌어내는 멘토",
        description: "당신은 팀원들의 개인적 성장과 전문적 발전을 돕는 코칭 리더입니다. 각자의 강점과 잠재력을 발견하고 개발하는데 탁월하며, 지속적인 피드백과 격려를 통해 팀원들이 스스로 답을 찾도록 돕습니다. 인재 개발과 조직의 장기적 역량 강화에 중점을 두는 리더십을 발휘합니다.",
        icon: "fas fa-graduation-cap",
        color: "#FF6347",
        traits: [
            "개발 지향적 사고",
            "뛰어난 경청 능력",
            "효과적인 질문 기술",
            "개별 맞춤형 지도",
            "장기적 관점"
        ],
        strengths: [
            "팀원들의 역량 개발",
            "높은 학습 조직 구축",
            "개인별 잠재력 극대화",
            "지속적인 성장 문화 조성",
            "차세대 리더 양성",
            "동기부여와 피드백 능력"
        ],
        weaknesses: [
            "단기 성과 달성의 어려움",
            "시간과 자원의 많은 투입",
            "즉시 결과를 요구하는 상황에서의 한계",
            "모든 팀원에게 적용하기 어려움",
            "비용 대비 효과 측정의 어려움"
        ],
        suitableSituations: [
            "인재 개발이 중요한 조직",
            "학습과 성장을 중시하는 문화",
            "장기적 역량 강화가 필요할 때",
            "개별 맞춤형 지도가 가능한 환경",
            "차세대 리더 양성이 필요한 상황"
        ],
        developmentTips: [
            "단기 성과와 장기 개발의 균형을 맞추세요",
            "측정 가능한 성장 지표를 설정하세요",
            "비용 효율적인 코칭 방법을 개발하세요",
            "그룹 코칭 기술을 활용하세요",
            "즉각적인 성과가 필요한 상황에서의 대응력을 기르세요"
        ],
        famousLeaders: ["존 우든", "빌 캠벨", "셰릴 샌드버그", "사티아 나델라"],
        careerPath: ["인재개발 담당임원", "교육 및 연수 책임자", "코칭 전문가", "멘토링 프로그램 리더", "조직개발 컨설턴트"]
    }
};