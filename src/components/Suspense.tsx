// components/Suspense.tsx
import React from 'react';

const SuspenseFallback: React.FC = () => {
    return (
        <div className="text-center text-green-600 flex items-center justify-center min-h-screen">
            <div className="animate-pulse">
                <svg
                    className="w-10 h-10 mx-auto text-green-600"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 9l4-4m0 0l4 4M7 5v14M13 5l4 4m0 0l4-4m-4 4v14"
                    />
                </svg>
                <p className="mt-2 text-xl">
                    The coolest one is hiding...
                    <br />
                    Finding the fiercest in the jungle!
                </p>
            </div>
        </div>
    );
};

export default SuspenseFallback;
