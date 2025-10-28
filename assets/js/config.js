// 환경 설정 관리 클래스
class Config {
    constructor() {
        this.isDevelopment = this.getEnvironment() === 'development';
        this.isProduction = this.getEnvironment() === 'production';
        this.apiKeys = this.loadApiKeys();
    }

    // 환경 감지 (개발/운영)
    getEnvironment() {
        // GitHub Pages나 배포된 도메인인지 확인
        const hostname = window.location.hostname;
        if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.includes('192.168.')) {
            return 'development';
        }
        return 'production';
    }

    // API 키 로드
    loadApiKeys() {
        try {
            // 환경변수 방식으로 API 키 로드 (빌드 시점에 주입되는 방식)
            const keys = {
                kakao: this.getKakaoApiKey(),
                // 필요시 다른 API 키들도 추가
            };
            
            return keys;
        } catch (error) {
            console.error('API 키 로드 실패:', error);
            return this.getFallbackKeys();
        }
    }

    // 카카오 API 키 가져오기
    getKakaoApiKey() {
        // 카카오톡 공유 기능이 제거되었습니다.
        // 대신 결과 캡처 기능을 사용해주세요.
        return null;
    }

    // 폴백 키 (최소한의 기능 제공)
    getFallbackKeys() {
        console.warn('API 키 로드에 실패했습니다. 제한된 기능만 사용할 수 있습니다.');
        return {
            kakao: null
        };
    }

    // API 키 유효성 검사
    validateApiKeys() {
        const missingKeys = [];
        
        if (!this.apiKeys.kakao) {
            missingKeys.push('KAKAO_API_KEY');
        }

        if (missingKeys.length > 0) {
            console.error('누락된 API 키:', missingKeys);
            return false;
        }

        return true;
    }

    // 설정된 API 키 가져오기
    getApiKey(service) {
        return this.apiKeys[service] || null;
    }

    // 공유 기능 사용 가능 여부 확인
    isShareAvailable() {
        return this.apiKeys.kakao !== null;
    }

    // 대체 공유 방법 제공
    getAlternativeShareMethods() {
        return {
            url: window.location.href,
            copyToClipboard: true,
            webShare: 'navigator' in window && 'share' in navigator,
            manual: true
        };
    }

    // 디버그 정보 출력 (개발 모드에서만)
    debug() {
        if (this.isDevelopment) {
            console.log('=== 환경 설정 정보 ===');
            console.log('환경:', this.getEnvironment());
            console.log('호스트명:', window.location.hostname);
            console.log('API 키 상태:', {
                kakao: this.apiKeys.kakao ? '✓ 설정됨' : '✗ 누락됨'
            });
            console.log('공유 기능:', this.isShareAvailable() ? '✓ 사용 가능' : '✗ 대체 방법 사용');
            console.log('=====================');
        }
    }
}

// 전역 설정 인스턴스 생성
window.appConfig = new Config();

// 초기화 시 디버그 정보 출력
window.appConfig.debug();