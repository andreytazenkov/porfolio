// active .nav-item__href

const navItemHref = document.querySelectorAll('.nav-item__href');

for (let buttonItem of navItemHref) {
   buttonItem.addEventListener('click', function () {

      navItemHref.forEach((index) => index.setAttribute('data-active', 'false'));
      this.setAttribute('data-active', 'true')
   })
}


// burger active

function toggleActiveBurger() {
   const burger = document.querySelector('.nav-burger'),
      nav = document.querySelector('.nav'),
      navClose = document.querySelector('.nav-list-close'),
      body = document.querySelector('body');

   burger.addEventListener('click', function () {
      nav.classList.add('_active');
      body.classList.add('_lock');
   });

   navClose.addEventListener('click', function () {
      nav.classList.remove('_active');
      body.classList.remove('_lock');
   });

}

toggleActiveBurger();

//enter language
document.querySelector('.name-content__language-eng-label').addEventListener('keydown', (e) => {
   if (e.keyCode === 13) {
      searchNodeList(elementsArray, englishLanguage);
      bodyOpaciry.classList.remove('_ru');
      bodyOpaciry.classList.add('_eng');
   }
});

document.querySelector('.name-content__language-ru-label').addEventListener('keydown', (e) => {
   if (e.keyCode === 13) {
      searchNodeList(elementsArray, russianLanguage);
      bodyOpaciry.classList.remove('_eng');
      bodyOpaciry.classList.add('_ru');
   }
});



// replace language

function replaceLanguage() {
   const header = document.querySelector('header'),
      language = document.querySelector('.name-content__language'),
      nameContent = document.querySelector('.name-content');

   if (screen.width <= 768) {
      header.append(language);
   } else {
      nameContent.append(language);
   }
}

window.addEventListener('resize', function () {
   replaceLanguage();
})

replaceLanguage();

// :checked name-content__language

const nameContentLanguageTag = document.querySelectorAll('.name-content__language-tag');

nameContentLanguageTag.forEach((elem) => {
   elem.addEventListener('click', function (e) {
      for (let i of nameContentLanguageTag) {
         i.checked = false;
      };
      e.target.checked = true;
   })
})


// animate scroll

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll)
   function animOnScroll(param) {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            if (!animItem.classList.contains('_no-hide')) {
               animItem.classList.remove('_active');
            }
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + screenLeft }
   }

   setTimeout(() => {
      animOnScroll();
   }, 600);
}

// modal

$('.footer-button-open-form').click(function () {
   $('.footer-form-wrapper').fadeIn(300).css('display', 'flex');
   $('body').css('overflow', 'hidden');
});

$('.footer-form-close').click(function () {
   $('.footer-form-wrapper').fadeOut(300);
   $('body').css('overflow', 'auto');
});

function sayThankYou() {
   $('.footer-form-thank-you-wrapper').fadeIn(300).css('display', 'flex');
   $('body').css('overflow', 'hidden');
}

$('.footer-form-thank-you__close').click(function () {
   $('.footer-form-thank-you-wrapper').fadeOut(300);
   $('body').css('overflow', 'auto');
});

// scroll

$('a[href*="#"]').on('click', function () {
   $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
   }, 400);
   return false;
});

// show/hide sticy menu
function offsetPosition(element) {
   var offsetTop = 0;
   do {
      offsetTop += element.offsetTop;
   } while (element = element.offsetParent);
   return offsetTop;
}

const name = document.querySelector('.name');

let position = offsetPosition(name);

function startPosition() {
   window.addEventListener('scroll', function () {
      let start = window.pageYOffset;
      if (start >= position) {
         document.querySelector('.nav-sticy').classList.add('_active');
      } else {
         document.querySelector('.nav-sticy').classList.remove('_active');
      }
   });
}

startPosition();
