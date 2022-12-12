import React from 'react';


const Loader = () => {
    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <div style={{
                margin: 0,
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <div className="lds-hourglass" alt="lds-hourglass"/>
            </div>
        </div>
    );
}


export default Loader;