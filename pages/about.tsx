import Link from "next/link";
import { NextPage } from "next";

export default function About({}: NextPage) {
	return (
		<div>
			Welcome to the about page. Go to the{" "}
			<Link href="/">
				<a>Home</a>
			</Link>{" "}
			page.
		</div>
	);
}
