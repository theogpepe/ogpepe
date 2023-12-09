// If using TypeScript (info.tsx)
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Info: NextPage = () => {
    return (
        <>
            <Head>
                <title>Info - wojak.farm</title>
            </Head>
            <main>
                <h1>Information Page</h1>
                <Image
							src="/sequence_pepe.svg"
							alt="PEPE Logo"
							height="800"  // Increased size for more prominence
							width="800"
						/>
                <Link href="/">
                    Go back to home
                </Link>
            </main>
        </>
    );
};

export default Info;
