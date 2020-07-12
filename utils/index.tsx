import React from "react";
import { message, notification } from "antd";
import { Alert } from "antd";

interface Props {
	message?: string;
	description?: string;
}

export const ErrorBanner = ({
	message = "Oops! Something went wrong",
	description = "Something has gone awry; check your connection and/or try again later"
}: Props) => {
	return (
		<Alert
			banner
			closable
			message={message}
			description={description}
			type="error"
			className="error-banner"
		/>
	);
};

export const displaySuccessNotification = (
	message: string,
	description?: string
) => {
	return notification["success"]({
		message,
		description,
		placement: "topLeft",
		style: {
			marginTop: 50
		}
	});
};

export const displayErrorMessage = (error: string) => {
	return message.error(error);
};

// blizzard blue
export const iconColor = "#b3ddf2";

// red
// #ff0000

// white
// #ffffff
