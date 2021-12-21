import { Fragment } from "react";
import Link from "next/link"; // Special Link comp that keeps SPA-behavior without a server req

function NewsPage() {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href={"/news/next-js-is-a-framework"}>NextJS is a Framework</Link>
                </li>
                <li>Something else</li>
            </ul>
        </Fragment>
    ); 
}

export default NewsPage;