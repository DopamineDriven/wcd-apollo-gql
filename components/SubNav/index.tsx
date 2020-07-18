import Link from "next/link";
import { Button } from "antd";

export const SubNavButton = () => {
	return (
		<Button
			style={{ alignSelf: "center" }}
			size="large"
			type="link"
			className="user-button"
		>
			<Link href="/contact">
				<a>Contact</a>
			</Link>
		</Button>
	);
};
