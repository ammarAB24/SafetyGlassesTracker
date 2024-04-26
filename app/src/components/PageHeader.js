import { useNavigate } from 'react-router-dom';

export default function PageHeader({ headerName, toNavigate }) {
    const navigate = useNavigate();
    return (
        <div className="App">
            <header className="App-header">
                <h2>
                    {headerName}
                </h2>

                <button onClick={() => navigate(toNavigate)} className="ReturnButton">
                    Back
                </button>
            </header>
        </div>
    )
}