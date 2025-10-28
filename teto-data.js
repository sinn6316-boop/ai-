// 테토 테스트 질문 데이터
const tetoQuestions = [
    {
        id: 1,
        question: "친구들과의 약속이 갑자기 취소되었을 때, 당신의 반응은?",
        options: [
            { text: "아쉽지만 혼자만의 시간을 즐긴다", score: { tetoNam: 2, tetoNyeo: 0 } },
            { text: "다른 친구에게 연락해서 새로운 약속을 잡는다", score: { tetoNam: 0, tetoNyeo: 2 } },
            { text: "집에서 휴식을 취하며 여유롭게 보낸다", score: { tetoNam: 1, tetoNyeo: 1 } }
        ]
    },
    {
        id: 2,
        question: "새로운 카페에 갔을 때, 메뉴를 고르는 방식은?",
        options: [
            { text: "메뉴판을 꼼꼼히 보고 신중하게 선택한다", score: { tetoNam: 2, tetoNyeo: 0 } },
            { text: "직원에게 추천 메뉴를 물어본다", score: { tetoNam: 0, tetoNyeo: 2 } },
            { text: "평소 즐겨 마시는 메뉴와 비슷한 것을 선택한다", score: { tetoNam: 1, tetoNyeo: 1 } }
        ]
    },
    {
        id: 3,
        question: "SNS에 올릴 사진을 찍을 때, 당신의 스타일은?",
        options: [
            { text: "간단하게 찍어서 바로 올린다", score: { tetoNam: 2, tetoNyeo: 0 } },
            { text: "여러 각도로 찍어서 가장 예쁜 것을 선택한다", score: { tetoNam: 0, tetoNyeo: 2 } },
            { text: "적당히 신경 써서 괜찮은 사진을 올린다", score: { tetoNam: 1, tetoNyeo: 1 } }
        ]
    },
    {
        id: 4,
        question: "쇼핑할 때 당신의 행동 패턴은?",
        options: [
            { text: "필요한 것만 빠르게 구매하고 나온다", score: { tetoNam: 2, tetoNyeo: 0 } },
            { text: "이것저것 구경하며 충동구매도 자주 한다", score: { tetoNam: 0, tetoNyeo: 2 } },
            { text: "계획한 것 위주로 사되, 마음에 드는 것이 있으면 산다", score: { tetoNam: 1, tetoNyeo: 1 } }
        ]
    },
    {
        id: 5,
        question: "연인과의 데이트 장소를 정할 때는?",
        options: [
            { text: "실용적이고 편한 곳을 선호한다", score: { tetoNam: 2, tetoNyeo: 0 } },
            { text: "분위기 있고 특별한 곳을 찾는다", score: { tetoNam: 0, tetoNyeo: 2 } },
            { text: "서로 만족할 수 있는 절충안을 찾는다", score: { tetoNam: 1, tetoNyeo: 1 } }
        ]
    },
    {
        id: 6,
        question: "스트레스를 받을 때 주로 하는 행동은?",
        options: [
            { text: "혼자만의 시간을 가지며 생각을 정리한다", score: { tetoNam: 2, tetoNyeo: 0 } },
            { text: "친구들과 만나서 수다를 떨며 풀어낸다", score: { tetoNam: 0, tetoNyeo: 2 } },
            { text: "취미 활동이나 운동으로 기분전환을 한다", score: { tetoNam: 1, tetoNyeo: 1 } }
        ]
    },
    {
        id: 7,
        question: "새로운 도전을 앞두고 있을 때 당신의 마음가짐은?",
        options: [
            { text: "차분하게 계획을 세우고 준비한다", score: { tetoNam: 2, tetoNyeo: 0 } },
            { text: "설레고 기대되어서 바로 시작하고 싶다", score: { tetoNam: 0, tetoNyeo: 2 } },
            { text: "적당한 준비와 함께 긍정적으로 접근한다", score: { tetoNam: 1, tetoNyeo: 1 } }
        ]
    },
    {
        id: 8,
        question: "친구가 고민상담을 요청했을 때 당신의 반응은?",
        options: [
            { text: "논리적으로 분석해서 해결책을 제시한다", score: { tetoNam: 2, tetoNyeo: 0 } },
            { text: "공감하며 감정적으로 위로해준다", score: { tetoNam: 0, tetoNyeo: 2 } },
            { text: "상황에 따라 위로와 조언을 적절히 섞어서 한다", score: { tetoNam: 1, tetoNyeo: 1 } }
        ]
    },
    {
        id: 9,
        question: "패션 스타일을 선택할 때 기준은?",
        options: [
            { text: "편안하고 실용적인 것을 우선시한다", score: { tetoNam: 2, tetoNyeo: 0 } },
            { text: "트렌디하고 예쁜 것을 선택한다", score: { tetoNam: 0, tetoNyeo: 2 } },
            { text: "편안함과 스타일을 조화롭게 고려한다", score: { tetoNam: 1, tetoNyeo: 1 } }
        ]
    },
    {
        id: 10,
        question: "여행 계획을 세울 때 당신의 스타일은?",
        options: [
            { text: "일정과 예산을 꼼꼼히 계획한다", score: { tetoNam: 2, tetoNyeo: 0 } },
            { text: "즉흥적으로 가고 싶은 곳을 정한다", score: { tetoNam: 0, tetoNyeo: 2 } },
            { text: "기본 계획은 세우되 여유롭게 유동적으로 한다", score: { tetoNam: 1, tetoNyeo: 1 } }
        ]
    },
    {
        id: 11,
        question: "인생에서 가장 중요하다고 생각하는 것은?",
        options: [
            { text: "안정적이고 평온한 일상", score: { tetoNam: 2, tetoNyeo: 0 } },
            { text: "다양한 경험과 새로운 도전", score: { tetoNam: 0, tetoNyeo: 2 } },
            { text: "균형 잡힌 삶과 개인적 성장", score: { tetoNam: 1, tetoNyeo: 1 } }
        ]
    },
    {
        id: 12,
        question: "갈등 상황에서 당신의 대처 방식은?",
        options: [
            { text: "냉정하게 상황을 분석하고 해결책을 찾는다", score: { tetoNam: 2, tetoNyeo: 0 } },
            { text: "감정적으로 반응하며 즉시 해결하려 한다", score: { tetoNam: 0, tetoNyeo: 2 } },
            { text: "시간을 두고 차근차근 해결해 나간다", score: { tetoNam: 1, tetoNyeo: 1 } }
        ]
    },
    {
        id: 13,
        question: "새로운 사람들과 만날 때 당신의 모습은?",
        options: [
            { text: "관찰하며 신중하게 접근한다", score: { tetoNam: 2, tetoNyeo: 0 } },
            { text: "적극적으로 다가가서 친해지려 한다", score: { tetoNam: 0, tetoNyeo: 2 } },
            { text: "자연스럽게 상황에 맞춰 행동한다", score: { tetoNam: 1, tetoNyeo: 1 } }
        ]
    },
    {
        id: 14,
        question: "취미 활동을 선택할 때 기준은?",
        options: [
            { text: "혼자서도 즐길 수 있는 활동을 선호한다", score: { tetoNam: 2, tetoNyeo: 0 } },
            { text: "사람들과 함께 할 수 있는 활동을 좋아한다", score: { tetoNam: 0, tetoNyeo: 2 } },
            { text: "그때그때 기분에 따라 선택한다", score: { tetoNam: 1, tetoNyeo: 1 } }
        ]
    },
    {
        id: 15,
        question: "인생의 목표를 설정할 때 당신의 방식은?",
        options: [
            { text: "현실적이고 달성 가능한 목표를 세운다", score: { tetoNam: 2, tetoNyeo: 0 } },
            { text: "크고 도전적인 꿈을 추구한다", score: { tetoNam: 0, tetoNyeo: 2 } },
            { text: "단계적으로 발전해 나갈 수 있는 목표를 정한다", score: { tetoNam: 1, tetoNyeo: 1 } }
        ]
    }
];

// 테토 유형 결과 데이터
const tetoResults = {
    "테토남": {
        title: "🧔 테토남 (The Rational Male)",
        description: "논리적이고 실용적인 당신은 진정한 테토남 스타일입니다!",
        characteristics: [
            "논리적 사고와 합리적 판단을 중시",
            "실용성과 효율성을 추구하는 성향",
            "감정보다는 이성으로 문제를 해결",
            "안정적이고 계획적인 라이프스타일",
            "독립적이며 자립적인 성향이 강함"
        ],
        strengths: [
            "문제 해결 능력이 뛰어남",
            "감정에 휘둘리지 않는 안정성",
            "실용적이고 효율적인 사고",
            "독립적인 생활 능력",
            "논리적 분석력이 우수함",
            "계획성 있는 행동 패턴"
        ],
        tips: [
            "가끔은 감정 표현도 중요합니다",
            "다른 사람의 감정에도 귀 기울여보세요",
            "완벽을 추구하기보다 유연성을 기르세요",
            "새로운 경험에도 열린 마음을 가져보세요"
        ],
        compatibility: "감성적이고 따뜻한 테토녀와 좋은 조화를 이룰 수 있습니다.",
        lifestyle: "규칙적인 생활 패턴과 효율적인 시간 관리를 통해 안정적인 삶을 추구하세요.",
        advice: "논리적 사고는 당신의 강점이지만, 때로는 감정적 소통도 필요합니다. 균형 잡힌 관계를 위해 상대방의 감정에도 관심을 기울여보세요."
    },
    "테토녀": {
        title: "👩 테토녀 (The Emotional Female)",
        description: "감성적이고 소통을 중시하는 당신은 진정한 테토녀 스타일입니다!",
        characteristics: [
            "감정적 소통과 공감 능력이 뛰어남",
            "직관적이고 창의적인 사고 방식",
            "관계 중심적이며 사회적 성향이 강함",
            "변화와 새로운 경험을 즐김",
            "표현력이 풍부하고 감수성이 예민함"
        ],
        strengths: [
            "뛰어난 공감 능력과 소통 실력",
            "창의적이고 직관적인 사고",
            "적응력이 뛰어나고 유연함",
            "인간관계 형성 능력이 우수함",
            "감정 표현이 자유롭고 풍부함",
            "새로운 변화에 대한 수용성"
        ],
        tips: [
            "감정적 결정보다 논리적 사고도 함께 고려해보세요",
            "계획성을 기르면 더 안정적인 삶을 살 수 있습니다",
            "혼자만의 시간도 소중히 여기세요",
            "목표를 구체적으로 설정하고 단계별로 접근해보세요"
        ],
        compatibility: "논리적이고 안정적인 테토남과 서로 보완하며 성장할 수 있습니다.",
        lifestyle: "다양한 경험과 창의적 활동을 통해 풍요로운 삶을 만들어가세요.",
        advice: "감성적 소통은 당신의 큰 장점입니다. 하지만 때로는 논리적 접근도 필요하니 균형 잡힌 사고를 기르도록 노력해보세요."
    },
    "균형형": {
        title: "⚖️ 균형형 (The Balanced Type)",
        description: "테토남과 테토녀의 장점을 모두 갖춘 균형 잡힌 성향입니다!",
        characteristics: [
            "논리와 감성의 균형을 잘 맞춤",
            "상황에 따라 유연하게 대처함",
            "다양한 관점에서 문제를 바라봄",
            "안정성과 도전을 적절히 조화시킴",
            "소통과 독립성을 모두 중시함"
        ],
        strengths: [
            "상황 판단력이 뛰어남",
            "균형 잡힌 사고와 행동",
            "다양한 사람들과 잘 어울림",
            "적응력과 유연성이 우수함",
            "문제 해결 시 다각적 접근 가능",
            "안정성과 창의성을 모두 갖춤"
        ],
        tips: [
            "자신만의 독특한 스타일을 더 개발해보세요",
            "때로는 한 방향으로 집중하는 것도 필요합니다",
            "결정력을 더 기르도록 노력해보세요",
            "자신의 강점을 명확히 파악하고 발전시키세요"
        ],
        compatibility: "다양한 성향의 사람들과 좋은 관계를 형성할 수 있습니다.",
        lifestyle: "균형 잡힌 삶을 통해 안정성과 성장을 동시에 추구하세요.",
        advice: "균형 잡힌 성향은 큰 장점이지만, 때로는 자신만의 확고한 가치관과 방향성을 정립하는 것도 중요합니다."
    }
};

// 테토 유형 분석 함수
function getTetoType(scores) {
    const tetoNamScore = scores.tetoNam || 0;
    const tetoNyeoScore = scores.tetoNyeo || 0;
    
    const scoreDiff = Math.abs(tetoNamScore - tetoNyeoScore);
    
    // 점수 차이가 4점 이하면 균형형
    if (scoreDiff <= 4) {
        return "균형형";
    }
    
    // 점수가 높은 쪽으로 분류
    return tetoNamScore > tetoNyeoScore ? "테토남" : "테토녀";
}