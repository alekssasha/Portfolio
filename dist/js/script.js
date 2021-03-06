$(document).ready(function(){
    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                box: "required"
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                },
                box: "Пожалуйста поставьте галочку"
            }
        });
    };

    validateForms('#contacts-form');
  });

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

      hamburger.addEventListener('click', () => {
          menu.classList.add('active');
      });

      closeElem.addEventListener('click', () => {
          menu.classList.remove('active');
      });

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-item span');

      counters.forEach((item, i) => {
          lines[i].style.width = item.innerHTML;
      });

     