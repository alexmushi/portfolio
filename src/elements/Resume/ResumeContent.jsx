import React from "react";
import styled from "styled-components";
import BodyContent from "@elements/Window/BodyContent";

const Iframe = styled.iframe`
	width: 100%;
	height: 95%;
	border: none;
`;

const ResumeContent = ({ title, content }) => {
	return (
		<BodyContent>
			<Iframe
				src="https://docs.google.com/document/d/1XnCeJ-iJmR8CF-4T5QJA74DutFf1OuaF/preview"
				title="alexShimano's Resume"
			/>
		</BodyContent>
	);
};

export default ResumeContent;
