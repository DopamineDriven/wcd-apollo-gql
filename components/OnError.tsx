import { Layout } from "antd";
import { ErrorBanner } from "../utils";
import PageSkeleton from "./PageSkeleton";

const { Content } = Layout;
const OnError: any = () => {
	<Layout className="app-layout">
		<Content className="user">
			<ErrorBanner description="error occurred; please try again" />
			<PageSkeleton />
		</Content>
	</Layout>;
};
export default OnError;
