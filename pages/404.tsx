import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
	const title = "Return Home";
	const statusCode = 404;
	return (
		<div style={styles.error}>
			<Head>
				<title>
					{statusCode}: {title}
				</title>
			</Head>
			<div>
				<style dangerouslySetInnerHTML={{ __html: "body { margin: 0 }" }} />
				{statusCode ? <h1 style={styles.h1}>{statusCode}</h1> : null}
				<div style={styles.desc}>
					<Link href="/">
						<a style={styles.a}>&rarr;&nbsp;{title}&nbsp;&larr;</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

const styles: { [k: string]: React.CSSProperties } = {
	error: {
		color: "#000",
		background: "#fff",
		fontFamily:
			'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
		height: "100vh",
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center"
	},

	desc: {
		display: "inline-block",
		textAlign: "left",
		lineHeight: "100px",
		height: "100px",
		verticalAlign: "middle"
	},

	h1: {
		display: "inline-block",
		borderRight: "1px solid rgba(0, 0, 0,.3)",
		margin: 0,
		marginRight: "20px",
		padding: "10px 23px 10px 0",
		fontSize: "24px",
		fontWeight: 500,
		verticalAlign: "middle"
	},

	a: {
		fontSize: "14px",
		fontWeight: "normal",
		lineHeight: "inherit",
		margin: 0,
		padding: 0,
		color: "blue",
		verticalAlign: "top"
	}
};
