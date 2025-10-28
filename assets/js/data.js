// 테스트 질문 데이터 (20개의 고난도 심리분석 문제)
const personalityQuestions = [
    {
        id: 1,
        question: "당신이 무인도에 혼자 남겨졌다면, 가장 먼저 할 일은?",
        icon: "fas fa-island-tropical",
        options: [
            { text: "주변을 탐색하여 생존에 필요한 자원들을 체계적으로 파악한다", type: "S", score: 2 },
            { text: "구조 신호를 보낼 방법을 창의적으로 고안한다", type: "N", score: 2 },
            { text: "일단 안전한 장소를 찾아 임시 거처를 만든다", type: "J", score: 1 },
            { text: "상황을 받아들이고 당장 할 수 있는 일부터 시작한다", type: "P", score: 1 }
        ]
    },
    {
        id: 2,
        question: "친구가 당신에게 자신의 비밀 연애사를 털어놓았는데, 나중에 그 친구의 연인이 당신에게 진실을 물어본다면?",
        icon: "fas fa-user-secret",
        options: [
            { text: "친구와의 약속을 지키며 정중히 거절한다", type: "F", score: 2 },
            { text: "객관적 사실만 말하되 해석은 상대방에게 맡긴다", type: "T", score: 2 },
            { text: "상황을 종합적으로 판단해 가장 피해가 적은 방법을 택한다", type: "N", score: 1 },
            { text: "일단 시간을 벌면서 친구와 먼저 상의한다", type: "P", score: 1 }
        ]
    },
    {
        id: 3,
        question: "당신이 중요한 회의 중에 동료가 명백히 틀린 정보로 발표를 하고 있다면?",
        icon: "fas fa-presentation",
        options: [
            { text: "즉시 정중하게 오류를 지적하고 올바른 정보를 제공한다", type: "E", score: 2 },
            { text: "회의 후 개별적으로 동료에게 알려준다", type: "I", score: 2 },
            { text: "상황의 심각성을 판단한 후 적절한 타이밍에 개입한다", type: "T", score: 1 },
            { text: "동료의 체면을 고려해 우회적으로 힌트를 준다", type: "F", score: 1 }
        ]
    },
    {
        id: 4,
        question: "10년 후 당신의 모습을 그려본다면?",
        icon: "fas fa-crystal-ball",
        options: [
            { text: "구체적인 직책, 연봉, 라이프스타일까지 상세히 계획되어 있다", type: "J", score: 2 },
            { text: "대략적인 방향성은 있지만 변화에 열려있는 상태이다", type: "P", score: 2 },
            { text: "현재의 연장선상에서 점진적으로 발전한 모습이다", type: "S", score: 1 },
            { text: "지금과는 완전히 다른 새로운 분야에 도전하고 있을 것이다", type: "N", score: 1 }
        ]
    },
    {
        id: 5,
        question: "당신이 팀 프로젝트에서 리더가 되었는데, 팀원들의 의견이 완전히 갈린다면?",
        icon: "fas fa-users-cog",
        options: [
            { text: "각 의견의 장단점을 분석하여 가장 효율적인 방안을 제시한다", type: "T", score: 2 },
            { text: "모든 팀원이 수긍할 수 있는 절충안을 만들어낸다", type: "F", score: 2 },
            { text: "데이터와 경험에 기반해 검증된 방법을 선택한다", type: "S", score: 1 },
            { text: "완전히 새로운 제3의 창의적 해결책을 모색한다", type: "N", score: 1 }
        ]
    },
    {
        id: 6,
        question: "SNS에 올릴 사진을 선택할 때 당신의 기준은?",
        icon: "fas fa-camera",
        options: [
            { text: "많은 사람들이 좋아할 만한 트렌디하고 매력적인 사진", type: "E", score: 2 },
            { text: "나의 진짜 모습과 감정이 잘 드러나는 자연스러운 사진", type: "I", score: 2 },
            { text: "기술적으로 완성도가 높고 미적으로 우수한 사진", type: "T", score: 1 },
            { text: "그 순간의 의미와 스토리가 담긴 사진", type: "F", score: 1 }
        ]
    },
    {
        id: 7,
        question: "당신이 새로운 도시로 이사를 간다면 가장 우선적으로 고려할 것은?",
        icon: "fas fa-city",
        options: [
            { text: "교통편, 편의시설, 치안 등 실용적 조건들", type: "S", score: 2 },
            { text: "그 도시만의 독특한 문화와 발전 가능성", type: "N", score: 2 },
            { text: "미리 세운 이주 계획에 따른 체계적 정착", type: "J", score: 1 },
            { text: "일단 가서 직접 경험하며 적응해나가기", type: "P", score: 1 }
        ]
    },
    {
        id: 8,
        question: "당신이 가장 스트레스를 받는 상황은?",
        icon: "fas fa-dizzy",
        options: [
            { text: "명확하지 않은 지시와 모호한 기대치", type: "J", score: 2 },
            { text: "지나치게 경직되고 융통성 없는 규칙들", type: "P", score: 2 },
            { text: "사람들 앞에서 즉석 발표나 주목받는 상황", type: "I", score: 1 },
            { text: "혼자서 결정해야 하는 중요한 선택의 순간", type: "E", score: 1 }
        ]
    },
    {
        id: 9,
        question: "당신이 책을 읽을 때 가장 끌리는 장르는?",
        icon: "fas fa-book-open",
        options: [
            { text: "실용서나 자기계발서 같은 현실적 도움이 되는 책", type: "S", score: 2 },
            { text: "SF, 판타지처럼 상상력을 자극하는 창작물", type: "N", score: 2 },
            { text: "논리정연한 추리소설이나 분석적 에세이", type: "T", score: 1 },
            { text: "감동적인 휴먼드라마나 감성적인 시집", type: "F", score: 1 }
        ]
    },
    {
        id: 10,
        question: "당신이 쇼핑을 할 때의 패턴은?",
        icon: "fas fa-shopping-cart",
        options: [
            { text: "미리 리스트를 작성하고 계획대로 효율적으로 구매", type: "J", score: 2 },
            { text: "둘러보다가 마음에 드는 것을 발견하면 즉석에서 결정", type: "P", score: 2 },
            { text: "주변 사람들과 상의하고 의견을 들어본 후 결정", type: "E", score: 1 },
            { text: "충분히 고민하고 나 혼자 신중하게 판단", type: "I", score: 1 }
        ]
    },
    {
        id: 11,
        question: "당신이 영화를 볼 때 가장 몰입하게 되는 요소는?",
        icon: "fas fa-film",
        options: [
            { text: "치밀한 플롯과 논리적 전개", type: "T", score: 2 },
            { text: "캐릭터들의 감정과 인간관계", type: "F", score: 2 },
            { text: "현실적이고 디테일한 설정과 연출", type: "S", score: 1 },
            { text: "상징적 의미와 메타포, 철학적 메시지", type: "N", score: 1 }
        ]
    },
    {
        id: 12,
        question: "당신이 여행을 계획할 때의 스타일은?",
        icon: "fas fa-suitcase-rolling",
        options: [
            { text: "세세한 일정표를 만들고 예약을 미리 완료", type: "J", score: 2 },
            { text: "큰 틀만 정하고 현지에서 자유롭게 탐험", type: "P", score: 2 },
            { text: "검증된 명소와 추천 코스를 중심으로 계획", type: "S", score: 1 },
            { text: "남들이 잘 가지 않는 숨겨진 장소를 발굴", type: "N", score: 1 }
        ]
    },
    {
        id: 13,
        question: "당신이 새로운 취미를 시작할 때의 동기는?",
        icon: "fas fa-palette",
        options: [
            { text: "실용적 기술 습득이나 자기계발을 위해", type: "T", score: 2 },
            { text: "순수한 즐거움과 행복감을 얻기 위해", type: "F", score: 2 },
            { text: "새로운 사람들과의 만남과 네트워킹을 위해", type: "E", score: 1 },
            { text: "나만의 시간과 공간에서 힐링하기 위해", type: "I", score: 1 }
        ]
    },
    {
        id: 14,
        question: "당신이 중요한 결정을 미루게 되는 이유는?",
        icon: "fas fa-hourglass-half",
        options: [
            { text: "더 많은 정보와 데이터가 필요해서", type: "S", score: 2 },
            { text: "더 창의적이고 혁신적인 대안이 있을 것 같아서", type: "N", score: 2 },
            { text: "모든 변수를 고려한 완벽한 선택을 하고 싶어서", type: "J", score: 1 },
            { text: "일단 상황을 더 지켜보고 유연하게 대응하고 싶어서", type: "P", score: 1 }
        ]
    },
    {
        id: 15,
        question: "당신이 파티에서 가장 편안함을 느끼는 순간은?",
        icon: "fas fa-glass-cheers",
        options: [
            { text: "많은 사람들과 활발하게 대화하며 에너지를 주고받을 때", type: "E", score: 2 },
            { text: "소수의 친한 사람들과 깊이 있는 이야기를 나눌 때", type: "I", score: 2 },
            { text: "분위기를 주도하며 재미있는 게임이나 활동을 이끌 때", type: "T", score: 1 },
            { text: "모든 사람이 즐거워하는 모습을 보며 뿌듯함을 느낄 때", type: "F", score: 1 }
        ]
    },
    {
        id: 16,
        question: "당신이 실패를 경험했을 때 가장 먼저 하는 생각은?",
        icon: "fas fa-exclamation-triangle",
        options: [
            { text: "무엇이 잘못되었는지 객관적으로 분석한다", type: "T", score: 2 },
            { text: "주변 사람들에게 미친 영향을 걱정한다", type: "F", score: 2 },
            { text: "구체적인 교훈을 얻어 다음에는 실수하지 않겠다고 다짐한다", type: "S", score: 1 },
            { text: "이 실패가 새로운 기회로 이어질 가능성을 생각한다", type: "N", score: 1 }
        ]
    },
    {
        id: 17,
        question: "당신이 선물을 고를 때 가장 중요하게 생각하는 것은?",
        icon: "fas fa-gift",
        options: [
            { text: "받는 사람이 실제로 필요하고 유용하게 쓸 수 있는 것", type: "S", score: 2 },
            { text: "받는 사람이 예상치 못했지만 감동받을 만한 특별한 것", type: "N", score: 2 },
            { text: "가격 대비 품질이 우수하고 합리적인 것", type: "T", score: 1 },
            { text: "나의 마음과 정성이 전해질 수 있는 것", type: "F", score: 1 }
        ]
    },
    {
        id: 18,
        question: "당신이 새로운 직장을 선택할 때 가장 중요한 기준은?",
        icon: "fas fa-building",
        options: [
            { text: "안정적인 조직문화와 체계적인 업무환경", type: "J", score: 2 },
            { text: "자유로운 분위기와 창의적 도전이 가능한 환경", type: "P", score: 2 },
            { text: "동료들과의 협업과 소통이 활발한 분위기", type: "E", score: 1 },
            { text: "개인의 전문성을 깊이 있게 개발할 수 있는 여건", type: "I", score: 1 }
        ]
    },
    {
        id: 19,
        question: "당신이 갈등 상황에서 상대방을 설득하는 방식은?",
        icon: "fas fa-comments",
        options: [
            { text: "논리적 근거와 데이터를 제시하여 합리적으로 설득", type: "T", score: 2 },
            { text: "상대방의 감정과 입장을 공감하며 마음으로 어필", type: "F", score: 2 },
            { text: "구체적인 사례와 경험을 들어 현실적으로 설명", type: "S", score: 1 },
            { text: "미래의 비전과 가능성을 제시하여 상상력을 자극", type: "N", score: 1 }
        ]
    },
    {
        id: 20,
        question: "당신의 인생에서 가장 중요한 가치는?",
        icon: "fas fa-heart-circle",
        options: [
            { text: "지속적인 성장과 자아실현", type: "N", score: 2 },
            { text: "안정적인 삶과 소중한 사람들과의 관계", type: "S", score: 2 },
            { text: "명확한 목표 달성과 체계적인 인생 설계", type: "J", score: 1 },
            { text: "자유로운 선택과 다양한 경험의 축적", type: "P", score: 1 }
        ]
    }
];

// 성격 유형 결과 데이터 (16가지 완전판)
const personalityTypes = {
    ESTJ: {
        title: "엄격한 관리자",
        subtitle: "전통과 질서를 중시하는 체계적 리더",
        description: "당신은 천생 조직의 기둥이 될 사람입니다. 규칙과 전통을 존중하며, 효율성과 실용성을 바탕으로 모든 일을 체계적으로 처리합니다. 강한 책임감과 리더십으로 팀을 이끌며, 목표 달성을 위해서는 때로 엄격해질 수 있지만 그만큼 신뢰할 수 있는 존재입니다. 계획된 것을 실행하는 능력이 뛰어나며, 다른 사람들에게 명확한 방향성을 제시합니다.",
        icon: "fas fa-chess-king",
        color: "#dc2626",
        gradient: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
        strengths: ["강력한 실행력", "조직 관리 능력", "명확한 의사소통", "높은 책임감", "전략적 사고"],
        weaknesses: ["과도한 통제욕", "변화에 대한 저항", "감정적 배려 부족"],
        advice: "완벽을 추구하되 팀원들의 개성과 창의성도 존중해보세요. 때로는 규칙보다 사람이 우선이 될 수 있음을 기억하세요.",
        compatibility: ["ISFP", "ISTP"],
        career: ["CEO/임원", "프로젝트 매니저", "변호사", "공무원", "군인", "회계사"],
        stats: {
            logic: 92,
            emotion: 58,
            social: 83
        }
    },
    ENTJ: {
        title: "대담한 지휘관",
        subtitle: "미래를 설계하는 전략적 리더",
        description: "당신은 타고난 지휘관이자 비전을 현실로 만드는 혁신가입니다. 복잡한 시스템을 이해하고 개선하는 능력이 뛰어나며, 장기적 관점에서 전략을 수립하고 실행합니다. 높은 기준을 가지고 있으며, 자신과 타인 모두에게 최고의 성과를 요구합니다. 도전적인 목표를 설정하고 이를 달성하기 위해 팀을 이끄는 카리스마가 있습니다.",
        icon: "fas fa-chess-queen",
        color: "#7c2d12",
        gradient: "linear-gradient(135deg, #ea580c 0%, #9a3412 100%)",
        strengths: ["전략적 사고", "강력한 리더십", "혁신적 아이디어", "목표 지향성", "의사결정력"],
        weaknesses: ["완벽주의", "타인의 감정 간과", "성급한 판단"],
        advice: "목표 달성도 중요하지만 과정에서 함께하는 사람들의 감정과 의견도 귀 기울여 보세요. 완벽보다는 진전을 인정하세요.",
        compatibility: ["INFP", "INTP"],
        career: ["CEO", "전략컨설턴트", "투자전문가", "정치인", "경영기획", "창업가"],
        stats: {
            logic: 96,
            emotion: 52,
            social: 84
        }
    },
    ESFJ: {
        title: "사교적 외교관",
        subtitle: "조화로운 관계의 마에스트로",
        description: "당신은 타고난 사람 중심의 리더입니다. 다른 사람들의 필요를 직감적으로 파악하고, 모든 이가 편안하고 가치 있다고 느끼도록 하는 특별한 능력을 가지고 있습니다. 전통과 안정을 중시하며, 조직의 화합과 팀워크를 위해 헌신합니다. 실용적이면서도 따뜻한 접근 방식으로 문제를 해결하며, 구체적인 도움을 제공하는 것을 좋아합니다.",
        icon: "fas fa-handshake",
        color: "#059669",
        gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
        strengths: ["뛰어난 대인관계", "협력적 리더십", "실용적 지원", "높은 책임감", "팀 조화 능력"],
        weaknesses: ["비판에 과민반응", "자기 희생 경향", "변화 적응 어려움"],
        advice: "다른 사람을 돕는 것도 중요하지만 자신의 필요와 한계도 인정하세요. 때로는 건설적인 갈등이 더 나은 결과를 가져올 수 있습니다.",
        compatibility: ["ISFP", "INFP"],
        career: ["교육자", "간호사", "상담사", "인사관리", "이벤트 기획", "고객서비스"],
        stats: {
            logic: 62,
            emotion: 94,
            social: 96
        }
    },
    ENFJ: {
        title: "열정적 선도자",
        subtitle: "사람들에게 영감을 주는 카리스마틱 멘토",
        description: "당신은 다른 사람들의 잠재력을 이끌어내는 천재적 능력을 가진 영감의 리더입니다. 따뜻한 카리스마와 깊은 통찰력으로 사람들에게 동기를 부여하고, 긍정적인 변화를 만들어냅니다. 이상주의적 가치관을 가지고 있으며, 개인과 집단 모두의 성장을 추구합니다. 뛰어난 의사소통 능력으로 복잡한 감정과 아이디어를 명확하게 전달할 수 있습니다.",
        icon: "fas fa-star",
        color: "#7c3aed",
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
        strengths: ["영감을 주는 리더십", "뛰어난 공감능력", "의사소통 능력", "이타적 가치관", "직관적 통찰력"],
        weaknesses: ["과도한 이상주의", "자기돌봄 소홀", "비판에 민감"],
        advice: "자신을 돌보는 시간을 갖고 현실적인 목표 설정을 해보세요. 모든 사람을 구원할 필요는 없다는 것을 기억하세요.",
        compatibility: ["INFP", "ISFP"],
        career: ["교육자", "심리상담사", "인사담당", "NGO활동가", "코치", "종교인"],
        stats: {
            logic: 70,
            emotion: 95,
            social: 90
        }
    },
    ESTP: {
        title: "모험가형 실행자",
        subtitle: "현재를 즐기는 활동적인 문제해결사",
        description: "당신은 '지금 이 순간'을 가장 중요하게 여기는 현실주의자입니다. 에너지가 넘치고 활동적이며, 위기 상황에서 빛을 발하는 뛰어난 적응력을 가지고 있습니다. 실용적인 해결책을 찾는 데 탁월하며, 사람들과의 상호작용을 통해 에너지를 얻습니다. 때로는 충동적일 수 있지만, 그 덕분에 기회를 놓치지 않고 과감한 도전을 할 수 있습니다.",
        icon: "fas fa-mountain",
        color: "#f59e0b",
        gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
        strengths: ["뛰어난 적응력", "위기관리 능력", "실용적 사고", "높은 에너지", "사교성"],
        weaknesses: ["장기 계획 부족", "성급한 판단", "루틴 업무 기피"],
        advice: "즉흥성도 좋지만 장기적 관점에서의 계획도 세워보세요. 당신의 에너지를 지속가능한 방향으로 활용해보세요.",
        compatibility: ["ISFJ", "ISTJ"],
        career: ["영업", "마케팅", "스포츠", "응급의학", "경찰", "소방관"],
        stats: {
            logic: 75,
            emotion: 70,
            social: 95
        }
    },
    ENTP: {
        title: "뜨거운 토론가",
        subtitle: "아이디어의 폭포수, 혁신의 엔진",
        description: "당신은 지적 호기심이 넘치는 아이디어 뱅크입니다. 기존의 틀을 깨는 것을 좋아하며, 토론과 논쟁을 통해 새로운 관점을 발견합니다. 빠른 사고력과 창의성으로 복잡한 문제에 대한 혁신적 해결책을 제시하며, 변화와 도전을 즐깁니다. 때로는 일관성이 부족할 수 있지만, 그만큼 다양한 가능성을 탐구하는 능력이 뛰어납니다.",
        icon: "fas fa-comments",
        color: "#84cc16",
        gradient: "linear-gradient(135deg, #84cc16 0%, #65a30d 100%)",
        strengths: ["창의적 문제해결", "뛰어난 토론 능력", "혁신적 사고", "높은 적응력", "지적 호기심"],
        weaknesses: ["집중력 부족", "루틴 업무 기피", "계획 실행력 부족"],
        advice: "아이디어는 풍부하지만 실행까지 이어지도록 노력해보세요. 당신의 창의력을 구체적인 결과로 만들어보세요.",
        compatibility: ["INTJ", "INFJ"],
        career: ["발명가", "마케팅 전략가", "연구원", "창업가", "저널리스트", "변호사"],
        stats: {
            logic: 88,
            emotion: 65,
            social: 85
        }
    },
    ESFP: {
        title: "자유로운 연예인",
        subtitle: "모든 순간을 축제로 만드는 에너지 메이커",
        description: "당신은 주변을 밝게 만드는 태양 같은 존재입니다. 사람들과 함께 있을 때 가장 빛이 나며, 진정성 있는 관심과 따뜻함으로 다른 사람들의 마음을 움직입니다. 창의적이고 예술적 감각이 뛰어나며, 새로운 경험을 추구합니다. 갈등을 피하고 조화를 추구하지만, 때로는 현실적인 문제들을 간과할 수 있습니다.",
        icon: "fas fa-theater-masks",
        color: "#f97316",
        gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
        strengths: ["뛰어난 공감능력", "창의성", "긍정적 에너지", "적응력", "예술적 감각"],
        weaknesses: ["계획성 부족", "비판에 민감", "현실 회피 경향"],
        advice: "당신의 긍정 에너지는 소중한 자산입니다. 다만 현실적인 계획도 함께 세워 더 큰 꿈을 이루어보세요.",
        compatibility: ["ISTJ", "ISFJ"],
        career: ["연예인", "교사", "상담사", "디자이너", "이벤트 기획", "방송인"],
        stats: {
            logic: 60,
            emotion: 92,
            social: 95
        }
    },
    ENFP: {
        title: "열정적인 활동가",
        subtitle: "무한한 가능성을 꿈꾸는 영감의 원천",
        description: "당신은 세상을 더 나은 곳으로 만들고자 하는 이상주의자입니다. 뛰어난 직관력과 창의성으로 다른 사람들이 보지 못하는 가능성을 발견하며, 열정적으로 자신의 비전을 실현해 나갑니다. 사람들에게 영감을 주고 동기를 부여하는 능력이 뛰어나며, 다양한 분야에 관심을 가지고 끊임없이 새로운 것을 시도합니다.",
        icon: "fas fa-lightbulb",
        color: "#06b6d4",
        gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
        strengths: ["창의적 사고", "영감을 주는 능력", "높은 적응력", "열정", "통찰력"],
        weaknesses: ["집중력 부족", "루틴 업무 회피", "과도한 이상주의"],
        advice: "다양한 관심사도 좋지만 한 가지에 깊이 집중하는 시간도 가져보세요. 당신의 아이디어를 현실로 만드는 실행력을 기르세요.",
        compatibility: ["INTJ", "INFJ"],
        career: ["기자", "심리학자", "작가", "광고기획", "사회운동가", "컨설턴트"],
        stats: {
            logic: 78,
            emotion: 88,
            social: 92
        }
    },
    ISTJ: {
        title: "신중한 실무자",
        subtitle: "믿음직한 전통의 수호자",
        description: "당신은 성실하고 책임감 강한 조직의 핵심입니다. 전통과 규칙을 중시하며, 맡은 일은 끝까지 완수하는 신뢰할 수 있는 성격입니다. 체계적이고 논리적으로 접근하여 안정적인 결과를 만들어내며, 세부사항에 주의를 기울여 실수를 최소화합니다. 급격한 변화보다는 점진적이고 검증된 방법을 선호합니다.",
        icon: "fas fa-shield-alt",
        color: "#1e40af",
        gradient: "linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%)",
        strengths: ["높은 성실성", "강한 책임감", "신뢰성", "체계적 사고", "꼼꼼함"],
        weaknesses: ["변화 적응 어려움", "융통성 부족", "감정 표현 어려움"],
        advice: "새로운 시각을 받아들이고 변화에 열린 마음을 가져보세요. 당신의 안정성과 혁신 사이의 균형을 찾아보세요.",
        compatibility: ["ESFP", "ESTP"],
        career: ["회계사", "은행원", "공무원", "의료진", "법무담당", "품질관리"],
        stats: {
            logic: 85,
            emotion: 65,
            social: 55
        }
    },
    INTJ: {
        title: "독립적 전략가",
        subtitle: "미래를 설계하는 마스터마인드",
        description: "당신은 독창적이고 전략적인 사고를 가진 완벽주의자입니다. 복잡한 문제를 해결하고 혁신적인 아이디어로 미래를 만들어갑니다. 높은 기준과 명확한 비전을 가지고 있으며, 독립적으로 사고하고 행동하는 것을 선호합니다. 장기적 관점에서 시스템을 개선하고 최적화하는 능력이 뛰어납니다.",
        icon: "fas fa-brain",
        color: "#581c87",
        gradient: "linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)",
        strengths: ["전략적 사고", "독창성", "결단력", "완벽주의", "시스템적 사고"],
        weaknesses: ["사회성 부족", "지나친 비판적 성향", "완벽주의로 인한 스트레스"],
        advice: "타인과의 소통을 늘리고 감정적 교감을 중시해보세요. 완벽보다는 실행과 개선의 과정을 즐겨보세요.",
        compatibility: ["ENFP", "ENTP"],
        career: ["연구원", "IT전문가", "컨설턴트", "전략기획", "과학자", "건축가"],
        stats: {
            logic: 95,
            emotion: 45,
            social: 50
        }
    },
    ISFJ: {
        title: "헌신적 보호자",
        subtitle: "따뜻한 마음의 수호천사",
        description: "당신은 다른 사람을 돌보는 것을 천성으로 하는 따뜻한 사람입니다. 세심하고 배려심이 깊어 주변 사람들에게 안정감을 제공합니다. 실용적이면서도 감정적 지원을 아끼지 않으며, 다른 사람들의 필요를 자신의 필요보다 우선시하는 경향이 있습니다. 조용하지만 강한 내적 가치관을 가지고 있습니다.",
        icon: "fas fa-angel",
        color: "#be185d",
        gradient: "linear-gradient(135deg, #ec4899 0%, #9d174d 100%)",
        strengths: ["깊은 배려심", "헌신적 태도", "세심한 관찰력", "지지적 성격", "실용적 도움"],
        weaknesses: ["자기희생 경향", "갈등 회피", "자기주장 부족"],
        advice: "자신의 필요도 중요하게 여기고 때로는 당당히 거절해보세요. 당신의 가치와 의견도 소중합니다.",
        compatibility: ["ESFP", "ESTP"],
        career: ["간호사", "사회복지사", "교육자", "상담사", "비서", "의료진"],
        stats: {
            logic: 70,
            emotion: 90,
            social: 75
        }
    },
    INFJ: {
        title: "직관적 이상주의자",
        subtitle: "세상을 바꾸는 조용한 혁명가",
        description: "당신은 깊은 통찰력과 강한 신념을 가진 이상주의자입니다. 의미 있는 변화를 추구하며, 진정성 있는 관계를 중시합니다. 복잡한 인간의 본성을 이해하고, 미래의 가능성을 내다보는 직관적 능력이 뛰어납니다. 소수이지만 깊이 있는 관계를 선호하며, 자신만의 독특한 관점으로 세상을 바라봅니다.",
        icon: "fas fa-eye",
        color: "#0891b2",
        gradient: "linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)",
        strengths: ["깊은 통찰력", "창의성", "진정성", "이상 추구", "공감 능력"],
        weaknesses: ["완벽주의", "과도한 자기비판", "소진되기 쉬움"],
        advice: "완벽을 추구하기보다 진전을 인정하고 자신을 격려해보세요. 당신의 깊이 있는 통찰력을 나누는 것을 두려워하지 마세요.",
        compatibility: ["ENFP", "ENTP"],
        career: ["작가", "상담사", "예술가", "NGO활동가", "심리학자", "종교인"],
        stats: {
            logic: 75,
            emotion: 85,
            social: 60
        }
    },
    ISTP: {
        title: "만능 해결사",
        subtitle: "논리적이고 실용적인 장인 정신",
        description: "당신은 조용하지만 능력 있는 문제 해결사입니다. 손으로 무언가를 만들고 수리하는 것을 좋아하며, 논리적이고 실용적인 접근 방식으로 복잡한 문제를 단순하게 해결합니다. 독립적이고 자유로운 환경에서 최고의 능력을 발휘하며, 현재에 집중하여 즉석에서 효과적인 해결책을 찾아냅니다.",
        icon: "fas fa-tools",
        color: "#6b7280",
        gradient: "linear-gradient(135deg, #6b7280 0%, #4b5563 100%)",
        strengths: ["실용적 문제해결", "논리적 사고", "기계적 재능", "침착함", "독립성"],
        weaknesses: ["감정 표현 어려움", "장기 계획 부족", "사회적 상황 부담"],
        advice: "당신의 실용적 재능을 더 많은 사람들과 나누어보세요. 감정적 소통도 기술처럼 연습하면 늘 수 있습니다.",
        compatibility: ["ESTJ", "ESFJ"],
        career: ["엔지니어", "기술자", "조종사", "정비사", "외과의", "운동선수"],
        stats: {
            logic: 90,
            emotion: 50,
            social: 45
        }
    },
    INTP: {
        title: "논리적 사색가",
        subtitle: "아이디어의 건축가, 지식의 탐험가",
        description: "당신은 지적 호기심이 넘치는 이론가입니다. 복잡한 개념을 분석하고 이해하는 것을 즐기며, 논리적 일관성을 중시합니다. 독창적인 아이디어를 개발하고 이론적 틀을 구축하는 능력이 뛰어나며, 지식 그 자체에 대한 순수한 열정을 가지고 있습니다. 독립적으로 탐구하고 사고하는 것을 선호합니다.",
        icon: "fas fa-atom",
        color: "#8b5cf6",
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
        strengths: ["논리적 분석력", "창의적 사고", "독창성", "이론적 이해", "객관성"],
        weaknesses: ["실행력 부족", "사회적 기술 부족", "감정적 둔감"],
        advice: "이론적 지식을 실제로 적용해보는 기회를 만들어보세요. 다른 사람들과의 협업을 통해 더 큰 성과를 낼 수 있습니다.",
        compatibility: ["ENTJ", "ESTJ"],
        career: ["연구원", "수학자", "철학자", "프로그래머", "분석가", "발명가"],
        stats: {
            logic: 95,
            emotion: 40,
            social: 35
        }
    },
    ISFP: {
        title: "감성적 예술가",
        subtitle: "아름다움을 추구하는 온화한 영혼",
        description: "당신은 조용하고 친근한 예술가 기질을 가진 사람입니다. 개인의 가치와 신념을 소중히 여기며, 아름다움과 조화를 추구합니다. 타인을 판단하지 않고 받아들이는 관용적인 태도를 가지고 있으며, 자신만의 독특한 방식으로 세상에 기여하고자 합니다. 진정성 있는 관계와 의미 있는 경험을 중시합니다.",
        icon: "fas fa-palette",
        color: "#ec4899",
        gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
        strengths: ["예술적 감각", "깊은 공감능력", "진정성", "관용", "창의성"],
        weaknesses: ["자기표현 어려움", "갈등 회피", "현실적 계획 부족"],
        advice: "당신의 창의적 재능과 깊은 감성을 더 많은 사람들과 나누어보세요. 자신의 목소리를 내는 것을 두려워하지 마세요.",
        compatibility: ["ESTJ", "ESFJ"],
        career: ["예술가", "디자이너", "음악가", "상담사", "작가", "치료사"],
        stats: {
            logic: 55,
            emotion: 95,
            social: 65
        }
    },
    INFP: {
        title: "열정적 중재자",
        subtitle: "가치와 이상을 추구하는 몽상가",
        description: "당신은 깊은 내적 가치관과 이상을 가진 이상주의자입니다. 자신과 타인의 잠재력을 믿으며, 진정성 있는 삶을 추구합니다. 창의적이고 개방적인 마음으로 다양한 가능성을 탐구하며, 의미 있는 목적을 위해 헌신할 수 있는 열정을 가지고 있습니다. 조화로운 관계와 개인의 성장을 중시합니다.",
        icon: "fas fa-dove",
        color: "#10b981",
        gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        strengths: ["강한 가치관", "창의성", "공감능력", "개방성", "성장 지향"],
        weaknesses: ["현실적 계획 부족", "비판에 민감", "과도한 이상주의"],
        advice: "이상과 현실 사이의 균형을 찾아보세요. 당신의 가치관을 구체적인 행동으로 실현하는 방법을 모색해보세요.",
        compatibility: ["ENFJ", "ESFJ"],
        career: ["작가", "심리학자", "상담사", "사회복지사", "예술가", "활동가"],
        stats: {
            logic: 65,
            emotion: 90,
            social: 70
        }
    }
};

// 심층적인 오늘의 조언 데이터 (50가지)
const dailyAdvice = [
    "오늘은 자신의 한계를 시험해볼 날입니다. 불가능해 보이는 일에 도전해보세요.",
    "작은 친절이 나비효과를 일으킬 수 있습니다. 누군가의 하루를 바꿔보세요.",
    "완벽함보다는 진정성이 더 가치 있습니다. 솔직한 당신을 보여주세요.",
    "오늘의 실패는 내일의 성공을 위한 귀중한 데이터입니다. 두려워하지 마세요.",
    "다른 사람의 관점에서 한 번 더 생각해보세요. 새로운 해답이 보일 것입니다.",
    "당신이 미루고 있는 그 일, 오늘 15분만 투자해보세요.",
    "감사는 가장 강력한 에너지원입니다. 세 가지를 찾아 감사해보세요.",
    "창의력은 제약 속에서 더 빛납니다. 한계를 창조의 도구로 사용해보세요.",
    "침묵 속에서 들리는 내면의 목소리에 귀 기울여보세요.",
    "오늘 하나의 고정관념을 깨뜨려보세요. 새로운 가능성이 열릴 것입니다.",
    "타인의 성공을 진심으로 축하하세요. 그 에너지가 당신에게도 돌아올 것입니다.",
    "불확실함을 받아들이세요. 그 안에 무한한 가능성이 숨어있습니다.",
    "오늘 한 번은 '아니오'라고 말해보세요. 경계를 설정하는 것도 용기입니다.",
    "당신의 약점이 때로는 가장 큰 강점이 될 수 있습니다.",
    "과거의 상처를 치유하는 것보다 미래의 상처를 예방하는 것이 현명합니다.",
    "남과 비교하지 마세요. 당신의 여정은 유일무이합니다.",
    "변화를 두려워하는 대신 정체를 두려워하세요.",
    "오늘 누군가에게 깊이 있는 질문을 해보세요. 관계가 한층 깊어질 것입니다.",
    "실수를 숨기려 하지 말고 그것으로부터 배우려 하세요.",
    "당신의 직감을 믿되, 논리로 검증하는 것을 잊지 마세요.",
    "오늘은 '해야 할 일' 대신 '하고 싶은 일'을 우선시해보세요.",
    "다른 사람을 바꾸려 하지 말고 자신을 바꾸는 데 집중하세요.",
    "완벽한 타이밍이란 없습니다. 지금이 바로 그 순간입니다.",
    "당신의 에너지를 소모하는 것들을 정리할 시간입니다.",
    "오늘 하루 판단하지 말고 관찰만 해보세요.",
    "작은 습관의 변화가 큰 인생의 변화를 만듭니다.",
    "당신이 가진 것에 집중하세요. 없는 것에 매달리지 마세요.",
    "오늘은 평소보다 5% 더 용감해보세요.",
    "다른 사람의 조언을 듣되, 최종 결정은 당신이 내리세요.",
    "단순함 속에서 진정한 아름다움을 발견하세요.",
    "오늘 당신의 꿈에 한 걸음 더 가까이 다가가세요.",
    "갈등을 피하지 말고 건설적으로 해결해보세요.",
    "당신의 가치관이 행동과 일치하는지 점검해보세요.",
    "오늘은 듣는 것에 더 집중하고 말하는 것은 줄여보세요.",
    "실패를 두려워하기보다 평범함을 두려워하세요.",
    "당신의 강점을 과소평가하지 마세요. 그것들을 더 활용하세요.",
    "오늘 새로운 관점으로 오래된 문제를 바라보세요.",
    "자신에게 가혹하게 굴지 마세요. 친구에게 하듯 자신을 대하세요.",
    "목표는 크게, 실행은 작게 시작하세요.",
    "당신이 통제할 수 없는 것들에 대한 걱정을 내려놓으세요.",
    "오늘 하나의 새로운 것을 배워보세요. 호기심을 행동으로 옮기세요.",
    "부정적인 생각이 들 때, 그 반대의 가능성도 생각해보세요.",
    "당신의 시간은 가장 귀중한 자산입니다. 현명하게 투자하세요.",
    "오늘은 결과보다 과정에 집중해보세요.",
    "다른 사람의 시선에서 자유로워지세요. 당신의 인생입니다.",
    "작은 진전도 축하할 가치가 있습니다. 자신을 격려하세요.",
    "오늘 당신이 미래의 자신에게 줄 수 있는 최고의 선물을 생각해보세요.",
    "순간에 집중하세요. 과거도 미래도 지금 이 순간에 존재하지 않습니다.",
    "당신의 독특함을 숨기지 마세요. 그것이 당신의 경쟁력입니다.",
    "오늘 하루, 감정에 휘둘리지 말고 감정을 관찰해보세요."
];

// 더욱 심층적인 오늘의 운세 데이터 (50가지)
const dailyFortune = [
    "오늘은 예상치 못한 기회가 당신 앞에 나타날 것입니다. 열린 마음으로 받아들이세요.",
    "과거의 인연이 새로운 형태로 당신의 삶에 다시 등장할 수 있습니다.",
    "중요한 결정을 내리기 좋은 날입니다. 당신의 직감이 옳은 방향을 가리키고 있습니다.",
    "창의적인 아이디어가 샘솟는 날입니다. 즉흥적인 영감을 놓치지 마세요.",
    "가족이나 오랜 친구와의 깊은 대화가 당신에게 새로운 통찰을 줄 것입니다.",
    "금전적으로 긍정적인 흐름이 시작되는 날입니다. 투자나 새로운 수입원을 고려해보세요.",
    "건강에 관심을 기울이기 좋은 때입니다. 몸의 신호에 귀 기울이세요.",
    "새로운 지식이나 기술을 습득하기에 최적의 시기입니다. 학습 의욕이 높아집니다.",
    "여행이나 새로운 환경에서 특별한 만남이 기다리고 있습니다.",
    "직장에서 당신의 노력이 인정받고 좋은 평가를 받을 가능성이 높습니다.",
    "연인이나 배우자와의 관계에 새로운 전환점이 올 수 있습니다.",
    "숨겨진 재능이나 능력을 발견하게 될 흥미진진한 하루가 될 것입니다.",
    "멘토나 조언자 역할을 할 중요한 인물을 만날 수 있는 날입니다.",
    "창작활동이나 예술적 표현에서 큰 영감을 얻을 수 있습니다.",
    "과거에 포기했던 꿈이나 목표를 다시 추진할 기회가 생깁니다.",
    "팀워크나 협업에서 뛰어난 성과를 거둘 수 있는 하루입니다.",
    "새로운 취미나 관심사를 통해 삶의 활력을 찾게 될 것입니다.",
    "직관력이 특히 예리해지는 날입니다. 첫인상과 느낌을 믿으세요.",
    "소셜미디어나 온라인을 통해 뜻밖의 좋은 소식이 전해질 수 있습니다.",
    "자연이나 동물과의 교감을 통해 마음의 평화를 찾을 수 있습니다.",
    "오래된 문제나 갈등이 의외로 쉽게 해결될 수 있는 날입니다.",
    "새로운 기술이나 도구가 당신의 일상을 크게 개선시킬 것입니다.",
    "책이나 영화에서 인생을 바꿀 만한 깊은 감동을 받을 수 있습니다.",
    "봉사활동이나 타인을 돕는 일에서 예상치 못한 보상을 얻을 것입니다.",
    "어린 시절의 꿈이나 순수함이 현재의 당신에게 중요한 영감을 줄 것입니다.",
    "경쟁보다는 협력을 통해 더 큰 성취를 이룰 수 있는 날입니다.",
    "미술관, 박물관, 공연장에서 특별한 예술적 경험을 하게 될 것입니다.",
    "새로운 언어나 문화에 대한 관심이 흥미로운 기회로 이어질 수 있습니다.",
    "운동이나 신체활동을 통해 정신적 스트레스가 크게 해소될 것입니다.",
    "과거의 실수나 후회에서 벗어나 새로운 시작을 할 수 있는 전환점입니다.",
    "누군가의 조언이나 충고가 당신의 인생 방향을 바꿀 수도 있습니다.",
    "즉흥적인 모임이나 파티에서 평생 친구를 만날 수 있습니다.",
    "새로운 거주지나 작업 공간으로의 이동이 행운을 가져다줄 것입니다.",
    "과학기술이나 최신 트렌드에 관심을 가지면 새로운 기회가 열립니다.",
    "명상이나 요가 같은 정신수양을 통해 내면의 지혜를 발견할 것입니다.",
    "예상보다 빨리 목표를 달성하거나 원하는 결과를 얻을 수 있습니다.",
    "새로운 요리나 음식을 통해 문화적 경험과 즐거움을 동시에 얻을 것입니다.",
    "어려웠던 인간관계가 의외로 쉽게 회복되거나 개선될 수 있습니다.",
    "창업이나 새로운 사업 아이템에 대한 영감이 떠오를 것입니다.",
    "자연재해나 사고로부터 보호받는 행운의 하루가 될 것입니다.",
    "익명의 선행이나 무작위적 친절이 당신에게 큰 기쁨을 가져다줄 것입니다.",
    "오래 잃어버렸던 물건이나 소중한 추억이 다시 돌아올 수 있습니다.",
    "새로운 교육 기회나 자격증 취득 기회가 예상치 못하게 생길 것입니다.",
    "환경보호나 사회공헌 활동에 참여하면서 보람을 느낄 수 있습니다.",
    "디지털 디톡스나 휴식을 통해 진정한 자신을 재발견할 수 있습니다.",
    "새로운 패션이나 스타일 변화가 자신감과 매력을 크게 높여줄 것입니다.",
    "멀리 떨어진 친구나 가족으로부터 반가운 연락이 올 수 있습니다.",
    "개인적인 취미나 특기가 뜻밖의 수익원이 될 가능성이 보입니다.",
    "심리적 치유나 상담을 통해 오랜 트라우마에서 벗어날 수 있습니다.",
    "우연한 발견이나 세렌디피티가 당신의 하루를 특별하게 만들 것입니다."
];

// 확장된 궁합 데이터 (16가지 모든 조합)
const compatibilityData = {
    ESTJ: { 
        ISFP: { score: 88, message: "서로의 다른 점이 완벽하게 보완되는 환상의 궁합!" },
        ISTP: { score: 82, message: "실용적이고 안정적인 관계를 만들어가는 좋은 조합" },
        ESFJ: { score: 78, message: "목표 지향적이고 체계적인 공통점이 있는 관계" },
        ISTJ: { score: 85, message: "전통과 체계를 중시하는 든든한 파트너십" },
        ENTJ: { score: 80, message: "강력한 리더십이 시너지를 내는 조합" }
    },
    ENTJ: {
        INFP: { score: 92, message: "비전과 감성이 만나 시너지를 내는 최고의 궁합!" },
        INTP: { score: 87, message: "논리적 사고와 창의성이 조화를 이루는 관계" },
        ENFJ: { score: 82, message: "리더십과 인간관계 능력이 합쳐진 파워풀한 조합" },
        INTJ: { score: 88, message: "전략적 사고가 공명하는 마스터마인드 듀오" },
        ENTP: { score: 83, message: "혁신과 아이디어가 폭발하는 역동적 관계" }
    },
    ESFJ: {
        ISFP: { score: 89, message: "서로를 배려하고 이해하는 따뜻한 관계" },
        INFP: { score: 84, message: "감성적 교감이 깊은 로맨틱한 궁합" },
        ESTP: { score: 77, message: "활동적이고 즐거운 에너지를 공유하는 관계" },
        ISFJ: { score: 80, message: "배려와 돌봄이 넘치는 안정적 관계" },
        ENFJ: { score: 85, message: "사람 중심의 가치관을 공유하는 조화로운 관계" }
    },
    ENFJ: {
        INFP: { score: 94, message: "깊은 이해와 성장을 추구하는 이상적인 관계!" },
        ISFP: { score: 87, message: "창의성과 배려심이 어우러진 아름다운 조합" },
        INTJ: { score: 80, message: "비전과 실행력이 균형을 이루는 관계" },
        ENFP: { score: 88, message: "영감과 열정이 증폭되는 시너지 관계" },
        INFJ: { score: 90, message: "깊은 공감과 이해로 연결된 영혼의 동반자" }
    },
    ESTP: {
        ISFJ: { score: 86, message: "안정감과 모험심이 균형을 이루는 완벽한 조합!" },
        ISTJ: { score: 81, message: "현실적이고 실용적인 가치를 공유하는 관계" },
        ESFP: { score: 83, message: "활기와 즐거움이 가득한 에너지 넘치는 관계" },
        ENFP: { score: 78, message: "즉흥성과 창의성이 만나는 흥미로운 조합" },
        ISTP: { score: 84, message: "실용적 문제해결 능력이 빛나는 파트너십" }
    },
    ENTP: {
        INTJ: { score: 91, message: "아이디어와 실행력이 만나 혁신을 창조하는 관계!" },
        INFJ: { score: 85, message: "깊이와 폭넓음이 조화를 이루는 지적인 파트너십" },
        ENFP: { score: 88, message: "창의적 에너지가 폭발하는 역동적 관계" },
        INTP: { score: 86, message: "지적 호기심과 논리가 공명하는 관계" },
        ENTJ: { score: 82, message: "혁신적 아이디어와 강력한 실행력의 조합" }
    },
    ESFP: {
        ISTJ: { score: 88, message: "안정성과 활력이 조화를 이루는 완벽한 균형!" },
        ISFJ: { score: 84, message: "따뜻함과 즐거움이 공존하는 행복한 관계" },
        ESTJ: { score: 79, message: "목표 달성과 즐거움을 동시에 추구하는 관계" },
        ENFP: { score: 85, message: "긍정 에너지와 창의성이 만나는 밝은 관계" },
        ISFP: { score: 82, message: "예술적 감성과 자유로운 영혼이 통하는 조합" }
    },
    ENFP: {
        INTJ: { score: 93, message: "영감과 전략이 만나 마법 같은 시너지를 내는 관계!" },
        INFJ: { score: 89, message: "직관과 가능성이 공명하는 깊이 있는 관계" },
        ENTP: { score: 87, message: "창의적 아이디어가 끝없이 샘솟는 관계" },
        ENFJ: { score: 84, message: "이상과 열정을 공유하는 영감적 파트너십" },
        INTP: { score: 81, message: "가능성과 논리가 만나는 흥미로운 조합" }
    },
    ISTJ: {
        ESFP: { score: 89, message: "안정성과 활력이 조화를 이루는 완벽한 균형!" },
        ESTP: { score: 83, message: "현실적이고 실용적인 가치를 공유하는 관계" },
        ISFJ: { score: 85, message: "전통과 책임감을 중시하는 든든한 파트너십" },
        ESTJ: { score: 81, message: "체계와 질서를 추구하는 안정적 관계" },
        INTJ: { score: 78, message: "계획성과 전략이 만나는 체계적 관계" }
    },
    INTJ: {
        ENFP: { score: 94, message: "전략과 열정이 만나 무한한 가능성을 창조하는 관계!" },
        ENTP: { score: 87, message: "지적 호기심과 혁신이 넘치는 자극적인 조합" },
        INFJ: { score: 82, message: "깊은 사고와 직관이 공명하는 신비로운 관계" },
        ENTJ: { score: 86, message: "전략적 마스터마인드들의 파워풀한 듀오" },
        INFP: { score: 80, message: "비전과 가치관이 조화를 이루는 깊이 있는 관계" }
    },
    ISFJ: {
        ESFP: { score: 87, message: "따뜻함과 즐거움이 공존하는 행복한 관계!" },
        ESTP: { score: 82, message: "안정감과 모험심이 균형을 이루는 조합" },
        ISFP: { score: 79, message: "배려와 예술적 감성이 만나는 조화로운 관계" },
        INFJ: { score: 84, message: "서로의 감정을 깊이 이해하는 공감대 높은 관계" },
        ISTJ: { score: 78, message: "전통과 안정을 중시하는 믿음직한 파트너십" }
    },
    INFJ: {
        ENFP: { score: 91, message: "직관과 가능성이 만나 마법 같은 시너지를 내는 관계!" },
        ENTP: { score: 85, message: "깊이와 폭넓음이 조화를 이루는 지적인 파트너십" },
        INFP: { score: 83, message: "깊은 이해와 진정성으로 연결된 영혼의 관계" },
        ENFJ: { score: 88, message: "이상과 비전을 공유하는 영감적 관계" },
        INTJ: { score: 80, message: "직관과 전략이 만나는 신비로운 조합" }
    },
    ISTP: {
        ESTJ: { score: 84, message: "실용성과 효율성을 추구하는 현실적 파트너십!" },
        ESFJ: { score: 78, message: "논리와 감정이 균형을 이루는 보완적 관계" },
        ISFP: { score: 81, message: "조용한 독립성과 예술적 감성이 만나는 관계" },
        ESTP: { score: 86, message: "현실적 문제해결 능력이 빛나는 실용적 조합" },
        ENTP: { score: 75, message: "논리와 창의성이 만나는 흥미로운 관계" }
    },
    INTP: {
        ENTJ: { score: 88, message: "아이디어와 실행력이 만나는 완벽한 조합!" },
        ENFJ: { score: 79, message: "논리와 감성이 조화를 이루는 균형잡힌 관계" },
        ENTP: { score: 84, message: "지적 호기심과 창의성이 폭발하는 관계" },
        INFP: { score: 82, message: "깊은 사고와 가치관이 만나는 철학적 관계" },
        INTJ: { score: 85, message: "논리와 전략이 공명하는 마스터마인드 듀오" }
    },
    ISFP: {
        ESTJ: { score: 89, message: "서로의 다름이 완벽하게 보완되는 환상의 궁합!" },
        ESFJ: { score: 83, message: "감성과 배려가 만나는 따뜻한 관계" },
        ENFJ: { score: 86, message: "예술적 감성과 영감이 어우러진 아름다운 조합" },
        ISFJ: { score: 77, message: "조용한 배려와 예술적 감성이 통하는 관계" },
        ESFP: { score: 80, message: "자유로운 영혼과 즐거움이 만나는 조화로운 관계" }
    },
    INFP: {
        ENFJ: { score: 92, message: "가치와 이상이 만나 아름다운 시너지를 내는 관계!" },
        ENTJ: { score: 87, message: "비전과 감성이 조화를 이루는 보완적 파트너십" },
        ENFP: { score: 84, message: "창의성과 가능성이 무한히 확장되는 관계" },
        INFJ: { score: 81, message: "깊은 가치관과 진정성으로 연결된 영혼의 관계" },
        INTP: { score: 79, message: "이상과 논리가 만나는 철학적 파트너십" }
    }
};

// 추천 테스트 데이터
const recommendedTests = [
    {
        title: "연애 스타일 테스트",
        description: "나의 연애 패턴과 이상형 분석",
        icon: "fas fa-heart",
        comingSoon: true
    },
    {
        title: "직업 적성 테스트", 
        description: "나에게 맞는 직업과 진로 탐색",
        icon: "fas fa-briefcase",
        comingSoon: true
    },
    {
        title: "스트레스 진단",
        description: "스트레스 유형과 해소법 제안",
        icon: "fas fa-spa",
        comingSoon: true
    },
    {
        title: "리더십 유형",
        description: "나만의 리더십 스타일 발견",
        icon: "fas fa-crown",
        comingSoon: true
    }
];

// 성격 유형별 아이콘과 색상 매핑
const typeIcons = {
    E: "fas fa-users",
    I: "fas fa-user",
    S: "fas fa-eye",
    N: "fas fa-lightbulb", 
    T: "fas fa-brain",
    F: "fas fa-heart",
    J: "fas fa-list",
    P: "fas fa-random"
};

const typeColors = {
    ESTJ: "#dc2626", ENTJ: "#ea580c", ESFJ: "#10b981", ENFJ: "#8b5cf6",
    ISTJ: "#3b82f6", INTJ: "#7c3aed", ISFJ: "#ec4899", INFJ: "#06b6d4",
    ESTP: "#f59e0b", ENTP: "#84cc16", ESFP: "#f97316", ENFP: "#06b6d4",
    ISTP: "#6b7280", INTP: "#8b5cf6", ISFP: "#ec4899", INFP: "#10b981"
};

// 로컬 스토리지 키
const STORAGE_KEYS = {
    LAST_RESULT: 'ai_test_last_result',
    DAILY_FORTUNE_DATE: 'ai_test_daily_fortune_date',
    DAILY_FORTUNE_SHOWN: 'ai_test_daily_fortune_shown',
    TEST_COUNT: 'ai_test_count',
    LOVE_RESULT: 'ai_test_love_result',
    CAREER_RESULT: 'ai_test_career_result',
    STRESS_RESULT: 'ai_test_stress_result',
    LEADERSHIP_RESULT: 'ai_test_leadership_result'
};

// 연애 스타일 테스트 질문
const loveTestQuestions = [
    {
        id: 1,
        question: "이상형과 첫 만남에서 가장 중요하게 보는 것은?",
        icon: "fas fa-heart",
        options: [
            { text: "대화가 잘 통하고 유머감각이 있는지", type: "communication", score: 2 },
            { text: "외모와 첫인상이 매력적인지", type: "appearance", score: 2 },
            { text: "가치관과 인생관이 비슷한지", type: "values", score: 2 },
            { text: "경제력과 안정성이 있는지", type: "stability", score: 2 }
        ]
    },
    {
        id: 2,
        question: "연인과 갈등이 생겼을 때 당신의 해결 방식은?",
        icon: "fas fa-comments",
        options: [
            { text: "즉시 대화로 풀려고 노력한다", type: "communication", score: 2 },
            { text: "시간을 두고 감정이 가라앉기를 기다린다", type: "patience", score: 2 },
            { text: "먼저 사과하고 화해하려 한다", type: "harmony", score: 2 },
            { text: "논리적으로 문제점을 분석해서 해결한다", type: "logical", score: 2 }
        ]
    },
    {
        id: 3,
        question: "연애에서 가장 중요하게 생각하는 가치는?",
        icon: "fas fa-balance-scale",
        options: [
            { text: "서로에 대한 신뢰와 믿음", type: "trust", score: 2 },
            { text: "뜨거운 열정과 로맨스", type: "passion", score: 2 },
            { text: "편안함과 안정감", type: "comfort", score: 2 },
            { text: "함께 성장하고 발전하는 것", type: "growth", score: 2 }
        ]
    },
    {
        id: 4,
        question: "데이트 장소를 정할 때 선호하는 것은?",
        icon: "fas fa-map-marker-alt",
        options: [
            { text: "새롭고 특별한 경험을 할 수 있는 곳", type: "adventure", score: 2 },
            { text: "조용하고 둘만의 시간을 가질 수 있는 곳", type: "intimate", score: 2 },
            { text: "맛있는 음식과 좋은 분위기의 식당", type: "comfort", score: 2 },
            { text: "액티비티를 함께 즐길 수 있는 곳", type: "active", score: 2 }
        ]
    },
    {
        id: 5,
        question: "연인의 과거 연애사에 대해 어떻게 생각하나요?",
        icon: "fas fa-history",
        options: [
            { text: "궁금하지만 굳이 알고 싶지 않다", type: "respect", score: 2 },
            { text: "솔직하게 서로 이야기하는 것이 좋다", type: "openness", score: 2 },
            { text: "과거는 과거일 뿐 현재가 중요하다", type: "present", score: 2 },
            { text: "어느 정도는 알아야 마음이 편하다", type: "security", score: 2 }
        ]
    }
];

// 직업 적성 테스트 질문
const careerTestQuestions = [
    {
        id: 1,
        question: "일할 때 가장 동기부여가 되는 요소는?",
        icon: "fas fa-rocket",
        options: [
            { text: "높은 연봉과 안정적인 수입", type: "money", score: 2 },
            { text: "사회에 기여하고 의미 있는 일", type: "meaning", score: 2 },
            { text: "창의성을 발휘할 수 있는 기회", type: "creativity", score: 2 },
            { text: "인정받고 성취감을 느끼는 것", type: "achievement", score: 2 }
        ]
    },
    {
        id: 2,
        question: "선호하는 업무 환경은?",
        icon: "fas fa-building",
        options: [
            { text: "혼자 집중해서 일할 수 있는 환경", type: "independent", score: 2 },
            { text: "팀워크와 협업이 활발한 환경", type: "team", score: 2 },
            { text: "자유롭고 유연한 분위기", type: "flexible", score: 2 },
            { text: "체계적이고 안정적인 조직", type: "structured", score: 2 }
        ]
    },
    {
        id: 3,
        question: "새로운 프로젝트를 맡았을 때 접근 방식은?",
        icon: "fas fa-lightbulb",
        options: [
            { text: "철저한 계획과 준비 후 단계별 실행", type: "planning", score: 2 },
            { text: "일단 시작하면서 배우고 조정해나가기", type: "learning", score: 2 },
            { text: "과거 경험과 데이터를 분석해서 접근", type: "analytical", score: 2 },
            { text: "창의적이고 혁신적인 방법 모색", type: "innovative", score: 2 }
        ]
    },
    {
        id: 4,
        question: "업무에서 스트레스를 가장 많이 받는 상황은?",
        icon: "fas fa-exclamation-triangle",
        options: [
            { text: "명확하지 않은 지시와 모호한 업무", type: "clarity", score: 2 },
            { text: "너무 반복적이고 단조로운 일", type: "variety", score: 2 },
            { text: "과도한 경쟁과 압박감", type: "pressure", score: 2 },
            { text: "인간관계 갈등과 정치적 상황", type: "relationships", score: 2 }
        ]
    },
    {
        id: 5,
        question: "10년 후 이상적인 직업 상황은?",
        icon: "fas fa-flag",
        options: [
            { text: "해당 분야의 전문가로 인정받기", type: "expert", score: 2 },
            { text: "리더나 관리자로 팀을 이끌기", type: "leader", score: 2 },
            { text: "창업해서 내 사업을 운영하기", type: "entrepreneur", score: 2 },
            { text: "워라밸을 지키며 안정적으로 일하기", type: "balance", score: 2 }
        ]
    }
];

// 스트레스 진단 테스트 질문
const stressTestQuestions = [
    {
        id: 1,
        question: "최근 한 달간 수면 패턴은 어떤가요?",
        icon: "fas fa-bed",
        options: [
            { text: "잠들기 어렵고 자주 깬다", type: "sleep_disorder", score: 3 },
            { text: "충분히 자도 피곤함을 느낀다", type: "fatigue", score: 2 },
            { text: "평소보다 많이 자거나 적게 잔다", type: "sleep_change", score: 2 },
            { text: "규칙적이고 깊게 잠을 잔다", type: "good_sleep", score: 0 }
        ]
    },
    {
        id: 2,
        question: "일상생활에서 짜증이나 화가 나는 빈도는?",
        icon: "fas fa-angry",
        options: [
            { text: "거의 매일 여러 번 짜증이 난다", type: "high_irritation", score: 3 },
            { text: "일주일에 몇 번 정도 화가 난다", type: "medium_irritation", score: 2 },
            { text: "가끔 스트레스받을 때만 그렇다", type: "low_irritation", score: 1 },
            { text: "거의 화내지 않는 편이다", type: "calm", score: 0 }
        ]
    },
    {
        id: 3,
        question: "집중력과 기억력은 어떤 상태인가요?",
        icon: "fas fa-brain",
        options: [
            { text: "집중이 잘 안 되고 깜빡하는 일이 많다", type: "concentration_issue", score: 3 },
            { text: "예전보다 집중력이 떨어진 것 같다", type: "mild_decline", score: 2 },
            { text: "상황에 따라 다르다", type: "variable", score: 1 },
            { text: "집중력과 기억력이 좋은 편이다", type: "good_focus", score: 0 }
        ]
    },
    {
        id: 4,
        question: "신체적 증상 중 해당하는 것은?",
        icon: "fas fa-heartbeat",
        options: [
            { text: "두통, 목어깨 결림이 자주 있다", type: "physical_stress", score: 3 },
            { text: "소화불량이나 위장 문제가 있다", type: "digestive_issue", score: 2 },
            { text: "가끔 가슴이 답답하거나 숨이 차다", type: "breathing_issue", score: 2 },
            { text: "특별한 신체 증상은 없다", type: "no_symptoms", score: 0 }
        ]
    },
    {
        id: 5,
        question: "스트레스 해소 방법으로 주로 사용하는 것은?",
        icon: "fas fa-spa",
        options: [
            { text: "운동이나 산책 등 신체 활동", type: "exercise", score: 0 },
            { text: "음악 듣기, 영화 보기 등 여가활동", type: "entertainment", score: 0 },
            { text: "친구나 가족과 대화하기", type: "social", score: 0 },
            { text: "특별한 해소 방법이 없다", type: "no_coping", score: 3 }
        ]
    }
];

// 리더십 유형 테스트 질문
const leadershipTestQuestions = [
    {
        id: 1,
        question: "팀 프로젝트에서 자연스럽게 맡게 되는 역할은?",
        icon: "fas fa-users",
        options: [
            { text: "전체적인 방향성을 제시하고 조율하는 역할", type: "visionary", score: 2 },
            { text: "구체적인 실행 계획을 세우고 관리하는 역할", type: "organizer", score: 2 },
            { text: "팀원들의 의견을 듣고 조화를 만드는 역할", type: "facilitator", score: 2 },
            { text: "전문적인 업무를 책임지고 수행하는 역할", type: "specialist", score: 2 }
        ]
    },
    {
        id: 2,
        question: "팀원이 실수했을 때 대처 방식은?",
        icon: "fas fa-exclamation",
        options: [
            { text: "즉시 피드백을 주고 개선 방안을 제시한다", type: "coach", score: 2 },
            { text: "개별적으로 대화해서 원인을 파악한다", type: "mentor", score: 2 },
            { text: "팀 전체의 시스템과 프로세스를 점검한다", type: "systems_thinker", score: 2 },
            { text: "실수를 만회할 기회를 제공한다", type: "supportive", score: 2 }
        ]
    },
    {
        id: 3,
        question: "중요한 결정을 내릴 때 가장 중시하는 것은?",
        icon: "fas fa-gavel",
        options: [
            { text: "데이터와 논리적 분석", type: "analytical", score: 2 },
            { text: "팀원들의 의견과 합의", type: "democratic", score: 2 },
            { text: "장기적 비전과 목표", type: "strategic", score: 2 },
            { text: "빠른 실행과 결과", type: "decisive", score: 2 }
        ]
    },
    {
        id: 4,
        question: "팀의 동기부여를 위해 주로 사용하는 방법은?",
        icon: "fas fa-trophy",
        options: [
            { text: "명확한 목표와 보상 시스템", type: "goal_oriented", score: 2 },
            { text: "개인의 성장과 발전 기회 제공", type: "developer", score: 2 },
            { text: "팀워크와 소속감 강화", type: "team_builder", score: 2 },
            { text: "자율성과 창의성 존중", type: "empowering", score: 2 }
        ]
    },
    {
        id: 5,
        question: "리더로서 가장 어려워하는 부분은?",
        icon: "fas fa-question",
        options: [
            { text: "어려운 결정을 혼자 내려야 할 때", type: "burden", score: 2 },
            { text: "팀원들과의 갈등을 조정할 때", type: "conflict", score: 2 },
            { text: "완벽한 결과를 만들어야 한다는 압박", type: "perfectionist", score: 2 },
            { text: "모든 사람을 만족시켜야 한다는 부담", type: "people_pleaser", score: 2 }
        ]
    }
];

// 연애 스타일 결과
const loveStyles = {
    romantic_idealist: {
        title: "로맨틱 이상주의자",
        description: "당신은 진정한 사랑과 운명적 만남을 믿는 로맨티스트입니다. 깊은 감정적 교감을 중시하며, 상대방과 영혼의 동반자가 되기를 원합니다.",
        icon: "fas fa-heart",
        advice: "현실적인 부분도 고려하면서 관계를 발전시켜 나가세요."
    },
    practical_partner: {
        title: "실용적 파트너",
        description: "안정적이고 현실적인 연애를 추구합니다. 상호 존중과 신뢰를 바탕으로 한 건강한 관계를 만들어갑니다.",
        icon: "fas fa-handshake",
        advice: "때로는 감정적인 표현과 로맨스도 중요하다는 것을 기억하세요."
    },
    passionate_lover: {
        title: "열정적 연인",
        description: "뜨거운 열정과 강렬한 감정을 중시하는 타입입니다. 사랑할 때는 전부를 다 주는 스타일입니다.",
        icon: "fas fa-fire",
        advice: "열정도 중요하지만 지속가능한 관계를 위한 균형도 필요합니다."
    },
    independent_lover: {
        title: "독립적 연인",
        description: "개인의 자유와 독립성을 중시하면서도 깊은 애정을 나누는 성숙한 연애 스타일입니다.",
        icon: "fas fa-dove",
        advice: "상대방과 더 많은 시간을 함께하며 친밀감을 쌓아보세요."
    }
};

// 직업 적성 결과
const careerTypes = {
    creative_innovator: {
        title: "창의적 혁신가",
        description: "새로운 아이디어를 만들어내고 혁신적인 해결책을 제시하는 것을 즐깁니다. 예술, 디자인, 기획 분야에 적합합니다.",
        icon: "fas fa-lightbulb",
        jobs: ["디자이너", "기획자", "작가", "예술가", "마케터"],
        advice: "창의성과 실용성의 균형을 맞춰보세요."
    },
    analytical_expert: {
        title: "분석적 전문가",
        description: "데이터 분석과 논리적 사고를 통해 문제를 해결하는 것을 좋아합니다. 연구, 분석, 기술 분야에 적합합니다.",
        icon: "fas fa-chart-line",
        jobs: ["데이터 분석가", "연구원", "개발자", "컨설턴트", "회계사"],
        advice: "인간관계와 소통 능력도 함께 개발해보세요."
    },
    people_leader: {
        title: "사람 중심 리더",
        description: "사람들과 함께 일하고 이끄는 것을 즐깁니다. 교육, 인사, 관리 분야에서 능력을 발휘할 수 있습니다.",
        icon: "fas fa-users-cog",
        jobs: ["인사관리자", "교육자", "상담사", "팀장", "영업관리자"],
        advice: "전문 기술과 지식도 지속적으로 업데이트하세요."
    },
    stable_specialist: {
        title: "안정적 전문가",
        description: "체계적이고 안정적인 환경에서 전문성을 발휘하는 것을 선호합니다. 전문직, 공공기관에 적합합니다.",
        icon: "fas fa-shield-alt",
        jobs: ["공무원", "의사", "변호사", "교사", "은행원"],
        advice: "변화하는 환경에 적응하는 유연성을 기르세요."
    }
};

// 스트레스 수준 결과
const stressLevels = {
    low_stress: {
        title: "건강한 상태",
        level: "낮음",
        description: "현재 스트레스 수준이 낮고 건강한 상태입니다. 좋은 컨디션을 유지하고 계시네요.",
        icon: "fas fa-smile",
        color: "#10b981",
        advice: "현재 상태를 유지하면서 스트레스 예방에 신경 쓰세요."
    },
    medium_stress: {
        title: "주의 필요",
        level: "보통",
        description: "약간의 스트레스가 있지만 관리 가능한 수준입니다. 적절한 휴식과 관리가 필요합니다.",
        icon: "fas fa-meh",
        color: "#f59e0b",
        advice: "규칙적인 운동과 충분한 수면을 통해 스트레스를 관리하세요."
    },
    high_stress: {
        title: "관리 필요",
        level: "높음",
        description: "스트레스 수준이 높은 상태입니다. 적극적인 스트레스 관리와 휴식이 필요합니다.",
        icon: "fas fa-frown",
        color: "#ef4444",
        advice: "전문가의 도움을 받거나 생활 패턴을 개선해보세요."
    }
};

// 리더십 유형 결과
const leadershipTypes = {
    visionary_leader: {
        title: "비전형 리더",
        description: "미래를 내다보고 방향성을 제시하는 카리스마 있는 리더입니다. 혁신과 변화를 이끄는 능력이 뛰어납니다.",
        icon: "fas fa-eye",
        strengths: ["비전 제시", "혁신 추진", "영감 제공"],
        advice: "세부 실행과 관리 능력도 함께 개발하세요."
    },
    coaching_leader: {
        title: "코칭형 리더",
        description: "팀원들의 성장과 발전을 돕는 것을 중시하는 리더입니다. 개인별 맞춤형 지도와 피드백에 능숙합니다.",
        icon: "fas fa-chalkboard-teacher",
        strengths: ["개인 개발", "피드백 제공", "동기부여"],
        advice: "때로는 과감한 결정력도 필요합니다."
    },
    democratic_leader: {
        title: "민주형 리더",
        description: "팀원들의 의견을 존중하고 합의를 통해 결정하는 리더입니다. 팀워크와 협력을 중시합니다.",
        icon: "fas fa-vote-yea",
        strengths: ["의견 수렴", "팀워크", "갈등 조정"],
        advice: "빠른 의사결정이 필요할 때의 리더십도 기르세요."
    },
    results_leader: {
        title: "성과형 리더",
        description: "명확한 목표 설정과 성과 달성을 중시하는 리더입니다. 효율성과 결과를 통해 팀을 이끕니다.",
        icon: "fas fa-target",
        strengths: ["목표 설정", "성과 관리", "실행력"],
        advice: "팀원들의 감정과 동기부여에도 관심을 기울이세요."
    }
};

// MBTI 호환성 매트릭스
const compatibilityMatrix = {
    // NT 그룹 (이론가들)
    "INTJ": ["ENTP", "ENFP", "INFP", "ENFJ", "ENTJ", "INTP"],
    "INTP": ["ENTJ", "ENFJ", "INFJ", "ENFP", "INTJ", "ENTP"],
    "ENTJ": ["INTP", "INFP", "ENFP", "INFJ", "INTJ", "ENTP"],
    "ENTP": ["INTJ", "INFJ", "ENFJ", "INFP", "INTP", "ENTJ"],
    
    // NF 그룹 (이상주의자들)
    "INFJ": ["ENTP", "ENFP", "INFP", "ENFJ", "INTP", "ENTJ"],
    "INFP": ["ENFJ", "ENTJ", "ENFP", "INFJ", "ENTP", "INTJ"],
    "ENFJ": ["INFP", "INTP", "INFJ", "ENFP", "ENTP", "INTJ"],
    "ENFP": ["INTJ", "INFJ", "ENFJ", "INFP", "ENTP", "INTP"],
    
    // SP 그룹 (예술가들)
    "ISTP": ["ESFJ", "ESTJ", "ISFJ", "ENFJ", "ESFP", "ESTP"],
    "ISFP": ["ESFJ", "ENFJ", "ESTJ", "ESFP", "ISFJ", "ESTP"],
    "ESTP": ["ISFJ", "ISFP", "ESFJ", "ISTP", "ESTJ", "ESFP"],
    "ESFP": ["ISFJ", "ISTJ", "ISFP", "ESTP", "ESFJ", "ISTP"],
    
    // SJ 그룹 (수호자들)
    "ISTJ": ["ESFP", "ESTP", "ESFJ", "ENFP", "ISFP", "ESTJ"],
    "ISFJ": ["ESTP", "ESFP", "ISTP", "ENFP", "ESFJ", "ESTJ"],
    "ESTJ": ["ISFP", "ISTP", "ISFJ", "ESFJ", "ISTJ", "ESTP"],
    "ESFJ": ["ISTP", "ISFP", "ESTP", "ISFJ", "ESTJ", "ISTJ"]
};

// 연애 스타일 테스트 질문 데이터 (15개 문항)
const loveQuestions = [
    {
        id: 1,
        question: "첫 데이트에서 가장 중요하게 생각하는 것은?",
        icon: "fas fa-heart",
        options: [
            { text: "로맨틱한 분위기와 감동적인 순간 만들기", type: "R", score: 2 },
            { text: "상대방을 편안하게 해주고 즐거운 시간 보내기", type: "P", score: 2 },
            { text: "서로에 대해 깊이 알아가는 진솔한 대화", type: "E", score: 1 },
            { text: "현실적인 조건과 미래 가능성 파악하기", type: "L", score: 1 }
        ]
    },
    {
        id: 2,
        question: "연인과 갈등이 생겼을 때 당신의 해결 방식은?",
        icon: "fas fa-comments",
        options: [
            { text: "즉시 대화로 문제를 해결하려고 적극적으로 노력한다", type: "A", score: 2 },
            { text: "시간을 두고 상대방이 먼저 말을 걸어오기를 기다린다", type: "C", score: 2 },
            { text: "감정을 솔직하게 표현하며 마음을 전달한다", type: "E", score: 1 },
            { text: "논리적으로 문제 원인을 분석하고 해결책을 찾는다", type: "L", score: 1 }
        ]
    },
    {
        id: 3,
        question: "연인에게 가장 바라는 것은?",
        icon: "fas fa-gift-heart",
        options: [
            { text: "언제나 든든한 지지와 보호해주는 안정감", type: "D", score: 2 },
            { text: "각자의 개성과 자유를 인정해주는 관계", type: "I", score: 2 },
            { text: "매일매일 새로운 설렘과 로맨틱한 순간들", type: "R", score: 1 },
            { text: "현실적인 계획과 안정적인 미래 설계", type: "P", score: 1 }
        ]
    },
    {
        id: 4,
        question: "연인의 과거 연애사에 대해 어떻게 생각하나요?",
        icon: "fas fa-history",
        options: [
            { text: "과거는 과거일 뿐, 현재 나를 사랑한다면 상관없다", type: "P", score: 2 },
            { text: "어느 정도는 알고 싶지만 깊이 캐묻지는 않는다", type: "L", score: 2 },
            { text: "질투가 나고 마음이 불편하지만 이해하려 노력한다", type: "E", score: 1 },
            { text: "모든 것을 솔직하게 털어놓고 투명한 관계를 원한다", type: "A", score: 1 }
        ]
    },
    {
        id: 5,
        question: "연인과의 시간을 보내는 이상적인 방법은?",
        icon: "fas fa-calendar-heart",
        options: [
            { text: "둘만의 특별한 공간에서 깊은 대화와 스킨십", type: "R", score: 2 },
            { text: "함께 취미활동을 하거나 새로운 경험 공유하기", type: "A", score: 2 },
            { text: "평범한 일상을 함께하며 자연스럽게 지내기", type: "P", score: 1 },
            { text: "각자 할 일을 하면서도 같은 공간에 있기", type: "I", score: 1 }
        ]
    },
    {
        id: 6,
        question: "연인이 다른 이성과 친하게 지내는 것을 본다면?",
        icon: "fas fa-eye",
        options: [
            { text: "질투가 나지만 연인을 믿고 지켜본다", type: "C", score: 2 },
            { text: "직접 물어보고 내 감정을 솔직하게 표현한다", type: "A", score: 2 },
            { text: "마음이 아프지만 연인의 인간관계를 존중한다", type: "I", score: 1 },
            { text: "감정적으로 힘들어하며 연인에게 의존하게 된다", type: "D", score: 1 }
        ]
    },
    {
        id: 7,
        question: "연애에서 가장 중요하다고 생각하는 가치는?",
        icon: "fas fa-heart-pulse",
        options: [
            { text: "서로에 대한 뜨거운 사랑과 열정", type: "R", score: 2 },
            { text: "신뢰와 약속을 지키는 책임감", type: "P", score: 2 },
            { text: "마음을 나누고 공감하는 정서적 교감", type: "E", score: 1 },
            { text: "합리적인 의사소통과 문제해결 능력", type: "L", score: 1 }
        ]
    },
    {
        id: 8,
        question: "연인과 헤어질 위기에 처했을 때의 반응은?",
        icon: "fas fa-heartbreak",
        options: [
            { text: "적극적으로 관계 회복을 위해 노력하고 매달린다", type: "A", score: 2 },
            { text: "슬프지만 상대방의 결정을 담담히 받아들인다", type: "C", score: 2 },
            { text: "감정적으로 무너지며 혼자서는 견디기 힘들어한다", type: "D", score: 1 },
            { text: "혼자만의 시간이 필요하다며 거리를 둔다", type: "I", score: 1 }
        ]
    },
    {
        id: 9,
        question: "연인에게 받고 싶은 사랑 표현 방식은?",
        icon: "fas fa-kiss",
        options: [
            { text: "깜짝 이벤트와 로맨틱한 서프라이즈", type: "R", score: 2 },
            { text: "따뜻한 말과 스킨십으로 마음 전달하기", type: "E", score: 2 },
            { text: "실질적인 도움과 배려로 사랑 보여주기", type: "P", score: 1 },
            { text: "조용하지만 진심 어린 관심과 이해", type: "L", score: 1 }
        ]
    },
    {
        id: 10,
        question: "연인의 친구들과의 관계에서 당신의 태도는?",
        icon: "fas fa-users",
        options: [
            { text: "적극적으로 다가가서 친밀한 관계를 만든다", type: "A", score: 2 },
            { text: "자연스럽게 어울리되 적당한 거리를 유지한다", type: "I", score: 2 },
            { text: "연인을 통해서만 만나고 깊이 관여하지 않는다", type: "C", score: 1 },
            { text: "연인이 친구들과 시간 보내는 것을 아쉬워한다", type: "D", score: 1 }
        ]
    },
    {
        id: 11,
        question: "연인과 함께하는 미래에 대한 당신의 관점은?",
        icon: "fas fa-ring",
        options: [
            { text: "운명처럼 만난 사람과 영원한 사랑을 꿈꾼다", type: "R", score: 2 },
            { text: "현실적인 조건을 고려해 신중하게 계획한다", type: "P", score: 2 },
            { text: "감정이 이끄는 대로 자연스럽게 흘러가길 원한다", type: "E", score: 1 },
            { text: "논리적으로 분석해서 최선의 선택을 하려 한다", type: "L", score: 1 }
        ]
    },
    {
        id: 12,
        question: "연인과의 의견이 다를 때 당신의 대처법은?",
        icon: "fas fa-balance-scale",
        options: [
            { text: "내 의견을 관철시키기 위해 적극적으로 설득한다", type: "A", score: 2 },
            { text: "연인의 의견을 따라주며 갈등을 피한다", type: "C", score: 2 },
            { text: "서로의 입장을 이해하려고 노력하며 타협점을 찾는다", type: "L", score: 1 },
            { text: "감정적으로 상처받으며 마음의 거리감을 느낀다", type: "E", score: 1 }
        ]
    },
    {
        id: 13,
        question: "연인과 떨어져 있을 때의 심리상태는?",
        icon: "fas fa-phone-heart",
        options: [
            { text: "자주 연락하며 연인에게 의존하는 경향이 있다", type: "D", score: 2 },
            { text: "각자의 시간을 소중히 여기며 독립적으로 생활한다", type: "I", score: 2 },
            { text: "그리움을 달래기 위해 활발하게 다른 활동을 한다", type: "A", score: 1 },
            { text: "조용히 연인을 그리워하며 만날 날을 기다린다", type: "C", score: 1 }
        ]
    },
    {
        id: 14,
        question: "연인에게 실망했을 때의 반응은?",
        icon: "fas fa-disappointed",
        options: [
            { text: "감정적으로 상처받으며 솔직하게 표현한다", type: "E", score: 2 },
            { text: "차분히 상황을 분석하고 이성적으로 대화한다", type: "L", score: 2 },
            { text: "직접적으로 문제를 제기하며 해결하려 한다", type: "A", score: 1 },
            { text: "마음속으로만 삭이며 티를 내지 않는다", type: "C", score: 1 }
        ]
    },
    {
        id: 15,
        question: "이상적인 연애 관계는 어떤 모습인가요?",
        icon: "fas fa-infinity",
        options: [
            { text: "드라마 같은 운명적이고 로맨틱한 사랑", type: "R", score: 2 },
            { text: "서로를 응원하고 성장시켜주는 든든한 동반자", type: "P", score: 2 },
            { text: "모든 것을 나누며 하나가 되는 완전한 사랑", type: "D", score: 1 },
            { text: "개성을 존중하며 함께 성장하는 건강한 관계", type: "I", score: 1 }
        ]
    }
];

// 연애 스타일 유형 정의
const loveTypes = {
    "RAIE": {
        name: "열정적 로맨티스트",
        icon: "fas fa-fire-heart",
        description: "뜨거운 사랑과 깊은 감정을 추구하는 당신! 드라마틱한 로맨스를 꿈꾸며, 사랑에 모든 것을 걸고 감정적으로 진솔한 관계를 원합니다.",
        idealType: {
            type: "감성적 파트너",
            icon: "fas fa-heart-pulse",
            description: "당신의 열정을 이해하고 함께 감정을 나눌 수 있는 따뜻한 사람",
            traits: ["감성적", "로맨틱", "표현력 좋은", "공감 능력"]
        },
        advice: [
            "오늘은 사랑하는 사람에게 진심을 전해보세요",
            "감정 표현을 두려워하지 마세요",
            "상대방의 말에 귀 기울여보세요",
            "소소한 일상도 특별하게 만들어보세요",
            "때로는 차분함도 필요해요",
            "진정한 사랑은 인내에서 나온답니다",
            "주말엔 로맨틱한 데이트를 계획해보세요"
        ]
    },
    "RAIL": {
        name: "독립적 로맨티스트",
        icon: "fas fa-heart-wings",
        description: "자유로운 영혼의 로맨티스트! 사랑은 하되 각자의 개성과 자유를 존중하는 성숙한 관계를 추구합니다.",
        idealType: {
            type: "자유로운 영혼",
            icon: "fas fa-dove",
            description: "서로의 독립성을 인정하면서도 깊은 사랑을 나눌 수 있는 이해심 깊은 사람",
            traits: ["독립적", "이해심", "자유로운", "신뢰"]
        },
        advice: [
            "자신만의 시간을 갖는 것도 중요해요",
            "상대방의 꿈을 응원해주세요",
            "서로의 다름을 인정해보세요",
            "때로는 함께하는 시간도 늘려보세요",
            "진솔한 대화를 나눠보세요",
            "신뢰가 사랑의 기반임을 기억하세요",
            "오늘은 연인의 취미를 응원해주세요"
        ]
    },
    "RACE": {
        name: "드라마틱 러버",
        icon: "fas fa-theater-masks",
        description: "영화 같은 사랑을 꿈꾸는 당신! 로맨틱한 순간들을 만들어가며, 상대방에게 의존적이면서도 감정이 풍부한 사랑을 합니다.",
        idealType: {
            type: "보호적 연인",
            icon: "fas fa-shield-heart",
            description: "당신을 따뜻하게 보호해주고 든든한 울타리가 되어줄 수 있는 사람",
            traits: ["보호적", "안정적", "따뜻한", "책임감"]
        },
        advice: [
            "가끔은 혼자만의 시간도 가져보세요",
            "연인에게 너무 의존하지 마세요",
            "자신의 감정을 잘 표현하세요",
            "상대방의 입장도 고려해보세요",
            "사소한 것에도 감사함을 표현하세요",
            "때로는 현실적인 대화도 필요해요",
            "오늘은 연인에게 고마움을 전해보세요"
        ]
    },
    "RACL": {
        name: "균형적 로맨티스트",
        icon: "fas fa-balance-heart",
        description: "로맨스와 현실의 균형을 추구하는 성숙한 연인! 감정과 이성을 조화롭게 사용하며 건강한 관계를 만들어갑니다.",
        idealType: {
            type: "균형잡힌 파트너",
            icon: "fas fa-yin-yang",
            description: "감정과 이성, 꿈과 현실의 균형을 잘 맞춰가며 성장할 수 있는 파트너",
            traits: ["균형감", "성숙함", "소통", "성장지향"]
        },
        advice: [
            "때로는 계획보다 감정을 따라보세요",
            "논리적 대화와 감정 표현의 균형을 맞춰보세요",
            "연인과 미래 계획을 세워보세요",
            "감정적인 순간도 소중히 여기세요",
            "서로의 성장을 응원해주세요",
            "현실적인 문제도 함께 해결해보세요",
            "오늘은 연인과 진솔한 대화를 나눠보세요"
        ]
    },
    "PCIL": {
        name: "현실적 동반자",
        icon: "fas fa-handshake-heart",
        description: "신중하고 현실적인 사랑을 추구하는 당신! 감정보다는 이성을, 의존보다는 독립을 중시하며 안정적인 관계를 만들어갑니다.",
        idealType: {
            type: "신뢰할 수 있는 동반자",
            icon: "fas fa-user-friends",
            description: "서로를 믿고 의지할 수 있으며, 함께 현실적인 목표를 이뤄갈 수 있는 파트너",
            traits: ["신뢰성", "안정성", "계획성", "현실적"]
        },
        advice: [
            "가끔은 감정적인 표현도 해보세요",
            "로맨틱한 순간을 만들어보세요",
            "연인의 꿈을 응원해주세요",
            "현실적인 계획을 함께 세워보세요",
            "서로의 독립성을 존중하세요",
            "소통의 시간을 늘려보세요",
            "오늘은 작은 선물로 마음을 표현해보세요"
        ]
    },
    "PCIE": {
        name: "따뜻한 현실주의자",
        icon: "fas fa-heart-circle-check",
        description: "현실적이면서도 따뜻한 마음을 가진 당신! 조용하지만 깊은 사랑을 하며, 상대방을 배려하는 성숙한 연애관을 가지고 있습니다.",
        idealType: {
            type: "따뜻한 현실주의자",
            icon: "fas fa-sun-heart",
            description: "현실적이면서도 따뜻한 마음을 가진, 서로를 깊이 이해할 수 있는 사람",
            traits: ["이해심", "따뜻함", "현실적", "배려"]
        },
        advice: [
            "감정을 좀 더 솔직하게 표현해보세요",
            "때로는 적극적인 모습도 보여주세요",
            "연인과의 스킨십을 늘려보세요",
            "현실적인 조언보다 공감을 해주세요",
            "작은 이벤트라도 준비해보세요",
            "연인의 감정에 더 관심을 가져보세요",
            "오늘은 연인에게 안아달라고 해보세요"
        ]
    },
    "PCDL": {
        name: "조용한 지지자",
        icon: "fas fa-heart-hands",
        description: "조용하지만 든든한 사랑을 하는 당신! 말보다는 행동으로, 열정보다는 안정으로 상대방에게 사랑을 전달합니다.",
        idealType: {
            type: "적극적인 리더",
            icon: "fas fa-user-crown",
            description: "관계를 이끌어가며 당신의 조용한 사랑을 알아주고 이해해줄 수 있는 사람",
            traits: ["적극적", "이해심", "리더십", "포용력"]
        },
        advice: [
            "좀 더 적극적으로 감정을 표현해보세요",
            "연인에게 의존해도 괜찮아요",
            "때로는 먼저 연락해보세요",
            "자신의 의견을 더 말해보세요",
            "로맨틱한 데이트를 제안해보세요",
            "연인과 더 많은 시간을 보내보세요",
            "오늘은 연인에게 먼저 사랑한다고 말해보세요"
        ]
    },
    "PCDE": {
        name: "헌신적 연인",
        icon: "fas fa-heart-hands-holding",
        description: "조용하지만 헌신적인 사랑을 하는 당신! 상대방을 위해 자신을 희생할 줄 알며, 깊고 진실한 감정을 가지고 있습니다.",
        idealType: {
            type: "든든한 보호자",
            icon: "fas fa-shield-halved",
            description: "당신의 마음을 이해하고 보호해주며, 서로를 아껴줄 수 있는 따뜻한 사람",
            traits: ["보호적", "이해심", "안정감", "따뜻함"]
        },
        advice: [
            "자신의 감정도 소중히 여기세요",
            "때로는 독립적인 모습도 보여주세요",
            "연인에게 솔직한 대화를 시도해보세요",
            "자신만의 취미를 가져보세요",
            "연인의 관심을 받으려 노력해보세요",
            "감정을 더 표현해보세요",
            "오늘은 자신을 위한 시간을 가져보세요"
        ]
    },
    "RADE": {
        name: "모험적 로맨티스트",
        icon: "fas fa-heart-compass",
        description: "새로운 경험과 모험을 사랑하는 로맨티스트! 적극적이고 감정적이면서도 의존적인 성향으로, 연인과 함께 다양한 경험을 쌓아가고 싶어합니다.",
        idealType: {
            type: "모험을 함께할 파트너",
            icon: "fas fa-map-marked-alt",
            description: "함께 새로운 경험을 쌓아가며 당신의 감정을 이해해줄 수 있는 활동적인 사람",
            traits: ["모험적", "활동적", "이해심", "공감능력"]
        },
        advice: [
            "새로운 데이트 장소를 탐험해보세요",
            "연인과 함께 취미를 만들어보세요",
            "감정 표현을 두려워하지 마세요",
            "가끔은 혼자만의 시간도 필요해요",
            "계획적인 면도 키워보세요",
            "안정감도 중요한 가치임을 기억하세요",
            "오늘은 연인과 새로운 곳을 가보세요"
        ]
    },
    "RADL": {
        name: "독립적 모험가",
        icon: "fas fa-hiking",
        description: "자유롭고 독립적인 모험가! 로맨틱하고 적극적이지만 논리적 사고를 중시하며, 연인과의 관계에서도 각자의 자유를 보장받고 싶어합니다.",
        idealType: {
            type: "자유로운 모험가",
            icon: "fas fa-mountain",
            description: "서로의 독립성을 존중하며 함께 모험을 즐길 수 있는 자유로운 영혼",
            traits: ["독립적", "모험적", "논리적", "자유로운"]
        },
        advice: [
            "연인의 개인 시간을 존중해주세요",
            "함께할 때와 혼자일 때의 균형을 맞춰보세요",
            "감정과 논리의 균형을 찾아보세요",
            "새로운 도전을 함께 해보세요",
            "서로의 꿈을 응원해주세요",
            "현실적인 계획도 함께 세워보세요",
            "오늘은 각자 좋아하는 활동을 즐겨보세요"
        ]
    },
    "PAIL": {
        name: "현실적 독립주의자",
        icon: "fas fa-compass",
        description: "현실적이고 독립적인 성향의 연인! 적극적이지만 감정보다는 논리를 중시하며, 실용적이고 합리적인 관계를 추구합니다.",
        idealType: {
            type: "현실적 파트너",
            icon: "fas fa-handshake",
            description: "서로의 목표를 이해하고 현실적인 관점에서 함께 성장할 수 있는 파트너",
            traits: ["현실적", "독립적", "목표지향", "합리적"]
        },
        advice: [
            "때로는 감정적인 표현도 필요해요",
            "로맨틱한 순간을 만들어보세요",
            "연인의 감정에 귀 기울여보세요",
            "함께하는 시간의 소중함을 느껴보세요",
            "미래 계획을 함께 세워보세요",
            "현실적인 목표 달성을 축하해주세요",
            "오늘은 연인과 진솔한 대화를 나눠보세요"
        ]
    },
    "PAIE": {
        name: "적극적 감성가",
        icon: "fas fa-heart-beat",
        description: "현실적이면서도 감정적인 면이 있는 적극적인 연인! 독립적 성향이지만 감정 표현을 중시하며, 균형 잡힌 관계를 만들어갑니다.",
        idealType: {
            type: "감정 교감 파트너",
            icon: "fas fa-heart-hands",
            description: "현실적이면서도 감정 교감이 가능한 이해심 깊은 파트너",
            traits: ["감정적", "현실적", "이해심", "균형감"]
        },
        advice: [
            "감정과 현실의 균형을 맞춰보세요",
            "연인의 꿈도 응원해주세요",
            "때로는 계획에서 벗어나보세요",
            "감정 표현을 자주 해보세요",
            "서로의 다름을 인정해보세요",
            "함께 성장할 수 있는 목표를 세워보세요",
            "오늘은 따뜻한 마음을 표현해보세요"
        ]
    },
    "PACE": {
        name: "신중한 동반자",
        icon: "fas fa-shield-heart",
        description: "현실적이고 신중한 성향의 연인! 감정적이면서도 의존적인 면이 있어, 안정적이고 믿을 수 있는 관계를 중시합니다.",
        idealType: {
            type: "안정적 보호자",
            icon: "fas fa-umbrella",
            description: "당신을 든든하게 보호해주고 안정감을 줄 수 있는 믿음직한 파트너",
            traits: ["안정적", "보호적", "신뢰성", "책임감"]
        },
        advice: [
            "때로는 적극적으로 행동해보세요",
            "새로운 경험에 도전해보세요",
            "자신감을 가져보세요",
            "연인에게 의존만 하지 마세요",
            "감정 표현을 더 해보세요",
            "안정적인 관계를 만들어가세요",
            "오늘은 연인을 위해 작은 일을 해보세요"
        ]
    },
    "PACL": {
        name: "균형적 현실주의자",
        icon: "fas fa-balance-scale",
        description: "현실적이고 신중하며 논리적인 연인! 모든 면에서 균형을 추구하며, 안정적이고 합리적인 관계를 만들어갑니다.",
        idealType: {
            type: "안정적 동반자",
            icon: "fas fa-anchor",
            description: "서로 의지하며 현실적인 목표를 함께 이뤄갈 수 있는 든든한 동반자",
            traits: ["안정적", "현실적", "균형감", "신뢰성"]
        },
        advice: [
            "가끔은 감정적인 순간도 즐겨보세요",
            "로맨틱한 계획을 세워보세요",
            "적극적인 면을 키워보세요",
            "새로운 것에 도전해보세요",
            "감정 표현을 늘려보세요",
            "안정적인 미래를 함께 계획해보세요",
            "오늘은 연인과 미래에 대해 이야기해보세요"
        ]
    },
    "PADE": {
        name: "감성적 의존형",
        icon: "fas fa-heart-circle",
        description: "현실적이면서도 감정적이고 의존적인 성향의 연인! 적극적이지만 상대방에게 의지하고 싶어하며, 따뜻한 관계를 추구합니다.",
        idealType: {
            type: "따뜻한 리더",
            icon: "fas fa-heart-hands",
            description: "당신을 이끌어주면서도 따뜻하게 보살펴줄 수 있는 든든한 파트너",
            traits: ["리더십", "따뜻함", "보호적", "이해심"]
        },
        advice: [
            "자립적인 면을 키워보세요",
            "혼자만의 취미를 가져보세요",
            "감정 표현을 자주 해보세요",
            "연인을 믿고 의지해보세요",
            "함께 성장할 수 있는 활동을 해보세요",
            "현실적인 목표도 함께 세워보세요",
            "오늘은 연인에게 고마움을 표현해보세요"
        ]
    },
    "PADL": {
        name: "논리적 의존형",
        icon: "fas fa-brain-heart",
        description: "현실적이고 논리적이지만 의존적인 성향의 연인! 적극적으로 행동하지만 중요한 결정에서는 상대방을 의지하려 합니다.",
        idealType: {
            type: "지혜로운 파트너",
            icon: "fas fa-lightbulb",
            description: "논리적 사고를 공유하면서도 당신을 든든하게 지지해줄 수 있는 지혜로운 파트너",
            traits: ["논리적", "지혜로운", "지지적", "안정적"]
        },
        advice: [
            "감정적인 면도 키워보세요",
            "혼자 결정하는 연습을 해보세요",
            "로맨틱한 순간을 만들어보세요",
            "상대방과 논리적 대화를 나눠보세요",
            "함께 문제를 해결해보세요",
            "독립적인 면을 기르세요",
            "오늘은 연인과 미래 계획을 논의해보세요"
        ]
    }
};