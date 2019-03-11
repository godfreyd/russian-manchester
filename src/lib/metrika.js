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
 * @param {Number} grabDeviceId
 * @param {String} grabModel
 * @returns {void}
 */
export function reachGrabGoal(grabDeviceId, grabModel = 'Безымянное') {
    const params = {
        grabDeviceId,
        grabModel
    };

    reachGoal('grab', params);
}

/**
 * Отправить цель "Сдать устройство в ремонт"
 *
 * @param {Number} serviceDeviceId
 * @param {String} serviceModel
 * @returns {void}
 */
export function reachServiceGoal(serviceDeviceId, serviceModel = 'Безымянное') {
    const params = {
        serviceDeviceId,
        serviceModel
    };

    reachGoal('service', params);
}

/**
 * Отправить цель "Забронировать устройство"
 *
 * @param {Number} lockDeviceId
 * @param {String} lockModel
 * @returns {void}
 */
export function reachLockGoal(lockDeviceId, lockModel = 'Безымянное') {
    const params = {
        lockDeviceId,
        lockModel
    };

    reachGoal('lock', params);
}

/**
 * Отправить цель "Разбронировать устройство"
 *
 * @param {Number} unlockDeviceId
 * @param {String} unlockModel
 * @returns {void}
 */
export function reachUnlockGoal(unlockDeviceId, unlockModel = 'Безымянное') {
    const params = {
        unlockDeviceId,
        unlockModel
    };

    reachGoal('unlock', params);
}
