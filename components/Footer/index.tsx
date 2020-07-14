import React, { FC } from "react";
import { Center, ContainerFooter } from "../Style";

export const Footer: FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <ContainerFooter>
            <Center>
                <a style={{ color: "black" }} href="https://github.com/DopamineDriven/wcd-apollo-gql" target="__blank">{`© ${currentYear}`}</a>
            </Center>
        </ContainerFooter>
    );
};