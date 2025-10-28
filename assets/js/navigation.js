// 공통 네비게이션 JavaScript
class Navigation {
    constructor() {
        this.init();
    }

    init() {
        this.createNavigation();
        this.bindEvents();
        this.setActivePage();
    }

    createNavigation() {
        // 네비게이션 HTML 생성
        const navHTML = `
            <nav class="navbar">
                <div class="nav-container">
                    <a href="index.html" class="nav-logo">
                        <i class="fas fa-brain"></i>
                        <span>AI 심리분석</span>
                    </a>
                    
                    <ul class="nav-menu">
                        <li><a href="index.html" data-page="home"><i class="fas fa-home"></i> 홈</a></li>
                        <li><a href="personality.html" data-page="personality"><i class="fas fa-brain"></i> 성격분석</a></li>
                        <li><a href="love.html" data-page="love"><i class="fas fa-heart"></i> 연애스타일</a></li>
                        <li><a href="career.html" data-page="career"><i class="fas fa-briefcase"></i> 직업적성</a></li>
                        <li><a href="stress.html" data-page="stress"><i class="fas fa-spa"></i> 스트레스</a></li>
                        <li><a href="leadership.html" data-page="leadership"><i class="fas fa-crown"></i> 리더십</a></li>
                        <li><a href="teto-test.html" data-page="teto"><i class="fas fa-balance-scale"></i> 테토유형</a></li>
                    </ul>
                    
                    <button class="nav-toggle" id="nav-toggle">
                        <span class="hamburger"></span>
                        <span class="hamburger"></span>
                        <span class="hamburger"></span>
                    </button>
                </div>
                
                <div class="nav-dropdown" id="nav-dropdown">
                    <ul class="nav-menu">
                        <li><a href="index.html" data-page="home"><i class="fas fa-home"></i> 홈</a></li>
                        <li><a href="personality.html" data-page="personality"><i class="fas fa-brain"></i> 성격분석</a></li>
                        <li><a href="love.html" data-page="love"><i class="fas fa-heart"></i> 연애스타일</a></li>
                        <li><a href="career.html" data-page="career"><i class="fas fa-briefcase"></i> 직업적성</a></li>
                        <li><a href="stress.html" data-page="stress"><i class="fas fa-spa"></i> 스트레스</a></li>
                        <li><a href="leadership.html" data-page="leadership"><i class="fas fa-crown"></i> 리더십</a></li>
                        <li><a href="teto-test.html" data-page="teto"><i class="fas fa-balance-scale"></i> 테토유형</a></li>
                    </ul>
                </div>
            </nav>
        `;

        // body 시작 부분에 네비게이션 삽입
        document.body.insertAdjacentHTML('afterbegin', navHTML);
        
        // 메인 콘텐츠에 page-content 클래스 추가
        const mainContent = document.querySelector('main') || document.querySelector('.container') || document.body.children[1];
        if (mainContent) {
            mainContent.classList.add('page-content', 'page-transition');
        }
    }

    bindEvents() {
        // 햄버거 메뉴 토글
        const navToggle = document.getElementById('nav-toggle');
        const navDropdown = document.getElementById('nav-dropdown');

        if (navToggle && navDropdown) {
            navToggle.addEventListener('click', () => {
                navToggle.classList.toggle('active');
                navDropdown.classList.toggle('active');
            });
        }

        // 메뉴 항목 클릭 시 드롭다운 닫기
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navDropdown.classList.remove('active');
            });
        });

        // 외부 클릭 시 드롭다운 닫기
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar')) {
                navToggle.classList.remove('active');
                navDropdown.classList.remove('active');
            }
        });

        // 스크롤 시 네비게이션 투명도 조절
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            lastScrollY = window.scrollY;
        });
    }

    setActivePage() {
        const currentPage = this.getCurrentPage();
        const navLinks = document.querySelectorAll('.nav-menu a[data-page]');
        
        navLinks.forEach(link => {
            link.classList.remove('current-page');
            if (link.dataset.page === currentPage) {
                link.classList.add('current-page');
            }
        });
    }

    getCurrentPage() {
        const path = window.location.pathname;
        const fileName = path.split('/').pop().split('.')[0];
        
        switch (fileName) {
            case 'index':
            case '':
                return 'home';
            case 'personality':
                return 'personality';
            case 'love':
                return 'love';
            case 'career':
                return 'career';
            case 'stress':
                return 'stress';
            case 'leadership':
                return 'leadership';
            case 'teto-test':
                return 'teto';
            default:
                return 'home';
        }
    }
}

// 공통 유틸리티 함수들
class TestUtils {
    static showLoading() {
        const loadingHTML = `
            <div class="loading-overlay">
                <div class="loading-spinner">
                    <i class="fas fa-brain fa-spin"></i>
                    <p>분석 중...</p>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', loadingHTML);
    }

    static hideLoading() {
        const loading = document.querySelector('.loading-overlay');
        if (loading) {
            loading.remove();
        }
    }

    static saveResult(testType, result) {
        const storageKey = `ai_test_${testType}_result`;
        localStorage.setItem(storageKey, JSON.stringify({
            ...result,
            timestamp: new Date().toISOString(),
            testType: testType
        }));
        
        // 마지막 결과도 저장
        localStorage.setItem('ai_test_last_result', JSON.stringify(result));
    }

    static getResult(testType) {
        const storageKey = `ai_test_${testType}_result`;
        const result = localStorage.getItem(storageKey);
        return result ? JSON.parse(result) : null;
    }

    static createTestCard(testInfo) {
        return `
            <div class="test-card" onclick="location.href='${testInfo.url}'">
                <div class="test-icon">
                    <i class="${testInfo.icon}"></i>
                </div>
                <div class="test-content">
                    <h3>${testInfo.title}</h3>
                    <p>${testInfo.description}</p>
                    <div class="test-stats">
                        <span><i class="fas fa-users"></i> ${testInfo.participants}</span>
                        <span><i class="fas fa-clock"></i> ${testInfo.duration}</span>
                    </div>
                </div>
                <div class="test-arrow">
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
        `;
    }

    static animateProgressBar(percentage, element) {
        if (!element) return;
        
        let current = 0;
        const increment = percentage / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= percentage) {
                current = percentage;
                clearInterval(timer);
            }
            element.style.width = current + '%';
        }, 20);
    }
}

// 페이지 로드 시 네비게이션 초기화
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
    
    // 페이지 전환 애니메이션
    document.body.classList.add('page-loaded');
});

// 공통 모달 함수들
window.showModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('closing');
        setTimeout(() => {
            modal.classList.remove('active', 'closing');
            document.body.style.overflow = '';
        }, 300);
    }
};

// 전역 네비게이션 객체
window.Navigation = Navigation;
window.TestUtils = TestUtils;