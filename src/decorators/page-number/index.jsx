import React from 'react';

export default ComposedComponent => {
    return class PageNumber extends React.Component {
        constructor() {
            super();

            this.state = {
                pageNumber: 1
            };

            this.pageNumber = {
                inc: this.inc,
                dec: this.dec,
                reset: this.reset,
                setCallback: this.setCallback,
                value: () => this.state.pageNumber
            };
        }

        setCallback = callback => {
            this.callback = callback;
        }

        inc = () => {
            const { pageNumber } = this.state;

            this.setState({ pageNumber: pageNumber + 1 }, this.callback);
        }

        dec = () => {
            const { pageNumber } = this.state;

            this.setState({ pageNumber: pageNumber - 1 }, this.callback);
        }

        reset = () => this.setState({ pageNumber: 1 }, this.callback)

        render = () => (
            <ComposedComponent
                pageNumber={this.pageNumber}
                {...this.props}
            />
        )
    };
};
