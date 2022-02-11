import * as React from "react";
import { Link } from "gatsby";
import {
    page
} from "./index.page.module.scss";
import {
    errorTitle,
    errorSubtitle,
} from "./404.module.scss";
import { SEO } from "../components/seo/seo.component";

const NotFoundPage = () => (
    <div className={page}>
        <SEO title="404 - FTSO Plus"/>
        <h1 className={errorTitle}>NOT FOUND</h1>
        <p className={errorSubtitle}>Requested page doesn't exist.
            Return to <Link to={"/"}>landing page</Link>.
        </p>
    </div>
);

export default NotFoundPage;
