// 공통 캡처 유틸리티 함수들

/**
 * captureResult - find a sensible result element on the page and capture it
 * Works across pages that use different IDs/classes (result, result-card, result-section, .result-container)
 */
function captureResult() {
    console.log('결과 캡처 시작');

    // try to find a result element using several common selectors
    const selectors = [
        '#result',
        '#result-card',
        '#result-section',
        '.result-container',
        '.result-card',
        '#result-section .result-container'
    ];

    let target = null;
    for (const s of selectors) {
        const el = document.querySelector(s);
        if (el) { target = el; break; }
    }

    if (!target) {
        // fallback: try any element with class including "result"
        target = document.querySelector('[id*="result"], [class*="result"]');
    }

    if (!target) {
        showToast('결과 영역을 찾을 수 없습니다.');
        return;
    }

    // Load html2canvas if needed
    if (typeof html2canvas === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        script.onload = () => {
            // slight delay to ensure DOM is stable
            setTimeout(() => performCapture(target), 120);
        };
        script.onerror = () => {
            console.error('HTML2Canvas 로딩 실패');
            fallbackCapture();
        };
        document.head.appendChild(script);
    } else {
        performCapture(target);
    }
}

/**
 * performCapture - attempt to capture the full content of the provided element
 * Uses element scrollWidth/scrollHeight to capture the full area, not only visible viewport
 */
function performCapture(element) {
    try {
        // ensure we capture the element at its natural width/height
        const width = Math.max(element.scrollWidth, element.offsetWidth, element.clientWidth);
        const height = Math.max(element.scrollHeight, element.offsetHeight, element.clientHeight);

        const opts = {
            backgroundColor: '#ffffff',
            scale: Math.min(2, window.devicePixelRatio || 1),
            useCORS: true,
            logging: false,
            width: width,
            height: height,
            windowWidth: Math.max(document.documentElement.clientWidth, document.documentElement.scrollWidth),
            windowHeight: Math.max(document.documentElement.clientHeight, document.documentElement.scrollHeight)
        };

        // temporarily expand element if it's clipped by overflow to capture full content
        const originalOverflow = element.style.overflow;
        element.style.overflow = 'visible';

        html2canvas(element, opts).then(canvas => {
            // restore overflow
            element.style.overflow = originalOverflow;

            // download the image
            const link = document.createElement('a');
            const testType = getTestType();
            link.download = `${testType}-test-result-${Date.now()}.png`;
            link.href = canvas.toDataURL('image/png');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast('결과가 이미지로 저장되었습니다!');
        }).catch(err => {
            element.style.overflow = originalOverflow;
            console.error('캡처 오류:', err);
            fallbackCapture();
        });
    } catch (err) {
        console.error('performCapture 실패:', err);
        fallbackCapture();
    }
}

function fallbackCapture() {
    // 폴백: 결과 텍스트 복사
    const testType = getTestType();
    const resultData = localStorage.getItem(`${testType}TestResult`);

    if (resultData) {
        const result = JSON.parse(resultData);
        const textToCopy = formatResultText(result, testType);

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast('결과가 클립보드에 복사되었습니다!');
            }).catch(() => {
                copyToClipboardFallback(textToCopy);
            });
        } else {
            copyToClipboardFallback(textToCopy);
        }
    } else {
        showToast('저장할 결과가 없습니다.');
    }
}

function formatResultText(result, testType) {
    const testNames = {
        'personality': '성격',
        'love': '연애 스타일',
        'career': '직업 적성',
        'stress': '스트레스 대처',
        'leadership': '리더십',
        'teto': '테토 유형'
    };

    let text = `나의 ${testNames[testType] || testType} 테스트 결과\n\n`;
    text += `유형: ${result.name || result.type}\n`;
    text += `설명: ${result.description}\n`;

    if (result.traits) text += `특징: ${result.traits.join(', ')}\n`;
    if (result.careers) text += `추천 직업: ${result.careers.join(', ')}\n`;
    if (result.stressors) text += `스트레스 요인: ${result.stressors.join(', ')}\n`;
    if (result.strategies) text += `대처 전략: ${result.strategies.join(', ')}\n`;

    text += `\n테스트 링크: ${window.location.href}`;
    return text;
}

function getTestType() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('personality')) return 'personality';
    if (path.includes('love')) return 'love';
    if (path.includes('career')) return 'career';
    if (path.includes('stress')) return 'stress';
    if (path.includes('leadership')) return 'leadership';
    if (path.includes('teto')) return 'teto';
    return 'test';
}

function copyToClipboardFallback(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        showToast('결과가 클립보드에 복사되었습니다!');
    } catch (err) {
        console.error('복사 실패:', err);
        showToast('복사에 실패했습니다.');
    }
    document.body.removeChild(textArea);
}

// 토스트 메시지 표시 함수
function showToast(message) {
    // 기존 토스트가 있으면 제거
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #333;
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        z-index: 10000;
        font-size: 14px;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '1'; }, 10);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 300);
    }, 3000);
}