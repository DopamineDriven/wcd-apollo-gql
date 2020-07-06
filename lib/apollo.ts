import { IncomingMessage, ServerResponse } from "http";
import { useMemo } from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

export type ResolverContext = {
	req?: IncomingMessage;
	res?: ServerResponse;
};

function createIsomorphLink(context: ResolverContext = {}) {
	if (typeof window === "undefined") {
		const { SchemaLink } = require("apollo-link-schema");
		const { schema } = require("./schema");
		return new SchemaLink({ schema, context });
	} else {
		const { HttpLink } = require("apollo-link-http");
		return new HttpLink({
			uri: "/api/graphql",
			credentials: "same-origin"
		});
	}
}

function createApolloClient(context?: ResolverContext) {
	return new ApolloClient({
		ssrMode: typeof window === "undefined",
		link: createIsomorphLink(context),
		cache: new InMemoryCache()
	});
}

export function initializeApollo(
	// (a)
	initialState: any | null,
	context?: ResolverContext
) {
	const _apolloClient = apolloClient ?? createApolloClient(context);

	// (b)
	if (initialState) {
		_apolloClient.cache.restore(initialState);
	}

	// (c)
	if (typeof window === "undefined") return _apolloClient;

	// (d)
	if (!apolloClient) apolloClient = _apolloClient;

	return _apolloClient;
}

export function useApollo(initialState: any) {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
}

/*
(a)
    Pages with next.js data fetching methods such as 'getStaticProps' can send
    a custom context hich will be used by 'SchemaLink' to server render pages

(b)
    If page has next data fetching methods using ApolloClient, initial state is rehydrated here

(c)
    For SSG and SSR always create a new Apollo Client

(d)
    Create the Apollo Client once in the Client
*/
