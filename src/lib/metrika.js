/**
 * Послать достижение цели, если подключена метрика
 *
 * @param {String} goal
 * @param {Object} [params]
 * @returns {void}
 */
export function reachGoal(goal, params = {}) {
    if (window.yaCounter) {
        window.yaCounter.reachGoal(goal, params);
    }
}

/**
 * Отправить цель "Просмотр правил"
 *
 * @returns {void}
 */
export function reachRuleGoal() {
    reachGoal('rule');
}

/**
 * Отправить цель "Просмотр визарда"
 *
 * @param {Number} number
 * @returns {void}
 */
export function reachWizardGoal(number) {
    reachGoal('wizard', { wizardClosedSlide: number });
}

/**
 * Отправить цель "Отобрать устройство"
 *
 * @param {Number} grabProductId
 * @param {String} grabModel
 * @returns {void}
 */
export function reachGrabGoal(grabProductId, grabModel = 'Безымянное') {
    const params = {
        grabProductId,
        grabModel
    };

    reachGoal('grab', params);
}

/**
 * Отправить цель "Сдать устройство в ремонт"
 *
 * @param {Number} serviceProductId
 * @param {String} serviceModel
 * @returns {void}
 */
export function reachServiceGoal(serviceProductId, serviceModel = 'Безымянное') {
    const params = {
        serviceProductId,
        serviceModel
    };

    reachGoal('service', params);
}

/**
 * Отправить цель "Забронировать устройство"
 *
 * @param {Number} lockProductId
 * @param {String} lockModel
 * @returns {void}
 */
export function reachLockGoal(lockProductId, lockModel = 'Безымянное') {
    const params = {
        lockProductId,
        lockModel
    };

    reachGoal('lock', params);
}

/**
 * Отправить цель "Разбронировать устройство"
 *
 * @param {Number} unlockProductId
 * @param {String} unlockModel
 * @returns {void}
 */
export function reachUnlockGoal(unlockProductId, unlockModel = 'Безымянное') {
    const params = {
        unlockProductId,
        unlockModel
    };

    reachGoal('unlock', params);
}
