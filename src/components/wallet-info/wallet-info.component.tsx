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

const DEFAULT_CHAR_SHOWN = 4;

interface WalletInfoProps {
    fullAddress: boolean;
    charShown: number;
}

export const WalletInfo = (props: WalletInfoProps) => {
    const { fullAddress, charShown } = props;
    
    const [icon, setIcon] = useState<IconProp>(["far", "clipboard"]);
    
    const onClipboardClick = () => {
        setIcon(["fas", "clipboard"]);
        copyToClipboard(WALLET_ADDRESS);
        setTimeout(() => {
            setIcon(["far", "clipboard"]);
        }, 100);
    };
    
    function displayAddress() {
        if (fullAddress) {
            return WALLET_ADDRESS;
        }
        return `${WALLET_ADDRESS.slice(0, charShown)}....${WALLET_ADDRESS.slice(-charShown)}`;
    }
    
    return (
        <div className={walletInfo}>
            <span className={address}>{displayAddress()}</span>
            <FontAwesomeIcon icon={icon}
                onClick={onClipboardClick}
                className={copyIcon}
                color={"#fff"}/>
        </div>
    );
};

WalletInfo.defaultProps = {
    fullAddress: false,
    charShown: DEFAULT_CHAR_SHOWN,
};
