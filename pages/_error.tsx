import React, { Fragment, FC } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { Empty, Layout, Typography } from "antd";

const { Content } = Layout;
const { Text } = Typography;

const NotFound: FC & NextPage = () => {
	return (
		<Content className="not-found">
			<Empty
				description={
					<Fragment>
						<Text className="not-found__description-title">
							Uh Oh! Something went wrong
						</Text>
						<Text className="not-found__description-subtitle">
							Page searched for cannot be found
						</Text>
					</Fragment>
				}
			/>
			<Link href="/">
				<a className="not-found__cta ant-btn ant-btn-primary ant-btn-lg">
					Return Home
				</a>
			</Link>
		</Content>
	);
};

export default NotFound;