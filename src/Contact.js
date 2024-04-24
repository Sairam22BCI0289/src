import Nav from './Nav.js';

const Contact = () => {
    return (
        <div>
            <Nav />
            <br />
            <h1 className="page_title">Contact Us</h1>
            <br />
            <div className="contact_det">
                <p><b>Email</b> : csk@gmail.com</p>
                <p><b>Mobile no.</b> : 1234567890</p>
                <p><b>Instagram</b> : <a href="https://www.instagram.com/chennaiipl/" id="click">@chennaiipl</a></p>
                <p><b>Twitter</b> : <a href="https://twitter.com/ChennaiIPL" id="click">ChennaiIPL</a></p>
            </div>
        </div>
    );
}

export default Contact;