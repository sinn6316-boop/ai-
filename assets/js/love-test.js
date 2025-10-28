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
        console.log('연애 스타일 테스트 시작');
        
        // 필요한 데이터가 로드되었는지 확인
        if (typeof loveQuestions === 'undefined' || !loveQuestions.length) {
            console.error('loveQuestions가 로드되지 않았습니다.');
            alert('테스트 데이터를 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
            return;
        }
        
        if (typeof loveTypes === 'undefined') {
            console.error('loveTypes가 로드되지 않았습니다.');
            alert('테스트 데이터를 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
            return;
        }
        
        console.log('데이터 확인 완료:', {
            questionsCount: loveQuestions.length,
            typesCount: Object.keys(loveTypes).length
        });
        
        this.resetTest();
        this.showSection('test-section');
        this.displayQuestion();
    }

    // 테스트 초기화
    resetTest() {
        console.log('테스트 초기화');
        this.currentQuestion = 0;
        this.answers = [];
        this.scores = { R: 0, P: 0, A: 0, C: 0, I: 0, D: 0, E: 0, L: 0 };
        console.log('초기화된 점수:', this.scores);
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
        
        console.log('답변 선택:', {
            questionId: question.id,
            optionIndex: optionIndex,
            selectedOption: selectedOption
        });
        
        // 답변 저장
        this.answers.push({
            questionId: question.id,
            answer: selectedOption,
            optionIndex: optionIndex
        });

        // 점수 계산 (안전하게)
        if (selectedOption && selectedOption.type && typeof selectedOption.score === 'number') {
            if (this.scores.hasOwnProperty(selectedOption.type)) {
                this.scores[selectedOption.type] += selectedOption.score;
                console.log('점수 업데이트:', selectedOption.type, '+', selectedOption.score, '=', this.scores[selectedOption.type]);
            } else {
                console.error('유효하지 않은 점수 타입:', selectedOption.type);
            }
        } else {
            console.error('유효하지 않은 선택 옵션:', selectedOption);
        }

        console.log('현재 총 점수:', this.scores);

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
        console.log('결과 계산 시작');
        console.log('현재 점수:', this.scores);
        console.log('답변 개수:', this.answers.length);
        
        this.showLoading();

        setTimeout(() => {
            try {
                // loveTypes가 로드되었는지 확인
                if (typeof loveTypes === 'undefined') {
                    console.error('loveTypes가 정의되지 않았습니다.');
                    throw new Error('loveTypes 데이터가 로드되지 않았습니다.');
                }
                
                console.log('사용 가능한 loveTypes:', Object.keys(loveTypes));
                
                const loveType = this.determineLoveType();
                console.log('계산된 연애 유형:', loveType);
                
                const loveStyle = loveTypes[loveType];
                if (!loveStyle) {
                    console.error('연애 유형 데이터를 찾을 수 없습니다:', loveType);
                    console.error('사용 가능한 유형들:', Object.keys(loveTypes));
                    throw new Error(`연애 유형 "${loveType}" 데이터가 존재하지 않습니다.`);
                }
                
                console.log('연애 스타일 데이터:', loveStyle);
                
                this.displayResult(loveType, loveStyle);
                this.hideLoading();
                this.showSection('result-section');
                
                console.log('결과 계산 및 표시 완료');
            } catch (error) {
                console.error('결과 계산 중 상세 오류:', error);
                console.error('오류 스택:', error.stack);
                this.hideLoading();
                
                // 오류 발생 시 기본 결과 표시
                const resultSection = document.getElementById('result-section');
                if (resultSection) {
                    resultSection.innerHTML = `
                        <div class="result-container" style="text-align: center; padding: 40px;">
                            <h2>결과 계산 중 오류가 발생했습니다</h2>
                            <p>오류 내용: ${error.message}</p>
                            <p>잠시 후 다시 시도해주세요.</p>
                            <button onclick="restartTest()" class="restart-btn" style="margin-top: 20px;">
                                <i class="fas fa-redo"></i> 다시 테스트하기
                            </button>
                            <button onclick="location.reload()" class="restart-btn" style="margin-top: 10px;">
                                <i class="fas fa-refresh"></i> 페이지 새로고침
                            </button>
                        </div>
                    `;
                    this.showSection('result-section');
                }
            }
        }, 2000);
    }

    // 연애 유형 결정
    determineLoveType() {
        console.log('유형 결정 시작, 현재 점수:', this.scores);
        
        let type = '';
        
        // R vs P (로맨틱 vs 현실적)
        const rp = this.scores.R >= this.scores.P ? 'R' : 'P';
        type += rp;
        console.log('R vs P:', this.scores.R, 'vs', this.scores.P, '=', rp);
        
        // A vs C (적극적 vs 소극적)
        const ac = this.scores.A >= this.scores.C ? 'A' : 'C';
        type += ac;
        console.log('A vs C:', this.scores.A, 'vs', this.scores.C, '=', ac);
        
        // I vs D (독립적 vs 의존적)
        const id = this.scores.I >= this.scores.D ? 'I' : 'D';
        type += id;
        console.log('I vs D:', this.scores.I, 'vs', this.scores.D, '=', id);
        
        // E vs L (감정적 vs 논리적)
        const el = this.scores.E >= this.scores.L ? 'E' : 'L';
        type += el;
        console.log('E vs L:', this.scores.E, 'vs', this.scores.L, '=', el);
        
        console.log('최종 유형:', type);
        return type;
    }

    // 결과 표시
    displayResult(loveType, loveStyle) {
        console.log('결과 표시 시작:', { loveType, loveStyle });
        
        try {
            // 기본 결과 정보
            const typeCodeElement = document.getElementById('result-type-code');
            const typeElement = document.getElementById('result-type');
            const descriptionElement = document.getElementById('result-description');
            const iconElement = document.getElementById('result-icon');

            if (typeCodeElement) typeCodeElement.textContent = loveType;
            if (typeElement) typeElement.textContent = loveStyle.name;
            if (descriptionElement) descriptionElement.textContent = loveStyle.description;
            if (iconElement) iconElement.innerHTML = `<i class="${loveStyle.icon}"></i>`;

            // 연애 성향 점수 표시
            this.displayLoveStats();
            
            // 유형 설명 표시 (새로 추가)
            this.displayTypeExplanation(loveType);
            
            // 이상형 분석
            this.displayIdealType(loveStyle);
            
            // 연애 조언
            this.displayLoveAdvice(loveStyle);
            
            // 궁합 좋은 유형들
            this.displayCompatibleTypes(loveType);
            
            // 결과 저장
            this.saveResult(loveType, loveStyle);
            
            console.log('결과 표시 완료');
        } catch (error) {
            console.error('결과 표시 중 오류:', error);
            // 오류 발생 시 기본 메시지 표시
            const resultSection = document.getElementById('result-section');
            if (resultSection) {
                resultSection.innerHTML = `
                    <div class="result-container">
                        <div class="result-main">
                            <div class="result-card">
                                <h2>결과를 불러오는 중 오류가 발생했습니다</h2>
                                <p>페이지를 새로고침하고 다시 시도해주세요.</p>
                                <button onclick="location.reload()" class="restart-btn">
                                    <i class="fas fa-redo"></i> 새로고침
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }
        }
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

    // 유형 설명 표시 (새로 추가)
    displayTypeExplanation(loveType) {
        // 유형 설명 섹션이 없다면 생성
        let explanationSection = document.querySelector('.type-explanation');
        if (!explanationSection) {
            explanationSection = document.createElement('div');
            explanationSection.className = 'type-explanation';
            explanationSection.innerHTML = `
                <h3><i class="fas fa-info-circle"></i> 내 유형 코드 해석</h3>
                <div class="type-breakdown" id="type-breakdown"></div>
            `;
            
            // 결과 카드 다음에 삽입
            const resultMain = document.querySelector('.result-main');
            if (resultMain) {
                resultMain.appendChild(explanationSection);
            }
        }

        const breakdownContainer = document.getElementById('type-breakdown');
        if (!breakdownContainer) return;

        // 각 알파벳의 의미 정의
        const typeExplanations = {
            'R': { full: '로맨틱', desc: '감정과 낭만을 중시하는 성향', icon: 'fas fa-heart', color: '#FF69B4' },
            'P': { full: '현실적', desc: '실용성과 현실을 중시하는 성향', icon: 'fas fa-calculator', color: '#20B2AA' },
            'A': { full: '적극적', desc: '주도적이고 능동적인 성향', icon: 'fas fa-bolt', color: '#FF6347' },
            'C': { full: '신중한', desc: '조심스럽고 신중한 성향', icon: 'fas fa-shield-alt', color: '#32CD32' },
            'I': { full: '독립적', desc: '자유롭고 독립적인 성향', icon: 'fas fa-user-tie', color: '#4169E1' },
            'D': { full: '의존적', desc: '함께하고 의지하고 싶은 성향', icon: 'fas fa-users', color: '#FF1493' },
            'E': { full: '감정적', desc: '감정과 직감을 중시하는 성향', icon: 'fas fa-smile-beam', color: '#FFD700' },
            'L': { full: '논리적', desc: '이성과 논리를 중시하는 성향', icon: 'fas fa-brain', color: '#9370DB' }
        };

        // 유형 코드를 개별 문자로 분해하여 설명 생성
        const breakdown = loveType.split('').map((char, index) => {
            const explanation = typeExplanations[char];
            const dimensions = ['연애 스타일', '행동 성향', '관계 스타일', '의사결정'];
            
            return `
                <div class="type-item">
                    <div class="type-letter" style="background-color: ${explanation.color}20; border-color: ${explanation.color};">
                        <i class="${explanation.icon}" style="color: ${explanation.color};"></i>
                        <span class="letter">${char}</span>
                    </div>
                    <div class="type-detail">
                        <h4>${explanation.full}</h4>
                        <p class="dimension">${dimensions[index]}</p>
                        <p class="description">${explanation.desc}</p>
                    </div>
                </div>
            `;
        }).join('');

        breakdownContainer.innerHTML = breakdown;
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