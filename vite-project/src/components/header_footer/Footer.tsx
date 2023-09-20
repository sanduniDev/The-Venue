import {Fade} from 'react-awesome-reveal'

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade triggerOnce delay={500}>
                <div className="font_righteous footer_logo_venue">The Venue</div>
                <div className="footer_copyright">The venue 2023 all rights reserved</div>
            </Fade>
        </footer>
    )
}

export default Footer;