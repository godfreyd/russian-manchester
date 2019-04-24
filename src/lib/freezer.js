let freezeCounter = 0;

/**
 * Запрет скролла. Вызывается при открытии модального окна.
 *
 * @returns {void}
 */
export function freezeBody() {
    if (freezeCounter === 0) {
        document.querySelector('body').style.overflow = 'hidden';
    }

    freezeCounter += 1;
}

/**
 * Возвращение возможности скролла. Вызывается при закрытии модального окна.
 *
 * @returns {void}
 */
export function unfreezeBody() {
    freezeCounter = Math.max(freezeCounter - 1, 0);

    if (freezeCounter === 0) {
        document.querySelector('body').style.overflow = 'visible';
    }
}
