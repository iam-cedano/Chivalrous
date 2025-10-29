import { JSX } from "react";

function Error(): JSX.Element {
    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, Roboto, ' +
                "'Helvetica Neue', Arial", WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', textAlign: 'center', padding: '4rem' }}>
            <h1 style={{ color: '#d9534f', margin: 0 }}>Something went wrong</h1>
            <p style={{ marginTop: '1rem', color: '#555' }}>
                An unexpected error occurred. Please try refreshing the page or come back later.
            </p>
            <div style={{ marginTop: '2rem' }}>
                <a href="/" style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    borderRadius: 4,
                    textDecoration: 'none'
                }}>
                    Go to Home
                </a>
            </div>
        </div>
    );
}

export { Error };