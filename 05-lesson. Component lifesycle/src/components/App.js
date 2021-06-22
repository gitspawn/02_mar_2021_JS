import React, { Component } from "react";
import Layout from "./Layout";
// import Tasks from "./Tasks/Tasks";
// import Modal from "./Modal";
import Clock from "./Clock";
import Tabs from "./Tabs";
import tabs from "../tabs.json";

export default class App extends Component {
    state = {
        showModal: false,
    };

    toggleModal = () => {
        // console.log(this.state.showModal);

        this.setState((prevState) => ({ showModal: !prevState.showModal }));
    };

    render() {
        let { showModal } = this.state;

        return (
            <Layout>
                <Tabs items={tabs}></Tabs>
            </Layout>

            // <Layout>
            //     <button onClick={this.toggleModal} type="button">
            //         {showModal ? "Hide" : "Show"}
            //     </button>
            //     {showModal && <Clock />}
            // </Layout>

            // <Layout>
            //     {/* <Tasks /> */}
            //     {!showModal && (
            //         <button onClick={this.toggleModal} type="button">
            //             Show modal
            //         </button>
            //     )}

            //     {showModal && (
            //         <Modal onClose={this.toggleModal}>
            //             <h1>Modal window</h1>
            //             <p>Modal Content</p>
            //             <button onClick={this.toggleModal} type="button">
            //                 Close modal
            //             </button>
            //         </Modal>
            //     )}
            // </Layout>
        );
    }
}

// export default class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             text: "qwe",
//         };

//         console.log("Constructor...");
//     }

//     componentDidMount() {
//         // http requests
//         // addEventListener
//         // this.setState()

//         this.setState({ text: "abs" });
//         console.log("ComponentDidMount...");
//     }

//     componentDidUpdate() {
//         console.log("ComponentDidUpdate...");
//     }

//     componentWillUnmount(){
//         //   http requests
//         // снимаем слушатели
//         // снимаем таймеры
//         // утечки памяти
//     }

//     render() {
//         console.log("Render...");
//         return (
//             <div>
//                 App
//                 {console.log(this.state.text)}
//                 {/* {this.updateStateTest()} */}
//             </div>
//         );
//     }
// }
