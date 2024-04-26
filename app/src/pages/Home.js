import MainHeader from '../components/MainHeader';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="App">
            <MainHeader />

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <button onClick={() => navigate("/new")} className="DashboardButton">
                    Log New Pair
                </button>

                <button onClick={() => navigate("/in")} className="DashboardButton">
                    Check In
                </button>

                <button onClick={() => navigate("/out")} className="DashboardButton">
                    Check Out
                </button>
            </div>
        </div>
    )
}