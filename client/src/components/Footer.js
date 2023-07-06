import React from 'react';
import '../Styles/Footer.css';
import g_plus from '../Images/social_icons/g_plus.png';
import facebook from '../Images/social_icons/facebook.png';
import youtube from '../Images/social_icons/you_tube.png';
import stumble_upon from '../Images/social_icons/stumble_upon.png';
import skype from '../Images/social_icons/skype.png';
import flickr from '../Images/social_icons/flickr.png';
import twitter from '../Images/social_icons/twitter.png';
import pinterest from '../Images/social_icons/pinterest.png';

function Footer () {
   return (
       <React.Fragment>
           <div className="footer" >
               <div className="container">
                   <div className="row">

                       <div className="col-md-4">

                           <div className="yolomy-div">
                               <div className="yolomy">YOLOMY</div>
                               <p className="yolomy-desc">
                                   WE ARE YOLOMY - WE UNDERSTAND <br />
                                   FASHION AND STYLE. WE CRAFT OUR <br />
                                   PRODUCTS WITH LOVE AND DILIGENCE. <br />
                               </p>
                           </div>

                       </div>

                       <div className="col-md-4">
                           <p className="text-center yolomy">We are social</p>
                           <br />

                           <p className="mx-auto icons">
                               <img src={g_plus} className="socio-icon" alt="g-plus"/>
                               <img src={facebook} className="socio-icon" alt="facebook"/>
                               <img src={youtube} className="socio-icon" alt="youtube"/>
                               <img src={stumble_upon} className="socio-icon" alt="stumble upon"/>
                               <img src={skype} className="socio-icon" alt="skype" />
                               <img src={flickr} className="socio-icon" alt="flickr" />
                               <img src={twitter} className="socio-icon" alt="twitter" />
                               <img src={pinterest} className="socio-icon" alt="pinterest" />
                           </p>
                       </div>

                       <div className="col-md-4">
                           <div className="footer-links-slogan float-md-right">
                               <div className="footer-links text-center">
                                   CREDITS | PRIVACY | ABOUT | CONTACT
                               </div>
                               <div className="slogan yolomy">
                                   Yolomy: We Mean Fashion
                               </div>
                           </div>

                       </div>

                       <div className="hide-on-mobile">
                           &nbsp;
                       </div>

                       <div className="col-12">
                           <p className="text-center copyrights">COPYRIGHT, YOLOMY INC</p>
                       </div>
                   </div>
               </div>

           </div>
       </React.Fragment>
   )
}

export default Footer;