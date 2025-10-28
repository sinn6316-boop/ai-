// 전역 변수
let currentQuestionIndex = 0;
let userAnswers = [];
let currentScreen = 'home';
let currentTestType = 'personality'; // 'personality', 'love', 'career', 'stress', 'leadership'
let currentTestQuestions = []; // 초기값을 빈 배열로 설정

// DOM 요소들 - 나중에 초기화
let screens = {};
let elements = {};

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    // DOM 요소들 초기화
    screens = {
        home: document.getElementById('home-screen'),
        test: document.getElementById('test-screen'),
        result: document.getElementById('result-screen')
    };

    elements = {
        progressFill: document.getElementById('progress-fill'),
        progressText: document.getElementById('progress-text'),
        questionNumber: document.getElementById('question-number'),
        questionTitle: document.getElementById('question-title'),
        questionImage: document.getElementById('question-image'),
        answersContainer: document.getElementById('answers-container'),
        resultCard: document.getElementById('result-card'),
        resultIcon: document.getElementById('result-icon'),
        resultTitle: document.getElementById('result-title'),
        resultMbti: document.getElementById('result-mbti'),
        resultType: document.getElementById('result-type'),
        resultDescription: document.getElementById('result-description'),
        dailyAdvice: document.getElementById('daily-advice'),
        similarTypesGrid: document.getElementById('similar-types-grid'),
        toast: document.getElementById('toast'),
        toastMessage: document.getElementById('toast-message'),
        loading: document.getElementById('loading'),
        dailyModal: document.getElementById('daily-modal'),
        compatibilityModal: document.getElementById('compatibility-modal'),
        fortuneDate: document.getElementById('fortune-date'),
        fortuneContent: document.getElementById('fortune-content'),
        compatibilityTypes: document.getElementById('compatibility-types'),
        compatibilityResult: document.getElementById('compatibility-result')
    };
    
    // 기본 질문 설정
    currentTestQuestions = personalityQuestions;
    
    initializeApp();
});

function initializeApp() {
    console.log('앱 초기화 시작');
    
    // DOM 요소들 확인
    console.log('홈 화면:', screens.home);
    console.log('테스트 화면:', screens.test);
    console.log('결과 화면:', screens.result);
    console.log('시작 버튼:', document.getElementById('start-main-test'));
    
    // 홈 화면 표시
    showScreen('home');
    
    // 오늘의 운세 확인
    checkDailyFortune();
    
    // 이벤트 리스너 설정
    setupEventListeners();
    
    // 애니메이션 초기화
    initializeAnimations();
    
    console.log('앱 초기화 완료');
}

// 이벤트 리스너 설정
function setupEventListeners() {
    // DOM 요소들이 존재하는지 확인하고 이벤트 리스너 추가
    const startMainTestBtn = document.getElementById('start-main-test');
    if (startMainTestBtn) {
        startMainTestBtn.addEventListener('click', startPersonalityTest);
    }
    
    // 기타 테스트 버튼들 - 안전하게 추가
    const loveTestBtn = document.getElementById('love-test-btn');
    if (loveTestBtn) {
        loveTestBtn.addEventListener('click', startLoveTest);
    }
    
    const careerTestBtn = document.getElementById('career-test-btn');
    if (careerTestBtn) {
        careerTestBtn.addEventListener('click', startCareerTest);
    }
    
    const stressTestBtn = document.getElementById('stress-test-btn');
    if (stressTestBtn) {
        stressTestBtn.addEventListener('click', startStressTest);
    }
    
    const leadershipTestBtn = document.getElementById('leadership-test-btn');
    if (leadershipTestBtn) {
        leadershipTestBtn.addEventListener('click', startLeadershipTest);
    }
    
    // 결과 화면 버튼들
    const restartBtn = document.querySelector('.restart-btn');
    if (restartBtn) {
        restartBtn.addEventListener('click', restartTest);
    }
    
    const homeBtnResult = document.querySelector('.home-btn-result');
    if (homeBtnResult) {
        homeBtnResult.addEventListener('click', goHome);
    }
    
    const shareBtn = document.getElementById('share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', shareResult);
    }
    
    // 일일 콘텐츠 버튼
    const dailyBonusBtn = document.querySelector('.daily-bonus');
    if (dailyBonusBtn) {
        dailyBonusBtn.addEventListener('click', showDailyContent);
    }
    
    // 모달 배경 클릭시 닫기
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            const modalId = e.target.id;
            console.log('모달 배경 클릭으로 닫기:', modalId);
            closeModal(modalId);
        }
    });
    
    // 모달 닫기 버튼들
    const dailyCloseBtn = document.getElementById('daily-close-btn');
    if (dailyCloseBtn) {
        dailyCloseBtn.addEventListener('click', () => closeModal('daily-modal'));
    }
    
    // 클래스 선택자로도 추가 (백업)
    const modalCloseButtons = document.querySelectorAll('.modal-close');
    modalCloseButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            if (modal) {
                const modalId = modal.id;
                console.log('모달 닫기 버튼 클릭:', modalId);
                closeModal(modalId);
            }
        });
    });
    
    const compatibilityCloseBtn = document.getElementById('compatibility-close-btn');
    if (compatibilityCloseBtn) {
        compatibilityCloseBtn.addEventListener('click', () => closeModal('compatibility-modal'));
    }
    
    // 추가 기능 버튼들
    const showCompatibilityBtn = document.getElementById('show-compatibility');
    if (showCompatibilityBtn) {
        showCompatibilityBtn.addEventListener('click', showCompatibilityModal);
    }
}

// 현재 테스트 타입에 따른 질문 반환
function getTestQuestions() {
    switch(currentTestType) {
        case 'love': return loveTestQuestions;
        case 'career': return careerTestQuestions;
        case 'stress': return stressTestQuestions;
        case 'leadership': return leadershipTestQuestions;
        default: return personalityQuestions;
    }
}

// 새로운 테스트 시작 함수들
function startPersonalityTest() {
    console.log('성격 테스트 시작');
    currentTestType = 'personality';
    startTest();
}

function startLoveTest() {
    console.log('연애 스타일 테스트 시작');
    currentTestType = 'love';
    startTest();
}

function startCareerTest() {
    console.log('직업 적성 테스트 시작');
    currentTestType = 'career';
    startTest();
}

function startStressTest() {
    console.log('스트레스 진단 테스트 시작');
    currentTestType = 'stress';
    startTest();
}

function startLeadershipTest() {
    console.log('리더십 유형 테스트 시작');
    currentTestType = 'leadership';
    startTest();
}

// 전역 함수들을 window 객체에 할당
window.startPersonalityTest = startPersonalityTest;
window.startLoveTest = startLoveTest;
window.startCareerTest = startCareerTest;
window.startStressTest = startStressTest;
window.startLeadershipTest = startLeadershipTest;

// 추가 전역 함수들
function restartTest() {
    console.log('테스트 다시 시작');
    currentQuestionIndex = 0;
    userAnswers = [];
    currentTestType = 'personality';
    currentTestQuestions = personalityQuestions;
    showScreen('test');
    displayQuestion();
}

function goHome() {
    console.log('홈으로 이동');
    showScreen('home');
}

function showDailyContent() {
    console.log('일일 콘텐츠 표시');
    showDailyModal();
}

function closeDailyModal() {
    console.log('일일 모달 닫기');
    closeModal('daily-modal');
}

function closeCompatibilityModal() {
    console.log('호환성 모달 닫기');
    closeModal('compatibility-modal');
}

// 전역 함수들 추가 할당
window.restartTest = restartTest;
window.goHome = goHome;
window.showDailyContent = showDailyContent;
window.closeDailyModal = closeDailyModal;
window.closeCompatibilityModal = closeCompatibilityModal;
window.shareKakao = shareKakao;
window.copyResult = copyResult;

// 카카오톡 공유 함수
function shareKakao() {
    try {
        // 현재 테스트 유형에 따라 적절한 결과 가져오기
        let currentResult = localStorage.getItem(STORAGE_KEYS.LAST_RESULT);
        if (!currentResult) {
            currentResult = localStorage.getItem(STORAGE_KEYS.LOVE_RESULT) ||
                           localStorage.getItem(STORAGE_KEYS.CAREER_RESULT) ||
                           localStorage.getItem(STORAGE_KEYS.STRESS_RESULT) ||
                           localStorage.getItem(STORAGE_KEYS.LEADERSHIP_RESULT);
        }
        if (!currentResult) {
            alert('공유할 결과가 없습니다. 먼저 테스트를 완료해주세요!');
            return;
        }
        
        const result = JSON.parse(currentResult);
        const shareText = `나의 성격 유형: ${result.type}\n${result.description}\n\nAI 자기분석 테스트에서 확인해보세요!`;
        const shareUrl = window.location.href;
        
        // 카카오톡 앱이 있는 경우 실행, 없으면 웹으로 이동
        const kakaoUrl = `https://sharer.kakao.com/talk/friends/?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        
        // 모바일에서는 카카오톡 앱 실행, 데스크탑에서는 웹 공유
        if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.open(`kakaolink://send?msg=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
            // 앱이 없는 경우를 대비해 웹 버전도 준비
            setTimeout(() => {
                window.open(kakaoUrl, '_blank');
            }, 1000);
        } else {
            window.open(kakaoUrl, '_blank');
        }
        
        console.log('카카오톡 공유 시도');
    } catch (error) {
        console.error('카카오톡 공유 오류:', error);
        alert('공유 중 오류가 발생했습니다.');
    }
}

// 링크 복사 함수
function copyResult() {
    try {
        const currentResult = localStorage.getItem('testResult');
        if (!currentResult) {
            alert('복사할 결과가 없습니다.');
            return;
        }
        
        const result = JSON.parse(currentResult);
        const shareText = `나의 성격 유형: ${result.type}\n${result.description}\n\nAI 자기분석 테스트: ${window.location.href}`;
        
        // 클립보드 API 사용
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(shareText).then(() => {
                alert('결과가 클립보드에 복사되었습니다!');
            }).catch(err => {
                console.error('클립보드 복사 실패:', err);
                fallbackCopyText(shareText);
            });
        } else {
            // 폴백 방법
            fallbackCopyText(shareText);
        }
        
        console.log('링크 복사 완료');
    } catch (error) {
        console.error('링크 복사 오류:', error);
        alert('복사 중 오류가 발생했습니다.');
    }
}

// 폴백 복사 함수
function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        alert('결과가 클립보드에 복사되었습니다!');
    } catch (err) {
        console.error('폴백 복사 실패:', err);
        alert('복사에 실패했습니다. 수동으로 복사해주세요.');
    }
    
    document.body.removeChild(textArea);
}
window.shareKakao = shareKakao;
window.copyResult = copyResult;

// 카카오톡 공유 함수
function shareKakao() {
    try {
        const currentResult = localStorage.getItem('testResult');
        if (!currentResult) {
            alert('공유할 결과가 없습니다.');
            return;
        }
        
        const result = JSON.parse(currentResult);
        const shareText = `나의 성격 유형: ${result.type}\n${result.description}\n\nAI 자기분석 테스트에서 확인해보세요!`;
        const shareUrl = window.location.href;
        
        // 카카오톡 앱이 있는 경우 실행, 없으면 웹으로 이동
        const kakaoUrl = `https://sharer.kakao.com/talk/friends/?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        
        // 모바일에서는 카카오톡 앱 실행, 데스크탑에서는 웹 공유
        if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.open(`kakaolink://send?msg=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
            // 앱이 없는 경우를 대비해 웹 버전도 준비
            setTimeout(() => {
                window.open(kakaoUrl, '_blank');
            }, 1000);
        } else {
            window.open(kakaoUrl, '_blank');
        }
        
        console.log('카카오톡 공유 시도');
    } catch (error) {
        console.error('카카오톡 공유 오류:', error);
        alert('공유 중 오류가 발생했습니다.');
    }
}

// 링크 복사 함수
function copyResult() {
    try {
        const currentResult = localStorage.getItem('testResult');
        if (!currentResult) {
            alert('복사할 결과가 없습니다.');
            return;
        }
        
        const result = JSON.parse(currentResult);
        const shareText = `나의 성격 유형: ${result.type}\n${result.description}\n\nAI 자기분석 테스트: ${window.location.href}`;
        
        // 클립보드 API 사용
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(shareText).then(() => {
                alert('결과가 클립보드에 복사되었습니다!');
            }).catch(err => {
                console.error('클립보드 복사 실패:', err);
                fallbackCopyText(shareText);
            });
        } else {
            // 폴백 방법
            fallbackCopyText(shareText);
        }
        
        console.log('링크 복사 완료');
    } catch (error) {
        console.error('링크 복사 오류:', error);
        alert('복사 중 오류가 발생했습니다.');
    }
}

// 폴백 복사 함수
function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        alert('결과가 클립보드에 복사되었습니다!');
    } catch (err) {
        console.error('폴백 복사 실패:', err);
        alert('복사에 실패했습니다. 수동으로 복사해주세요.');
    }
    
    document.body.removeChild(textArea);
}

// 테스트 시작 함수
function startTest() {
    console.log('테스트 시작 - 타입:', currentTestType);
    currentQuestionIndex = 0;
    userAnswers = [];
    currentTestQuestions = getTestQuestions();
    console.log('질문 개수:', currentTestQuestions.length);
    showScreen('test');
    displayQuestion();
}

// 화면 전환
function showScreen(screenName) {
    console.log('화면 전환:', currentScreen, '->', screenName);
    
    // 모든 화면 숨기기
    Object.values(screens).forEach(screen => {
        if (screen) {
            screen.classList.remove('active');
        }
    });
    
    // 선택된 화면 표시
    if (screens[screenName]) {
        screens[screenName].classList.add('active');
        currentScreen = screenName;
        console.log('화면 전환 완료:', screenName);
    } else {
        console.error('화면을 찾을 수 없음:', screenName);
    }
    
    // 화면별 애니메이션
    if (screenName === 'test') {
        setTimeout(() => {
            if (screens[screenName]) {
                screens[screenName].style.opacity = '1';
            }
        }, 100);
    }
}

// 질문 표시
function displayQuestion() {
    const question = currentTestQuestions[currentQuestionIndex];
    
    // 질문 정보 업데이트
    elements.questionNumber.textContent = `Q${currentQuestionIndex + 1}`;
    elements.questionTitle.textContent = question.question;
    elements.questionImage.innerHTML = `<i class="${question.icon}"></i>`;
    
    // 답변 옵션 생성
    elements.answersContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = createAnswerOption(option, index);
        elements.answersContainer.appendChild(optionElement);
    });
    
    // 진행률 업데이트
    updateProgress();
    
    // 애니메이션 지연 설정
    setAnimationDelays();
}

// 답변 옵션 생성
function createAnswerOption(option, index) {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'answer-option';
    optionDiv.style.setProperty('--animation-order', index);
    
    optionDiv.innerHTML = `
        <div class="answer-text">${option.text}</div>
    `;
    
    optionDiv.addEventListener('click', () => selectAnswer(option));
    
    return optionDiv;
}

// 답변 선택
function selectAnswer(option) {
    // 이전 선택 제거
    document.querySelectorAll('.answer-option').forEach(el => {
        el.classList.remove('selected');
    });
    
    // 현재 선택 표시
    event.currentTarget.classList.add('selected');
    
    // 답변 저장
    userAnswers[currentQuestionIndex] = option;
    
    // 잠시 후 다음 질문으로
    setTimeout(() => {
        nextQuestion();
    }, 500);
}

// 다음 질문
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentTestQuestions.length) {
        displayQuestion();
    } else {
        finishTest();
    }
}

// 테스트 완료
function finishTest() {
    console.log('테스트 완료 - 답변 개수:', userAnswers.length);
    console.log('사용자 답변:', userAnswers);
    
    showLoading();
    
    setTimeout(() => {
        try {
            console.log('결과 계산 시작');
            const result = calculateResult();
            console.log('계산된 결과:', result);
            
            if (result) {
                displayResult(result);
                showScreen('result');
                console.log('결과 화면으로 전환 완료');
            } else {
                console.error('결과가 null 또는 undefined입니다');
                alert('결과 계산 중 오류가 발생했습니다.');
            }
        } catch (error) {
            console.error('결과 계산 중 오류:', error);
            alert('결과 계산 중 오류가 발생했습니다: ' + error.message);
        } finally {
            hideLoading();
        }
    }, 2000);
}

// 결과 계산
function calculateResult() {
    console.log('결과 계산 - 테스트 타입:', currentTestType);
    
    try {
        switch(currentTestType) {
            case 'love': 
                console.log('연애 스타일 결과 계산');
                return calculateLoveResult();
            case 'career': 
                console.log('직업 적성 결과 계산');
                return calculateCareerResult();
            case 'stress': 
                console.log('스트레스 진단 결과 계산');
                return calculateStressResult();
            case 'leadership': 
                console.log('리더십 유형 결과 계산');
                return calculateLeadershipResult();
            default: 
                console.log('성격 유형 결과 계산');
                return calculatePersonalityResult();
        }
    } catch (error) {
        console.error('결과 계산 함수에서 오류:', error);
        throw error;
    }
}

// 성격 유형 결과 계산
function calculatePersonalityResult() {
    console.log('성격 유형 결과 계산 시작');
    
    try {
        const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        
        console.log('답변 처리 시작, 답변 개수:', userAnswers.length);
        
        userAnswers.forEach((answer, index) => {
            console.log(`답변 ${index + 1}:`, answer);
            if (answer && answer.type) {
                scores[answer.type] += answer.score || 1;
            }
        });
        
        console.log('최종 점수:', scores);
        
        const personality = 
            (scores.E > scores.I ? 'E' : 'I') +
            (scores.S > scores.N ? 'S' : 'N') +
            (scores.T > scores.F ? 'T' : 'F') +
            (scores.J > scores.P ? 'J' : 'P');
        
        console.log('계산된 성격 유형:', personality);
        
        // personalityTypes가 정의되어 있는지 확인
        if (typeof personalityTypes === 'undefined') {
            console.error('personalityTypes가 정의되지 않았습니다');
            throw new Error('성격 유형 데이터가 로드되지 않았습니다');
        }
        
        const result = personalityTypes[personality];
        
        if (!result) {
            console.error('해당 성격 유형의 결과를 찾을 수 없습니다:', personality);
            throw new Error('성격 유형 결과를 찾을 수 없습니다: ' + personality);
        }
        
        result.code = personality;
        
        // 로컬 스토리지에 결과 저장
        try {
            localStorage.setItem(STORAGE_KEYS.LAST_RESULT, JSON.stringify({
                personality,
                date: new Date().toISOString(),
                scores
            }));
        } catch (storageError) {
            console.warn('로컬 스토리지 저장 실패:', storageError);
        }
        
        console.log('성격 유형 결과 계산 완료:', result);
        return result;
        
    } catch (error) {
        console.error('성격 유형 결과 계산 중 오류:', error);
        throw error;
    }
}

// 연애 스타일 결과 계산
function calculateLoveResult() {
    const typeScores = {};
    
    userAnswers.forEach(answer => {
        if (answer && answer.type) {
            typeScores[answer.type] = (typeScores[answer.type] || 0) + (answer.score || 1);
        }
    });
    
    const topType = Object.keys(typeScores).reduce((a, b) => 
        typeScores[a] > typeScores[b] ? a : b
    );
    
    // 타입에 따른 결과 매핑
    let resultType;
    if (['communication', 'openness'].includes(topType)) {
        resultType = 'romantic_idealist';
    } else if (['stability', 'security', 'trust'].includes(topType)) {
        resultType = 'practical_partner';
    } else if (['passion', 'adventure', 'active'].includes(topType)) {
        resultType = 'passionate_lover';
    } else {
        resultType = 'independent_lover';
    }
    
    const result = loveStyles[resultType];
    
    // 로컬 스토리지에 결과 저장
    localStorage.setItem(STORAGE_KEYS.LOVE_RESULT, JSON.stringify({
        type: resultType,
        date: new Date().toISOString(),
        scores: typeScores
    }));
    
    return result;
}

// 직업 적성 결과 계산
function calculateCareerResult() {
    const typeScores = {};
    
    userAnswers.forEach(answer => {
        if (answer && answer.type) {
            typeScores[answer.type] = (typeScores[answer.type] || 0) + (answer.score || 1);
        }
    });
    
    const topType = Object.keys(typeScores).reduce((a, b) => 
        typeScores[a] > typeScores[b] ? a : b
    );
    
    // 타입에 따른 결과 매핑
    let resultType;
    if (['creativity', 'innovative', 'variety'].includes(topType)) {
        resultType = 'creative_innovator';
    } else if (['analytical', 'planning', 'expert'].includes(topType)) {
        resultType = 'analytical_expert';
    } else if (['team', 'leader', 'relationships'].includes(topType)) {
        resultType = 'people_leader';
    } else {
        resultType = 'stable_specialist';
    }
    
    const result = careerTypes[resultType];
    
    // 로컬 스토리지에 결과 저장
    localStorage.setItem(STORAGE_KEYS.CAREER_RESULT, JSON.stringify({
        type: resultType,
        date: new Date().toISOString(),
        scores: typeScores
    }));
    
    return result;
}

// 스트레스 수준 결과 계산
function calculateStressResult() {
    let totalScore = 0;
    
    userAnswers.forEach(answer => {
        if (answer && answer.score !== undefined) {
            totalScore += answer.score;
        }
    });
    
    // 스트레스 수준 결정
    let resultType;
    if (totalScore <= 5) {
        resultType = 'low_stress';
    } else if (totalScore <= 10) {
        resultType = 'medium_stress';
    } else {
        resultType = 'high_stress';
    }
    
    const result = stressLevels[resultType];
    result.score = totalScore;
    
    // 로컬 스토리지에 결과 저장
    localStorage.setItem(STORAGE_KEYS.STRESS_RESULT, JSON.stringify({
        type: resultType,
        score: totalScore,
        date: new Date().toISOString()
    }));
    
    return result;
}

// 리더십 유형 결과 계산
function calculateLeadershipResult() {
    const typeScores = {};
    
    userAnswers.forEach(answer => {
        if (answer && answer.type) {
            typeScores[answer.type] = (typeScores[answer.type] || 0) + (answer.score || 1);
        }
    });
    
    const topType = Object.keys(typeScores).reduce((a, b) => 
        typeScores[a] > typeScores[b] ? a : b
    );
    
    // 타입에 따른 결과 매핑
    let resultType;
    if (['visionary', 'strategic', 'innovative'].includes(topType)) {
        resultType = 'visionary_leader';
    } else if (['coach', 'mentor', 'developer'].includes(topType)) {
        resultType = 'coaching_leader';
    } else if (['democratic', 'facilitator', 'team_builder'].includes(topType)) {
        resultType = 'democratic_leader';
    } else {
        resultType = 'results_leader';
    }
    
    const result = leadershipTypes[resultType];
    
    // 로컬 스토리지에 결과 저장
    localStorage.setItem(STORAGE_KEYS.LEADERSHIP_RESULT, JSON.stringify({
        type: resultType,
        date: new Date().toISOString(),
        scores: typeScores
    }));
    
    return result;
}

// 결과 표시
function displayResult(result) {
    // 테스트 타입에 따른 결과 표시
    switch(currentTestType) {
        case 'personality':
            displayPersonalityResult(result);
            break;
        case 'love':
            displayLoveResult(result);
            break;
        case 'career':
            displayCareerResult(result);
            break;
        case 'stress':
            displayStressResult(result);
            break;
        case 'leadership':
            displayLeadershipResult(result);
            break;
    }
}

// 성격 유형 결과 표시
function displayPersonalityResult(result) {
    elements.resultIcon.innerHTML = `<i class="${result.icon}"></i>`;
    elements.resultTitle.textContent = "당신의 성격 유형은";
    elements.resultMbti.textContent = result.code;
    elements.resultMbti.style.display = 'block';
    elements.resultType.textContent = result.title;
    elements.resultDescription.textContent = result.description;
    
    // 카드 색상 업데이트
    elements.resultCard.style.background = result.gradient || result.color;
    elements.resultCard.style.color = 'white';
    
    // 통계 업데이트
    updateResultStats(result.stats);
    
    // 오늘의 조언 표시
    displayDailyAdvice();
    
    // 유사한 유형들 표시
    if (elements.similarTypesGrid && elements.similarTypesGrid.parentElement) {
        elements.similarTypesGrid.parentElement.style.display = 'block';
    }
    displaySimilarTypes(result.code);
}

// 연애 스타일 결과 표시
function displayLoveResult(result) {
    elements.resultIcon.innerHTML = `<i class="${result.icon}"></i>`;
    elements.resultTitle.textContent = "당신의 연애 스타일은";
    elements.resultMbti.style.display = 'none'; // MBTI 코드 숨기기
    elements.resultType.textContent = result.title;
    elements.resultDescription.textContent = result.description;
    
    // 카드 색상 업데이트 (연애 테마)
    elements.resultCard.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a52)';
    elements.resultCard.style.color = 'white';
    
    // 조언 표시
    elements.dailyAdvice.textContent = result.advice;
    
    // 유사한 유형 섹션 숨기기
    if (elements.similarTypesGrid && elements.similarTypesGrid.parentElement) {
        elements.similarTypesGrid.parentElement.style.display = 'none';
    }
}

// 직업 적성 결과 표시
function displayCareerResult(result) {
    elements.resultIcon.innerHTML = `<i class="${result.icon}"></i>`;
    elements.resultTitle.textContent = "당신의 직업 적성은";
    elements.resultMbti.style.display = 'none';
    elements.resultType.textContent = result.title;
    elements.resultDescription.textContent = result.description;
    
    // 카드 색상 업데이트 (직업 테마)
    elements.resultCard.style.background = 'linear-gradient(135deg, #4facfe, #00f2fe)';
    elements.resultCard.style.color = 'white';
    
    // 추천 직업 표시
    if (result.jobs) {
        elements.dailyAdvice.innerHTML = `<strong>추천 직업:</strong> ${result.jobs.join(', ')}<br><br>${result.advice}`;
    }
    
    // 유사한 유형 섹션 숨기기
    if (elements.similarTypesGrid && elements.similarTypesGrid.parentElement) {
        elements.similarTypesGrid.parentElement.style.display = 'none';
    }
}

// 스트레스 진단 결과 표시
function displayStressResult(result) {
    elements.resultIcon.innerHTML = `<i class="${result.icon}"></i>`;
    elements.resultTitle.textContent = "스트레스 수준 진단";
    elements.resultMbti.style.display = 'none';
    elements.resultType.textContent = result.title;
    elements.resultDescription.textContent = result.description;
    
    // 카드 색상 업데이트 (스트레스 수준별)
    elements.resultCard.style.background = `linear-gradient(135deg, ${result.color}, ${result.color}dd)`;
    elements.resultCard.style.color = 'white';
    
    // 조언 표시
    elements.dailyAdvice.innerHTML = `<strong>스트레스 수준:</strong> ${result.level}<br><br>${result.advice}`;
    
    // 유사한 유형 섹션 숨기기
    if (elements.similarTypesGrid && elements.similarTypesGrid.parentElement) {
        elements.similarTypesGrid.parentElement.style.display = 'none';
    }
}

// 리더십 유형 결과 표시
function displayLeadershipResult(result) {
    elements.resultIcon.innerHTML = `<i class="${result.icon}"></i>`;
    elements.resultTitle.textContent = "당신의 리더십 유형은";
    elements.resultMbti.style.display = 'none';
    elements.resultType.textContent = result.title;
    elements.resultDescription.textContent = result.description;
    
    // 카드 색상 업데이트 (리더십 테마)
    elements.resultCard.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    elements.resultCard.style.color = 'white';
    
    // 강점과 조언 표시
    if (result.strengths) {
        elements.dailyAdvice.innerHTML = `<strong>주요 강점:</strong> ${result.strengths.join(', ')}<br><br>${result.advice}`;
    }
    
    // 유사한 유형 섹션 숨기기
    if (elements.similarTypesGrid && elements.similarTypesGrid.parentElement) {
        elements.similarTypesGrid.parentElement.style.display = 'none';
    }
}

// 진행률 업데이트
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentTestQuestions.length) * 100;
    elements.progressFill.style.width = `${progress}%`;
    elements.progressText.textContent = `${currentQuestionIndex + 1}/${currentTestQuestions.length}`;
}

// 통계 업데이트 (성격 테스트용)
function updateResultStats(stats) {
    const statItems = document.querySelectorAll('.stat-item');
    const statValues = ['logic', 'emotion', 'social'];
    
    statItems.forEach((item, index) => {
        const statFill = item.querySelector('.stat-fill');
        const statValue = item.querySelector('.stat-value');
        const value = stats ? stats[statValues[index]] : 50;
        
        setTimeout(() => {
            statFill.style.width = `${value}%`;
            statValue.textContent = `${value}%`;
        }, index * 200);
    });
}

// 오늘의 조언 표시
function displayDailyAdvice() {
    const today = new Date().toDateString();
    const todayIndex = new Date().getDate() % dailyAdvice.length;
    elements.dailyAdvice.textContent = dailyAdvice[todayIndex];
}

// 유사한 유형들 표시 (성격 테스트용)
function displaySimilarTypes(currentType) {
    try {
        const similar = getCompatibleTypes(currentType);
        
        if (!elements.similarTypesGrid) {
            console.warn('similarTypesGrid 요소를 찾을 수 없습니다');
            return;
        }
        
        elements.similarTypesGrid.innerHTML = '';
        
        similar.slice(0, 3).forEach(type => {
            const typeElement = document.createElement('div');
            typeElement.className = 'similar-type';
            
            const typeInfo = personalityTypes[type];
            const typeName = typeInfo ? typeInfo.title : 'Unknown';
            
            typeElement.innerHTML = `
                <div class="type-code">${type}</div>
                <div class="type-name">${typeName}</div>
            `;
            elements.similarTypesGrid.appendChild(typeElement);
        });
    } catch (error) {
        console.error('유사한 유형 표시 중 오류:', error);
    }
}

// 호환 가능한 유형 가져오기
function getCompatibleTypes(type) {
    try {
        if (typeof compatibilityMatrix === 'undefined') {
            console.warn('compatibilityMatrix가 정의되지 않았습니다');
            return [];
        }
        return compatibilityMatrix[type] || [];
    } catch (error) {
        console.error('호환 유형 가져오기 오류:', error);
        return [];
    }
}

// 애니메이션 지연 설정
function setAnimationDelays() {
    const options = document.querySelectorAll('.answer-option');
    options.forEach((option, index) => {
        option.style.animationDelay = `${index * 0.1}s`;
    });
}

// 오늘의 운세 확인
function checkDailyFortune() {
    const today = new Date().toDateString();
    const lastShown = localStorage.getItem(STORAGE_KEYS.DAILY_FORTUNE_DATE);
    
    if (lastShown !== today) {
        setTimeout(() => {
            showDailyModal();
            localStorage.setItem(STORAGE_KEYS.DAILY_FORTUNE_DATE, today);
        }, 2000);
    }
}

// 일일 모달 표시
function showDailyModal() {
    try {
        if (!elements.dailyModal) {
            console.error('일일 모달 요소를 찾을 수 없습니다');
            return;
        }
        
        const today = new Date();
        const fortuneIndex = today.getDate() % dailyFortune.length;
        const fortune = dailyFortune[fortuneIndex];
        
        if (elements.fortuneDate) {
            elements.fortuneDate.textContent = today.toLocaleDateString('ko-KR');
        }
        if (elements.fortuneContent) {
            elements.fortuneContent.textContent = fortune;
        }
        
        // 모달 표시 및 애니메이션
        elements.dailyModal.classList.remove('closing');
        elements.dailyModal.style.display = 'flex';
        
        // 부드러운 애니메이션을 위한 지연
        requestAnimationFrame(() => {
            elements.dailyModal.classList.add('active');
        });
        
        console.log('일일 모달 표시 완료');
    } catch (error) {
        console.error('일일 모달 표시 중 오류:', error);
    }
}

// 호환성 모달 표시
function showCompatibilityModal() {
    elements.compatibilityModal.style.display = 'flex';
    setTimeout(() => {
        elements.compatibilityModal.classList.add('active');
    }, 10);
    
    displayCompatibilityTypes();
}

// 호환성 유형들 표시
function displayCompatibilityTypes() {
    const savedResult = localStorage.getItem(STORAGE_KEYS.LAST_RESULT);
    if (!savedResult) return;
    
    const result = JSON.parse(savedResult);
    const compatible = getCompatibleTypes(result.personality);
    
    elements.compatibilityTypes.innerHTML = '';
    compatible.forEach(type => {
        const typeElement = document.createElement('div');
        typeElement.className = 'compatibility-type';
        typeElement.innerHTML = `
            <div class="type-code">${type}</div>
            <div class="type-name">${personalityTypes[type]?.title || 'Unknown'}</div>
        `;
        
        typeElement.addEventListener('click', () => {
            showCompatibilityResult(result.personality, type);
        });
        
        elements.compatibilityTypes.appendChild(typeElement);
    });
}

// 호환성 결과 표시
function showCompatibilityResult(myType, otherType) {
    const compatibility = getCompatibilityScore(myType, otherType);
    elements.compatibilityResult.innerHTML = `
        <h3>${myType} ❤️ ${otherType}</h3>
        <div class="compatibility-score">${compatibility}%</div>
        <p>두 유형의 궁합도입니다!</p>
    `;
}

// 호환성 점수 계산
function getCompatibilityScore(type1, type2) {
    const compatible = getCompatibleTypes(type1);
    const index = compatible.indexOf(type2);
    
    if (index === -1) return Math.floor(Math.random() * 30) + 40;
    return Math.floor(Math.random() * 20) + 80 - (index * 5);
}

// 모달 닫기
function closeModal(modalId) {
    console.log('모달 닫기 시도:', modalId);
    
    try {
        const modal = document.getElementById(modalId);
        
        if (!modal) {
            console.error('모달을 찾을 수 없습니다:', modalId);
            return;
        }
        
        console.log('모달 요소 발견:', modal);
        
        // 닫기 애니메이션 시작
        modal.classList.add('closing');
        modal.classList.remove('active');
        
        // 애니메이션 완료 후 숨기기
        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('closing');
            console.log('모달 닫기 완료:', modalId);
        }, 300);
        
    } catch (error) {
        console.error('모달 닫기 중 오류:', error);
    }
}

// 결과 공유
function shareResult() {
    let shareText = "";
    
    switch(currentTestType) {
        case 'personality':
            const savedResult = localStorage.getItem(STORAGE_KEYS.LAST_RESULT);
            if (savedResult) {
                const result = JSON.parse(savedResult);
                shareText = `나의 성격 유형: ${result.personality}\n\nAI 자기분석 테스트 해보기: ${window.location.href}`;
            }
            break;
        case 'love':
            shareText = `나의 연애 스타일 분석 결과를 확인해보세요!\n\nAI 자기분석 테스트: ${window.location.href}`;
            break;
        case 'career':
            shareText = `나의 직업 적성 분석 결과를 확인해보세요!\n\nAI 자기분석 테스트: ${window.location.href}`;
            break;
        case 'stress':
            shareText = `나의 스트레스 수준 진단 결과를 확인해보세요!\n\nAI 자기분석 테스트: ${window.location.href}`;
            break;
        case 'leadership':
            shareText = `나의 리더십 유형 분석 결과를 확인해보세요!\n\nAI 자기분석 테스트: ${window.location.href}`;
            break;
    }
    
    if (navigator.share) {
        navigator.share({
            title: 'AI 자기분석 테스트 결과',
            text: shareText,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            showToast('결과가 클립보드에 복사되었습니다!');
        });
    }
}

// 토스트 메시지 표시
function showToast(message) {
    elements.toastMessage.textContent = message;
    elements.toast.classList.add('show');
    
    setTimeout(() => {
        elements.toast.classList.remove('show');
    }, 3000);
}

// 로딩 표시
function showLoading() {
    console.log('로딩 표시 시작');
    try {
        if (elements.loading) {
            elements.loading.style.display = 'flex';
            setTimeout(() => {
                if (elements.loading) {
                    elements.loading.classList.add('active');
                }
            }, 10);
        } else {
            console.warn('로딩 요소를 찾을 수 없습니다');
        }
    } catch (error) {
        console.error('로딩 표시 중 오류:', error);
    }
}

// 로딩 숨기기
function hideLoading() {
    console.log('로딩 숨기기 시작');
    try {
        if (elements.loading) {
            elements.loading.classList.remove('active');
            setTimeout(() => {
                if (elements.loading) {
                    elements.loading.style.display = 'none';
                }
            }, 300);
        } else {
            console.warn('로딩 요소를 찾을 수 없습니다');
        }
    } catch (error) {
        console.error('로딩 숨기기 중 오류:', error);
    }
}

// 애니메이션 초기화
function initializeAnimations() {
    // 페이지 로드 애니메이션
    document.body.classList.add('loaded');
    
    // 스크롤 애니메이션
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // 애니메이션 대상 요소들 관찰
    document.querySelectorAll('.feature-card, .test-card').forEach(el => {
        observer.observe(el);
    });
}

// 키보드 이벤트 처리
document.addEventListener('keydown', function(event) {
    if (currentScreen === 'test') {
        const options = document.querySelectorAll('.answer-option');
        
        if (event.key >= '1' && event.key <= '4') {
            const index = parseInt(event.key) - 1;
            if (options[index]) {
                options[index].click();
            }
        }
    }
});

// 서비스 워커 등록
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// 올바른 공유 함수들 (파일 끝에 추가)
// 카카오톡 공유 함수 (수정된 버전)
window.shareKakao = function() {
    try {
        // 현재 테스트 유형에 따라 적절한 결과 가져오기
        let currentResult = localStorage.getItem(STORAGE_KEYS.LAST_RESULT);
        if (!currentResult) {
            currentResult = localStorage.getItem(STORAGE_KEYS.LOVE_RESULT) ||
                           localStorage.getItem(STORAGE_KEYS.CAREER_RESULT) ||
                           localStorage.getItem(STORAGE_KEYS.STRESS_RESULT) ||
                           localStorage.getItem(STORAGE_KEYS.LEADERSHIP_RESULT);
        }
        
        if (!currentResult) {
            alert('공유할 결과가 없습니다. 먼저 테스트를 완료해주세요!');
            return;
        }
        
        const result = JSON.parse(currentResult);
        const shareText = `나의 성격 유형: ${result.type}\n${result.description}\n\nAI 자기분석 테스트에서 확인해보세요!`;
        const shareUrl = window.location.href;
        
        // 카카오톡 앱이 있는 경우 실행, 없으면 웹으로 이동
        const kakaoUrl = `https://sharer.kakao.com/talk/friends/?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        
        // 모바일에서는 카카오톡 앱 실행, 데스크탑에서는 웹 공유
        if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.open(`kakaolink://send?msg=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
            // 앱이 없는 경우를 대비해 웹 버전도 준비
            setTimeout(() => {
                window.open(kakaoUrl, '_blank');
            }, 1000);
        } else {
            window.open(kakaoUrl, '_blank');
        }
        
        console.log('카카오톡 공유 성공:', result.type);
    } catch (error) {
        console.error('카카오톡 공유 오류:', error);
        alert('공유 중 오류가 발생했습니다.');
    }
};

// 링크 복사 함수 (수정된 버전)
window.copyResult = function() {
    try {
        // 현재 테스트 유형에 따라 적절한 결과 가져오기
        let currentResult = localStorage.getItem(STORAGE_KEYS.LAST_RESULT);
        if (!currentResult) {
            currentResult = localStorage.getItem(STORAGE_KEYS.LOVE_RESULT) ||
                           localStorage.getItem(STORAGE_KEYS.CAREER_RESULT) ||
                           localStorage.getItem(STORAGE_KEYS.STRESS_RESULT) ||
                           localStorage.getItem(STORAGE_KEYS.LEADERSHIP_RESULT);
        }
        
        if (!currentResult) {
            alert('복사할 결과가 없습니다. 먼저 테스트를 완료해주세요!');
            return;
        }
        
        const result = JSON.parse(currentResult);
        const shareText = `나의 성격 유형: ${result.type}\n${result.description}\n\nAI 자기분석 테스트: ${window.location.href}`;
        
        // 클립보드 API 사용
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(shareText).then(() => {
                alert('결과가 클립보드에 복사되었습니다!');
            }).catch(err => {
                console.error('클립보드 복사 실패:', err);
                fallbackCopyText(shareText);
            });
        } else {
            // 폴백 방법
            fallbackCopyText(shareText);
        }
        
        console.log('링크 복사 성공:', result.type);
    } catch (error) {
        console.error('링크 복사 오류:', error);
        alert('복사 중 오류가 발생했습니다.');
    }
};