import React, { Component } from 'react';
import { Button } from 'lego-on-react';
import 'lego-on-react/src/components/button/button.css';

class AppNEW extends Component {
    render() {
        return (
            <div>
                <Button
                theme="action" size="m" view="default" tone="default"
                    size='m'
                    onClick={() => alert('клик')}>
                        Кнопочка
                </Button>
            </div>
        );
    }
}

export default AppNEW;
