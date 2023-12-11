
//COPY BUTTON
function copy_hash(htmlElement){
  if(!htmlElement){
    return
  }
  let elementText = htmlElement.innerText;

  let tempInput = document.createElement('input');
  tempInput.setAttribute('value', elementText);
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  tempInput.parentNode.removeChild(tempInput);
  alert("Hash copiato!")
}
document.querySelector('#copy-hash').onclick = function(){
  copy_hash(document.querySelector('#hash'))
}


const leftArrow = document.querySelectorAll('.scroll-left');
const rightArrow = document.querySelectorAll('.scroll-right');
const flex_container_steps = document.querySelectorAll('.flex_container_steps')
const margin = 2


function push_state(){
  // if (window.location.href == "http://127.0.0.1:5500/index.html"){
    var currentURL = window.location.href;
    var newURL = currentURL + '';
    var newState = { data: 'info' };
  
    history.pushState(newState, "info", newURL);  
  // }
}

//OPEN CONTAINER FROM SLIDESHOWS


//open then show only the right version by its ID
const back_btn_object_steps = document.querySelector('#back_btn2')
function open_steps(element_aimed){ 
  back_btn_object_steps.classList.add('show_from_left')
  var aimed_id = element_aimed.id
  step_version[aimed_id-1].classList.add('show_version')
 
  push_state()
  $(document.body).addClass('overflow-hidden');
  change_logo_light()
  desktop_nav.classList.remove("desktop_nav_shadow")
  desktop_nav.classList.add("desktop_nav_dark")
  desktop_nav.classList.remove("navbar-hide")
};


//open then scroll to element by its ID
const info_container = document.querySelector('.info-container')
const back_btn_object = document.querySelector('#back_btn')
function open_info(element_aimed){
  info_container.classList.add('show_from_left')
  back_btn_object.classList.add('show_from_left')
  var aimed_id = element_aimed.id
  var aimed_scroll_amount = info_container.querySelector(`.${aimed_id}`).offsetTop
  if (aimed_id != null){    
    setTimeout(function() {
      info_container.scrollTo({
        top: aimed_scroll_amount - 122,
        behavior: 'smooth'
      })
    }, 300);
  }

  push_state()
  $(document.body).addClass('overflow-hidden');
  change_logo_light()
  desktop_nav.classList.remove("desktop_nav_shadow")
  desktop_nav.classList.add("desktop_nav_dark")
  desktop_nav.classList.remove("navbar-hide")
};

function info_back_btn(){
  remove_show_from_left()
  history.back();
  navbar_width_scroll_control() 
}


function remove_show_from_left(){
  const show_from_left = document.querySelectorAll(".show_from_left");
  show_from_left.forEach(show_from_left_element => {
    show_from_left_element.classList.remove("show_from_left");
    $(document.body).removeClass('overflow-hidden');
  //hide all version of info-steps version
  setTimeout(function(){
    step_version.forEach(step_version => {
      step_version.classList.remove('show_version')
    })}, 100)
  }
)};



window.addEventListener("popstate", function(event) {
  remove_show_from_left()
  navbar_width_scroll_control() 
});
