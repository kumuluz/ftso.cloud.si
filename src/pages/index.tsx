import React from "react";

import {
    page,
    headerContainer,
    infoContainer,
    subtitle,
    walletContainer, headerImage
} from "./index.page.module.scss";
import cloudLogo from "../assets/images/cloud-logo-white.svg";
import { WalletInfo } from "../components/wallet-info/wallet-info.component";
import { SEO } from "../components/seo/seo.component";

const IndexPage = () => {
    
    return (
        <div className={page}>
            <SEO title="FTSO Cloud" canonical="/" description="FTSO Cloud landing page"/>
            
            <div className={headerContainer}>
                
                <div className={headerImage}>
                    <img src={cloudLogo} alt="ftso cloud logo"/>
                </div>
                
                <h1>FTSO Cloud</h1>
                
                <div className={subtitle}>
                    <a href="https://flare.xyz/" target="_blank" rel="noreferrer noopener">Flare</a>
                    {" "}Times Series
                    {" "}<a href="https://flaremetrics.io/" target="_blank" rel="noreferrer noopener">Oracle</a>
                </div>
            
            </div>
            
            <div className={infoContainer}>
                
                <div>
                    Delegate your votes and earn rewards:
                </div>
                <div className={walletContainer}>
                    <WalletInfo/>
                </div>
            
            </div>
        
        </div>
    );
};

export default IndexPage;
