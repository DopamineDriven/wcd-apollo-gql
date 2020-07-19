import { Affix } from "antd";
import FixedHeader from "./FixedHeader";
import MetaData from "./MetaData";

interface OnSuccessProps {
	props: any;
}


const OnSuccess: any = ({ props }: OnSuccessProps) => {
	return (
		<>
			<Affix offsetTop={0} className="affix-header">
				<FixedHeader props={props} />
			</Affix>
			<MetaData />
		</>
	);
};

export default OnSuccess;