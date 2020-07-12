import { ApolloProvider } from "@apollo/react-hooks";
import { useApollo } from "../lib/apollo";
import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Footer, Header } from "../components";
import { Center } from "../components/Style";
import { GlobalStyle, theme } from "../global";
import { Affix, Layout } from "antd";
import "antd/dist/antd.css";
import "../global/index.css";

export function reportWebVitals(metric: any) {
	console.log(metric);
}

export default function App({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps.initialApolloState);
	return (
		<ApolloProvider client={apolloClient}>
			<ThemeProvider theme={theme}>
				<GlobalStyle theme={theme} />
				<Head>
					<title>Next.ts</title>
				</Head>
				<Layout className="app-layout">
					<Affix offsetTop={0} className="affix-header">
						<Header />
					</Affix>
					<main className="main">
						<Center>
							<Component {...pageProps} />
						</Center>
					</main>
					<Footer />
				</Layout>
			</ThemeProvider>
		</ApolloProvider>
	);
}
