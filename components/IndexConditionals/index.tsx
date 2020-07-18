import { Layout, Spin } from "antd";
import { ErrorBanner } from "../../utils";
import { PageSkeleton } from "../PageSkeleton";

const { Content } = Layout;

export const OnError: any = () => {
	<Layout className="app-layout">
		<Content className="user">
			<ErrorBanner description="error occurred; please try again" />
			<PageSkeleton />
		</Content>
	</Layout>;
};

export const OnLoad: any = () => {
	<Layout className="app-layout">
		<Content className="user">
			<div
				style={{
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center"
				}}
			>
				<Spin size="large" tip="Launching App" />
				<PageSkeleton />
			</div>
		</Content>
	</Layout>;
};
