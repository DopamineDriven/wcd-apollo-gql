import Head from "next/head";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../../lib/constants";

export const MetaData = () => {
	return (
		<Head>
			<link
				rel="apple-touch-icon"
				type="img/png"
				sizes="180x180"
				href="/favicon/apple-touch-icon.png"
			/>
			<link rel="manifest" href="/favicon/site.webmanifest" />
			<link
				rel="mask-icon"
				href="/favicon/safari-pinned-tab.svg"
				color="#000000"
			/>
			<link rel="shortcut icon" href="/favicon/favicon.ico" />
			<meta name="msapplication-TileColor" content="#000000" />
			<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
			<meta name="theme-color" content="#000" />
			<link rel="alternate" type="application/rss+xml" href="/feed.xml" />
			<meta
				name="description"
				content={`Static Site Generation via Next.js and ${CMS_NAME}.`}
			/>
			<meta property="og:image" content={HOME_OG_IMAGE_URL} />
			<meta charSet="utf-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta
				name="vieweport"
				content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
			/>
			<meta name="keywords" content="ssg, next, typescript" />
		</Head>
	);
};
