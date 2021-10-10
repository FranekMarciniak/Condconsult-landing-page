import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/dailymotion";
import play from "../../../assets/svg/play.svg";

const StyledSection = styled.section`
	width: 75%;
	padding: 75px 0;
	margin-left: auto;
	margin-right: auto;
	background-color: #ffefbf;
	border-radius: 15px;
	@media (max-width: 900px) {
		width: 100%;
		padding: 30px 0;
	}
`;
const StyledTextContainer = styled.section`
	width: 80%;
	margin: 0 auto 40px auto;
	text-align: center;
	h2 {
		margin-bottom: 50px;
		line-height: 117%;
	}
	p {
		font-size: 23px;
		line-height: 117%;
		letter-spacing: 0.4px;
	}
	@media (max-width: 900px) {
		width: 91.2%;
		margin: 0 auto 20px auto;

		h2 {
			margin-bottom: 15px;
			line-height: 148%;
			font-size: 25px;
		}
		p {
			font-size: 19px;
			line-height: 158%;
			letter-spacing: 0.4px;
		}
	}
`;
const StyledVideo = styled(ReactPlayer)`
	position: absolute;
	top: 0;
	left: 0;
`;
const StyledVideoButton = styled.button`
	width: 102px;
	height: 102px;
	top: 0;
	bottom: 0;
	margin: auto;
	position: absolute;
	left: 39px;
	right: 0;
	opacity: 0.3;
	background-color: rgba(0, 0, 0, 1);
	border-radius: 50%;
	border: none;
	cursor: pointer;
	background-image: url(${play});
	background-position: center;
	background-repeat: no-repeat;
	z-index: 11;
`;
const StyledTransparentOverlay = styled.div<{ active: boolean }>`
	width: calc(100% - 32px);
	height: 100%;
	top: 0;
	bottom: 0;
	margin: auto;
	position: absolute;
	right: 0;
	${(props) => (props.active ? "z-index: 10;" : "z-index: 11;")}
`;
const StyledVideoContainer = styled.div`
	width: 81.5%;
	margin: 0 auto;
	height: 0;
	padding-bottom: 45.5%;
	position: relative;
	iframe {
		width: 100%;
		height: 100%;
		border-radius: 5px;
	}
	@media (max-width: 900px) {
		width: 91.2%;
	}
`;
const VideoSection: React.FC = () => {
	const [playingState, setPlayingState] = useState(false);
	return (
		<StyledSection>
			<StyledTextContainer>
				<h2>
					High - accuracy augmented reality for BIM, GIS and Reality
					Capture
				</h2>
				<p>
					vGIS aggregates data from a variety of sources, including
					Autodesk models, Bentley BIM designs, and Esri ArcGIS, to
					display it in a unified, real-time augmented reality and
					mixed-reality (MR) view with centimeter-level positioning
					accuracy.
				</p>
			</StyledTextContainer>
			<StyledVideoContainer>
				<StyledVideo
					url="https://www.dailymotion.com/video/x7zcrmc"
					playing={playingState}
					controls={false}
					width="100%"
					height="100%"
				/>
				<StyledTransparentOverlay active={true} />
				{!playingState ? (
					<StyledVideoButton onClick={() => setPlayingState(true)} />
				) : (
					<StyledTransparentOverlay
						onClick={() => setPlayingState(false)}
						active={false}
					/>
				)}
			</StyledVideoContainer>
		</StyledSection>
	);
};

export default VideoSection;
