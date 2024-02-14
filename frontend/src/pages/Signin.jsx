import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/user/signin', {
                username: email,
                password: password
            });
            // If successful, do something with the response, like storing the token
            console.log(response.data.token);
            localStorage.setItem('token', response.data.token); // Storing the token
            navigate('/dashboard'); // Navigate to dashboard or some protected route
        } catch (error) {
            // Handle error, such as displaying a message to the user
            console.error('Sign in error', error.response.data.message);
        }
    };

    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign in"} />
                    <SubHeading label={"Enter your credentials to access your account"} />
                    <InputBox
                        placeholder="Email"
                        label={"Email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputBox
                        type="password"
                        placeholder="Password"
                        label={"Password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="pt-4">
                        <Button label={"Sign in"} onClick={handleSignin} />
                    </div>
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
                </div>
            </div>
        </div>
    );
};
