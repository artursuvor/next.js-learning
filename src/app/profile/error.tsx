"use client"

export default function ErrorBoundary({
    error, 
    reset
}: {
    error: Error;
    reset: () => void;
}){ 
    return (
        <div>
            {error.message} please contact support.
            <button onClick={reset}>Try Again</button>
        </div>
    )
}