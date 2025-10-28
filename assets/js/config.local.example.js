// 로컬 개발용 설정 파일 (개발자만 사용)
// 이 파일은 .gitignore에 추가되어야 합니다.
// 
// 사용법:
// 1. 이 파일에 실제 API 키를 입력
// 2. 파일을 config.local.js로 복사
// 3. HTML 파일에서 config.js 이전에 로드

window.localConfig = {
    // 카카오 개발자센터에서 발급받은 JavaScript 키를 입력하세요
    KAKAO_API_KEY: 'your_kakao_api_key_here',
    
    // 기타 개발용 설정
    DEBUG_MODE: true,
    
    // 다른 API 키들 (필요시 추가)
    // GOOGLE_ANALYTICS_ID: 'your_ga_id',
    // FIREBASE_API_KEY: 'your_firebase_key'
};