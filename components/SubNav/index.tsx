import Link from "next/link";
import { Row, Col, Button } from "antd";

export const SubNavButton = () => {
	return (
		<Row
			gutter={[48, 48]}
			align="middle"
			justify="center"
			className="sub-nav-row"
		>
			<Col lg={{ span: 9, offset: 3 }}>
				<Button
					style={{ alignSelf: "center" }}
					size="large"
					type="link"
					className="sub-nav-button"
					// disabled={true}
				>
					<Link href="/">
						<a>Contact</a>
					</Link>
				</Button>
			</Col>
			<Col lg={{ span: 9, offset: 3 }}>
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
