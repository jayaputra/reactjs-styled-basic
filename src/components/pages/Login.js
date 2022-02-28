import { useState, useEffect } from 'react';
import {PageLayout, Input, PasswordInput, Button, Spinner} from 'components/common';
import styled from 'styled-components';

const Form = styled.form `
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    box-sizing: border-box;
    border 1px solid #eee;
    padding: 16px;

    .alt-text {
        text-align: center;
        margin: 10px 0;
    }
`
let timeout;

export default function Login(){
    const [formFields, setFormFields] = useState({username: '', password: ''});
    const [loading, setLoading] = useState(false);
    
    function handleInputChange(e) {
        e.persist();
        setFormFields(s => ({
            ...s,
            [e.target.name]:e.target.value
        }));
    }

    function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        timeout = setTimeout(() => {
            setLoading(false);
        }, 5000);
    }
    
    useEffect(() => {
        return() => {
            if (timeout){
                clearTimeout(timeout);
            }
        }
    }, []);

    return (
        <PageLayout>
            <h1>
                Login
                </h1>
                <Form onSubmit={handleSubmit}>
                    {loading ? <Spinner /> :
                    <>
                    <Input 
                        value={formFields.username}
                        onChange={handleInputChange}
                        type="text"
                        name="username" 
                        placeholder="username" />
                    <PasswordInput
                        value={formFields.password}
                        onChange={handleInputChange}
                        name="password" />
                    </>
                    }
                    <Button large type="submit" disabled={loading}>
                        {loading ? 'Loading...' : 'Login'}
                    </Button>
                    {!loading &&
                    <>
                        <div>or</div>
                        <Button secondary type="button">
                            Register
                        </Button>
                    </>
}
                </Form>
        </PageLayout>
    )
}