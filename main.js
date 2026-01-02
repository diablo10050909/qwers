document.getElementById('analyzeBtn').addEventListener('click', function() {
    const input = document.getElementById('userInput').value;
    
    if(!input) {
        alert("무엇이 필요한지 말씀해 주세요!");
        return;
    }

    // 1. 입력 섹션 숨기기 및 로딩 보여주기
    document.querySelector('.input-section').classList.add('hidden');
    document.getElementById('loadingSection').classList.remove('hidden');

    // 2. 가짜 분석 시뮬레이션 (2.5초)
    const steps = ["카드사 혜택 대조 중...", "실시간 배송 경로 확인 중...", "최적의 상품 결정 완료!"];
    let stepIdx = 0;
    
    const interval = setInterval(() => {
        if(stepIdx < steps.length) {
            document.getElementById('loadingText').innerText = steps[stepIdx];
            stepIdx++;
        }
    }, 800);

    setTimeout(() => {
        clearInterval(interval);
        // 3. 로딩 숨기기 및 결과 노출
        document.getElementById('loadingSection').classList.add('hidden');
        document.getElementById('resultSection').classList.remove('hidden');
        
        // 입력 키워드에 따라 상품명 살짝 변경 (데모용)
        if(input.includes("텐트")) {
            document.getElementById('productName').innerText = "내셔널 지오그래픽 시그니처 텐트";
        }
    }, 2500);
});

// 결제 버튼 클릭 이벤트
document.querySelector('.buy-btn').addEventListener('click', function() {
    alert("⚡ 1초 결제 완료! 내일 아침에 만나요.");
    location.reload(); // 리셋
});
