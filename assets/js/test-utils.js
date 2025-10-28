// 테스트 시작 유틸리티
(function() {
    'use strict';
    
    // 안전한 테스트 시작 함수
    function safeTestStart(testName, testClass, instanceName) {
        // 클래스 존재 확인
        let classExists = false;
        try {
            classExists = typeof window[testClass] !== 'undefined' && typeof window[testClass] === 'function';
        } catch (e) {
            console.error(`클래스 확인 중 오류: ${e.message}`);
        }
        
        if (!classExists) {
            console.warn(`${testClass} 클래스가 로드되지 않았습니다. 재시도 중...`);
            
            // 2초 후 재시도
            setTimeout(() => {
                const retryClassExists = typeof window[testClass] !== 'undefined' && typeof window[testClass] === 'function';
                
                if (retryClassExists) {
                    safeTestStart(testName, testClass, instanceName);
                } else {
                    alert(`${testName} 테스트를 시작할 수 없습니다.\n페이지를 새로고침하고 다시 시도해주세요.`);
                }
            }, 2000);
            return;
        }
        
        // 인스턴스 생성 또는 확인
        if (!window[instanceName]) {
            try {
                window[instanceName] = new window[testClass]();
            } catch (error) {
                console.error(`${instanceName} 인스턴스 생성 실패:`, error);
                alert(`테스트 초기화에 실패했습니다.\n오류: ${error.message}`);
                return;
            }
        }
        
        // startTest 메서드 확인 및 실행
        if (typeof window[instanceName].startTest !== 'function') {
            alert(`테스트 시작 메서드를 찾을 수 없습니다.`);
            return;
        }
        
        // 테스트 시작 실행
        try {
            window[instanceName].startTest();
        } catch (error) {
            console.error(`${testName} 테스트 시작 실패:`, error);
            alert(`테스트 시작 중 오류가 발생했습니다.\n${error.message}`);
        }
    }
    
    // 전역 함수들 정의
    window.startPersonalityTest = function() {
        safeTestStart('성격 유형', 'PersonalityTest', 'personalityTestInstance');
    };
    
    window.startLoveTest = function() {
        safeTestStart('연애 스타일', 'LoveTest', 'loveTestInstance');
    };
    
    window.startCareerTest = function() {
        safeTestStart('직업 적성', 'CareerTest', 'careerTestInstance');
    };
    
    window.startStressTest = function() {
        safeTestStart('스트레스 진단', 'StressTest', 'stressTestInstance');
    };
    
    window.startLeadershipTest = function() {
        safeTestStart('리더십 유형', 'LeadershipTest', 'leadershipTestInstance');
    };
    
})();