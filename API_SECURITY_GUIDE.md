# API 키 보안 관리 가이드

## 📋 개요

이 프로젝트는 카카오톡 공유 기능을 위해 카카오 JavaScript API를 사용합니다. 보안을 위해 API 키를 환경변수로 관리하고, 하드코딩을 방지하는 구조로 개선되었습니다.

## 🔧 설정 방법

### 1. 개발 환경 설정

#### 방법 1: 로컬 설정 파일 사용 (권장)

1. `assets/js/config.local.example.js` 파일을 복사하여 `assets/js/config.local.js` 파일을 생성합니다:
   ```bash
   copy "assets\js\config.local.example.js" "assets\js\config.local.js"
   ```

2. `assets/js/config.local.js` 파일을 열고 실제 API 키를 입력합니다:
   ```javascript
   window.localConfig = {
       KAKAO_API_KEY: 'your_actual_kakao_api_key_here',
       DEBUG_MODE: true
   };
   ```

3. 카카오 개발자센터에서 발급받은 JavaScript 키를 입력합니다.

#### 방법 2: 브라우저 localStorage 사용

1. 브라우저 개발자 도구(F12)를 열고 Console 탭에서 다음 명령어를 실행합니다:
   ```javascript
   localStorage.setItem('KAKAO_API_KEY', 'your_actual_kakao_api_key_here');
   ```

### 2. 운영 환경 설정

#### GitHub Pages 배포 시

1. GitHub Repository Settings > Secrets and variables > Actions로 이동
2. New repository secret 클릭
3. 다음 시크릿을 추가:
   - Name: `KAKAO_API_KEY`
   - Secret: 실제 카카오 API 키

#### Vercel 배포 시

1. Vercel 대시보드에서 프로젝트 선택
2. Settings > Environment Variables로 이동
3. 환경변수 추가:
   - Name: `KAKAO_API_KEY`
   - Value: 실제 카카오 API 키

#### Netlify 배포 시

1. Netlify 대시보드에서 사이트 선택
2. Site settings > Environment variables로 이동
3. 환경변수 추가:
   - Key: `KAKAO_API_KEY`
   - Value: 실제 카카오 API 키

## 🛡️ 보안 주의사항

### ✅ 해야 할 것

- **환경변수 사용**: API 키는 반드시 환경변수나 설정 파일로 관리
- **gitignore 설정**: 민감한 정보가 포함된 파일은 .gitignore에 추가
- **키 분리**: 개발용과 운영용 API 키를 분리하여 사용
- **정기적 갱신**: API 키를 정기적으로 갱신
- **접근 권한 제한**: 카카오 개발자센터에서 도메인 제한 설정

### ❌ 하지 말아야 할 것

- **하드코딩 금지**: 소스코드에 API 키를 직접 입력하지 말 것
- **공개 저장소**: 민감한 정보가 포함된 파일을 Git에 커밋하지 말 것
- **키 공유**: API 키를 메시지, 이메일 등으로 공유하지 말 것
- **프로덕션 키 개발 사용**: 운영용 키를 개발 환경에서 사용하지 말 것

## 📁 파일 구조

```
📦 프로젝트 루트
├── 📄 .env.example                    # 환경변수 템플릿
├── 📄 .env.development               # 개발 환경 설정 (gitignore)
├── 📄 .env.production                # 운영 환경 설정 (gitignore)
├── 📄 .gitignore                     # Git 무시 파일
├── 📄 build-config.example.js        # 빌드 설정 예시
└── 📂 assets/js/
    ├── 📄 config.js                  # 환경 설정 관리 클래스
    ├── 📄 config.local.example.js    # 로컬 설정 템플릿
    └── 📄 config.local.js            # 로컬 설정 파일 (gitignore)
```

## 🔍 동작 원리

1. **config.js** 파일의 `Config` 클래스가 여러 소스에서 API 키를 찾습니다:
   - 환경변수 (`process.env.KAKAO_API_KEY`)
   - 빌드 시 주입된 전역변수 (`KAKAO_API_KEY`)
   - 로컬 스토리지 (`localStorage.getItem('KAKAO_API_KEY')`)
   - 로컬 설정 파일 (`window.localConfig.KAKAO_API_KEY`)

2. 환경에 따라 적절한 폴백을 제공합니다:
   - 개발 환경: 기존 개발용 키를 폴백으로 사용
   - 운영 환경: API 키가 없으면 에러 발생

3. 모든 HTML 파일에서 통일된 방식으로 API 키를 로드합니다.

## 🐛 문제 해결

### 카카오 SDK 초기화 실패

**증상**: 콘솔에 "카카오 API 키가 설정되지 않았습니다" 에러

**해결 방법**:
1. 개발자 도구 콘솔에서 `window.appConfig.debug()` 실행
2. API 키 상태 확인
3. 위의 설정 방법에 따라 API 키 설정

### API 키 로드 순서 문제

**증상**: 간헐적으로 API 키를 찾지 못함

**해결 방법**:
1. HTML에서 스크립트 로드 순서 확인:
   ```html
   <script src="assets/js/config.local.js"></script>
   <script src="assets/js/config.js"></script>
   <!-- 다른 스크립트들... -->
   ```

2. DOMContentLoaded 이벤트에서 초기화 확인

## 📞 지원

문제가 발생하면 다음을 확인해주세요:

1. 카카오 개발자센터에서 API 키 발급 상태
2. 도메인 설정이 올바른지 확인
3. 브라우저 콘솔에서 에러 메시지 확인
4. `window.appConfig.debug()` 실행하여 설정 상태 확인

---

💡 **팁**: 개발 중에는 `window.appConfig.debug()`를 실행하면 현재 설정 상태를 확인할 수 있습니다.