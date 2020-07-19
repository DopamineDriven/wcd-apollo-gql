import Link from "next/link";
import { Row, Col, Button } from "antd";

export const SubNavButton = () => {
	return (
		<Row gutter={[48, 48]} align="middle" justify="center">
			<Col span={12}>
				<Button
					style={{ alignSelf: "center" }}
					size="large"
					type="link"
					className="sub-nav-button"
				>
					<Link href="/contact">
						<a>Contact</a>
					</Link>
				</Button>
			</Col>
			<Col span={12}>
				<Button
					style={{ alignSelf: "center" }}
					size="large"
					type="link"
					className="sub-nav-button"
				>
					<Link href="/about">
						<a>About</a>
					</Link>
				</Button>
			</Col>
		</Row>
	);
};
