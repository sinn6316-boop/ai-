// 리더십 유형 테스트 클래스
class LeadershipTest {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.resultCalculated = false;  // 결과 계산 완료 플래그
        this.scores = {
            authoritative: 0,    // 권위적 리더십
            democratic: 0,       // 민주적 리더십
            transformational: 0, // 변혁적 리더십
            servant: 0,          // 서번트 리더십
            situational: 0,      // 상황적 리더십
            coaching: 0          // 코칭 리더십
        };
        this.init();
    }

    init() {
        console.log('LeadershipTest 초기화됨');
        this.resetTest();
        this.showSection('test-intro');
        this.displayQuestion();
    }

    resetTest() {
        console.log('리더십 유형 테스트 초기화');
        this.currentQuestion = 0;
        this.answers = [];
        this.resultCalculated = false;  // 결과 계산 플래그 초기화
        this.scores = {
            authoritative: 0,
            democratic: 0,
            transformational: 0,
            servant: 0,
            situational: 0,
            coaching: 0
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
        console.log('리더십 유형 테스트 시작');
        this.resetTest();
        this.showSection('test-section');
        this.displayQuestion();
    }

    // 질문 표시
    displayQuestion() {
        console.log('displayQuestion 호출됨, currentQuestion:', this.currentQuestion);
        console.log('leadershipQuestions 배열:', leadershipQuestions ? '존재함' : '없음');
        console.log('leadershipQuestions 길이:', leadershipQuestions ? leadershipQuestions.length : '알 수 없음');
        console.log('resultCalculated 상태:', this.resultCalculated);
        
        // 이미 결과가 계산되었으면 더 이상 진행하지 않음
        if (this.resultCalculated) {
            console.log('결과가 이미 계산되었으므로 더 이상 진행하지 않습니다.');
            return;
        }
        
        // 질문 범위 체크를 더 엄격하게
        if (this.currentQuestion >= leadershipQuestions.length) {
            console.log('모든 질문 완료, 결과 계산 시작');
            console.log('currentQuestion:', this.currentQuestion, 'leadershipQuestions.length:', leadershipQuestions.length);
            
            // 결과 계산 후에 플래그 설정하도록 변경
            this.calculateResult();
            return;
        }

        const question = leadershipQuestions[this.currentQuestion];
        if (!question) {
            console.error('질문을 찾을 수 없습니다. currentQuestion:', this.currentQuestion);
            return;
        }
        
        console.log('현재 질문:', question);
        
        // 진행바 업데이트
        this.updateProgress();
        
        // 질문 내용 업데이트
        const questionNumberElement = document.getElementById('question-number');
        const questionTitleElement = document.getElementById('question-title');
        const questionImageElement = document.getElementById('question-image');
        
        if (questionNumberElement) {
            questionNumberElement.textContent = `Q${this.currentQuestion + 1}`;
        }
        
        if (questionTitleElement) {
            questionTitleElement.textContent = question.question;
        }
        
        if (questionImageElement) {
            questionImageElement.innerHTML = `<i class="${question.icon}"></i>`;
        }
        
        // 선택지 생성
        this.displayOptions(question.options);
    }

    // 선택지 표시
    displayOptions(options) {
        const container = document.getElementById('answers-container');
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
        console.log('=== 리더십 테스트 답변 선택 시작 ===');
        console.log('선택된 답변:', index, option);
        console.log('현재 질문 번호:', this.currentQuestion);
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
        if (this.currentQuestion >= leadershipQuestions.length - 1) {
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
        console.log('nextQuestion: currentQuestion을', this.currentQuestion, '로 증가');
        this.displayQuestion();
    }

    // 진행바 업데이트
    updateProgress() {
        const progress = (this.currentQuestion / leadershipQuestions.length) * 100;
        const progressBar = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
        
        if (progressText) {
            progressText.textContent = `${this.currentQuestion}/${leadershipQuestions.length}`;
        }
    }

    // 결과 계산
    calculateResult() {
        console.log('=== 리더십 테스트 결과 계산 시작 ===');
        console.log('최종 점수:', this.scores);
        console.log('모든 답변:', this.answers);
        
        // 결과 계산 시작 시 플래그 설정 (중복 방지)
        this.resultCalculated = true;
        console.log('resultCalculated를 true로 설정함');
        
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
        console.log('leadershipTypes 객체 확인:', typeof leadershipTypes, leadershipTypes);
        
        const leadershipType = leadershipTypes[topType];
        console.log('선택된 리더십 유형 데이터:', leadershipType);
        
        if (leadershipType) {
            console.log('리더십 결과 표시 시작');
            this.displayResult(topType, leadershipType);
            console.log('리더십 결과 섹션으로 이동');
            this.showSection('result-section');
        } else {
            console.error('리더십 유형 데이터를 찾을 수 없습니다:', topType);
        }
        
        console.log('=== 리더십 테스트 결과 계산 완료 ===');
    }

    // 결과 표시
    displayResult(typeCode, leadershipType) {
        console.log('리더십 테스트 결과 표시 시작:', typeCode, leadershipType);
        
        // 기본 결과 정보 표시
        const leadershipTypeElement = document.getElementById('result-leadership-type');
        const titleElement = document.getElementById('result-type');
        const descriptionElement = document.getElementById('result-description');
        const iconElement = document.getElementById('result-icon');
        
        console.log('요소 확인:');
        console.log('- result-leadership-type:', leadershipTypeElement ? '있음' : '없음');
        console.log('- result-type:', titleElement ? '있음' : '없음');
        console.log('- result-description:', descriptionElement ? '있음' : '없음');
        console.log('- result-icon:', iconElement ? '있음' : '없음');
        
        if (leadershipTypeElement) {
            leadershipTypeElement.textContent = leadershipType.title;
        }
        
        if (titleElement) {
            titleElement.textContent = leadershipType.subtitle || '리더십 유형 결과';
        }
        
        if (descriptionElement) {
            descriptionElement.textContent = leadershipType.description;
        }
        
        if (iconElement) {
            iconElement.innerHTML = `<i class="fas fa-crown"></i>`;
        }
        
        // 리더십 강점 표시
        this.displayLeadershipStrengths(leadershipType);
        
        // 발전 방향 표시
        this.displayDevelopmentTips(leadershipType);
        
        // 오늘의 리더십 팁 표시
        this.displayLeadershipAdvice(leadershipType);
        
        console.log('기본 결과 정보 표시 완료');
        
        // 결과 저장
        this.saveResult(typeCode, leadershipType);
        
        console.log('결과 저장 완료');
    }

    // 리더십 특성 표시
    displayLeadershipTraits(leadershipType) {
        const container = document.getElementById('leadership-traits');
        if (!container) {
            console.error('leadership-traits 요소를 찾을 수 없습니다');
            return;
        }
        
        container.innerHTML = '';
        
        if (leadershipType.traits && leadershipType.traits.length > 0) {
            leadershipType.traits.forEach(trait => {
                const traitElement = document.createElement('div');
                traitElement.className = 'trait-item';
                traitElement.innerHTML = `
                    <i class="fas fa-star"></i>
                    <span>${trait}</span>
                `;
                container.appendChild(traitElement);
            });
        }
    }

    // 강점과 약점 표시
    displayStrengthsWeaknesses(leadershipType) {
        // 강점 표시
        const strengthsContainer = document.getElementById('strengths-list');
        if (strengthsContainer) {
            strengthsContainer.innerHTML = '';
            
            leadershipType.strengths.forEach(strength => {
                const strengthElement = document.createElement('div');
                strengthElement.className = 'strength-item';
                strengthElement.innerHTML = `
                    <i class="fas fa-plus-circle"></i>
                    <span>${strength}</span>
                `;
                strengthsContainer.appendChild(strengthElement);
            });
        }
        
        // 약점 표시
        const weaknessesContainer = document.getElementById('weaknesses-list');
        if (weaknessesContainer) {
            weaknessesContainer.innerHTML = '';
            
            leadershipType.weaknesses.forEach(weakness => {
                const weaknessElement = document.createElement('div');
                weaknessElement.className = 'weakness-item';
                weaknessElement.innerHTML = `
                    <i class="fas fa-minus-circle"></i>
                    <span>${weakness}</span>
                `;
                weaknessesContainer.appendChild(weaknessElement);
            });
        }
    }

    // 리더십 강점 표시 (HTML의 strengths-grid에 맞춤)
    displayLeadershipStrengths(leadershipType) {
        const container = document.getElementById('strengths-grid');
        if (!container) {
            console.error('strengths-grid 요소를 찾을 수 없습니다');
            return;
        }
        
        container.innerHTML = '';
        
        if (leadershipType.strengths && leadershipType.strengths.length > 0) {
            // 6개 카드로 표시 (부족하면 일반적인 강점으로 채움)
            const strengthsToShow = [...leadershipType.strengths];
            
            // 6개가 안 되면 일반적인 강점으로 채움
            const commonStrengths = [
                "효과적인 커뮤니케이션",
                "팀워크 증진 능력",
                "책임감 있는 리더십",
                "지속적인 자기계발",
                "긍정적인 조직 문화 조성",
                "목표 지향적 사고"
            ];
            
            while (strengthsToShow.length < 6) {
                const additionalStrength = commonStrengths[strengthsToShow.length - leadershipType.strengths.length];
                if (additionalStrength) {
                    strengthsToShow.push(additionalStrength);
                }
            }
            
            strengthsToShow.slice(0, 6).forEach((strength, index) => {
                const strengthElement = document.createElement('div');
                strengthElement.className = 'strength-card';
                strengthElement.innerHTML = `
                    <div class="strength-icon">
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="strength-content">
                        <h4 class="strength-title">핵심 강점 ${index + 1}</h4>
                        <p class="strength-text">${strength}</p>
                    </div>
                `;
                container.appendChild(strengthElement);
            });
        } else {
            container.innerHTML = '<div class="no-data">강점 정보를 준비 중입니다.</div>';
        }
        
        console.log('리더십 강점 표시 완료');
    }

    // 개발 방향 표시 (HTML의 development-tips에 맞춤)
    displayDevelopmentTips(leadershipType) {
        const container = document.getElementById('development-tips');
        if (!container) {
            console.error('development-tips 요소를 찾을 수 없습니다');
            return;
        }
        
        container.innerHTML = '';
        
        if (leadershipType.developmentTips && leadershipType.developmentTips.length > 0) {
            leadershipType.developmentTips.forEach((tip, index) => {
                const tipElement = document.createElement('div');
                tipElement.className = 'development-card';
                tipElement.innerHTML = `
                    <div class="development-number">
                        <span>${index + 1}</span>
                    </div>
                    <div class="development-content">
                        <div class="development-icon">
                            <i class="fas fa-lightbulb"></i>
                        </div>
                        <p class="development-text">${tip}</p>
                    </div>
                `;
                container.appendChild(tipElement);
            });
        } else {
            container.innerHTML = '<div class="no-data">발전 방향 정보를 준비 중입니다.</div>';
        }
        
        console.log('발전 방향 표시 완료');
    }

    // 오늘의 리더십 팁 표시 (HTML의 leadership-advice-text에 맞춤)
    displayLeadershipAdvice(leadershipType) {
        const adviceElement = document.getElementById('leadership-advice-text');
        if (!adviceElement) {
            console.error('leadership-advice-text 요소를 찾을 수 없습니다');
            return;
        }
        
        // 리더십 유형별 조언
        const adviceTexts = {
            'transformational': '팀원들에게 영감을 주고 변화를 이끄는 당신의 능력을 더욱 발전시켜보세요. 오늘은 새로운 아이디어를 제시해보는 것은 어떨까요?',
            'democratic': '팀원들의 의견을 잘 수렴하는 당신의 강점을 활용하세요. 오늘은 중요한 결정을 내리기 전에 팀과 충분히 소통해보세요.',
            'autocratic': '빠른 의사결정과 명확한 지시가 당신의 강점입니다. 오늘은 팀원들에게 따뜻한 격려의 말도 함께 전해보세요.',
            'laissez_faire': '팀원들의 자율성을 존중하는 당신의 리더십이 창의성을 이끌어냅니다. 오늘은 필요할 때 적절한 가이드를 제공해보세요.',
            'coaching': '팀원들의 성장을 돕는 당신의 능력이 탁월합니다. 오늘은 누군가에게 새로운 기술을 가르쳐주는 것은 어떨까요?',
            'servant': '팀을 섬기는 마음으로 리더십을 발휘하는 당신이 존경스럽습니다. 오늘은 팀원들의 필요를 먼저 살펴보세요.'
        };
        
        // 기본 조언 텍스트
        let adviceText = adviceTexts[leadershipType.id] || '당신만의 독특한 리더십 스타일을 더욱 발전시켜나가세요. 매일 조금씩 성장하는 것이 가장 중요합니다.';
        
        // leadershipType에 advice 속성이 있다면 사용
        if (leadershipType.advice) {
            adviceText = leadershipType.advice;
        }
        
        adviceElement.textContent = adviceText;
        
        console.log('리더십 조언 표시 완료');
    }

    // 적합한 상황 표시
    displaySuitableSituations(leadershipType) {
        const container = document.getElementById('suitable-situations');
        container.innerHTML = '';
        
        leadershipType.suitableSituations.forEach(situation => {
            const situationElement = document.createElement('div');
            situationElement.className = 'situation-item';
            situationElement.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <span>${situation}</span>
            `;
            container.appendChild(situationElement);
        });
    }

    // 결과 저장
    saveResult(typeCode, leadershipType) {
        const result = {
            id: typeCode,
            name: leadershipType.title,
            type: leadershipType.subtitle,
            description: leadershipType.description,
            date: new Date().toISOString(),
            scores: this.scores,
            strengths: leadershipType.strengths,
            developmentTips: leadershipType.developmentTips
        };
        
        // 카카오톡 공유용 키로도 저장
        localStorage.setItem('leadershipResult', JSON.stringify(result));
        // 기존 키로도 저장
        localStorage.setItem('leadershipTestResult', JSON.stringify(result));
        console.log('결과 저장됨:', result);
    }

    // 테스트 다시하기
    restartTest() {
        this.currentQuestion = 0;
        this.answers = [];
        this.scores = {
            transformational: 0,
            democratic: 0,
            authoritative: 0,
            coaching: 0,
            servant: 0,
            situational: 0
        };
        this.resultCalculated = false;
        
        // UI 초기화
        document.getElementById('test-intro').style.display = 'block';
        document.getElementById('test-section').style.display = 'none';
        document.getElementById('result-section').style.display = 'none';
        
        console.log('리더십 테스트가 초기화되었습니다');
    }
}

// 전역 함수들
function restartLeadershipTest() {
    if (window.leadershipTestInstance) {
        window.leadershipTestInstance.resetTest();
        window.leadershipTestInstance.showSection('test-intro');
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
    const text = encodeURIComponent('리더십 유형 테스트 결과를 확인해보세요!');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
}

function shareTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('리더십 유형 테스트 결과를 확인해보세요!');
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
    const resultCards = document.querySelectorAll('.result-card, .trait-item, .strength-item, .weakness-item, .tip-item, .situation-item');
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