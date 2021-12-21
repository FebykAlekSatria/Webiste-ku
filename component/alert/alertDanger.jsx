// import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import Alert from 'react-bootstrap/Alert'

function AlertDismissible({ children, setShowAlert }) {
    return (
        <Alert variant="danger" onClose={setShowAlert} dismissible>
            <p className="text-sm">
                {children}
            </p>
        </Alert>
    );

}

export default AlertDismissible