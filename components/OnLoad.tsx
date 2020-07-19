import { Layout, Spin } from "antd";
import PageSkeleton from "./PageSkeleton";

const { Content } = Layout;

const OnLoad: any = () => {
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
				<PageSkeleton />
				<PageSkeleton />
			</div>
		</Content>
	</Layout>;
};

export default OnLoad;
