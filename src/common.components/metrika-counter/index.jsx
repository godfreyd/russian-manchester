/* eslint valid-typeof: 0 */

import { Component } from 'react';

const callbacksField = 'yandex_metrika_callbacks';

export default class extends Component {
    componentDidMount() {
        const { metrika } = this.props;

        if (!metrika) {
            return;
        }

        this
            .initCallback()
            .insertScript();
    }

    initCallback() {
        const { metrika } = this.props;

        window[callbacksField] = [];
        window[callbacksField].push(() => {
            try {
                window.yaCounter = new window.Ya.Metrika(metrika);
            } catch (error) {
                console.error(error);
            }
        });

        return this;
    }

    _insertScript() {
        const script = document.createElement('script');
        const [insertPoint] = document.getElementsByTagName('script');

        script.async = true;
        script.src = 'https://mc.yandex.ru/metrika/watch.js';

        insertPoint.parentNode.insertBefore(script, insertPoint);
    }

    insertScript() {
        if (typeof window.opera === '[object Opera]') {
            document.addEventListener('DOMContentLoaded', this._insertScript, false);

            return;
        }

        this._insertScript();
    }

    render() {
        return null;
    }
}

export function reachGoal(id, payload) {
    if (window.yaCounter) {
        window.yaCounter.reachGoal(id, payload);

        return;
    }

    window[callbacksField].push(() => window.yaCounter.reachGoal(id, payload));
}
