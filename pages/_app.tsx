import { ApolloProvider } from "@apollo/react-hooks";
import { useApollo } from "../lib/apollo";
import React from "react";
// import Head from "next/head";
import { AppProps } from "next/app";
// // import { ThemeProvider } from "styled-components";
// import { Footer, FixedHeader } from "../components";
// import { Center } from "../components/Style";
// // import { GlobalStyle, theme } from "../global/index";
// import { Affix, Layout } from "antd";
import "antd/dist/antd.css";
import "../styles/index.css";
import "../styles/global.css";

export function reportWebVitals(metric: any) {
	console.log(metric);
}

export default function App({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps.initialApolloState);
	return (
		<ApolloProvider client={apolloClient}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}
