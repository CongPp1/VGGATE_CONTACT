import { Fragment } from "react"
import logofooter from "../../src/asset/logofooter.png"
import Button from "../components/Button"

const Footer = () => {
    const buttonText = [
        { text: 'Home', active: false },
        { text: 'Services', active: false },
        { text: 'Contacts', active: false },
    ];

    return (
        <Fragment>
            <div className="footer-container" >
                <div className="footer-container-comp" >
                    <div className="footer-comp-1">
                        <div className="img-footer">
                            <img src={logofooter} alt="logoFooter" />
                        </div >
                        <div className="link-list">
                            <div className="linkedin-link">
                                <a href="https://www.linkedin.com/company/vggate">LinkedIn</a>
                            </div>
                            <div className="github-link">
                                <a href="https://github.com/Vggate">Git Hub</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-comp-2">
                        <h6>Our Address:</h6>
                        <p>7th Floor, MITEC Tower</p>
                        <p>Duong Dinh Nghe Street</p>
                        <p>Cau Giay District</p>
                        <p>Hanoi, Vietnam</p>
                    </div>
                    <div className="footer-comp-3">
                        <div className="footer-comp-3-mailbox">
                            <h6>Our Mailbox</h6>
                            <p>sales@vggate.com</p>
                        </div>
                        <div className="footer-comp-3-phone">
                            <h6>Our Phone</h6>
                            <p>+84 947645153</p>
                        </div>
                    </div>
                </div>
                <div className="footer-menu-container" >
                    <div style={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                        {buttonText.map((button) => (
                            <Button
                                className={button.active ? 'btn-header-active' : 'btn-header'}
                                key={button}
                                text={button.text}
                                textColor="text-black"
                            />
                        ))}
                    </div>
                </div>
                <div className="sign">
                    <p>Copyright © 2023 VGGate. All Rights Reserved.</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;