import React from "react";
import styled from "styled-components";
import HeadingBar from "@elements/Window/HeadingBar";
import Draggable from "react-draggable";
import bg from "@static/techbg.png";
import theme from "../styles/theme";
import AlertContent from "../elements/Alert/AlertContent";
import DockContent from "../elements/Dock/DockContent";
import MenuContent from "../elements/Menu/MenuContent";
import { css } from "styled-components";
import { useLocation } from "react-router-dom";

const Wrapper = styled.div`
	display: grid;
	place-items: center;
	min-height: 100vh;
	min-height: -webkit-fill-available;
	height: 100%;
	width: 100%;
	background: url(${bg}) no-repeat center center;
	background-size: cover;
	overflow: hidden;
	padding-bottom: 5rem; /* Add space for the dock */
	box-sizing: border-box;
	
	/* Mobile fullscreen optimization */
	@media screen and (max-width: 768px) {
		min-height: 100vh;
		min-height: -webkit-fill-available;
		padding-bottom: 4rem;
		position: relative;
	}
`;

const dimensionConstraints = css`
	width: 75%;
	min-width: 70%;
	min-height: 25%;
	max-height: calc(90vh - 5rem); /* Account for dock space */
	max-width: 80%;
	
	/* Mobile optimization */
	@media screen and (max-width: 768px) {
		width: 95%;
		min-width: 90%;
		max-width: 95%;
		max-height: calc(85vh - 4rem);
		min-height: 40%;
	}
`;

const emulatorDimensions = css`
	width: fit-content;
	min-width: 20%;
	min-height: 25%;
	max-height: 75%;
	max-width: 80%;
	
	/* Mobile optimization */
	@media screen and (max-width: 768px) {
		width: 95%;
		min-width: 90%;
		max-width: 95%;
		max-height: 70%;
		min-height: 30%;
	}
`;

const Container = styled.div`
	width: fit-content;
	border-radius: 0.6rem 0.6rem 0.3rem 0.3rem;
	box-shadow: ${theme.windowShadow} 0px 1px 4px;
	resize: ${props => (props.resizable ? `both` : `none`)};
	overflow: hidden;
	${props => (!props.isEmulator ? dimensionConstraints : emulatorDimensions)}
	backdrop-filter: blur(1rem);
	background: ${theme.bodyBgWithOpacity};
	${props => props.height && `height: ${props.height}`}
`;

const Default = props => {
	const { pathname } = useLocation();
	let resizable = false;
	if (props.resizable === undefined) {
		resizable = true;
	}
	const BOUND = 512;
	return (
		<>
			<MenuContent programName={props.programName} />
			<AlertContent
				type={pathname.includes("qemu") ? `qemu` : `hideHelp`}
			/>
			<Wrapper>
				<Draggable
					bounds={{
						top: -128,
						left: -BOUND,
						right: BOUND,
						bottom: BOUND,
					}}
					handle=".heading-bar"
				>
					<Container
						height={props.height}
						resizable={resizable}
						isEmulator={props.heading === "qemu"}
						onContextMenu={e => {
							!props.contextMenu && e.preventDefault();
						}}
					>
						<HeadingBar
							altClassName="heading-bar"
							heading={props.heading}
						/>
						{props.children}
					</Container>
				</Draggable>
			</Wrapper>
			<DockContent />
		</>
	);
};

export default Default;
