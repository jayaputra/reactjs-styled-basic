import { useState } from 'react';
import styled from 'styled-components';
import {Input} from './Input';

const PasswordInputWrapper = styled.div `
    display: flex;
    ~div{
        margin-bottom: 8px;
    }
`
const PasswordInputStyled = styled(Input).attrs(() => ({
    type: 'password',
    placeholder: 'Password'
}))`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`
const ToggleButton = styled.div `
    height: 40px;
    box-sizing: border-box;
    border: 1px solid #f4f4f4;
    font-size: 0.9em;
    display: flex;
    padding: 8px;
    border-left: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: white;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    color: ${p => p.theme.primaryColor};
`

export function PasswordInput(props){
    const [showPassword, setShowPassword] = useState(true);

    return (
        <>
        <PasswordInputWrapper>
            <PasswordInputStyled {...props} />
            <ToggleButton onClick={() => setShowPassword(s => !s)}>
                {showPassword ? 'Hide' : 'Show' }
            </ToggleButton>
        </PasswordInputWrapper>
        <div>
            {showPassword ? props.value : ''}
        </div>
        </>
        
    );
}