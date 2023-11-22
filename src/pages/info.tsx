// If using TypeScript (info.tsx)
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Info: NextPage = () => {
    return (
        <>
            <Head>
                <title>Info - wojak.farm</title>
            </Head>
            <main>
                <h1>Information Page</h1>
                <p>This is the info page for PEPE</p>
                <Link href="/">
                    Go back to home
                </Link>
            </main>
        </>
    );
};

export default Info;
