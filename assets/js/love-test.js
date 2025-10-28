// 연애 스타일 테스트 클래스
class LoveTest {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.scores = {
            R: 0, P: 0,  // 로맨틱 vs 현실적
            A: 0, C: 0,  // 적극적 vs 소극적  
            I: 0, D: 0,  // 독립적 vs 의존적
            E: 0, L: 0   // 감정적 vs 논리적
        };
    }

    // 테스트 시작
    startTest() {
        this.resetTest();
        this.showSection('test-section');
        this.displayQuestion();
    }

    // 테스트 초기화
    resetTest() {
        this.currentQuestion = 0;
        this.answers = [];
        this.scores = { R: 0, P: 0, A: 0, C: 0, I: 0, D: 0, E: 0, L: 0 };
    }

    // 섹션 표시/숨김
    showSection(sectionId) {
        const sections = ['test-intro', 'test-section', 'result-section'];
        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.display = id === sectionId ? 'block' : 'none';
            }
        });
    }

    // 질문 표시
    displayQuestion() {
        if (this.currentQuestion >= loveQuestions.length) {
            this.calculateResult();
            return;
        }

        const question = loveQuestions[this.currentQuestion];
        
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
        const question = loveQuestions[this.currentQuestion];
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
        const progress = ((this.currentQuestion + 1) / loveQuestions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = `${this.currentQuestion + 1} / ${loveQuestions.length}`;
    }

    // 결과 계산
    calculateResult() {
        this.showLoading();

        setTimeout(() => {
            const loveType = this.determineLoveType();
            const loveStyle = loveTypes[loveType];
            
            this.displayResult(loveType, loveStyle);
            this.hideLoading();
            this.showSection('result-section');
        }, 2000);
    }

    // 연애 유형 결정
    determineLoveType() {
        let type = '';
        
        // R vs P (로맨틱 vs 현실적)
        type += this.scores.R >= this.scores.P ? 'R' : 'P';
        
        // A vs C (적극적 vs 소극적)
        type += this.scores.A >= this.scores.C ? 'A' : 'C';
        
        // I vs D (독립적 vs 의존적)
        type += this.scores.I >= this.scores.D ? 'I' : 'D';
        
        // E vs L (감정적 vs 논리적)
        type += this.scores.E >= this.scores.L ? 'E' : 'L';
        
        return type;
    }

    // 결과 표시
    displayResult(loveType, loveStyle) {
        // 기본 결과 정보
        document.getElementById('result-type-code').textContent = loveType;
        document.getElementById('result-type').textContent = loveStyle.name;
        document.getElementById('result-description').textContent = loveStyle.description;
        
        // 결과 아이콘
        document.getElementById('result-icon').innerHTML = `<i class="${loveStyle.icon}"></i>`;
        
        // 연애 성향 점수 표시
        this.displayLoveStats();
        
        // 이상형 분석
        this.displayIdealType(loveStyle);
        
        // 연애 조언
        this.displayLoveAdvice(loveStyle);
        
        // 궁합 좋은 유형들
        this.displayCompatibleTypes(loveType);
        
        // 결과 저장
        this.saveResult(loveType, loveStyle);
    }

    // 연애 성향 점수 표시
    displayLoveStats() {
        const statsContainer = document.getElementById('result-stats');
        statsContainer.innerHTML = '';

        const stats = [
            { label: '로맨틱', value: this.getPercentage('R', 'P'), type: 'R' },
            { label: '적극성', value: this.getPercentage('A', 'C'), type: 'A' },
            { label: '독립성', value: this.getPercentage('I', 'D'), type: 'I' },
            { label: '감성', value: this.getPercentage('E', 'L'), type: 'E' }
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

    // 이상형 분석 표시
    displayIdealType(loveStyle) {
        const container = document.getElementById('ideal-type-card');
        container.innerHTML = `
            <div class="ideal-type-info">
                <div class="ideal-type-icon">
                    <i class="${loveStyle.idealType.icon}"></i>
                </div>
                <h4>${loveStyle.idealType.type}</h4>
                <p>${loveStyle.idealType.description}</p>
                <div class="ideal-traits">
                    ${loveStyle.idealType.traits.map(trait => `<span class="trait-tag">${trait}</span>`).join('')}
                </div>
            </div>
        `;
    }

    // 연애 조언 표시
    displayLoveAdvice(loveStyle) {
        const adviceElement = document.getElementById('love-advice-text');
        const today = new Date().getDay();
        const advice = loveStyle.advice[today % loveStyle.advice.length];
        adviceElement.textContent = advice;
    }

    // 궁합 좋은 유형들 표시
    displayCompatibleTypes(currentType) {
        const container = document.getElementById('compatible-types-grid');
        container.innerHTML = '';
        
        const compatibleTypes = this.getCompatibleTypes(currentType);
        
        compatibleTypes.forEach(type => {
            const typeElement = document.createElement('div');
            typeElement.className = 'type-item';
            typeElement.innerHTML = `
                <div class="type-icon">
                    <i class="${loveTypes[type].icon}"></i>
                </div>
                <h4>${type}</h4>
                <p>${loveTypes[type].name}</p>
                <div class="compatibility-score">
                    <i class="fas fa-heart"></i>
                    <span>${this.calculateCompatibility(currentType, type)}%</span>
                </div>
            `;
            container.appendChild(typeElement);
        });
    }

    // 궁합 좋은 유형 찾기
    getCompatibleTypes(currentType) {
        const types = Object.keys(loveTypes).filter(type => type !== currentType);
        
        // 궁합도 계산
        return types
            .map(type => ({
                type: type,
                compatibility: this.calculateCompatibility(currentType, type)
            }))
            .sort((a, b) => b.compatibility - a.compatibility)
            .slice(0, 3)
            .map(item => item.type);
    }

    // 궁합도 계산
    calculateCompatibility(type1, type2) {
        // 연애 유형 간 궁합도 계산 로직
        let compatibility = 70; // 기본 궁합도
        
        // 로맨틱/현실적 궁합
        if ((type1[0] === 'R' && type2[0] === 'R') || (type1[0] === 'P' && type2[0] === 'P')) {
            compatibility += 10;
        }
        
        // 적극적/소극적 상호보완
        if (type1[1] !== type2[1]) {
            compatibility += 15;
        }
        
        // 독립적/의존적 균형
        if (type1[2] !== type2[2]) {
            compatibility += 10;
        }
        
        // 감정적/논리적 보완
        if (type1[3] !== type2[3]) {
            compatibility += 5;
        }
        
        return Math.min(compatibility, 95);
    }

    // 결과 저장
    saveResult(loveType, loveStyle) {
        const result = {
            type: loveType,
            name: loveStyle.name,
            description: loveStyle.description,
            scores: this.scores,
            idealType: loveStyle.idealType,
            date: new Date().toISOString(),
            answers: this.answers
        };
        
        localStorage.setItem('loveTestResult', JSON.stringify(result));
        localStorage.setItem('lastLoveTestDate', new Date().toDateString());
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
function startLoveTest() {
    if (window.loveTestInstance) {
        window.loveTestInstance.startTest();
    }
}

function restartTest() {
    if (window.loveTestInstance) {
        window.loveTestInstance.resetTest();
        window.loveTestInstance.showSection('test-intro');
    }
}

function goHome() {
    window.location.href = 'index.html';
}

// 결과 공유 함수들
function shareKakao() {
    const result = JSON.parse(localStorage.getItem('loveTestResult') || '{}');
    if (!result.type) {
        alert('먼저 테스트를 완료해주세요.');
        return;
    }
    
    const url = window.location.href;
    const text = `나의 연애 스타일은 ${result.type} (${result.name})입니다! 나도 테스트해보기 👇`;
    
    // 카카오톡 공유 (실제 구현시 카카오 SDK 필요)
    if (navigator.share) {
        navigator.share({
            title: '연애 스타일 테스트 결과',
            text: text,
            url: url
        });
    } else {
        copyToClipboard(`${text}\n${url}`);
        window.loveTestInstance.showToast('클립보드에 복사되었습니다!');
    }
}

function copyResult() {
    const result = JSON.parse(localStorage.getItem('loveTestResult') || '{}');
    if (!result.type) {
        alert('먼저 테스트를 완료해주세요.');
        return;
    }
    
    const url = window.location.href;
    const text = `나의 연애 스타일은 ${result.type} (${result.name})입니다!\n${url}`;
    
    copyToClipboard(text);
    window.loveTestInstance.showToast('결과가 클립보드에 복사되었습니다!');
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

// 페이지 로드시 이전 결과 확인
document.addEventListener('DOMContentLoaded', function() {
    const lastResult = localStorage.getItem('loveTestResult');
    const lastTestDate = localStorage.getItem('lastLoveTestDate');
    const today = new Date().toDateString();
    
    // 오늘 이미 테스트를 했다면 결과 표시 옵션 제공
    if (lastResult && lastTestDate === today) {
        const result = JSON.parse(lastResult);
        console.log('오늘 이미 연애 테스트를 완료했습니다:', result.type);
    }
});