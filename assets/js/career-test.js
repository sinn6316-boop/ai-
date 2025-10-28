// 직업 적성 테스트 클래스
class CareerTest {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.resultCalculated = false;  // 결과 계산 완료 플래그
        this.scores = {
            realistic: 0,      // 실용형 (R)
            investigative: 0,  // 탐구형 (I)
            artistic: 0,       // 예술형 (A)
            social: 0,         // 사회형 (S)
            enterprising: 0,   // 진취형 (E)
            conventional: 0    // 관습형 (C)
        };
        this.init();
    }

    init() {
        console.log('CareerTest 초기화됨');
        this.resetTest();
        this.showSection('test-intro');
        this.displayQuestion();
    }

    resetTest() {
        console.log('직업 적성 테스트 초기화');
        this.currentQuestion = 0;
        this.answers = [];
        this.resultCalculated = false;  // 결과 계산 플래그 초기화
        this.scores = {
            realistic: 0,
            investigative: 0,
            artistic: 0,
            social: 0,
            enterprising: 0,
            conventional: 0
        };
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

    // 테스트 시작
    startTest() {
        console.log('직업 적성 테스트 시작');
        this.resetTest();
        this.showSection('test-section');
        this.displayQuestion();
    }

    // 질문 표시
    displayQuestion() {
        console.log('displayQuestion 호출됨, currentQuestion:', this.currentQuestion);
        console.log('careerQuestions 배열:', careerQuestions ? '존재함' : '없음');
        console.log('careerQuestions 길이:', careerQuestions ? careerQuestions.length : '알 수 없음');
        
        // 이미 결과가 계산되었으면 더 이상 진행하지 않음
        if (this.resultCalculated) {
            console.log('결과가 이미 계산되었으므로 더 이상 진행하지 않습니다.');
            return;
        }
        
        if (this.currentQuestion >= careerQuestions.length) {
            console.log('모든 질문 완료, 결과 계산 시작');
            this.calculateResult();
            return;
        }

        const question = careerQuestions[this.currentQuestion];
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

    // 선택지 표시
    displayOptions(options) {
        const container = document.getElementById('answers-container');
        console.log('답변 컨테이너:', container);
        
        if (!container) {
            console.error('answers-container 요소를 찾을 수 없습니다');
            return;
        }
        
        container.innerHTML = '';
        
        options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'answer-option';
            optionElement.innerHTML = `
                <div class="option-content">
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
        console.log('=== 답변 선택 시작 ===');
        console.log('답변 선택됨:', index, option);
        console.log('현재 질문 번호:', this.currentQuestion);
        console.log('전체 질문 수:', careerQuestions.length);
        console.log('결과 계산 완료 여부:', this.resultCalculated);
        
        // 이미 결과가 계산되었으면 더 이상 진행하지 않음
        if (this.resultCalculated) {
            console.log('결과가 이미 계산되어 답변 선택을 무시합니다.');
            return;
        }
        
        // 이전 선택 해제
        document.querySelectorAll('.answer-option').forEach(el => {
            el.classList.remove('selected');
        });
        
        // 현재 선택 표시
        document.querySelectorAll('.answer-option')[index].classList.add('selected');
        
        // 답변 저장
        this.answers[this.currentQuestion] = option;
        
        // 점수 추가
        this.scores[option.type] += option.score || 1;
        console.log('업데이트된 점수:', this.scores);
        
        // 마지막 질문인지 확인
        if (this.currentQuestion >= careerQuestions.length - 1) {
            console.log('*** 마지막 질문입니다! 1초 후 결과 계산을 시작합니다 ***');
        }
        
        // 1초 후 다음 질문으로
        setTimeout(() => {
            console.log('setTimeout 실행됨 - 다음 질문으로 이동 중...');
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
        console.log('nextQuestion 호출됨, 새로운 currentQuestion:', this.currentQuestion);
        console.log('총 질문 수:', careerQuestions.length);
        this.displayQuestion();
    }

    // 진행바 업데이트
    updateProgress() {
        const progress = (this.currentQuestion / careerQuestions.length) * 100;
        const progressBar = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
        
        if (progressText) {
            progressText.textContent = `${this.currentQuestion}/${careerQuestions.length}`;
        }
    }

    // 결과 계산
    calculateResult() {
        console.log('=== 결과 계산 시작 ===');
        console.log('최종 점수:', this.scores);
        console.log('모든 답변:', this.answers);
        
        // 가장 높은 점수 찾기
        let maxScore = 0;
        let topType = '';
        
        for (const [type, score] of Object.entries(this.scores)) {
            console.log(`${type}: ${score}점`);
            if (score > maxScore) {
                maxScore = score;
                topType = type;
            }
        }
        
        console.log('최고 점수 유형:', topType, '점수:', maxScore);
        console.log('careerTypes 객체 확인:', typeof careerTypes, careerTypes);
        
        const careerType = careerTypes[topType];
        console.log('선택된 직업 유형 데이터:', careerType);
        
        if (careerType) {
            console.log('결과 표시 시작');
            this.displayResult(topType, careerType);
            console.log('결과 섹션으로 이동');
            this.showSection('result-section');
        } else {
            console.error('직업 유형 데이터를 찾을 수 없습니다:', topType);
        }
        
        // 무한 루프 방지: 결과 계산 완료 플래그 설정
        this.resultCalculated = true;
    }

    // 결과 표시
    displayResult(typeCode, careerType) {
        console.log('직업 적성 결과 표시 시작:', typeCode, careerType);
        
        // 기본 결과 정보
        const careerTypeElement = document.getElementById('result-career-type');
        const titleElement = document.getElementById('result-type');
        const descriptionElement = document.getElementById('result-description');
        const iconElement = document.getElementById('result-icon');
        
        console.log('직업 유형 요소:', careerTypeElement);
        console.log('제목 요소:', titleElement);
        console.log('설명 요소:', descriptionElement);
        console.log('아이콘 요소:', iconElement);
        
        if (careerTypeElement) {
            careerTypeElement.textContent = typeCode.toUpperCase();
        }
        
        if (titleElement) {
            titleElement.textContent = careerType.title;
        }
        
        if (descriptionElement) {
            descriptionElement.textContent = careerType.description;
        }
        
        if (iconElement) {
            iconElement.innerHTML = `<i class="${careerType.icon}"></i>`;
        }
        
        // 적합한 직업 표시
        this.displaySuitableJobs(careerType);
        
        // 특성 점수 표시
        this.displayCharacteristics(careerType);
        
        // 조언 표시
        this.displayAdvice(careerType);
    }

    // 적합한 직업 표시
    displaySuitableJobs(careerType) {
        const container = document.getElementById('jobs-grid');
        if (!container) {
            console.error('jobs-grid 요소를 찾을 수 없습니다');
            return;
        }
        
        console.log('직업 목록 표시 시작:', careerType.jobs);
        container.innerHTML = '';
        
        if (careerType.jobs && careerType.jobs.length > 0) {
            careerType.jobs.forEach(job => {
                const jobElement = document.createElement('div');
                jobElement.className = 'job-item';
                jobElement.innerHTML = `
                    <div class="job-content">
                        <i class="fas fa-briefcase"></i>
                        <span>${job}</span>
                    </div>
                `;
                container.appendChild(jobElement);
            });
        } else {
            container.innerHTML = '<p>직업 정보를 불러올 수 없습니다.</p>';
        }
        
        console.log('직업 목록 표시 완료');
    }

    // 특성 표시
    displayCharacteristics(careerType) {
        // characteristics-list 요소가 HTML에 없으므로 result-stats를 사용
        const container = document.getElementById('result-stats');
        if (!container) {
            console.error('result-stats 요소를 찾을 수 없습니다');
            return;
        }
        
        console.log('특성 표시 시작');
        container.innerHTML = '';
        
        if (careerType.characteristics && careerType.characteristics.length > 0) {
            careerType.characteristics.forEach(characteristic => {
                const charElement = document.createElement('div');
                charElement.className = 'stat-item';
                charElement.innerHTML = `
                    <div class="stat-content">
                        <i class="fas fa-check"></i>
                        <span>${characteristic}</span>
                    </div>
                `;
                container.appendChild(charElement);
            });
        }
        
        console.log('특성 표시 완료');
    }

    // 조언 표시
    displayAdvice(careerType) {
        const adviceElement = document.getElementById('career-advice-text');
        if (!adviceElement) {
            console.error('career-advice-text 요소를 찾을 수 없습니다');
            return;
        }
        
        if (careerType.advice) {
            adviceElement.textContent = careerType.advice;
        } else {
            adviceElement.textContent = '당신의 직업 적성에 맞는 커리어를 개발해보세요.';
        }
        
        console.log('조언 표시 완료');
    }

    // 결과 저장
    saveResult(typeCode, careerType) {
        const result = {
            type: 'career',
            code: typeCode,
            title: careerType.title,
            date: new Date().toISOString(),
            scores: this.scores
        };
        
        localStorage.setItem('careerTestResult', JSON.stringify(result));
        console.log('결과 저장됨:', result);
    }
}

// 전역 함수들
function restartCareerTest() {
    if (window.careerTestInstance) {
        window.careerTestInstance.resetTest();
        window.careerTestInstance.showSection('test-intro');
    }
}

function goHome() {
    window.location.href = 'index.html';
}

// 결과 공유 함수들
function shareKakao() {
    // 카카오톡 공유 기능 (실제 구현 시 카카오 SDK 필요)
    alert('카카오톡 공유 기능은 준비 중입니다.');
}

function shareFacebook() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('직업 적성 테스트 결과를 확인해보세요!');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
}

function shareTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('직업 적성 테스트 결과를 확인해보세요!');
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
    const resultCards = document.querySelectorAll('.result-card, .advice-card, .job-item, .characteristic-item');
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