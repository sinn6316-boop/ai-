class TetoTest {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.scores = { tetoNam: 0, tetoNyeo: 0 };
        this.resultCalculated = false;
    }

    // 테스트 시작
    startTest() {
        console.log('TetoTest.startTest() 호출됨');
        this.resetTest();
        console.log('테스트 초기화 완료');
        this.showSection('test-section');
        console.log('test-section으로 화면 전환');
        this.displayQuestion();
        console.log('첫 번째 질문 표시');
    }

    // 테스트 초기화
    resetTest() {
        console.log('resetTest 호출됨');
        this.currentQuestion = 0;
        this.answers = [];
        this.scores = { tetoNam: 0, tetoNyeo: 0 };
        this.resultCalculated = false;
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
        console.log('tetoQuestions 배열:', tetoQuestions ? '존재함' : '없음');
        console.log('tetoQuestions 길이:', tetoQuestions ? tetoQuestions.length : '알 수 없음');
        
        if (this.currentQuestion >= tetoQuestions.length) {
            console.log('모든 질문 완료, 결과 계산 시작');
            this.calculateResult();
            return;
        }

        const question = tetoQuestions[this.currentQuestion];
        console.log('현재 질문:', question);
        
        // 진행바 업데이트
        this.updateProgress();
        
        // 질문 내용 업데이트
        document.getElementById('question-number').textContent = `Q${this.currentQuestion + 1}`;
        document.getElementById('question-title').textContent = question.question;
        document.getElementById('question-image').innerHTML = `<i class="${question.icon || 'fas fa-balance-scale'}"></i>`;
        
        // 답변 옵션 생성
        this.createAnswerOptions(question.options);
    }

    // 진행률 업데이트
    updateProgress() {
        const progress = ((this.currentQuestion + 1) / tetoQuestions.length) * 100;
        const progressBar = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
        if (progressText) {
            progressText.textContent = `${this.currentQuestion + 1} / ${tetoQuestions.length}`;
        }
    }

    // 답변 옵션 생성
    createAnswerOptions(options) {
        const container = document.getElementById('answers-container');
        if (!container) return;
        
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
        const question = tetoQuestions[this.currentQuestion];
        const selectedOption = question.options[optionIndex];
        
        console.log('답변 선택:', selectedOption);
        
        // 답변 저장
        this.answers[this.currentQuestion] = optionIndex;
        
        // 점수 업데이트
        if (selectedOption.score) {
            this.scores.tetoNam += selectedOption.score.tetoNam || 0;
            this.scores.tetoNyeo += selectedOption.score.tetoNyeo || 0;
        }
        
        console.log('현재 점수:', this.scores);
        
        // 선택된 옵션 강조
        const answerOptions = document.querySelectorAll('.answer-option');
        answerOptions.forEach((option, index) => {
            if (index === optionIndex) {
                option.classList.add('selected');
            } else {
                option.classList.remove('selected');
            }
        });
        
        // 다음 질문으로 이동
        setTimeout(() => {
            this.nextQuestion();
        }, 300);
    }

    // 다음 질문
    nextQuestion() {
        this.currentQuestion++;
        this.displayQuestion();
    }

    // 결과 계산
    calculateResult() {
        if (this.resultCalculated) {
            console.log('결과가 이미 계산되었습니다.');
            return;
        }

        console.log('최종 점수:', this.scores);
        
        // 로딩 표시
        this.showLoading();
        
        setTimeout(() => {
            const tetoType = getTetoType(this.scores);
            const result = tetoResults[tetoType];
            
            if (!result) {
                console.error('테토 유형 결과를 찾을 수 없습니다:', tetoType);
                this.hideLoading();
                return;
            }

            this.resultCalculated = true;
            
            // 결과를 localStorage에 저장
            const resultData = {
                type: tetoType,
                scores: this.scores,
                timestamp: new Date().toISOString(),
                answers: this.answers
            };
            
            try {
                localStorage.setItem('tetoTestResult', JSON.stringify(resultData));
            } catch (error) {
                console.error('결과 저장 실패:', error);
            }
            
            this.hideLoading();
            this.displayResult(result, tetoType);
        }, 1500);
    }

    // 로딩 표시
    showLoading() {
        const loading = document.getElementById('loading');
        if (loading) {
            loading.style.display = 'flex';
        }
    }

    // 로딩 숨김
    hideLoading() {
        const loading = document.getElementById('loading');
        if (loading) {
            loading.style.display = 'none';
        }
    }

    // 결과 표시
    displayResult(result, tetoType) {
        console.log('결과 표시:', result, tetoType);
        
        // 섹션 전환
        this.showSection('result-section');
        
        // 결과 내용 업데이트
        const resultCard = document.getElementById('result-card');
        if (resultCard) {
            document.getElementById('result-type-title').textContent = tetoType;
            document.getElementById('result-type-name').textContent = result.title;
            document.getElementById('result-description').textContent = result.description;
        }
        
        // 통계 표시
        const statsContainer = document.getElementById('result-stats');
        if (statsContainer && this.scores) {
            statsContainer.innerHTML = `
                <div class="stat-item">
                    <span class="stat-label">테토남 성향</span>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${(this.scores.tetoNam / 30) * 100}%"></div>
                    </div>
                    <span class="stat-value">${this.scores.tetoNam}/30</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">테토녀 성향</span>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${(this.scores.tetoNyeo / 30) * 100}%"></div>
                    </div>
                    <span class="stat-value">${this.scores.tetoNyeo}/30</span>
                </div>
            `;
        }
        
        // 결과 섹션으로 스크롤
        setTimeout(() => {
            const resultSection = document.getElementById('result-section');
            if (resultSection) {
                resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    }

    shareKakao() {
        console.log('카카오톡 공유 시작');
        
        // Kakao SDK 확인
        if (typeof Kakao === 'undefined') {
            alert('카카오톡 SDK가 로드되지 않았습니다.');
            return;
        }
        
        if (!Kakao.isInitialized()) {
            alert('카카오톡이 초기화되지 않았습니다.');
            return;
        }
        
        const resultData = JSON.parse(localStorage.getItem('tetoTestResult') || '{}');
        const tetoType = resultData.type || '균형형';
        const result = tetoResults[tetoType];
        
        if (!result) {
            alert('공유할 결과가 없습니다. 먼저 테스트를 완료해주세요.');
            return;
        }

        console.log('공유할 결과:', tetoType, result.title);

        // 결과에 따른 이미지 색상 설정
        const typeColors = {
            '테토남': '4A90E2',
            '테토녀': 'FF6B9D',
            '균형형': 'B68CF4'
        };
        
        const color = typeColors[tetoType] || 'B68CF4';
        const imageUrl = `https://via.placeholder.com/800x400/${color}/FFFFFF?text=${encodeURIComponent(tetoType)}`;
        
        try {
            Kakao.Share.sendDefault({
                objectType: 'feed',
                content: {
                    title: '⚖️ 테토 유형 분석 결과',
                    description: `나는 "${tetoType}" 유형!\n${result.title}\n\n${result.description}`,
                    imageUrl: imageUrl,
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href,
                    },
                },
                buttons: [
                    {
                        title: '나도 테스트 하기',
                        link: {
                            mobileWebUrl: window.location.href.split('?')[0],
                            webUrl: window.location.href.split('?')[0],
                        },
                    },
                    {
                        title: '결과 자세히 보기',
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href,
                        },
                    }
                ]
            });
            console.log('카카오톡 공유 성공');
        } catch (error) {
            console.error('카카오톡 공유 실패:', error);
            alert('카카오톡 공유에 실패했습니다.\n' + error.message);
        }
    }

    resetTestMethod() {
        this.resetTest();
        this.showSection('test-intro');
        
        // 인트로 섹션으로 스크롤
        setTimeout(() => {
            const introSection = document.getElementById('test-intro');
            if (introSection) {
                introSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
}

// 전역 함수들
function startTetoTest() {
    console.log('startTetoTest 함수 호출됨');
    if (window.tetoTestInstance) {
        console.log('tetoTestInstance 존재함, startTest 호출');
        window.tetoTestInstance.startTest();
    } else {
        console.error('tetoTestInstance가 존재하지 않습니다');
    }
}

function restartTetoTest() {
    if (window.tetoTestInstance) {
        window.tetoTestInstance.resetTestMethod();
    }
}

function goHome() {
    if (confirm('테스트를 중단하고 홈으로 돌아가시겠습니까?')) {
        location.href = 'index.html';
    }
}

function shareTetoKakao() {
    if (window.tetoTestInstance) {
        window.tetoTestInstance.shareKakao();
    }
}

function copyTetoResult() {
    const currentUrl = window.location.href;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(currentUrl).then(() => {
            showToast('링크가 복사되었습니다!');
        }).catch(() => {
            fallbackCopyTextToClipboard(currentUrl);
        });
    } else {
        fallbackCopyTextToClipboard(currentUrl);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast('링크가 복사되었습니다!');
    } catch (err) {
        showToast('링크 복사에 실패했습니다.');
    }
    
    document.body.removeChild(textArea);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}