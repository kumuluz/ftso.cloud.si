import React from "react";

import { FLARE_METRICS_URL } from "../config/ftso.config";
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
            <SEO title="FTSO Cloud"/>
            
            <div className={headerContainer}>
                
                <div className={headerImage}>
                    <img src={cloudLogo} alt="ftso cloud logo"/>
                </div>
                
                <h1>FTSO Cloud</h1>
                
                <div className={subtitle}>
                    <a href="https://flare.xyz/" target="_blank" rel="noreferrer noopener">Flare</a>
                    {" "}Times
                    {" "}<a href="https://flaremetrics.io/" target="_blank" rel="noreferrer noopener">Series</a>
                    {" "}Oracle
                </div>
            
            </div>
            
            <div className={infoContainer}>
                
                <div>
                    Delegate your votes and earn rewards:
                    {" "}<a href={FLARE_METRICS_URL} target="_blank" rel="noreferrer noopener">{FLARE_METRICS_URL}</a>
                </div>
                <div className={walletContainer}>
                    <span>Wallet:</span>
                    <WalletInfo/>
                </div>
            
            </div>
        
        </div>
    );
};

export default IndexPage;
