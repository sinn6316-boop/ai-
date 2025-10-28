// 스트레스 진단 테스트 질문 (PSS-10 및 다양한 스트레스 척도 기반)
const stressQuestions = [
    {
        id: 1,
        question: "지난 한 달 동안 예상치 못한 일들 때문에 당황한 적이 얼마나 자주 있었나요?",
        icon: "fas fa-exclamation-triangle",
        category: "emotional",
        options: [
            { text: "전혀 없었다", score: 1 },
            { text: "거의 없었다", score: 2 },
            { text: "때때로 있었다", score: 3 },
            { text: "자주 있었다", score: 4 },
            { text: "매우 자주 있었다", score: 5 }
        ]
    },
    {
        id: 2,
        question: "지난 한 달 동안 인생의 중요한 일들을 통제할 수 없다고 느낀 적이 얼마나 있었나요?",
        icon: "fas fa-steering-wheel",
        category: "cognitive",
        options: [
            { text: "전혀 없었다", score: 1 },
            { text: "거의 없었다", score: 2 },
            { text: "때때로 있었다", score: 3 },
            { text: "자주 있었다", score: 4 },
            { text: "매우 자주 있었다", score: 5 }
        ]
    },
    {
        id: 3,
        question: "지난 한 달 동안 긴장되고 스트레스를 받는다고 느낀 적이 얼마나 있었나요?",
        icon: "fas fa-dizzy",
        category: "emotional",
        options: [
            { text: "전혀 없었다", score: 1 },
            { text: "거의 없었다", score: 2 },
            { text: "때때로 있었다", score: 3 },
            { text: "자주 있었다", score: 4 },
            { text: "매우 자주 있었다", score: 5 }
        ]
    },
    {
        id: 4,
        question: "지난 한 달 동안 수면에 문제가 있었나요? (잠들기 어려움, 자주 깸, 너무 일찍 깸)",
        icon: "fas fa-bed",
        category: "physical",
        options: [
            { text: "전혀 없었다", score: 1 },
            { text: "거의 없었다", score: 2 },
            { text: "때때로 있었다", score: 3 },
            { text: "자주 있었다", score: 4 },
            { text: "매우 자주 있었다", score: 5 }
        ]
    },
    {
        id: 5,
        question: "지난 한 달 동안 개인적인 문제들을 성공적으로 다뤄나갈 수 있다고 확신한 적이 얼마나 있었나요?",
        icon: "fas fa-check-circle",
        category: "cognitive",
        options: [
            { text: "매우 자주 있었다", score: 1 },
            { text: "자주 있었다", score: 2 },
            { text: "때때로 있었다", score: 3 },
            { text: "거의 없었다", score: 4 },
            { text: "전혀 없었다", score: 5 }
        ]
    },
    {
        id: 6,
        question: "지난 한 달 동안 일이나 학업에 집중하기 어려웠던 적이 얼마나 있었나요?",
        icon: "fas fa-brain",
        category: "cognitive",
        options: [
            { text: "전혀 없었다", score: 1 },
            { text: "거의 없었다", score: 2 },
            { text: "때때로 있었다", score: 3 },
            { text: "자주 있었다", score: 4 },
            { text: "매우 자주 있었다", score: 5 }
        ]
    },
    {
        id: 7,
        question: "지난 한 달 동안 두통, 목 어깨 결림, 소화불량 등의 신체 증상이 얼마나 있었나요?",
        icon: "fas fa-head-side-cough",
        category: "physical",
        options: [
            { text: "전혀 없었다", score: 1 },
            { text: "거의 없었다", score: 2 },
            { text: "때때로 있었다", score: 3 },
            { text: "자주 있었다", score: 4 },
            { text: "매우 자주 있었다", score: 5 }
        ]
    },
    {
        id: 8,
        question: "지난 한 달 동안 짜증이 나거나 화가 나는 일이 얼마나 있었나요?",
        icon: "fas fa-angry",
        category: "emotional",
        options: [
            { text: "전혀 없었다", score: 1 },
            { text: "거의 없었다", score: 2 },
            { text: "때때로 있었다", score: 3 },
            { text: "자주 있었다", score: 4 },
            { text: "매우 자주 있었다", score: 5 }
        ]
    },
    {
        id: 9,
        question: "지난 한 달 동안 어려움들이 너무 쌓여서 극복할 수 없다고 느낀 적이 얼마나 있었나요?",
        icon: "fas fa-mountain",
        category: "emotional",
        options: [
            { text: "전혀 없었다", score: 1 },
            { text: "거의 없었다", score: 2 },
            { text: "때때로 있었다", score: 3 },
            { text: "자주 있었다", score: 4 },
            { text: "매우 자주 있었다", score: 5 }
        ]
    },
    {
        id: 10,
        question: "지난 한 달 동안 음주, 흡연, 과식 등의 행동이 평소보다 늘어났나요?",
        icon: "fas fa-wine-glass-alt",
        category: "behavioral",
        options: [
            { text: "전혀 없었다", score: 1 },
            { text: "거의 없었다", score: 2 },
            { text: "때때로 있었다", score: 3 },
            { text: "자주 있었다", score: 4 },
            { text: "매우 자주 있었다", score: 5 }
        ]
    },
    {
        id: 11,
        question: "지난 한 달 동안 피로감이나 기력 부족을 느낀 적이 얼마나 있었나요?",
        icon: "fas fa-battery-quarter",
        category: "physical",
        options: [
            { text: "전혀 없었다", score: 1 },
            { text: "거의 없었다", score: 2 },
            { text: "때때로 있었다", score: 3 },
            { text: "자주 있었다", score: 4 },
            { text: "매우 자주 있었다", score: 5 }
        ]
    },
    {
        id: 12,
        question: "지난 한 달 동안 사람들과의 관계에서 피하고 싶다고 느낀 적이 얼마나 있었나요?",
        icon: "fas fa-user-minus",
        category: "behavioral",
        options: [
            { text: "전혀 없었다", score: 1 },
            { text: "거의 없었다", score: 2 },
            { text: "때때로 있었다", score: 3 },
            { text: "자주 있었다", score: 4 },
            { text: "매우 자주 있었다", score: 5 }
        ]
    },
    {
        id: 13,
        question: "지난 한 달 동안 일상생활의 작은 일들조차 어렵게 느껴진 적이 얼마나 있었나요?",
        icon: "fas fa-tasks",
        category: "cognitive",
        options: [
            { text: "전혀 없었다", score: 1 },
            { text: "거의 없었다", score: 2 },
            { text: "때때로 있었다", score: 3 },
            { text: "자주 있었다", score: 4 },
            { text: "매우 자주 있었다", score: 5 }
        ]
    },
    {
        id: 14,
        question: "지난 한 달 동안 심장이 빨리 뛰거나 가슴이 답답한 느낌이 얼마나 있었나요?",
        icon: "fas fa-heartbeat",
        category: "physical",
        options: [
            { text: "전혀 없었다", score: 1 },
            { text: "거의 없었다", score: 2 },
            { text: "때때로 있었다", score: 3 },
            { text: "자주 있었다", score: 4 },
            { text: "매우 자주 있었다", score: 5 }
        ]
    },
    {
        id: 15,
        question: "지난 한 달 동안 미래에 대해 걱정하거나 불안해한 적이 얼마나 있었나요?",
        icon: "fas fa-clock",
        category: "emotional",
        options: [
            { text: "전혀 없었다", score: 1 },
            { text: "거의 없었다", score: 2 },
            { text: "때때로 있었다", score: 3 },
            { text: "자주 있었다", score: 4 },
            { text: "매우 자주 있었다", score: 5 }
        ]
    },
    {
        id: 16,
        question: "지난 한 달 동안 일이나 공부의 능률이 떨어진다고 느낀 적이 얼마나 있었나요?",
        icon: "fas fa-chart-line-down",
        category: "behavioral",
        options: [
            { text: "전혀 없었다", score: 1 },
            { text: "거의 없었다", score: 2 },
            { text: "때때로 있었다", score: 3 },
            { text: "자주 있었다", score: 4 },
            { text: "매우 자주 있었다", score: 5 }
        ]
    },
    {
        id: 17,
        question: "지난 한 달 동안 식욕이 없거나 과식을 한 적이 얼마나 있었나요?",
        icon: "fas fa-utensils",
        category: "physical",
        options: [
            { text: "전혀 없었다", score: 1 },
            { text: "거의 없었다", score: 2 },
            { text: "때때로 있었다", score: 3 },
            { text: "자주 있었다", score: 4 },
            { text: "매우 자주 있었다", score: 5 }
        ]
    },
    {
        id: 18,
        question: "지난 한 달 동안 우울하거나 슬픈 기분이 든 적이 얼마나 있었나요?",
        icon: "fas fa-sad-tear",
        category: "emotional",
        options: [
            { text: "전혀 없었다", score: 1 },
            { text: "거의 없었다", score: 2 },
            { text: "때때로 있었다", score: 3 },
            { text: "자주 있었다", score: 4 },
            { text: "매우 자주 있었다", score: 5 }
        ]
    },
    {
        id: 19,
        question: "지난 한 달 동안 기억력이나 판단력이 떨어진다고 느낀 적이 얼마나 있었나요?",
        icon: "fas fa-memory",
        category: "cognitive",
        options: [
            { text: "전혀 없었다", score: 1 },
            { text: "거의 없었다", score: 2 },
            { text: "때때로 있었다", score: 3 },
            { text: "자주 있었다", score: 4 },
            { text: "매우 자주 있었다", score: 5 }
        ]
    },
    {
        id: 20,
        question: "지난 한 달 동안 여가활동이나 취미생활에 관심이 없어진 적이 얼마나 있었나요?",
        icon: "fas fa-gamepad",
        category: "behavioral",
        options: [
            { text: "전혀 없었다", score: 1 },
            { text: "거의 없었다", score: 2 },
            { text: "때때로 있었다", score: 3 },
            { text: "자주 있었다", score: 4 },
            { text: "매우 자주 있었다", score: 5 }
        ]
    }
];

// 스트레스 수준별 결과
const stressLevels = {
    low: {
        title: "양호한 상태",
        subtitle: "스트레스를 잘 관리하고 있어요",
        description: "현재 당신의 스트레스 수준은 정상 범위 내에 있습니다. 일상생활에서 스트레스를 잘 관리하고 있으며, 건강한 대처 방법을 사용하고 있는 것으로 보입니다. 이 상태를 유지하기 위해 꾸준한 자기관리를 계속하시기 바랍니다.",
        icon: "fas fa-smile",
        color: "#4CAF50",
        scoreRange: "20-30점",
        copingStrategies: [
            "현재의 건강한 생활 패턴을 유지하세요",
            "규칙적인 운동과 충분한 휴식을 계속하세요",
            "긍정적인 인간관계를 계속 발전시켜 나가세요",
            "작은 스트레스가 쌓이지 않도록 정기적으로 해소하세요",
            "새로운 도전을 통해 성장하는 기쁨을 느껴보세요"
        ],
        recommendations: [
            "명상이나 요가로 마음의 평정을 유지하기",
            "독서나 영화 감상 등 문화활동 즐기기",
            "친구나 가족과의 시간을 소중히 하기",
            "새로운 취미나 관심사 개발하기",
            "자연 속에서 산책하며 여유 갖기"
        ],
        warning: "스트레스가 낮다고 해서 방심하지 마세요. 예방이 최선의 관리법입니다."
    },
    moderate: {
        title: "주의 필요",
        subtitle: "스트레스 관리에 신경써야 해요",
        description: "당신의 스트레스 수준이 평균보다 약간 높습니다. 일상생활에 큰 지장은 없지만, 스트레스가 점점 쌓이고 있는 상황입니다. 지금부터 적극적인 스트레스 관리가 필요하며, 적절한 휴식과 대처 방법을 통해 스트레스를 조절하시기 바랍니다.",
        icon: "fas fa-meh",
        color: "#FFC107",
        scoreRange: "31-60점",
        copingStrategies: [
            "충분한 수면시간을 확보하세요 (7-8시간)",
            "스트레스의 원인을 파악하고 해결 방법을 찾아보세요",
            "규칙적인 운동으로 스트레스를 해소하세요",
            "호흡법이나 이완요법을 배워보세요",
            "업무와 휴식의 균형을 맞추세요"
        ],
        recommendations: [
            "주 3회 이상 30분씩 유산소 운동하기",
            "스트레스 다이어리 작성해보기",
            "전문가 상담 고려해보기",
            "취미활동이나 여가시간 늘리기",
            "가까운 사람들과 고민 나누기"
        ],
        warning: "스트레스가 더 심해지기 전에 적극적인 관리가 필요합니다."
    },
    high: {
        title: "관리 필요",
        subtitle: "스트레스가 높은 상태입니다",
        description: "당신의 스트레스 수준이 상당히 높습니다. 일상생활과 건강에 영향을 미칠 수 있는 수준으로, 즉시 스트레스 관리에 집중해야 합니다. 전문적인 도움을 받는 것을 고려해보시고, 생활 패턴의 변화가 필요할 수 있습니다.",
        icon: "fas fa-frown",
        color: "#FF9800",
        scoreRange: "61-90점",
        copingStrategies: [
            "스트레스의 주요 원인을 제거하거나 변경하세요",
            "전문 상담사나 의사와 상담하세요",
            "일의 우선순위를 재정리하고 부담을 줄이세요",
            "깊은 호흡, 명상 등 즉시 할 수 있는 이완법을 사용하세요",
            "충분한 휴식과 회복 시간을 확보하세요"
        ],
        recommendations: [
            "전문 상담 센터 방문하기",
            "스트레스 관리 프로그램 참여하기",
            "일과 사생활의 명확한 분리하기",
            "지지적인 인간관계 강화하기",
            "필요시 휴가나 휴직 고려하기"
        ],
        warning: "건강에 심각한 영향을 미칠 수 있으므로 즉시 조치가 필요합니다."
    },
    severe: {
        title: "즉시 관리 필요",
        subtitle: "매우 높은 스트레스 상태입니다",
        description: "당신의 스트레스 수준이 매우 위험한 상태입니다. 신체적, 정신적 건강에 심각한 영향을 미칠 수 있으며, 전문적인 치료가 필요할 수 있습니다. 즉시 전문가의 도움을 받으시고, 환경적 변화를 포함한 적극적인 개입이 필요합니다.",
        icon: "fas fa-tired",
        color: "#F44336",
        scoreRange: "91-100점",
        copingStrategies: [
            "즉시 전문의나 정신건강 전문가와 상담하세요",
            "가족이나 친구들에게 도움을 요청하세요",
            "스트레스 원인을 근본적으로 해결하세요",
            "필요시 약물 치료도 고려하세요",
            "완전한 휴식과 회복에 집중하세요"
        ],
        recommendations: [
            "정신건강의학과 진료 받기",
            "스트레스 클리닉 방문하기",
            "입원 치료나 집중 프로그램 고려하기",
            "환경 변화 (직장, 거주지 등) 검토하기",
            "24시간 상담 핫라인 활용하기"
        ],
        warning: "즉시 전문적인 도움이 필요한 상태입니다. 혼자 해결하려 하지 마세요.",
        emergency: {
            suicide: "1393 (생명의전화)",
            mental: "1577-0199 (정신건강위기상담전화)",
            general: "109 (보건복지상담센터)"
        }
    }
};