import React from "react";
import "./Footer.css"
const Footer = () => {
    return ( 
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*Column 1*/}
                    <div className="col">
                        <h4>Captain Fluffles INC.</h4>
                        <ul className="list-unstyled">
                        <li>WhatsApp - 060 770 2355</li>
                        <li>Instagram - daniel_penguin</li>
                        <li>Gmail - dpengmarais99@gmail.com</li>
                        </ul>
                    </div>
                    
       
                    
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy; {new Date().getFullYear()} Captain Fluffles INC. | I love Penguins
                    </p>
                </div>
                
            </div>
        </div>
        
     );
}
 
export default Footer;