# wcd-apollo-gql 🐜🐜🐜BUILD🐜🐜🐜
---
## add a new remote origin
```git
git add .
git commit -m "message"
git remote add origin (cloned url)
git push origin master
```
---
## Quality resources
- https://hasura.io/learn/graphql/nextjs-fullstack-serverless/apollo-client/
- https://www.saltycrane.com/cheat-sheets/typescript/next.js/latest/
- https://www.saltycrane.com/cheat-sheets/typescript/latest/
- https://www.saltycrane.com/cheat-sheets/typescript/react/latest/

---
## Robotxt for enhanced SEO
- https://moz.com/learn/seo/robotstxt
- https://annacoding.com/article/3IAV5kgBzADHoPjKVGVspZ/How-to-add-robots.txt-file-in-Next.js?
- https://medium.com/swlh/server-side-graphql-with-apollo-nextjs-part-1-setup-2615410c4966

---
### Ideas
- https://www.arraywebdevelopment.com/contact
---
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
---
- Lighthouse
- https://web.dev/performance-scoring/
---
### Ordering matters for Plugins/Presets 
- Plugins run before presets 
	- Plugin ordering is first to last 
	- Preset ordring is last to first 
	- https://babeljs.io/docs/en/6.26.3/plugins#plugin-preset-ordering