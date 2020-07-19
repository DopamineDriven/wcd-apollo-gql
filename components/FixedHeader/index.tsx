import React from "react";
import { Layout } from "antd";
// import { LogoHeader } from "../Style";
import NavLink from "next/link";
import SvgLogo from "../Svg/index";

interface Props {
	props: string | number;
}

const { Header } = Layout;
//Content destructured by Layout if needed
export const FixedHeader = ({ props }: Props) => {
	return (
		<Header className="layout-header-fixed">
			<div style={{ display: "inline-block", padding: "0, 0, 0, 10px" }}>
				<NavLink href="/">
					<a style={{ paddingLeft: "2em" }}>{<SvgLogo props={props} />}</a>
				</NavLink>
			</div>
		</Header>
	);
};
