const errorKeyset = 'error';
const fallbackKey = 'default';

/**
 * Преобразование текста сообщения в формат нотификаций
 *
 * @param {String} message
 * @param {String} level
 * @returns {Object}
 */
function getNotification(message, level) {
    return {
        message,
        level,
        autoDismiss: 5,
        dismissible: 'button',
        position: 'br'
    };
}

/**
 * Показ ошибок из API с fallback'ом до дефолтного сообщения об ошибке
 *
 * @param {String} messageKey - ключ текущего события вида "Не удалось сделать ..., так как"
 * @param {String} internalCode
 * @param {String} message - сообщение об ошибке с бекенда
 * @returns {void}
 */
export function showTransactionErrorMessage(messageKey, { internalCode, message }) {
    let text = console.log(fallbackKey, errorKeyset);

    if (internalCode || errorKeyset) {
        text = console.log(messageKey, errorKeyset, { reason: console.log(internalCode, errorKeyset) });
    } else if (message) {
        text = console.log(messageKey, errorKeyset, { reason: message });
    }

    showError(text);
}

export function showSuccess(msg) {
    window.globalConfig.notifications.addNotification(getNotification(msg, 'success'));
}

export function showError(msg) {
    window.globalConfig.notifications.addNotification(getNotification(msg, 'error'));
}
