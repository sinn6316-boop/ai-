// 스트레스 진단 테스트 클래스
class StressTest {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.resultCalculated = false;  // 결과 계산 완료 플래그
        this.totalScore = 0;
        this.categoryScores = {
            physical: 0,    // 신체적 스트레스
            emotional: 0,   // 정서적 스트레스
            cognitive: 0,   // 인지적 스트레스
            behavioral: 0   // 행동적 스트레스
        };
        this.init();
    }

    init() {
        console.log('StressTest 초기화됨');
        this.resetTest();
        this.showSection('test-intro');
        this.displayQuestion();
    }

    resetTest() {
        console.log('스트레스 진단 테스트 초기화');
        this.currentQuestion = 0;
        this.answers = [];
        this.resultCalculated = false;  // 결과 계산 플래그 초기화
        this.totalScore = 0;
        this.categoryScores = {
            physical: 0,
            emotional: 0,
            cognitive: 0,
            behavioral: 0
        };
        console.log('테스트 초기화 완료:', {
            currentQuestion: this.currentQuestion,
            answersLength: this.answers.length,
            totalScore: this.totalScore
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

    // 테스트 시작
    startTest() {
        console.log('스트레스 진단 테스트 시작');
        this.resetTest();
        this.showSection('test-section');
        this.displayQuestion();
    }

    // 질문 표시
    displayQuestion() {
        console.log('displayQuestion 호출됨, currentQuestion:', this.currentQuestion);
        console.log('stressQuestions 배열:', stressQuestions ? '존재함' : '없음');
        console.log('stressQuestions 길이:', stressQuestions ? stressQuestions.length : '알 수 없음');
        
        // 이미 결과가 계산되었으면 더 이상 진행하지 않음
        if (this.resultCalculated) {
            console.log('결과가 이미 계산되었으므로 더 이상 진행하지 않습니다.');
            return;
        }
        
        if (this.currentQuestion >= stressQuestions.length) {
            console.log('모든 질문 완료, 결과 계산 시작');
            this.calculateResult();
            return;
        }

        const question = stressQuestions[this.currentQuestion];
        console.log('현재 질문:', question);
        
        // 진행바 업데이트
        this.updateProgress();
        
        // 질문 내용 업데이트
        document.getElementById('question-number').textContent = `Q${this.currentQuestion + 1}`;
        document.getElementById('question-title').textContent = question.question;
        document.getElementById('question-image').innerHTML = `<i class="${question.icon}"></i>`;
        
        // 선택지 생성
        this.displayOptions(question.options);
    }

    // 선택지 표시 (리커트 척도)
    displayOptions(options) {
        const container = document.getElementById('answers-container');
        if (!container) {
            console.error('answers-container 요소를 찾을 수 없습니다');
            return;
        }
        
        container.innerHTML = '';
        
        options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'answer-option stress-option';
            optionElement.innerHTML = `
                <div class="option-content">
                    <div class="option-score">${option.score}</div>
                    <span class="option-text">${option.text}</span>
                </div>
            `;
            
            optionElement.addEventListener('click', () => {
                this.selectAnswer(index, option);
            });
            
            container.appendChild(optionElement);
        });
    }

    // 답변 선택
    selectAnswer(index, option) {
        console.log('스트레스 테스트 답변 선택됨:', index, option);
        console.log('현재 질문 번호:', this.currentQuestion);
        
        // 이전 선택 해제
        document.querySelectorAll('.answer-option').forEach(el => {
            el.classList.remove('selected');
        });
        
        // 현재 선택 표시
        document.querySelectorAll('.answer-option')[index].classList.add('selected');
        
        // 답변 저장
        this.answers[this.currentQuestion] = option;
        
        // 점수 추가
        this.totalScore += option.score;
        
        const question = stressQuestions[this.currentQuestion];
        if (question.category && this.categoryScores.hasOwnProperty(question.category)) {
            this.categoryScores[question.category] += option.score;
        }
        
        console.log('업데이트된 총점:', this.totalScore);
        console.log('카테고리별 점수:', this.categoryScores);
        
        // 1초 후 다음 질문으로
        setTimeout(() => {
            console.log('스트레스 테스트 다음 질문으로 이동 중...');
            this.nextQuestion();
        }, 1000);
    }

    // 다음 질문
    nextQuestion() {
        // 이미 결과가 계산되었으면 더 이상 진행하지 않음
        if (this.resultCalculated) {
            console.log('결과가 이미 계산되어 nextQuestion을 중단합니다.');
            return;
        }
        
        this.currentQuestion++;
        console.log('스트레스 테스트 nextQuestion 호출됨, 새로운 currentQuestion:', this.currentQuestion);
        console.log('총 질문 수:', stressQuestions.length);
        this.displayQuestion();
    }

    // 진행바 업데이트
    updateProgress() {
        const progress = (this.currentQuestion / stressQuestions.length) * 100;
        const progressBar = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
        
        if (progressText) {
            progressText.textContent = `${this.currentQuestion}/${stressQuestions.length}`;
        }
    }

    // 결과 계산
    calculateResult() {
        console.log('=== 스트레스 테스트 결과 계산 시작 ===');
        console.log('총 점수:', this.totalScore);
        console.log('카테고리별 점수:', this.categoryScores);
        
        // 스트레스 수준 결정
        let stressLevel = '';
        if (this.totalScore <= 30) {
            stressLevel = 'low';
        } else if (this.totalScore <= 60) {
            stressLevel = 'moderate';
        } else if (this.totalScore <= 90) {
            stressLevel = 'high';
        } else {
            stressLevel = 'severe';
        }
        
        console.log('결정된 스트레스 수준:', stressLevel);
        console.log('stressLevels 객체 확인:', typeof stressLevels, stressLevels);
        
        const stressResult = stressLevels[stressLevel];
        console.log('선택된 스트레스 레벨 데이터:', stressResult);
        
        if (stressResult) {
            console.log('스트레스 결과 표시 시작');
            this.displayResult(stressLevel, stressResult);
            console.log('스트레스 결과 섹션으로 이동');
            this.showSection('result-section');
        } else {
            console.error('스트레스 레벨 데이터를 찾을 수 없습니다:', stressLevel);
        }
        
        // 무한 루프 방지: 결과 계산 완료 플래그 설정
        this.resultCalculated = true;
    }

    // 결과 표시
    displayResult(levelCode, stressResult) {
        console.log('결과 표시 시작:', levelCode, stressResult);
        
        // 기본 결과 정보
        const stressLevelElement = document.getElementById('result-stress-level');
        const typeElement = document.getElementById('result-type');
        const descriptionElement = document.getElementById('result-description');
        
        console.log('스트레스 레벨 요소:', stressLevelElement);
        console.log('타입 요소:', typeElement);
        console.log('설명 요소:', descriptionElement);
        
        if (stressLevelElement) {
            stressLevelElement.textContent = stressResult.title;
        }
        
        if (typeElement) {
            typeElement.textContent = `총 ${this.totalScore}점`;
        }
        
        if (descriptionElement) {
            descriptionElement.textContent = stressResult.description;
        }
        
        // 결과 아이콘과 색상
        const resultIcon = document.getElementById('result-icon');
        console.log('결과 아이콘 요소:', resultIcon);
        
        if (resultIcon) {
            resultIcon.innerHTML = `<i class="${stressResult.icon}"></i>`;
            resultIcon.style.color = stressResult.color;
        }
        
        // 스트레스 수준 바 표시
        this.displayStressBar();
        
        // 카테고리별 분석
        this.displayCategoryAnalysis();
        
        // 대처 방법 표시
        this.displayCopingStrategies(stressResult);
        
        // 추천 활동 표시
        this.displayRecommendations(stressResult);
        
        // 결과 저장
        this.saveResult(levelCode, stressResult);
    }

    // 스트레스 수준 바 표시
    displayStressBar() {
        const maxScore = stressQuestions.length * 5; // 최대 점수
        const percentage = (this.totalScore / maxScore) * 100;
        
        const stressBar = document.getElementById('stress-level-bar');
        const stressPercentage = document.getElementById('stress-percentage');
        
        if (stressBar) {
            stressBar.style.width = `${percentage}%`;
            
            // 색상 변경
            if (percentage <= 25) {
                stressBar.style.backgroundColor = '#4CAF50'; // 녹색
            } else if (percentage <= 50) {
                stressBar.style.backgroundColor = '#FFC107'; // 노란색
            } else if (percentage <= 75) {
                stressBar.style.backgroundColor = '#FF9800'; // 주황색
            } else {
                stressBar.style.backgroundColor = '#F44336'; // 빨간색
            }
        }
        
        if (stressPercentage) {
            stressPercentage.textContent = `${Math.round(percentage)}%`;
        }
    }

    // 카테고리별 분석 표시
    displayCategoryAnalysis() {
        const container = document.getElementById('result-stats');
        if (!container) {
            console.error('result-stats 요소를 찾을 수 없습니다');
            return;
        }
        
        console.log('카테고리 분석 표시 시작');
        container.innerHTML = '';
        
        const categories = {
            physical: { name: '신체적 스트레스', icon: 'fas fa-heartbeat' },
            emotional: { name: '정서적 스트레스', icon: 'fas fa-heart' },
            cognitive: { name: '인지적 스트레스', icon: 'fas fa-brain' },
            behavioral: { name: '행동적 스트레스', icon: 'fas fa-running' }
        };
        
        Object.entries(this.categoryScores).forEach(([category, score]) => {
            const categoryInfo = categories[category];
            if (!categoryInfo) return;
            
            const maxCategoryScore = 25; // 각 카테고리당 대략 5문항 * 5점
            const percentage = Math.min((score / maxCategoryScore) * 100, 100);
            
            const categoryElement = document.createElement('div');
            categoryElement.className = 'category-item';
            categoryElement.innerHTML = `
                <div class="category-header">
                    <i class="${categoryInfo.icon}"></i>
                    <span class="category-name">${categoryInfo.name}</span>
                    <span class="category-score">${score}점</span>
                </div>
                <div class="category-bar">
                    <div class="category-fill" style="width: ${percentage}%"></div>
                </div>
            `;
            container.appendChild(categoryElement);
        });
        
        console.log('카테고리 분석 표시 완료');
    }

    // 대처 방법 표시
    displayCopingStrategies(stressResult) {
        const container = document.getElementById('relief-methods');
        if (!container) {
            console.error('relief-methods 요소를 찾을 수 없습니다');
            return;
        }
        
        console.log('대처 방법 표시 시작');
        container.innerHTML = '';
        
        if (stressResult.copingStrategies && stressResult.copingStrategies.length > 0) {
            stressResult.copingStrategies.forEach(strategy => {
                const strategyElement = document.createElement('div');
                strategyElement.className = 'relief-item';
                strategyElement.innerHTML = `
                    <div class="relief-content">
                        <i class="fas fa-lightbulb"></i>
                        <span>${strategy}</span>
                    </div>
                `;
                container.appendChild(strategyElement);
            });
        } else {
            container.innerHTML = '<p>스트레스 해소법 정보를 불러올 수 없습니다.</p>';
        }
        
        console.log('대처 방법 표시 완료');
    }

    // 추천 활동 표시
    displayRecommendations(stressResult) {
        const container = document.getElementById('tips-grid');
        if (!container) {
            console.error('tips-grid 요소를 찾을 수 없습니다');
            return;
        }
        
        console.log('추천 활동 표시 시작');
        container.innerHTML = '';
        
        if (stressResult.recommendations && stressResult.recommendations.length > 0) {
            stressResult.recommendations.forEach(recommendation => {
                const recElement = document.createElement('div');
                recElement.className = 'tip-item';
                recElement.innerHTML = `
                    <div class="tip-content">
                        <i class="fas fa-star"></i>
                        <span>${recommendation}</span>
                    </div>
                `;
                container.appendChild(recElement);
            });
        } else {
            container.innerHTML = '<p>추천 활동 정보를 불러올 수 없습니다.</p>';
        }
        
        console.log('추천 활동 표시 완료');
    }

    // 결과 저장
    saveResult(levelCode, stressResult) {
        const result = {
            id: levelCode,
            name: stressResult.title,
            type: 'stress',
            level: levelCode,
            title: stressResult.title,
            description: stressResult.description,
            score: this.totalScore,
            date: new Date().toISOString(),
            categoryScores: this.categoryScores
        };
        
        // 카카오톡 공유용 키로도 저장
        localStorage.setItem('stressResult', JSON.stringify(result));
        // 기존 키로도 저장
        localStorage.setItem('stressTestResult', JSON.stringify(result));
        console.log('결과 저장됨:', result);
    }

    // 테스트 다시하기
    restartTest() {
        this.currentQuestion = 0;
        this.answers = [];
        this.totalScore = 0;
        this.categoryScores = {
            physical: 0,
            psychological: 0,
            social: 0,
            behavioral: 0
        };
        
        // UI 초기화
        document.getElementById('test-intro').style.display = 'block';
        document.getElementById('test-section').style.display = 'none';
        document.getElementById('result-section').style.display = 'none';
        
        console.log('스트레스 테스트가 초기화되었습니다');
    }
}

// 전역 함수들
function restartStressTest() {
    if (window.stressTestInstance) {
        window.stressTestInstance.resetTest();
        window.stressTestInstance.showSection('test-intro');
    }
}

function goHome() {
    window.location.href = 'index.html';
}

// 결과 공유 함수들
function shareKakao() {
    alert('카카오톡 공유 기능은 준비 중입니다.');
}

function shareFacebook() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('스트레스 진단 테스트 결과를 확인해보세요!');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
}

function shareTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('스트레스 진단 테스트 결과를 확인해보세요!');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('링크가 복사되었습니다!');
    }).catch(() => {
        alert('링크 복사에 실패했습니다.');
    });
}

// 화면 로드 시 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    // 결과 카드 애니메이션
    const resultCards = document.querySelectorAll('.result-card, .category-item, .strategy-item, .recommendation-item');
    resultCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});