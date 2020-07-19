import React from "react";
import { Layout } from "antd";
// import { LogoHeader } from "../Style";
import NavLink from "next/link";
import SvgLogo from "./Svg";

interface Props {
	props: string | number;
}

const { Header } = Layout;
//Content destructured by Layout if needed
const FixedHeader = ({ props }: Props) => {
	return (
		<Header className="layout-header-fixed">
			<div style={{ display: "inline-block", padding: "0, 0, 0, 10px" }}>
				<NavLink href="/index">
					<a style={{ paddingLeft: "2em" }}>{<SvgLogo props={props} />}</a>
				</NavLink>
			</div>
		</Header>
	);
};

export default FixedHeader;
