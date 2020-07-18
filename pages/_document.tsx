import Document, { Html, Head, Main, NextScript } from "next/document";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";

export default class MyDocument extends Document {
	// static async getInitialProps(ctx: any) {
	// 	const initialProps = await Document.getInitialProps(ctx);
	// 	return { ...initialProps };
	// }
	render() {
		return (
			<Html lang="en">
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
					<meta
						name="msapplication-config"
						content="/favicon/browserconfig.xml"
					/>
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
				<body style={{ margin: "0 0 0 0" }} className="body-layout">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

/*
import React from "react";
import { ServerStyleSheet } from "styled-components";
import { NextPage } from "next";
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext
} from "next/document";

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext & NextPage) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
				});

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta
						name="description"
						content="The Next generation of a news feed"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
						rel="stylesheet"
					/>
					<link rel="shortcut icon" href="/favicon.ico" />
					{this.props.styles}
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

*/
