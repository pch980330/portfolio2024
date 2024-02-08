window.onload = function(){
    AOS.init();
    // 스크롤 내리면 header에 active 추가
    let header = document.querySelector(".header")
    window.addEventListener("scroll",function(){
        if(window.scrollY >= 100){
            header.classList.add("active")
        }else{
            header.classList.remove("active")
        }
    })

    // 모바일 메뉴 버튼
    let moMenuBtn = document.querySelector(".mo-menu-btn")
    let sideMenu = document.querySelector(".side-menu")
    moMenuBtn.addEventListener("click", function(){
        sideMenu.classList.toggle("active")
        this.classList.toggle("active")
    })
    window.addEventListener("resize",function(){
        let winWidth = window.innerWidth
        if(winWidth > 768){
            sideMenu.classList.remove("active")
            moMenuBtn.classList.remove("active")
        }
    })

    // portfolio data
    let workData = {
        item_count: 3,
        item_1:{
            videoid:"GFGGZhjYsVE", 
            tit : "BJ Clip 1",
            des : "인터넷 방송 클립 편집 영상", 
            period : "* 학원 수강 이전 제작 영상물", 
            tools : "Final Cut Pro, Motion"
        },
        item_2:{
            videoid:"sDWeyVdXQwY", 
            tit : "BJ Clip 2",
            des : "인터넷 방송 클립 편집 영상", 
            period : "* 학원 수강 이전 제작 영상물", 
            tools : "Final Cut Pro, Motion"
        },
        item_3:{
            videoid:"eE0Op-IKnYE", 
            tit : "BJ Clip 3",
            des : "인터넷 방송 클립 편집 영상", 
            period : "* 학원 수강 이전 제작 영상물", 
            tools : "Final Cut Pro, Motion"
        },
    }
    // 포트폴리오 리스트 html 추가
    let pfWrap = document.querySelector(".sw-portfolio ul")
    let pfListHtml = ``;
    for(let i = 0; i < workData.item_count; i++){
        let obj = workData[`item_${i+1}`]
        let temp = `
            <li class="swiper-slide">
                <div class="pf-thumb">
                    <img src="https://img.youtube.com/vi/${obj.videoid}/maxresdefault.jpg" alt="썸네일이미지">
                </div>
                <div class="pf-text">
                    <h2>${obj.tit}</h2>
                    <p>${obj.des}</p>
                    <p>${obj.period}</p>
                    <div class="tool">
                        <p>사용툴 : </p>
                        ${obj.tools}
                    </div>
                    <span class="view-btn">VIEW</span>
                </div>
            </li>
        `
        pfListHtml += temp
    }
    pfWrap.innerHTML = pfListHtml

    // 포트폴리오 스와이퍼 적용
    let swPortfolio = new Swiper(".sw-portfolio",{
        slidesPerView : 1,
        spaceBetween: 10,
        navigation: {
            prevEl: ".portfolio-prev",
            nextEl: ".portfolio-next",
        },
    })

    // 포트폴리오 영상 모달창
    let pfItem = document.querySelectorAll(".sw-portfolio ul li")
    let modal = document.querySelector(".modal")
    let modalCont = document.querySelector(".modal-cont")
    let closeBtn = document.querySelector(".modal .close-btn")
    let body = document.querySelector("body")

    pfItem.forEach(function(item, index){
        item.addEventListener("click", function(){
            let obj = workData[`item_${index + 1}`]
            modal.classList.add("active")
            body.classList.add("scrollfix")
            modalCont.innerHTML = `<iframe src="https://www.youtube.com/embed/${obj.videoid}?autoplay=1&mute=1" allowfullscreen></iframe>`
        })
    })
    closeBtn.addEventListener("click",function(){
        modal.classList.remove("active")
        body.classList.remove("scrollfix")
    })
    modal.addEventListener("click",function(){
        modal.classList.remove("active")
        body.classList.remove("scrollfix")
    })

    // after data
    let afterData = {
        item_count: 3,
        item_1:{
            videoid:"I7AgRt4NmR8", 
            tit : "TYPOGRAPHY",
            des : "타이포그래피 카피", 
            period : "* 학원 수강 이후 제작 영상물", 
            tools : "After Effects"
        },
        item_2:{
            videoid:"PrL4WmzxUxU", 
            tit : "Wedding",
            des : "웨딩 촬영 편집 영상", 
            period : "* 학원 수강 이후 제작 영상물", 
            tools : "After Effects, Premiere Pro"
        },
        item_3:{
            videoid:"FAp7_l7d4Io", 
            tit : "Interview",
            des : "본인 인터뷰 편집 영상", 
            period : "* 학원 수강 이후 제작 영상물", 
            tools : "After Effects, Premiere Pro"
        },
    }
    // 포트폴리오 리스트 html 추가
    let afWrap = document.querySelector(".sw-after ul")
    let afListHtml = ``;
    for(let i = 0; i < afterData.item_count; i++){
        let obj = afterData[`item_${i+1}`]
        let temp = `
            <li class="swiper-slide">
                <div class="af-thumb">
                    <img src="https://img.youtube.com/vi/${obj.videoid}/maxresdefault.jpg" alt="썸네일이미지">
                </div>
                <div class="af-text">
                    <h2>${obj.tit}</h2>
                    <p>${obj.des}</p>
                    <p>${obj.period}</p>
                    <div class="tool">
                        <p>사용툴 : </p>
                        ${obj.tools}
                    </div>
                    <span class="view-btn">VIEW</span>
                </div>
            </li>
        `
        afListHtml += temp
    }
    afWrap.innerHTML = afListHtml

    // 포트폴리오 스와이퍼 적용
    let swAfter = new Swiper(".sw-after",{
        slidesPerView : 1,
        spaceBetween: 10,
        navigation: {
            prevEl: ".after-prev",
            nextEl: ".after-next",
        },
    })

    // 포트폴리오 영상 모달창
    let afItem = document.querySelectorAll(".sw-after ul li")
    let afModal = document.querySelector(".af-modal")
    let afModalCont = document.querySelector(".af-modal-cont")
    let afCloseBtn = document.querySelector(".af-modal .close-btn")
    let afBody = document.querySelector("body")

    afItem.forEach(function(item, index){
        item.addEventListener("click", function(){
            let obj = afterData[`item_${index + 1}`]
            afModal.classList.add("active")
            body.classList.add("scrollfix")
            afModalCont.innerHTML = `<iframe src="https://www.youtube.com/embed/${obj.videoid}?autoplay=1&mute=1" allowfullscreen></iframe>`
        })
    })
    afCloseBtn.addEventListener("click",function(){
        afModal.classList.remove("active")
        body.classList.remove("scrollfix")
    })
    afModal.addEventListener("click",function(){
        afModal.classList.remove("active")
        body.classList.remove("scrollfix")
    })

    // skill
    
    function progressBar(selector, gauge, color){
        var bar = new ProgressBar.Line(selector, {
            strokeWidth: 5,
            easing: 'easeInOut',
            duration: 1400,
            color: color,
            trailColor: '#eee',
            trailWidth: 3,
            step : function(state, circle){
                circle.setText(Math.round(circle.value() *100)+"%")
            }
        });
        bar.animate(gauge);
        return bar; // Return the progress bar instance
    }

    let observe = new IntersectionObserver(function(entries){
        entries.forEach(function(item){
            if(item.isIntersecting){
                proPr.animate(0.5)
                proAe.animate(0.5)
                proAi.animate(0.5)
                proPs.animate(0.5)
                proHtml.animate(0.5)
                proCss.animate(0.5)
                proJs.animate(0.5)
                proGit.animate(0.5)
            }else{
                proPr.animate(0)
                proAe.animate(0)
                proAi.animate(0)
                proPs.animate(0)
                proHtml.animate(0)
                proCss.animate(0)
                proJs.animate(0)
                proGit.animate(0)
            }
        })
    })
    let skillSection = document.querySelector(".skill")

    // Start the progress bars with initial values
    let proPr = progressBar(".pro_pr", 0, "#ea77ff");
    let proAe = progressBar(".pro_ae", 0, "#d291ff");
    let proAi = progressBar(".pro_ai", 0, "#ff7c00");
    let proPs = progressBar(".pro_ps", 0, "#00c8ff");
    let proHtml = progressBar(".pro_html", 0, "#e44d26");
    let proCss = progressBar(".pro_css", 0, "#2f9dd9");
    let proJs = progressBar(".pro_js", 0, "#f7df1e");
    let proGit = progressBar(".pro_git", 0, "#f34f29");
    observe.observe(skillSection)
}