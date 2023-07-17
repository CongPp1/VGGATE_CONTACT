import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactForm = () => {
    return (
        <>
            <div className="contact-form">
                <span>//contact details</span>
                <h2 className="main-heading">Contact Us</h2>
                <p>Give us a call or drop by anytime, we endeavour to answer
                    all enquiries within 24 hours on business days. We will be happy to answer your questions.
                </p>
            </div>
            <div className="addr-form">
                <h2>Our Address:</h2>
                <p>7th Floor, MITEC Tower, Duong Dinh Nghe Street, Yen Hoa Ward, Cau Giay District, Hanoi.</p>
            </div>
            <div className="mail-form">
                <h2>Our Mailbox:</h2>
                <p>sales@vggate.com</p>
            </div>
            <div className="contact-link">
                <div className='skype-link'>
                    <a href='https://join.skype.com/invite/pygzdgflqhAF'>Skype</a>
                </div>
                <div className='whatapp-link'>
                    <a href='https://api.whatsapp.com/send/?phone=84941889389&text&type=phone_number&app_absent=0'>WhatsApp</a>
                </div>
            </div>
        </>
    )
}

export default ContactForm;