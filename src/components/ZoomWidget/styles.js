import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	top: ${({ position }) => (position.includes('top') ? '15px' : '')};
	right: ${({ position }) => (position.includes('right') ? '15px' : '')};
	left: ${({ position }) =>
		position === 'top-left' ? '65px' : position === 'bottom-left' ? '15px' : ''};
	bottom: ${({ position }) => (position.includes('bottom') ? '30px' : '')};
	width: fit-content;
	height: 64px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
	padding: 8px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;

export const Label = styled.label`
	color: #555;
	font-size: 14px;
`;

export const ZoomValue = styled.p`
	color: #555;
	font-size: 20px;
	font-weight: bold;
	margin-top: 6px;
`;
