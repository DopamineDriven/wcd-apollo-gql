# wcd-apollo-gql 🐜🐜🐜BUILD🐜🐜🐜

- optimized images
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



```ts
import { User } from "./viewer.graphql";

const users: User[] = [
  {
    id: "1",
    name: "Andrew Ross",
    role: "CTO",
    email: "andrew@windycitydevs.io",
    github: "https://github.com/DopamineDriven",
    twitter: "https://twitter.com/Dopamine_Driven",
    linkedin: "https://www.linkedin.com/in/asross/",
    image:
      "https://res.cloudinary.com/asross311/image/upload/v1592831978/ASR_Assets/cropped-a_nqaem7.png",
    content:
      'First and foremost, TypeScript puts the super in superset, especially in a team environment. State management in React can be cumbersome, which is why I consider GraphQL and Apollo to be the dynamic duo. That said, Redux and Recoil each have their use-cases as well.</p>As far as primary prebuilts are concerened, the "Next.js" framework is top-notch. It removes the otherwise tedious process of manually configuring Webpack to support a server-side rendering app from the equation. It saves time, simplifies optimization, and delivers blazing fast performance to ultimately enhance end-user experience.</p> "The mechanic that would perfect his work must first sharpen his tools." - <em>Confucius</em></p><br />'
  },
  {
    id: "2",
    name: "Joe Shields",
    role: "CEO",
    email: "joe@windycitydevs.io",
    github: "https://github.com/JShields30",
    twitter: "https://twitter.com/JShields312",
    linkedin: "https://www.linkedin.com/in/jshields90/",
    image:
      "https://res.cloudinary.com/asross311/image/upload/v1592801826/ASR_Assets/Joe_vlnzpm.jpg",
    content:
      "Software Engineer skilled in both back-end and front-end, with particular interest in design and UX-UI experience. My career as a director of market research inspired me to pursue my true passion of creating web applications. I love being creative and unique, but I also appreciate the technical challenges of back-end development. When programming I follow structure and order, since this is essential when creating quality web applications. I enjoy debugging and critiquing small details, as well as optimizing applications. Working in a team setting is ideal, because more knowledge is obtained and retained between developers.</p>"
  },
  {
    id: "3",
    name: "Yong Lee",
    role: "COO",
    email: "yong@windycitydevs.io",
    github: "https://github.com/yhlee-dho",
    twitter: "https://twitter.com/YongLee08380800",
    linkedin: "https://www.linkedin.com/in/yong-lee-a16430193/",
    image:
      "https://res.cloudinary.com/asross311/image/upload/v1594134267/ASR_Assets/Ghengis_Yong_epwjh8.png",
    content:
      'Currently working on a new discord bot -- "WAFFLES". Everyone is going to want a piece of that syrupy, flaky, Yonglicious good-good.</p>'
  }
];

export default users;
	
```