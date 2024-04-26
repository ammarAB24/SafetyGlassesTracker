import { useState } from 'react';
import MainHeader from '../components/MainHeader';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    
    let categories = ["Pair Number, Is Available, Name, Date Out"];
    const [data, setData] = useState(null);

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

            <div style={{ display: "flex", 
                        justifyContent: "center",
                        alignItems: "center"}}>
                <table style={{ width: "60%" }}>
                    <tbody>
                    <tr>
                        {categories.map((item, index) => (
                            <td key={index} style={{ border: "1px solid black", padding: "8px", textAlign: "center", width: "1000" }}>
                                {item}
                            </td>
                        ))}
                    </tr>
                    
                    </tbody>
                </table>
            </div>
        </div>
    )
}