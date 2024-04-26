import PageHeader from '../components/PageHeader';

export default function LogNew() {
    return (
        <div>
            <PageHeader headerName="Check Out" toNavigate="/"/>
            
            <body style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <h1> we got nothing to check out yet </h1>
            </body>
        </div>
    )
}