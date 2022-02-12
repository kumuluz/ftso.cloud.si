import React from "react";

import {
    page,
    headerContainer,
    infoContainer,
    subtitle,
    walletContainer, headerImage
} from "./index.page.module.scss";
import ftsoLogo from "../assets/images/ftso-plus-logo-col-white.svg";
import { WalletInfo } from "../components/wallet-info/wallet-info.component";
import { SEO } from "../components/seo/seo.component";

const IndexPage = () => {
    
    return (
        <div className={page}>
            <SEO title="FTSO Plus" canonical="/" description="FTSO Plus landing page"/>
            
            <div className={headerContainer}>
                
                <div className={headerImage}>
                    <img src={ftsoLogo} alt="ftso logo"/>
                </div>
                
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
                    <WalletInfo fullAddress={false}/>
                </div>
            
            </div>
        
        </div>
    );
};

export default IndexPage;
