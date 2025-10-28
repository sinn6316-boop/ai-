# 카카오톡 API 설정 가이드

## 🔑 카카오 API 키 발급받기

### 1. 카카오 개발자센터 가입 및 앱 생성
1. [카카오 개발자센터](https://developers.kakao.com/)에 접속
2. 카카오계정으로 로그인
3. **"내 애플리케이션"** 메뉴 클릭
4. **"애플리케이션 추가하기"** 버튼 클릭
5. 앱 정보 입력:
   - **앱 이름**: `AI 심리분석 테스트` (원하는 이름)
   - **사업자명**: 개인 또는 회사명
   - **카테고리**: `생활/취미`

### 2. JavaScript 키 확인
1. 생성된 앱 선택
2. **"앱 키"** 탭에서 **JavaScript 키** 복사
3. 이 키를 아래 설정 방법에 따라 적용

### 3. 플랫폼 설정
1. **"플랫폼"** 탭 클릭
2. **"Web 플랫폼 등록"** 클릭
3. 사이트 도메인 등록:
   - 개발용: `http://localhost`, `http://127.0.0.1`
   - 운영용: 실제 배포될 도메인 (예: `https://yourdomain.com`)

### 4. 카카오 로그인 활성화 (카카오톡 공유 기능 사용시 필요)
1. **"카카오 로그인"** 탭 클릭
2. **"활성화 설정"** ON
3. **"OpenID Connect 활성화"** ON (선택사항)
4. **"Redirect URI"** 등록:
   - `http://localhost/` (개발용)
   - `https://yourdomain.com/` (운영용)

## 🔧 API 키 설정 방법

### 방법 1: config.local.js 파일 사용 (권장 - 개발용)

1. `assets/js/config.local.example.js` 파일을 복사하여 `config.local.js` 생성:
   ```bash
   copy assets\js\config.local.example.js assets\js\config.local.js
   ```

2. `config.local.js` 파일 수정:
   ```javascript
   window.localConfig = {
       KAKAO_API_KEY: 'your_actual_kakao_javascript_key_here', // 실제 키 입력
       DEBUG_MODE: true
   };
   ```

3. 이 파일은 `.gitignore`에 추가되어 있어 Git에 업로드되지 않습니다.

### 방법 2: localStorage 사용 (임시 테스트용)

브라우저 개발자 도구에서 다음 명령어 실행:
```javascript
localStorage.setItem('KAKAO_API_KEY', 'your_actual_kakao_javascript_key_here');
```

### 방법 3: 환경변수 사용 (배포용)

배포 시 빌드 도구나 서버에서 환경변수 설정:
```bash
set KAKAO_API_KEY=your_actual_kakao_javascript_key_here
```

## 🧪 공유 기능 테스트

### 로컬에서 테스트
1. API 키 설정 완료 후 브라우저에서 프로젝트 열기
2. 아무 테스트 완료 후 결과 화면에서 **"카카오톡으로 공유하기"** 버튼 클릭
3. 브라우저 개발자 도구(F12) 콘솔에서 오류 확인:
   - `Kakao SDK 초기화 완료: true` 메시지 확인
   - 오류가 있다면 API 키 설정 재확인

### 공유 기능 작동 확인
- **모바일**: 카카오톡 앱으로 직접 공유
- **데스크톱**: 카카오톡 웹 공유 창 열림
- 공유 메시지에 테스트 결과와 링크가 포함되어야 함

## ⚠️ 주의사항

### 보안
- **절대 GitHub에 실제 API 키를 업로드하지 마세요**
- `config.local.js` 파일이 `.gitignore`에 포함되어 있는지 확인
- 운영 환경에서는 환경변수나 서버 설정으로 키 관리

### API 제한
- 카카오 API는 도메인 기반으로 접근 제한
- 등록하지 않은 도메인에서는 공유 기능 사용 불가
- 일일 API 호출 제한 있음 (무료 플랜 기준)

### 트러블슈팅
- 공유 버튼이 작동하지 않는 경우:
  1. 브라우저 콘솔에서 JavaScript 오류 확인
  2. 카카오 개발자센터에서 플랫폼 도메인 설정 확인
  3. API 키가 올바르게 설정되었는지 확인
  4. `window.appConfig.debug()` 실행하여 설정 상태 확인

## 🔄 설정 확인 방법

브라우저 개발자 도구 콘솔에서 다음 명령어로 설정 상태 확인:

```javascript
// 설정 정보 확인
window.appConfig.debug();

// API 키 상태 확인
console.log('카카오 API 키:', window.appConfig.getApiKey('kakao'));

// 카카오 SDK 초기화 상태 확인
console.log('카카오 SDK 초기화:', Kakao.isInitialized());
```

올바르게 설정되었다면 다음과 같은 출력을 확인할 수 있습니다:
```
=== 환경 설정 정보 ===
환경: development
호스트명: localhost
API 키 상태: { kakao: '✓ 설정됨' }
=====================
```