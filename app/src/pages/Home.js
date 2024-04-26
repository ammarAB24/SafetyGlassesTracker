import MainHeader from '../components/MainHeader';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className = "App">
            <MainHeader />
            <h1> wsg gang </h1>
        </div>
    )
}