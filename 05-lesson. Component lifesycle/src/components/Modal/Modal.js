import React, { Component } from "react";
import "./Modal.css";

export default class Modal extends Component {
    componentDidMount() {
        console.log("Modal Mount");

        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        console.log("Unmount.....");
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if (event.code === "Escape") {
            // console.log("Закрываем модалку");
            this.props.onClose();
        }
    };

    render() {
        return (
            <div className="Backdrop">
                <div className="Modal">{this.props.children}</div>
            </div>
        );
    }
}
