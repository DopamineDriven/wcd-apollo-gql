import Link from "next/link";
import { Button } from "antd";

const MetaDescription = () => {
	return (
		<Button
			style={{ float: "right" }}
			size="large"
			type="link"
            className="user-button"
		>
			<Link href="/about"> 
				<a>About</a>
			</Link>
		</Button>
	);
};

export default MetaDescription;