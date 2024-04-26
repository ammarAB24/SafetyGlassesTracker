import MainHeader from '../components/MainHeader';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className = "App">
            <MainHeader />
            <h3> wsg gang </h3>

            <body style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <button className="DashboardButton">
                    Log New Pair
                </button>

                <button className="DashboardButton">
                    Check In
                </button>

                <button className="DashboardButton">
                    Check Out
                </button>
            </body>
        </div>
    )
}