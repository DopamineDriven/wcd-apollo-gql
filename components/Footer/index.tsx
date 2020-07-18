import React, { FC } from "react";
import { Layout } from "antd";
import { CopyrightCircleOutlined } from "@ant-design/icons";

const { Footer } = Layout;

export const FixedFooter: FC = () => {
	const currentYear = new Date().getFullYear();
	return (
		<Footer
            className="footer"
			style={{
				textAlign: "center",
				alignContent: "center",
				backgroundColor: "#000000",
				color: "#ffffff",
                position: "sticky",
                borderTop: "solid 1px #434343",
                width: "100%"
			}}
		>
			<CopyrightCircleOutlined
				style={{
					color: "#ffffff",
					fontSize: "1.0em",
					verticalAlign: "center"
				}}
			/>
			&nbsp;
			{`${currentYear}`}
		</Footer>
	);
};
