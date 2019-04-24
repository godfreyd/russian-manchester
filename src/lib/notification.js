import { i18n, hasKey } from '../components/i18n';

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
    let text = i18n(fallbackKey, errorKeyset);

    if (hasKey(internalCode, errorKeyset)) {
        text = i18n(messageKey, errorKeyset, { reason: i18n(internalCode, errorKeyset) });
    } else if (message) {
        text = i18n(messageKey, errorKeyset, { reason: message });
    }

    showError(text);
}

export function showSuccess(msg) {
    globalConfig.notifications.addNotification(getNotification(msg, 'success'));
}

export function showError(msg) {
    globalConfig.notifications.addNotification(getNotification(msg, 'error'));
}
