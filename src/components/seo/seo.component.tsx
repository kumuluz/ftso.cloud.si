import React from "react";
import { Helmet } from "react-helmet";
import cloudLogo from "../../assets/images/cloud-logo-white.svg";

export interface SEOProps {
    description?: string;
    lang?: string;
    meta?: any[];
    title: string;
}

export function SEO(props: SEOProps) {
    const { title, meta, lang, description } = props;
    
    let fullMeta: any[] = [];
    if (description) {
        fullMeta = [
            ...fullMeta,
            { name: "description", content: description }
        ];
    }
    if (meta) {
        fullMeta = fullMeta.concat(meta);
    }
    
    return (
        <Helmet
            htmlAttributes={{ lang: lang }}
            title={title}
            meta={fullMeta}
        >
            <link rel="shortcut icon" href={cloudLogo} type="image/x-icon" />
            <link rel="icon" href={cloudLogo} type="image/x-icon" />
        </Helmet>
    );
}

SEO.defaultProps = {
    lang: "en",
    meta: [],
    description: ""
};
