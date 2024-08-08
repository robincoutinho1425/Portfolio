let typed = new Typed("#element", {
  strings: [
    "<i>Undergraduate CS Student</i>",
    "<i>Frontend Developer</i>",
    "<i>Web Developer</i>",
     "<i>Competitive Programmer</i>"
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
      behavior:"smooth"
    });
    if(!contact){
      section.style.height = '100vh'; //  full height of the section
    }
   
  });
});

