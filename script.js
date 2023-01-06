// -----------------Storing information in Js object --------------------------------

const projects = [
  {
    ctaId: 1,
    name: 'Toniccc  ',
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: ['./images/desktop/tonic-project-desktop.png', './images/Snapshoot Portfolio.png'],
    technologies: ['html', 'css', 'javascript'],
    live: 'https://ridabensalem.github.io/',
    source: 'https://github.com/ridabensalem/ridabensalem.github.io',
  },
  {
    ctaId: 2,
    name: 'Multi-Post Stories',
    description:'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: ['./images/desktop/multi-post-stories-project.png', './images/prof-art-project.png'],
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    live: 'https://ridabensalem.github.io/',
    source: 'https://github.com/ridabensalem/ridabensalem.github.io',
  },
  {
    ctaId: 3,
    name: 'Facebook 360',
    description:'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    image: ['./images/desktop/facebook-360-project.png' , './images/pop-mobile.png'],
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    live: 'https://ridabensalem.github.io/',
    source: 'https://github.com/ridabensalem/ridabensalem.github.io',
  },
  {
    ctaId: 4,
    name: 'Uber Navigation',
    description:'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: ['./images/desktop/uber-navigation-project.png', './images/multi-post-project.png'],
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    live: 'https://ridabensalem.github.io/',
    source: 'https://github.com/ridabensalem/ridabensalem.github.io',
  }
]
//  -----------------Handiling the pop up functionality----------------------------
const buttonPopup = document.querySelector('button');
const modalPopup = document.querySelector('.block-popup');
function Display() {
  modalPopup.style.display = 'block';
}
function closePopup() {
  modalPopup.style.display = 'none';
}


// dynamic
const work_titles = document.querySelectorAll(".works__card__title");
const work_desc = document.querySelectorAll(".works__card__dsc");
const work_tech = document.querySelectorAll(".works__card__topics__text");
const workImages = document.querySelectorAll(".card_image");

//popup
const pop_titles = document.querySelectorAll(".popup-title");
const pop_desc = document.querySelectorAll(".popup-description");
const pop_img = document.querySelectorAll(".pop-image");


projects.forEach((project) => {
  if(project !=null){
    workImages.forEach((i) => {
      i.setAttribute("src", project.image[0]);
    })
  }
});


for(let i=0;i<projects.length;i++){
  for(let i=0;i<work_titles.length;i++){
    work_titles[i].innerHTML = projects[i].name;
  }
  for(let i=0;i<work_desc.length;i++){
    work_desc[i].innerHTML = projects[i].description;
  }

  for(let i=0;i<pop_titles.length;i++){
    pop_titles[i].innerHTML = projects[i].name;
  }
  for(let i=0;i<pop_desc.length;i++){
    pop_desc[i].innerHTML = projects[i].description;
  }
}