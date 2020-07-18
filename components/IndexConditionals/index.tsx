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
			<div className="spin-section">
				<Spin size="large" tip="Launching App" />
				<PageSkeleton />
			</div>
		</Content>
	</Layout>;
};
