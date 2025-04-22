$(function () {
    /* about me 글자 모션 효과 */
      const aboutTexts = document.querySelectorAll(".about__text");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      }, {
        threshold: 0.7
      });
    
      aboutTexts.forEach(el => observer.observe(el));
  

  
   
});