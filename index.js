addListeners();

function addListeners() {

    document.getElementById('heartBeatingPlay')
    .addEventListener('click', function () {
        const block = document.getElementById('heartBeatingBlock');
        animaster().heartBeating(block);
    });

    document.getElementById('showAndHidePlay')
    .addEventListener('click', function () {
        const block = document.getElementById('showAndHideBlock');
        animaster().showAndHide(block, 5000);
    });

    document.getElementById('moveAndHidePlay')
        .addEventListener('click', function () {
            const block = document.getElementById('moveAndHideBlock');
            animaster().moveAndHide(block, 5000);
        });

    document.getElementById('fadeInPlay')
        .addEventListener('click', function () {
            const block = document.getElementById('fadeInBlock');
            animaster().fadeIn(block, 5000);
        });

    document.getElementById('fadeOutPlay')
        .addEventListener('click', function () {
            const block = document.getElementById('fadeOutBlock');
            animaster().fadeOut(block, 5000);
        });

    document.getElementById('movePlay')
        .addEventListener('click', function () {
            const block = document.getElementById('moveBlock');
            animaster().move(block, 1000, {x: 100, y: 10});
        });

    document.getElementById('scalePlay')
        .addEventListener('click', function () {
            const block = document.getElementById('scaleBlock');
            animaster().scale(block, 1000, 1.25);
        });
}

function animaster() {
    this.move = function(element, duration, translation) {
        element.style.transitionDuration = `${duration}ms`;
        element.style.transform = getTransform(translation, null);
    }

    this.scale = function(element, duration, ratio) {
        element.style.transitionDuration =  `${duration}ms`;
        element.style.transform = getTransform(null, ratio);
    }

    this.fadeIn = function(element, duration) {
        element.style.transitionDuration =  `${duration}ms`;
        element.classList.remove('hide');
        element.classList.add('show');
    }

    this.fadeOut = function(element, duration) {
        element.style.transitionDuration =  `${duration}ms`;
        element.classList.remove('show');
        element.classList.add('hide');
    }

    this.moveAndHide = function(element, duration) {
        this.move(element, duration * 2 / 5, {x: 100, y: 20});
        setTimeout(() => this.fadeOut(element, duration * 3 / 5), duration * 2 / 5);
    }
    
    this.showAndHide = function(element, duration) {
        this.fadeIn(element, duration / 3);
        setTimeout(() => this.fadeOut(element, duration / 3), duration * 2 / 3);
    }

    this.heartBeating = function(element) {
        this.scale(element, 500, 1.4);
      //  while (true) {
        setTimeout(() => this.scale(element, 500, 5/7), 500);
        setTimeout(() => this.scale(element, 500, 1.4), 500);
       // }
    }

    return this;
}

/**
 * Блок плавно появляется из прозрачного.
 * @param element — HTMLElement, который надо анимировать
 * @param duration — Продолжительность анимации в миллисекундах
 */

/**
 * Функция, передвигающая элемент
 * @param element — HTMLElement, который надо анимировать
 * @param duration — Продолжительность анимации в миллисекундах
 * @param translation — объект с полями x и y, обозначающими смещение блока
 */

/**
 * Функция, увеличивающая/уменьшающая элемент
 * @param element — HTMLElement, который надо анимировать
 * @param duration — Продолжительность анимации в миллисекундах
 * @param ratio — во сколько раз увеличить/уменьшить. Чтобы уменьшить, нужно передать значение меньше 1
 */

function getTransform(translation, ratio) {
    const result = [];
    if (translation) {
        result.push(`translate(${translation.x}px,${translation.y}px)`);
    }
    if (ratio) {
        result.push(`scale(${ratio})`);
    }
    return result.join(' ');
}
