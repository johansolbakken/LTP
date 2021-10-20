
import { FormEvent, useRef, useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';

interface Props {

};

export const Signup: React.FC<Props> = (props) => {
    const emailRef = useRef<any>();
    const passwordRef = useRef<any>();
    const passwordConfirmationRef = useRef<any>();
    const { signup } = useAuth();
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        setLoading(true);
        if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
            setError("Passwords doesn't match!");
            setLoading(false);
            return;
        }
        
        try {
            setError("");
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch {
            setError("Failed to create account!");
        }
        setLoading(false);
    }

    return (
        <div>
            <Card>
                <h2 className="text-center mb-4">Sign up</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group id={"email"}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id={"password"}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Form.Group id={"password-confirm"}>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmationRef} required />
                    </Form.Group>
                    <Button className="w-100" type="submit" disabled={!loading}>Sign up</Button>
                </Form>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Log in
            </div>
        </div>
    );
}