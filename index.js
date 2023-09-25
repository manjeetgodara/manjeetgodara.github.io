$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY>20){
      $('.navbar').addClass("sticky");
    }else{
      $('.navbar').removeClass("sticky");
    }
  });

  //toggle menu/navbar script
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

});

// typing animation
var typed=new Typed(".typing",{
  strings:["Developer","Day-Dreamer","Freelancer"],
  typeSpeed:100,
  backSpeed:60,
  loop:true
})


function downloadAndOpenResume(event) {
  // URL of the resume PDF
  const resumeUrl = 'https://drive.google.com/file/d/1Xv6JH51EJ_mXVHlkhtJyUGd8iVo6kUdv/view?usp=sharing';

  // Open the PDF in a new tab
  window.open(resumeUrl, 'ResumeTab');

  // Trigger the download
  const link = document.createElement('a');
  link.href = 'images/Manjeet-Resume.pdf';
  link.download = 'Manjeet-Resume.pdf';
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

