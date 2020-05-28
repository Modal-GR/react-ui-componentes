import styled from 'styled-components'

interface ScrollXProps {
    width?: string
    maxWidth?: string
    padding?: string
    scrollColor?: string
    barColor?: string
}

export const ScrollX = styled.div<ScrollXProps>`
    width: ${({ width = '100%'}) => width};
    max-width: ${({ maxWidth = '100%'}) => maxWidth };
    overflow-y: hidden;
    overflow-x: scroll;
    padding: ${({ padding }) => padding};
    box-sizing: border-box;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
        width: 4px;
        height: 4px;
    }
    ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme: { scrollColor }, barColor }) => barColor || scrollColor};
        border: 0px none #ffffff;
        border-radius: 50px;
    }
`

interface ScrollYProps {
    height?: string
    maxHeight?: string
    padding?: string
    scrollColor?: string
    barColor?: string
}

export const ScrollY = styled.div<ScrollYProps>`
    width: 100%;
    height: ${({ height }) => height};
    max-height: ${({ maxHeight }) => maxHeight || '100%'};
    overflow-y: scroll;
    overflow-x: hidden;
    padding: ${({ padding }) => padding};
    box-sizing: border-box;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
        width: 4px;
        height: 4px;
    }
    ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme: { scrollColor }, barColor }) => barColor || scrollColor};
        border: 0px none #ffffff;
        border-radius: 50px;
    }
`

