import React, { useContext } from 'react'
import { AlertContext } from '../../contexts/AlertContext';
import Alert from 'react-bootstrap/Alert';

function AppAlert() {
    const { alert } = useContext(AlertContext);

    if (alert) {
        return (
            <Alert
                key={alert.variant}
                variant={alert.variant}
                style={{
                    height: "auto",
                    margin: "2rem 0",

                }}
                className='font-rubic'
            >
                {alert.message}
            </Alert>
        )
    }
}

export default AppAlert;