document.addEventListener('DOMContentLoaded', () => {
  // 인트로 
    const animationOptions = {
        ease: 'expo.inOut'
    };
  
    const introAnimation = () => {
        const tl = gsap.timeline({
            defaults: {
                ease: animationOptions.ease,
                duration: 1,
            }
        });
  
        tl.to('.intro__title', {
            duration: 1.5,
            y: 0,
            autoAlpha: 1,
            delay: 0.5,
        })
        .to('.intro__background--left, .intro__background--right', {
            scaleX: 1,
        })
        .to('.intro__background--left, .intro__background--right', {
            scaleY: 0,
            transformOrigin: 'top center',
        })
        .to('.intro__title', {
            duration: 1.5,
            y: -60,
            autoAlpha: 0,
        }, '-=0.6')
        .to('.intro', {
            y: '-100%',
        }, '-=0.5')
  
        return tl;
    }
  
    const skewInElements = elements => {
        const tl = gsap.timeline();
        tl.from(elements, {
            duration: 1,
            ease: animationOptions.ease,
            skewY: -5,
            autoAlpha: 0,
            y: 40,
        });
        return tl;
    }
  
    const fadeInElements = elements => {
        const tl = gsap.timeline();
        tl.from(elements, {
            duration: 1,
            ease: animationOptions.ease,
            y: '20px',
            autoAlpha: 0,
            stagger: 0.1,
        });
        return tl;
    }
  
    const master = gsap.timeline({
        paused: false,
        delay: 0.2,
    });
  
    master
        .add(introAnimation())
        .add(fadeInElements('.header__logo, .header__nav a'))
        .add(skewInElements('h1, .hero__col--2 img'), '-=1');
  });  


/*
 사운드 소리 
const bindSound = splat => {
    splat.addEventListener('pointerdown', () => {
      AUDIO.OUT.pause();
      AUDIO.IN.currentTime = AUDIO.OUT.currentTime = 0;
      AUDIO.IN.play();
    });
    splat.addEventListener('pointerup', () => {
      AUDIO.IN.pause();
      AUDIO.IN.currentTime = AUDIO.OUT.currentTime = 0;
      AUDIO.OUT.play();
    });
  }; */



/* 스킬 모션 효과 */
/*   document.addEventListener('DOMContentLoaded', () => {
    const SPLATS = document.querySelectorAll('.splatted');
    SPLATS.forEach(splat => bindSound(splat));
  }); */



/*  window.addEventListener('DOMContentLoaded', () => {
   const words = document.querySelectorAll('.about__word');
   words.forEach((word, index) => {
     setTimeout(() => {
       word.classList.add('visible');
     }, 500 + index * 200);
   });
 }); */

$(function () {
  const LIMIT = 25;
  document.addEventListener('pointermove', ({ x, y }) => {
    const posX = gsap.utils.mapRange(0, window.innerWidth, LIMIT, -LIMIT, x);
    const posY = gsap.utils.mapRange(0, window.innerHeight, LIMIT, -LIMIT, y);
    gsap.set(document.documentElement, {
      '--x': posX,
      '--y': posY,
    });
  });


      /* 글자 svg 모션 효과 (연습) */
  const aboutTexts = document.querySelectorAll(".about__text");
  const svgPaths = document.querySelectorAll(".line-svg");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 글자 모션
        entry.target.classList.add("visible");

      } else {
        // 글자 모션 제거
        entry.target.classList.remove("visible");
      }
    });
  }, {
    threshold: 0.5
  });

  aboutTexts.forEach(el => observer.observe(el));
  svgPaths.forEach(el => observer.observe(el));






  


  
  // 텍스트 애니메이션 박스 내 스크롤 설정 (simplyScroll)
  $('.txtAni1').simplyScroll({
    speed: 3,
    pauseOnTouch: false,
    pauseOnHover: false,
    autoScroll: true,
    direction: 'forwards',
  });
  
  $('.txtAni2').simplyScroll({
    speed: 3,
    pauseOnTouch: false,
    pauseOnHover: false,
    autoScroll: true,
    direction: 'backwards',
  });




 /*  글자 모션 (b_tab-CODMETIC 바) */
  $(function () {
    // 기타 이벤트들...
  
    // ✅ Splitting 모션 실행
    Splitting();
  
    const chars = document.querySelectorAll('.slide-vertical .char');
    chars.forEach((char, i) => {
      char.style.setProperty('--char-index', i);
    });
  });

  



  //타이핑 애니
  const typingText = document.querySelector('.typing_txt');
  const cursor = document.querySelector('.cursor');
  const textToType = 'all of the things that provide inspiration, and to you who opend this protfolio today';
  let isTyping = false;

  function startTyping() {
      if (isTyping) return;
      isTyping = true;
      typingText.textContent = '';//이전 텍스트 초기화
      cursor.style.display = 'inline-block'; //커서 다시 보이게
      let currentChar = 0;
      const typingInter = setInterval(() => {
          if (currentChar < textToType.length) {
              typingText.textContent += textToType[currentChar]; //한글자 추가
              currentChar++;
          } else {
              clearInterval(typingInter); //다 끝나면 멈춤
              cursor.style.display = 'none'; //커서 숨김
              isTyping = false; //타이핑 종료 표시
          }
      }, 70) //100ms 마다 글자 하나씩
  }

  ScrollTrigger.create({
    trigger: '.section7',
    start: 'top 100%',
    onEnter: () => startTyping(),
    onEnterBack: () => startTyping(),
  });






  



  /* 
    메뉴 바 액션 효과 
  const tl = gsap.timeline({paused: true});

  tl.from(".gsap-swipe", {
    y: 20,
    x: 20,
    rotate: -40,
    duration: 2,
    transformOrigin: '30% 80%',
    ease: "elastic.out(1, 0.5)",
  }, 0)
  .from(".maskSwipe", {
    xPercent: -100,
    ease: "sine.inOut"
  }, 0.4)
  .from(".line", {
    drawSVG: "0%",
    duration: 0.5,
    stagger: {
      each: 0.2
    }
  }, 1);
  
  const hover = document.querySelector('.hover-target');
  hover.addEventListener('mouseenter', () => tl.restart());
  hover.addEventListener('mouseleave', () => tl.pause(0));
   */




  /* Splitting(); 택스트 효과 2

  document.querySelectorAll(".tab2 ul").forEach(li => {
    const chars = li.querySelectorAll(".char");
    li.addEventListener("mouseenter", () => {
      chars.forEach((char, i) => {
        gsap.to(char, {
          y: "100%",
          opacity: 0,
          delay: i * 0.02,
          duration: 0.3,
          ease: "power3.out"
        });
      });
    });
    li.addEventListener("mouseleave", () => {
      chars.forEach((char, i) => {
        gsap.to(char, {
          y: 0,
          opacity: 1,
          delay: i * 0.03,
          duration: 0.4,
          ease: "power3.in"
        });
      });
    });


  }); */


   //이미지 호버 상황
   const hoverTexts = document.querySelectorAll('.b_tab li a');
   const images = document.querySelectorAll('.b_tab_img > div');
   
   let targetX = 0;
   let currentX = 0;
   let activeImage = null;
   
   const baseX = window.innerWidth * 0.7; // 오른쪽 고정 base 위치
   const fixedY = window.innerHeight / 2; // 세로 중앙 고정
   
   hoverTexts.forEach((text, index) => {
     text.addEventListener('mouseenter', (e) => {
       images.forEach(img => img.style.opacity = 0);
       activeImage = images[index];
       activeImage.style.opacity = 1;
       activeImage.style.transition = 'opacity 0.3s ease';
     });
   
     text.addEventListener('mousemove', (e) => {
       // 마우스 x 위치와 baseX 비교해서 차이를 만들어줌
       const mouseX = e.clientX;
       const delta = (mouseX - window.innerWidth / 2) * 0.05; // 화면 중앙 기준 살짝만 움직임
       targetX = baseX + delta; // baseX를 중심으로 delta만큼만 이동
     });
   
     text.addEventListener('mouseleave', () => {
       if (activeImage) {
         activeImage.style.opacity = 0;
         activeImage = null;
       }
     });
   });
   
   function animate() {
     if (activeImage) {
       currentX += (targetX - currentX) * 0.1;
       activeImage.style.left = currentX + 'px';
       activeImage.style.top = fixedY + 'px';
       activeImage.style.transform = `translate(-50%, -50%)`;
     }
     requestAnimationFrame(animate);
   }
   
   animate();
   


   //con5 포트폴리오 효과과
   let con5Article = gsap.utils.toArray('.articles article');
   con5Article.forEach((el, i) => {
       gsap.timeline({
           scrollTrigger: {
               trigger: el,
               start: 'top bottom', //화면 아래쪽에서 시작
               end: 'top 20%',  //화면 위쪽으로 거의다 올라왔을때 끝
               scrub: 0.5 //스크롤에 따라 부드럽게 반응
           }
       }).fromTo(
           el, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1 }, 0 //타임라인 시작 위치
       )
   })

 


 ///글씨 효과 about me 쪽쪽
   gsap.registerPlugin(ScrollTrigger);

   gsap.from(".name", {
     scrollTrigger: {
       trigger: ".name",
       start: "top 80%", // 화면 상단에서 80% 지점에 왔을 때 시작
       toggleActions: "play none none none",
     },
     y: 100,    // 아래에서 위로 올라오게
     opacity: 0,
     duration: 1
   });
});










