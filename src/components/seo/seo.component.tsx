import React from "react";
import { Helmet } from "react-helmet";
import ftsoFavicon from "../../assets/images/ftso-plus-logo-F-black.svg";

export interface SEOProps {
    description?: string;
    lang?: string;
    meta?: any[];
    title: string;
    canonical?: string;
}

function buildCanonicalLink(path: string): string {
    return "https://ftso.cloud.si" + path;
}

export function SEO(props: SEOProps) {
    const { title, meta, lang, description, canonical } = props;
    
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
            htmlAttributes={{ lang }}
            title={title}
            meta={fullMeta}
        >
            <link rel="shortcut icon" href={ftsoFavicon} type="image/x-icon"/>
            <link rel="icon" href={ftsoFavicon} type="image/x-icon"/>
            {canonical && (
                <link rel="canonical" href={buildCanonicalLink(canonical)}/>
            )}
        </Helmet>
    );
}

SEO.defaultProps = {
    lang: "en",
    meta: [],
    description: ""
};
