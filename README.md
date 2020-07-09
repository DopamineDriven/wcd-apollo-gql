# wcd-apollo-gql 🐜🐜🐜BUILD🐜🐜🐜

## Robotxt for enhanced SEO
- https://moz.com/learn/seo/robotstxt
- https://annacoding.com/article/3IAV5kgBzADHoPjKVGVspZ/How-to-add-robots.txt-file-in-Next.js?

### Ideas
- https://www.arraywebdevelopment.com/contact

- from ./pages/_app.tsx
```tsx
import React from "react"
import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Footer, Header } from "../components";
import { Center } from "../components/Style";
import { GlobalStyle, theme } from "../global";
import "antd/dist/antd.css";

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
					 
				</Head>
				<Head>
					<title>Next.ts</title>
				</Head>
				<Header />
				<main className="main">
					<Center>
						<Component {...pageProps} />
					</Center>
				</main>
				<Footer />
			</ThemeProvider>
		</ApolloProvider>
	);
}

```