import React from 'react';

const Loaders = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex items-center justify-center h-screen">
                    <div className="text-center">
                        <span className="loading loading-dots loading-xs"></span>
                        <span className="loading loading-dots loading-sm"></span>
                        <span className="loading loading-dots loading-md"></span>
                        <span className="loading loading-dots loading-lg"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loaders;