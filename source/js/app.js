const   mobileMenuButton = document.getElementById('mobileMenuButton'),
        navigation = document.getElementById('navigation'),
        topOrder = document.getElementById('topOrder'),
        cartCatalog = document.querySelectorAll('.catalog__price-icon'),
        modal = document.getElementById('modal'),
        modalExit = document.getElementById('modalExit');

topOrder.addEventListener('click', showModal);
modalExit.addEventListener('click', closeModal);
mobileMenuButton.addEventListener('click', showNavigation);

// отслеживаем размер вьюпорта по ширине => 
// начиная с табличного, убираем обязательный скрывающий класс с главной навигации
// отдельная переменная для размера вьюпорта НЕ создавалась тк значение в нее записывалось при загрузке DOM, а нам нужно значение в данный момент времени
// также проверяем ширину при загрузке страницы
window.onload = function () {
    if ((document.body.offsetWidth > 750) && (navigation.classList.contains('visually-hidden'))) {
        navigation.classList.remove('visually-hidden');
    }
};

window.onresize = function () {
    if ((document.body.offsetWidth > 750) && (navigation.classList.contains('visually-hidden'))) {
        navigation.classList.remove('visually-hidden');
    } else if (document.body.offsetWidth < 750) {
        console.log(document.body.offsetWidth);
        navigation.classList.add('visually-hidden');
    }
};


// скрытие/показ навигации в мобильной версии
function showNavigation () {
    if(navigation.classList.contains('visually-hidden')) {
        navigation.classList.remove('visually-hidden');
        mobileMenuButton.style.backgroundImage = "url('/img/icon-menu-close.svg')";
    } else {
        navigation.classList.add('visually-hidden');
        mobileMenuButton.style.backgroundImage = "url('/img/icon-menu-open.svg')";
    }
}

// скрытие и показ модального окна
function showModal () {
   if (modal.classList.contains('visually-hidden')) {
        modal.classList.remove('visually-hidden');
    }
}

function closeModal () {
    modal.classList.add('visually-hidden');
}
