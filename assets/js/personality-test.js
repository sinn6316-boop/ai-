// 성격 유형 테스트 클래스
class PersonalityTest {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.scores = {
            E: 0, I: 0,  // 외향성 vs 내향성
            S: 0, N: 0,  // 감각 vs 직관
            T: 0, F: 0,  // 사고 vs 감정
            J: 0, P: 0   // 판단 vs 인식
        };
    }

    // 테스트 시작
    startTest() {
        console.log('=== PersonalityTest.startTest() 시작 ===');
        
        // 안전한 데이터 확인
        const questions = window.personalityQuestions || personalityQuestions;
        console.log('데이터 확인 - personalityQuestions:', typeof questions !== 'undefined' ? `존재함 (${questions.length}개)` : '없음');
        
        if (!questions || questions.length === 0) {
            console.error('personalityQuestions 데이터가 없습니다');
            alert('테스트 데이터를 로드할 수 없습니다. 페이지를 새로고침해주세요.');
            return;
        }
        
        this.resetTest();
        console.log('테스트 초기화 완료');
        
        // DOM 요소 확인
        const testSection = document.getElementById('test-section');
        const introSection = document.getElementById('test-intro');
        
        console.log('DOM 요소 확인:');
        console.log('- test-section:', testSection ? '존재함' : '없음');
        console.log('- test-intro:', introSection ? '존재함' : '없음');
        
        if (!testSection) {
            console.error('test-section 요소를 찾을 수 없습니다');
            alert('테스트 화면을 로드할 수 없습니다. 페이지 구조를 확인해주세요.');
            return;
        }
        
        this.showSection('test-section');
        console.log('test-section으로 화면 전환 완료');
        
        this.displayQuestion();
        console.log('첫 번째 질문 표시 완료');
        console.log('=== startTest() 완료 ===');
    }

    // 테스트 초기화
    resetTest() {
        console.log('resetTest 호출됨');
        this.currentQuestion = 0;
        this.answers = [];
        this.scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        console.log('테스트 초기화 완료:', {
            currentQuestion: this.currentQuestion,
            answersLength: this.answers.length,
            scores: this.scores
        });
    }

    // 섹션 표시/숨김
    showSection(sectionId) {
        console.log('showSection 호출됨, sectionId:', sectionId);
        const sections = ['test-intro', 'test-section', 'result-section'];
        sections.forEach(id => {
            const element = document.getElementById(id);
            console.log(`요소 ${id}:`, element ? '찾음' : '없음');
            if (element) {
                element.style.display = id === sectionId ? 'block' : 'none';
                console.log(`${id} 표시 상태:`, element.style.display);
            }
        });
    }

    // 질문 표시
    displayQuestion() {
        console.log('displayQuestion 호출됨, currentQuestion:', this.currentQuestion);
        
        // 안전한 데이터 접근
        const questions = window.personalityQuestions || personalityQuestions;
        console.log('personalityQuestions 배열:', questions ? '존재함' : '없음');
        console.log('personalityQuestions 길이:', questions ? questions.length : '알 수 없음');
        
        if (!questions || questions.length === 0) {
            console.error('질문 데이터가 없습니다');
            alert('질문 데이터를 로드할 수 없습니다.');
            return;
        }
        
        if (this.currentQuestion >= questions.length) {
            console.log('모든 질문 완료, 결과 계산 시작');
            this.calculateResult();
            return;
        }

        const question = questions[this.currentQuestion];
        console.log('현재 질문:', question);
        
        // 진행바 업데이트
        this.updateProgress();
        
        // 질문 내용 업데이트
        document.getElementById('question-number').textContent = `Q${this.currentQuestion + 1}`;
        document.getElementById('question-title').textContent = question.question;
        document.getElementById('question-image').innerHTML = `<i class="${question.icon}"></i>`;
        
        // 답변 옵션 생성
        this.createAnswerOptions(question.options);
    }

    // 답변 옵션 생성
    createAnswerOptions(options) {
        const container = document.getElementById('answers-container');
        container.innerHTML = '';

        options.forEach((option, index) => {
            const answerElement = document.createElement('div');
            answerElement.className = 'answer-option';
            answerElement.innerHTML = `
                <div class="answer-content">
                    <span class="answer-text">${option.text}</span>
                </div>
            `;
            
            answerElement.addEventListener('click', () => this.selectAnswer(index));
            container.appendChild(answerElement);
        });
    }

    // 답변 선택
    selectAnswer(optionIndex) {
        const question = personalityQuestions[this.currentQuestion];
        const selectedOption = question.options[optionIndex];
        
        // 답변 저장
        this.answers.push({
            questionId: question.id,
            answer: selectedOption,
            optionIndex: optionIndex
        });

        // 점수 계산
        this.scores[selectedOption.type] += selectedOption.score;

        // 선택 효과 표시
        this.showAnswerSelection(optionIndex);

        // 다음 질문으로 이동 (약간의 딜레이)
        setTimeout(() => {
            this.currentQuestion++;
            this.displayQuestion();
        }, 800);
    }

    // 답변 선택 효과
    showAnswerSelection(selectedIndex) {
        const options = document.querySelectorAll('.answer-option');
        options.forEach((option, index) => {
            if (index === selectedIndex) {
                option.classList.add('selected');
            } else {
                option.classList.add('not-selected');
            }
        });
    }

    // 진행바 업데이트
    updateProgress() {
        const progress = ((this.currentQuestion + 1) / personalityQuestions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = `${this.currentQuestion + 1} / ${personalityQuestions.length}`;
    }

    // 결과 계산
    calculateResult() {
        this.showLoading();

        setTimeout(() => {
            const mbtiType = this.determineMBTIType();
            const personalityType = personalityTypes[mbtiType];
            
            this.displayResult(mbtiType, personalityType);
            this.hideLoading();
            this.showSection('result-section');
        }, 2000);
    }

    // MBTI 유형 결정
    determineMBTIType() {
        let type = '';
        
        // E vs I
        type += this.scores.E >= this.scores.I ? 'E' : 'I';
        
        // S vs N
        type += this.scores.S >= this.scores.N ? 'S' : 'N';
        
        // T vs F
        type += this.scores.T >= this.scores.F ? 'T' : 'F';
        
        // J vs P
        type += this.scores.J >= this.scores.P ? 'J' : 'P';
        
        return type;
    }

    // 결과 표시
    displayResult(mbtiType, personalityType) {
        // 기본 결과 정보
        document.getElementById('result-mbti').textContent = mbtiType;
        document.getElementById('result-type').textContent = personalityType.title;
        document.getElementById('result-description').textContent = personalityType.description;
        
        // 결과 아이콘
        document.getElementById('result-icon').innerHTML = `<i class="${personalityType.icon}"></i>`;
        
        // 성격 특성 점수 표시
        this.displayPersonalityStats();
        
        // 오늘의 조언
        this.displayAdvice(personalityType);
        
        // 비슷한 유형들
        this.displaySimilarTypes(mbtiType);
        
        // 결과 저장
        this.saveResult(mbtiType, personalityType);
    }

    // 성격 특성 점수 표시
    displayPersonalityStats() {
        const statsContainer = document.getElementById('result-stats');
        statsContainer.innerHTML = '';

        const stats = [
            { label: '외향성', value: this.getPercentage('E', 'I'), type: 'E' },
            { label: '직관성', value: this.getPercentage('N', 'S'), type: 'N' },
            { label: '논리성', value: this.getPercentage('T', 'F'), type: 'T' },
            { label: '계획성', value: this.getPercentage('J', 'P'), type: 'J' }
        ];

        stats.forEach(stat => {
            const statElement = document.createElement('div');
            statElement.className = 'stat-item';
            statElement.innerHTML = `
                <span class="stat-label">${stat.label}</span>
                <div class="stat-bar">
                    <div class="stat-fill" style="width: ${stat.value}%"></div>
                </div>
                <span class="stat-value">${stat.value}%</span>
            `;
            statsContainer.appendChild(statElement);
        });
    }

    // 백분율 계산
    getPercentage(type1, type2) {
        const total = this.scores[type1] + this.scores[type2];
        if (total === 0) return 50;
        return Math.round((this.scores[type1] / total) * 100);
    }

    // 오늘의 조언 표시
    displayAdvice(personalityType) {
        const adviceElement = document.getElementById('daily-advice');
        if (adviceElement && personalityType.advice) {
            adviceElement.textContent = personalityType.advice;
        }
    }

    // 비슷한 유형들 표시
    displaySimilarTypes(currentType) {
        const container = document.getElementById('similar-types-grid');
        container.innerHTML = '';
        
        const similarTypes = this.getSimilarTypes(currentType);
        
        similarTypes.forEach(type => {
            const typeElement = document.createElement('div');
            typeElement.className = 'type-item';
            typeElement.innerHTML = `
                <div class="type-icon">
                    <i class="${personalityTypes[type].icon}"></i>
                </div>
                <h4>${type}</h4>
                <p>${personalityTypes[type].title}</p>
            `;
            container.appendChild(typeElement);
        });
    }

    // 비슷한 유형 찾기
    getSimilarTypes(currentType) {
        const types = Object.keys(personalityTypes).filter(type => type !== currentType);
        
        // 유사도 계산 (공통 문자 수)
        return types
            .map(type => ({
                type: type,
                similarity: this.calculateSimilarity(currentType, type)
            }))
            .sort((a, b) => b.similarity - a.similarity)
            .slice(0, 3)
            .map(item => item.type);
    }

    // 유사도 계산
    calculateSimilarity(type1, type2) {
        let similarity = 0;
        for (let i = 0; i < 4; i++) {
            if (type1[i] === type2[i]) {
                similarity++;
            }
        }
        return similarity;
    }

    // 결과 저장
    saveResult(mbtiType, personalityType) {
        const result = {
            type: mbtiType,
            name: personalityType.name,
            description: personalityType.description,
            scores: this.scores,
            date: new Date().toISOString(),
            answers: this.answers
        };
        
        localStorage.setItem('personalityTestResult', JSON.stringify(result));
        localStorage.setItem('lastTestDate', new Date().toDateString());
    }

    // 로딩 화면 표시/숨김
    showLoading() {
        document.getElementById('loading').style.display = 'flex';
    }

    hideLoading() {
        document.getElementById('loading').style.display = 'none';
    }

    // 토스트 메시지 표시
    showToast(message) {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toast-message');
        
        toastMessage.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// 전역 함수들
function restartTest() {
    if (window.personalityTestInstance) {
        window.personalityTestInstance.resetTest();
        window.personalityTestInstance.showSection('test-intro');
    }
}

function goHome() {
    window.location.href = 'index.html';
}

// 결과 공유 함수들
function shareKakao() {
    const result = JSON.parse(localStorage.getItem('personalityTestResult') || '{}');
    if (!result.type) {
        alert('먼저 테스트를 완료해주세요.');
        return;
    }
    
    const url = window.location.href;
    const text = `나의 MBTI 성격 유형은 ${result.type} (${result.name})입니다! 나도 테스트해보기 👇`;
    
    // 카카오톡 공유 (실제 구현시 카카오 SDK 필요)
    if (navigator.share) {
        navigator.share({
            title: 'MBTI 성격 유형 테스트 결과',
            text: text,
            url: url
        });
    } else {
        copyToClipboard(`${text}\n${url}`);
        window.personalityTestInstance.showToast('클립보드에 복사되었습니다!');
    }
}

function copyResult() {
    const result = JSON.parse(localStorage.getItem('personalityTestResult') || '{}');
    if (!result.type) {
        alert('먼저 테스트를 완료해주세요.');
        return;
    }
    
    const url = window.location.href;
    const text = `나의 MBTI 성격 유형은 ${result.type} (${result.name})입니다!\n${url}`;
    
    copyToClipboard(text);
    window.personalityTestInstance.showToast('결과가 클립보드에 복사되었습니다!');
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}

function showCompatibility() {
    alert('궁합 테스트 기능은 곧 출시됩니다!');
}

// 페이지 로드시 이전 결과 확인 (제한 없이 항상 테스트 가능)
document.addEventListener('DOMContentLoaded', function() {
    console.log('성격유형 테스트 페이지가 로드되었습니다.');
});