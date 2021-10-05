import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WALLET_ADDRESS } from "../../config/ftso.config";
import {
    walletInfo,
    address,
    copyIcon,
} from "./wallet-info.module.scss";
import { copyToClipboard } from "../../utils/copy.utils";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const CHAR_SHOWN = 4;

export const WalletInfo = () => {
    
    const [icon, setIcon] = useState<IconProp>(["far", "clipboard"]);
    
    const onClipboardClick = () => {
        setIcon(["fas", "clipboard"]);
        copyToClipboard(WALLET_ADDRESS);
        setTimeout(() => {
            setIcon(["far", "clipboard"]);
        }, 100);
    }
    
    return (
        <div className={walletInfo}>
            <span className={address}>{WALLET_ADDRESS.slice(0, CHAR_SHOWN)}....{WALLET_ADDRESS.slice(-CHAR_SHOWN)}</span>
            <FontAwesomeIcon icon={icon}
                onClick={onClipboardClick}
                className={copyIcon}
                color={"#fff"}/>
        </div>
    );
};
