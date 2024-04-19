import firstBankFooterLogo from "../assets/firstbank-footer.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import linkedin from "../assets/linkedin.svg";

const Footer = () => {
    return (
        <>
            <div className="w-full py-10 px-[60px] md:px-[100px] space-y-10 bg-[#003B65]">
                <div className="flex justify-evenly md:justify-end space-x-2">
                    <a href="#"><img className="" src={facebook} alt="facebook logo" /></a>
                    <a href="#"><img className="" src={instagram} alt="instagram logo" /></a>
                    <a href="#"><img className="" src={twitter} alt="twitter logo" /></a>
                    <a href="#"><img className="" src={youtube} alt="youtube logo" /></a>
                    <a href="#"><img className="" src={linkedin} alt="linkedIn logo" /></a>
                </div>

                <div className="md:flex md:justify-between">
                    <div className="w-fit md:w-[30%] space-y-5 pb-8">
                        <img src={firstBankFooterLogo} alt="firtbank logo" />
                        <p className="text-white text-start text-[14px] md:text-base leading-6 tracking-wide">
                            The FirstBank Technology Academy is an arm of the FirstBank Corporate University 
                            that was designed to drive upskilling, cross skilling, and hands-on learning of our tech talents.
                        </p>
                    </div>

                    <div className=" text-white text-start space-y-1 md:space-y-5 pb-8">
                        <h2 className="text-lg">Site Map</h2>
                        <ul className="text-sm space-y-2">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Tracks</li>
                            <li>Gallery</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    <div className="text-white text-start space-y-1 md:space-y-5 pb-8">
                        <h2 className="text-lg">Legal</h2>
                        <ul className="text-sm space-y-2">
                            <li>Terms Of Use</li>
                            <li>Privacy Policy</li>
                            <li>Cookies Policy</li>
                        </ul>
                    </div>

                    <div className=" text-white text-start md:text-end space-y-1 md:space-y-5 pb-8">
                        <h2 className="text-lg">Contact Us</h2>
                        <ul className="text-sm space-y-2">
                            <li>Feedback and Complaints</li>
                            <li>Find an Agent</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full h-0.5 bg-[#F0BD2D]"></div>

                <p className="text-white text-center md:text-start text-base">© 2024 First Bank Technology Academy</p>
            </div>
        </>
    )
}

export default Footer;