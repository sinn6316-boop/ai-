// 배포용 환경변수 설정 스크립트
// 빌드 도구(Webpack, Vite 등)에서 사용하거나 서버에서 환경변수를 주입할 때 사용

// Webpack DefinePlugin 설정 예시
module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env.KAKAO_API_KEY': JSON.stringify(process.env.KAKAO_API_KEY),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'KAKAO_API_KEY': JSON.stringify(process.env.KAKAO_API_KEY),
        })
    ]
};

// Vite 설정 예시 (vite.config.js)
/*
export default {
    define: {
        'process.env.KAKAO_API_KEY': JSON.stringify(process.env.KAKAO_API_KEY),
        'KAKAO_API_KEY': JSON.stringify(process.env.KAKAO_API_KEY),
    }
}
*/

// GitHub Actions 설정 예시 (.github/workflows/deploy.yml)
/*
env:
  KAKAO_API_KEY: ${{ secrets.KAKAO_API_KEY }}

steps:
  - name: Build
    run: |
      echo "KAKAO_API_KEY=$KAKAO_API_KEY" > .env.local
      npm run build
*/

// Vercel 설정 예시 (vercel.json)
/*
{
  "env": {
    "KAKAO_API_KEY": "@kakao-api-key"
  }
}
*/

// Netlify 설정 예시 (netlify.toml)
/*
[build]
  environment = { KAKAO_API_KEY = "your-key-here" }
*/