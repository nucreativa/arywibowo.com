import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <header className="row justify-content-center">
                    <h1 id="logo">Ary Wibowo</h1>
                </header>

                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <ul className="list-unstyled " id="social-links">
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/in/nucreativa/" target="_blank">
                                    <img src="/svg/linkedin.svg" alt="LinkedIn"/>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://stackoverflow.com/users/2097989/ary-wibowo?tab=profile"
                                   target="_blank">
                                    <img src="/svg/stackoverflow.svg" alt="Stack Overflow"/>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://github.com/nucreativa" target="_blank">
                                    <img src="/svg/github.svg" alt="Github"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <footer className="row justify-content-center">
                    &copy; 2018. Ary Wibowo. All rights reserved.
                </footer>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Example/>, document.getElementById('root'));
}
