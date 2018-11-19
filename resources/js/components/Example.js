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

                        <p>A results-driven, customer-focused, articulate and analytical person who can think
                            “out of the box”. Have deep technical knowledge and constantly learning and exploring
                            the latest technology trends and innovations.</p>

                        <h2>Education</h2>
                        <ul className="list-unstyled eduexp">
                            <li><h3>Teknik Informatika</h3><h4>Universitas Gunadarma (2003 - 2008)</h4></li>
                        </ul>

                        <h2>Experience</h2>
                        <ul className="list-unstyled eduexp">
                            <li>
                                <h3>Technology Manager</h3><h4>ANTV (2017 - Now)</h4>
                                <p>Led technology team to build digital platform for ANTV, one of biggest Indonesia's
                                    Television station. Rapidly growing the team and setting up a new technology
                                    platform to allow faster, more agile delivery of new innovations to the market.</p>
                                <ol>
                                    <li>Successfully launch ANTVKLIK.COM V1 on 22nd Oct 2017, a lifestyle and
                                        newstainment portal.</li>
                                    <li>Successfully launch ANTVKLIK.COM V2 on 22nd Oct 2018, a second generation that
                                        allow our audience to enrich their experience with our solutions : Klik Kerja,
                                        Klik Duit, and Klik Store.</li>
                                </ol>
                            </li>
                            <li>
                                <h3>Software Engineer</h3><h4>Bizzy Indonesia (2015 - 2017)</h4>
                                <p>Working on Bizzy's BackOffice team to create a platform that support business
                                    operational from creating their Sales App to Warehouse App.</p>
                            </li>
                            <li>
                                <h3>Associate Product Manager</h3><h4>Icar Asia Limited (2014 - 2015)</h4>
                                <p>Led Indonesia's development team to maintain and enhance Mobil123.com.</p>
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
