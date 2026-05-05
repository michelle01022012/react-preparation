import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate a check to see if the user is a student.
        // In a real application, this would involve checking an authentication context or a token.
        const userRole = 'student'; // Hardcoded for demonstration

        if (userRole === 'student') {
            // Redirect to the posts page for students.
            // Using a sample post ID '123' for demonstration.
            navigate('/123');
        }
    }, [navigate]);

    return (
        <div>
            <h1>Home</h1>
            <p>If you are not redirected, you are not a student.</p>
        </div>
    );
}