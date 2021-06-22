import React, { Component, PureComponent } from "react";

export default class Tabs extends Component {
    state = {
        activeIndex: 0,
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.activeIndex !== this.state.activeIndex;
    }

    activeTabIndex = (idx) => {
        // console.log(idx);
        this.setState({ activeIndex: idx });
    };

    render() {
        // console.log(`Tabs render ${Date.now()}`);

        // console.log(this.props.items);
        let { items } = this.props;
        // let tab = this.props.items[this.state.activeIndex];
        let tab = items[this.state.activeIndex];

        return (
            <>
                <div>
                    {items.map((item, idx) => (
                        <button
                            onClick={() => this.activeTabIndex(idx)}
                            key={item.label}
                            type="button"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
                <div>
                    <h1>{tab.label}</h1>
                    <p>{tab.content}</p>
                </div>
            </>
        );
    }
}
