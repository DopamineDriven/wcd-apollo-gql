import React, { FC } from "react";
import { Layout } from "antd";
// import { LogoHeader } from "../Style";
import NavLink from "next/link";

const { Header } = Layout;
//Content destructured by Layout if needed
export const FixedHeader: FC = () => {
	return (
		<Header className="layout-header-fixed">
			<div className="layout-logo-fixed">
				<div className="layout-anchor">
					<NavLink href="/">
						<a className="header-text">Windy City Devs</a>
					</NavLink>
				</div>
			</div>
		</Header>
	);
};
