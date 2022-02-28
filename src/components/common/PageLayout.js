import styled from "styled-components";
import {Header} from './Header';

const Content = styled.main`
    max-width: 800px;
    margin: 80px auto 0 auto;
    padding: 0 16px;
    box-sizing: border-box;
    font-family: 'Heebo', sans-serif;
`;

export function PageLayout({children}) {
    return (
        <>
        <Header />
        <Content>
            {children}
        </Content>
        </>
    )
}