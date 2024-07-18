export default function NotFound(){
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404 - Page Not Found</h1>
            <p style={styles.description}>
                The page you are looking for does not exist or has been moved.
            </p>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center' as 'center',
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: '2.5rem',
        color: '#333',
    },
    description: {
        fontSize: '1.25rem',
        color: '#777',
        margin: '20px 0',
    },
    link: {
        fontSize: '1.25rem',
        color: '#007BFF',
        textDecoration: 'none' as 'none',
        border: '1px solid #007BFF',
        padding: '10px 20px',
        borderRadius: '5px',
    },
};