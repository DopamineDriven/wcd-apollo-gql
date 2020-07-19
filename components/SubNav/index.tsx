import Link from "next/link";
import { Row, Col, Button } from "antd";

export const SubNavButton = () => {
	return (
		<Row>
			<Col>
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
			</Col>
		</Row>
	);
};