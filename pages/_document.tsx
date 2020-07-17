import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	// static async getInitialProps(ctx: any) {
	// 	const initialProps = await Document.getInitialProps(ctx);
	// 	return { ...initialProps };
	// }
	render() {
		return (
			<Html lang="en">
				<Head />
				<body>
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
