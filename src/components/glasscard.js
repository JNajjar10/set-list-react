import React from 'react';
import profile from '../images/ashutosh.png';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const OuterContainer = styled.div`
align-items: center;
display: flex;
justify-content: 'center';
`;

const Container = styled(animated.div)`
display: inline-block;
padding-left: 1em;
padding-right: 1em;
background: #C7D2FE66;
border-radius: 10px;
z-index: 1;
position: relative;
backdrop-filter: blur(10px);
border: 2px solid transparent;
background-clip: border-box;
cursor: pointer;
align-items: center;
`;

const StyledImg = styled.img`
    width: 100px;
    height: auto;
    border: 2px solid #000;
    border-radius: 50%;
    align-items: 'center';
    justify-content: 'center';
`;

const StyledH1 = styled.h1`
    line-heright: 1;
    letter-spacing: 1.5;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const StyledH3 = styled.h3`
    line-heright: 1.5;
    letter-spacing: 1.15;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GlassCard = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
            <Container
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            >
                <StyledImg src={profile} />
                <StyledH1>Ashutosh Hathidara</StyledH1>
                <StyledH3>Data Scientist, Designer <br/> and Full Stack Developer</StyledH3>
            </Container>
    );
}

export default GlassCard;