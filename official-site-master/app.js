function init(){
    const pages= document.querySelectorAll(".page");
    const slides= document.querySelectorAll(".slide");
    const menu= document.querySelector(".menu");
    const menuLines= document.querySelectorAll(".menu line");
    const navopen= document.querySelector(".nav-open");
    const logo= document.querySelector(".logo");
    const backgrounds=[
        `#00000`,
        `#00000`,
        `#00000`];

    const t1 = new TimelineMax( {paused: true, reversed: true});
    t1.to(navopen, 0.3, {y: 0})
    .fromTo(logo, 0.1 , {color: 'white'}, {color: 'black'})
    .fromTo(menuLines, 0.1, {stroke: 'white'}, {stroke: 'black'})
    
    menu.addEventListener('click', ()=>{
        t1.reversed()? t1.play() : t1.reverse();
    })

    let current=0;
    
    //To select each slide from slides array.
    slides.forEach((slide,index) =>{
        slide.addEventListener('click', function(e){
            changeDots(this);
            nextSlide(index);
        })
    })

    function changeDots(dots) {
        slides.forEach( slide => {
            slide.classList.remove('active');
        });
        dots.classList.add('active');
    }

    function nextSlide(pageNumber){
        
        const currentPage= pages[current]; // current page of the html document
        // console.log(currentPage)
        
       
        const nextPage= pages[pageNumber]; //next page of the html document
        // console.log(nextPage)
        const nextLeft= nextPage.querySelector('.profile-img .model-left');
        const nextRight= nextPage.querySelector('.profile-img .model-right');

        const currentLeft= currentPage.querySelector('.profile-img .model-left');
        const currentRight= currentPage.querySelector('.profile-img .model-right');

        const nextText= nextPage.querySelector('.details');
        const portfolio= document.querySelector('.portfolio');

        const t1 = new TimelineMax({
            onStart: function(){
                slides.forEach(slide => {
                    slide.style.pointerEvents = "none";
                });
            },
            onComplete: function(){
                slides.forEach( slide =>{
                    slide.style.pointerEvents= "all";
                });
            }
        });

        t1.fromTo(currentLeft, 0.3 , {y: '-10%'}, {y: '-100%'})
        .fromTo(currentRight, 0.3, {y: '10%'} , {y:'-100%'}, '-=0.4')
        .to(portfolio, 0.3 , {backgroundImage: backgrounds[pageNumber]})
        .fromTo(currentPage , 0.3 ,
            {opacity: 1 , pointerEvents: 'all'},
            {opacity: 0 , pointerEvents: 'none'})
        .fromTo(nextPage ,0.3, 
            {opacity: 0 , pointerEvents: 'none'},
            {opacity: 1, pointerEvents: 'all'},
            '-=0.3')
        .fromTo(nextLeft, 0.3, {y: '-100%'} ,{ y: '-10%'} , '-=0.2')
        .fromTo(nextRight, 0.3, { y: '-100%'}, {y: '10%'}, '-=0.7')
        .fromTo(nextText, 0.3, {y: 0}, {y: 0})
        .set(nextLeft, {clearProps: 'all'})
        .set(nextRight, {clearProps: 'all'});

        current= pageNumber;
    }

}

init();


document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
  }