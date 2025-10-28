// 공유 기능 유틸리티
class ShareUtils {
    constructor() {
        this.config = window.appConfig;
    }

    // 카카오톡 공유 (API 키 필요)
    async shareKakao(data) {
        if (!this.config.isShareAvailable()) {
            console.warn('카카오 API 키가 설정되지 않아 대체 공유 방법을 사용합니다.');
            return this.shareAlternative(data);
        }

        try {
            if (typeof Kakao === 'undefined' || !Kakao.isInitialized()) {
                throw new Error('카카오 SDK가 초기화되지 않았습니다.');
            }

            // 카카오톡 공유 실행
            Kakao.Link.sendDefault({
                objectType: 'feed',
                content: {
                    title: data.title || 'AI 심리분석 테스트 결과',
                    description: data.description || '나의 성격 유형을 확인해보세요!',
                    imageUrl: data.imageUrl || 'https://via.placeholder.com/300x200?text=AI+Test',
                    link: {
                        mobileWebUrl: data.url || window.location.href,
                        webUrl: data.url || window.location.href
                    }
                },
                buttons: [{
                    title: '테스트 하러가기',
                    link: {
                        mobileWebUrl: data.url || window.location.href,
                        webUrl: data.url || window.location.href
                    }
                }]
            });

            this.showToast('카카오톡으로 공유되었습니다!', 'success');
            return true;

        } catch (error) {
            console.error('카카오톡 공유 실패:', error);
            return this.shareAlternative(data);
        }
    }

    // 대체 공유 방법
    async shareAlternative(data) {
        const shareData = {
            title: data.title || 'AI 심리분석 테스트 결과',
            text: data.description || '나의 성격 유형을 확인해보세요!',
            url: data.url || window.location.href
        };

        // 1. Web Share API 사용 (모바일 브라우저)
        if (this.config.getAlternativeShareMethods().webShare) {
            try {
                await navigator.share(shareData);
                this.showToast('공유되었습니다!', 'success');
                return true;
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.log('Web Share API 실패, 다른 방법 시도');
                }
            }
        }

        // 2. 클립보드에 복사
        const shareText = `${shareData.title}\n${shareData.text}\n${shareData.url}`;
        
        if (await this.copyToClipboard(shareText)) {
            this.showShareDialog(shareData);
            return true;
        }

        // 3. 수동 공유 안내
        this.showManualShareDialog(shareData);
        return false;
    }

    // 클립보드에 복사
    async copyToClipboard(text) {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                return true;
            } else {
                // 폴백 방법
                const textArea = document.createElement('textarea');
                textArea.value = text;
                textArea.style.position = 'fixed';
                textArea.style.opacity = '0';
                document.body.appendChild(textArea);
                textArea.select();
                const result = document.execCommand('copy');
                document.body.removeChild(textArea);
                return result;
            }
        } catch (error) {
            console.error('클립보드 복사 실패:', error);
            return false;
        }
    }

    // 공유 다이얼로그 표시
    showShareDialog(data) {
        const modal = this.createModal(`
            <div class="share-modal">
                <div class="modal-header">
                    <h3><i class="fas fa-share-alt"></i> 결과 공유하기</h3>
                    <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <p><i class="fas fa-check-circle text-success"></i> 링크가 클립보드에 복사되었습니다!</p>
                    <div class="share-options">
                        <h4>다른 방법으로 공유하기:</h4>
                        <div class="share-buttons">
                            <button onclick="shareUtils.shareToSNS('facebook', '${data.url}')" class="share-btn facebook">
                                <i class="fab fa-facebook-f"></i> 페이스북
                            </button>
                            <button onclick="shareUtils.shareToSNS('twitter', '${data.url}', '${data.text}')" class="share-btn twitter">
                                <i class="fab fa-twitter"></i> 트위터
                            </button>
                            <button onclick="shareUtils.shareToSNS('line', '${data.url}', '${data.text}')" class="share-btn line">
                                <i class="fab fa-line"></i> 라인
                            </button>
                        </div>
                    </div>
                    <div class="share-link">
                        <label>링크 주소:</label>
                        <div class="link-container">
                            <input type="text" value="${data.url}" readonly onclick="this.select()">
                            <button onclick="shareUtils.copyToClipboard('${data.url}')" class="copy-btn">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `);

        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('show'), 10);
    }

    // 수동 공유 안내
    showManualShareDialog(data) {
        const modal = this.createModal(`
            <div class="share-modal">
                <div class="modal-header">
                    <h3><i class="fas fa-share-alt"></i> 결과 공유하기</h3>
                    <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <p><i class="fas fa-info-circle text-info"></i> 카카오톡 API 키가 설정되지 않았습니다.</p>
                    <p>아래 링크를 복사해서 공유해보세요:</p>
                    <div class="share-link">
                        <label>링크 주소:</label>
                        <div class="link-container">
                            <input type="text" value="${data.url}" readonly onclick="this.select()">
                            <button onclick="shareUtils.copyToClipboard('${data.url}')" class="copy-btn">
                                <i class="fas fa-copy"></i> 복사
                            </button>
                        </div>
                    </div>
                    <div class="setup-guide">
                        <h4><i class="fas fa-wrench"></i> 카카오톡 공유 기능 활성화하기</h4>
                        <p>카카오톡으로 직접 공유하려면 API 키 설정이 필요합니다.</p>
                        <button onclick="window.open('KAKAO_API_SETUP.md', '_blank')" class="setup-btn">
                            <i class="fas fa-external-link-alt"></i> 설정 가이드 보기
                        </button>
                    </div>
                </div>
            </div>
        `);

        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('show'), 10);
    }

    // SNS 공유
    shareToSNS(platform, url, text = '') {
        const encodedUrl = encodeURIComponent(url);
        const encodedText = encodeURIComponent(text);
        
        const shareUrls = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
            line: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}&text=${encodedText}`,
        };

        if (shareUrls[platform]) {
            window.open(shareUrls[platform], '_blank', 'width=600,height=400');
        }
    }

    // 모달 생성
    createModal(content) {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = content;
        
        // 클릭으로 닫기
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        return modal;
    }

    // 토스트 메시지
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;

        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// 전역 인스턴스 생성
window.shareUtils = new ShareUtils();

// 전역 공유 함수 (기존 코드와의 호환성)
window.shareKakao = function(customData = null) {
    // 현재 결과 데이터 가져오기
    let currentResult = localStorage.getItem('testResult') || 
                       localStorage.getItem('personalityResult') ||
                       localStorage.getItem('loveResult') ||
                       localStorage.getItem('careerResult') ||
                       localStorage.getItem('stressResult') ||
                       localStorage.getItem('leadershipResult');

    if (!currentResult && !customData) {
        window.shareUtils.showToast('공유할 결과가 없습니다. 먼저 테스트를 완료해주세요!', 'error');
        return;
    }

    let shareData;
    if (customData) {
        shareData = customData;
    } else {
        const result = JSON.parse(currentResult);
        shareData = {
            title: 'AI 심리분석 테스트 결과',
            description: `나의 유형: ${result.type || result.name || '확인해보세요'}\n\nAI 자기분석 테스트에서 확인해보세요!`,
            url: window.location.href
        };
    }

    return window.shareUtils.shareKakao(shareData);
};