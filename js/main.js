(function() {
    // gnb_box 열기
    // var btnOpen = document.querySelector('.btn_open');
    // var gnbBox = document.querySelector('.gnb_box');

    // btnOpen.addEventListener('click', function () {
    //     gnbBox.classList.toggle('show');
    // });
 
    // 팝업 닫기
    var closePop = document.querySelector('.modal_pop .top_modal .btn_close');
    var modalPop = document.querySelector('.modal_pop');
    var dimm = document.querySelector('.dimm');
    
    closePop.addEventListener('click', function() {
        modalPop.style.display = 'none';
        dimm.style.display = 'none';
    });

    // 필터박스 접기
    var foldBtn = document.querySelector('.page_hd .btn_filter_fold');
    var filter = document.querySelector('.contents>.input_box');

    foldBtn.addEventListener('click', function() {
        this.classList.toggle('on');
        this.previousElementSibling.classList.toggle('on');
        filter.classList.toggle('fold');
    })
    
    // 팝업 인풋 박스 접기
    var foldBtns = document.querySelectorAll('.fold_input_box .btn_fold');
 
    foldBtns.forEach(function(target){
        target.addEventListener('click', function() {
            this.classList.toggle('on');
            this.parentNode.nextElementSibling.classList.toggle('fold');
        });
    });
})();