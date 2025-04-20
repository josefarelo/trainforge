import { AlertCircle } from "lucide-react";
import './EmptyFields.scss';

export default function EmptyFields() {
    return (
        <div className="empty-fields-error">
            <AlertCircle className="empty-fields-error__alert-circle" />
            <span className="empty-fields-error__text">Faltan campos por completar, debes llenarlos para poder continuar.</span>
        </div>
    );
};