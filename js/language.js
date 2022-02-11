const navItemHrefLanguage = document.querySelectorAll('.nav-item__href'),
   navSticyItemHome = document.querySelectorAll('.nav-sticy-item__href'),
   nameContentHeading = document.querySelector('.name-content__heading'),
   nameContentDescription = document.querySelector('.name-content__description'),
   aboutMeHeading = document.querySelector('.about-me__heading'),
   aboutMeText = document.querySelectorAll('.about-me-text'),
   skillsHeading = document.querySelector('.skills__heading'),
   skillsText = document.querySelector('.skills__text'),
   portfolioHeading = document.querySelector('.portfolio__heading'),
   portfolioHref = document.querySelectorAll('.portfolio__href'),
   footerHeader = document.querySelector('.footer-header'),
   footerText = document.querySelector('.footer-text'),
   footerButtonOpenForm = document.querySelector('.footer-button-open-form'),
   footerFormHeading = document.querySelector('.footer-form-heading'),
   footerFormLabel = document.querySelectorAll('.footer-form-label'),
   footerFormButton = document.querySelector('.footer-form-button'),
   footerFormThankYouHeading = document.querySelector('.footer-form-thank-you__heading');


const elementsArray = [navItemHrefLanguage, navSticyItemHome, nameContentHeading, nameContentDescription, aboutMeHeading, aboutMeText, skillsHeading, skillsText, portfolioHeading, portfolioHref, footerHeader, footerText, footerButtonOpenForm, footerFormHeading, footerFormLabel, footerFormButton, footerFormThankYouHeading];
const russianLanguage = [["Домой", "Обо мне", "Навыки", "Портфолио", "Контакты"], ["Домой", "Обо мне", "Навыки", "Портфолио", "Контакты"], "Андрей Т.", "Веб-верстальщик", "Обо мне", ["Привет, я Андрей, веб-верстальщик из России.", "Интересуюсь фронтендом и всем, что с ним связано.", "Я учился на курсах Skillbox и др.", "Я готов реализовывать большие проекты с замечательными людьми."], "Навыки", "У меня есть следующие навыки.", "Портфолио", ["больше о Blanchart", " больше о Dudushape", "больше о Cosmic landing page"], "Контакты", "Хотите узнать больше или просто поболтать?<span></span>Добро пожаловать!", "Отправить сообщение", "Связаться со мной", ["Введите Ваше имя", "Введите Ваш телефон"], "Отправить", "Спасибо за заявку,<span></span> я свяжусь с вами"];
const englishLanguage = [["Home", "About me", "Skills", "Portfolio", "Contacts"], ["Home", "About me", "Skills", "Portfolio", "Contacts"], "Andrey T.", "HTML-layout", "About me", ["Hello, I'm Andrey, a web developer from Russia.", "I am interested in frontend and everything related to it.", "I studied at Skillbox courses, etc.", "I am ready to implement great projects with wonderful people."], "Skills", "I have the following skills.", "Portfolio", ["more Blanchart", "more Dudushape", "more Cosmic landing page"], "Contacts", "Want to know more or just chat?<span></span>You are welcome!", "Send message", "Contact with me", ["Enter your name", "Enter your phone"], "Send", "Thank you for your application,<span></span> I will contact you"];

const turnOnRussianLanguage = document.getElementById('ru');
const turnOnEnglishLanguage = document.getElementById('eng');
const bodyOpaciry = document.querySelector('body');


function searchNodeList(param, language) {
   for (let i = 0; i < param.length; i++) {
      if (NodeList.prototype.isPrototypeOf(param[i])) {
         let findsArray = language[i];
         if (Array.isArray(findsArray)) {
            for (let k = 0; k < param[i].length; k++) {
               param[i][k].innerHTML = findsArray[k];
            }
         }
      } else {
         param[i].innerHTML = language[i];
      }

   }
}

document.addEventListener('DOMContentLoaded', function () {
   turnOnRussianLanguage.checked = false;
   turnOnEnglishLanguage.checked = true;
})

turnOnEnglishLanguage.addEventListener('click', () => {
   searchNodeList(elementsArray, englishLanguage);
   bodyOpaciry.classList.remove('_ru');
   bodyOpaciry.classList.add('_eng');
});

turnOnRussianLanguage.addEventListener('click', () => {
   searchNodeList(elementsArray, russianLanguage);
   bodyOpaciry.classList.remove('_eng');
   bodyOpaciry.classList.add('_ru');
});