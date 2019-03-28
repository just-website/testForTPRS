//раскрытие списка
(function(listTag) {
    const list = document.querySelector(listTag);
    if (!list) {
        return;
    }

    list.addEventListener('click', function(event) {
        const target = event.target.closest('li');
        target.classList.toggle('is-active');
    });
})('.j-pay-list');

//раскрытия меню 
(function (navTag) {
    const nav = document.querySelector(navTag);
    if (!nav) {
        return;
    }

    nav.addEventListener('click', function (event) {
        this.classList.toggle('is-active');
    });
})('.j-header-nav');