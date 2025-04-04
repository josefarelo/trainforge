import { useState } from "react";
import { AlertCircle, Trash2, Pencil } from "lucide-react";

import '../Modals/TrainingPlanModal.scss';

function TrainingPlanModal() {
    const [open, setOpen] = useState(false);
    const [programName, setProgramName] = useState("");
    const [planType, setPlanType] = useState(null);
    const [weeks, setWeeks] = useState("");
    const [error, setError] = useState(false);
    const [plans, setPlans] = useState([]);
    const [editingPlanId, setEditingPlanId] = useState(null);

    const handleContinue = () => {
        if (!programName || !planType || !weeks) {
            setError(true);
            return;
        }

        setError(false);

        if (editingPlanId) {
            setPlans(
                plans.map((plan) =>
                    plan.id === editingPlanId ? { ...plan, name: programName, type: planType, weeks } : plan
                )
            );
            setEditingPlanId(null);
        } else {
            const newPlan = {
                id: Date.now().toString(),
                name: programName,
                type: planType,
                weeks,
            };
            setPlans([...plans, newPlan]);
        }

        setProgramName("");
        setPlanType(null);
        setWeeks("");
        setOpen(false);
    };

    const handleEdit = (plan) => {
        setEditingPlanId(plan.id);
        setProgramName(plan.name);
        setPlanType(plan.type);
        setWeeks(plan.weeks);
        setError(false);
        setOpen(true);
    };

    const handleDelete = (planId) => {
        setPlans(plans.filter((plan) => plan.id !== planId));
    };

    return (
        <div className="plan__plannings-button-create">
            <button className="plan__plannings-button" onClick={() => { setOpen(true); setError(false); }}>
                + Añadir nueva planificación
            </button>

            {/* Lista de planes existentes */}
            <div className="plan__plannings-button-create-modal">
                {plans.map((plan) => (
                    <div key={plan.id} className="plan__plannings-button-create-modal-container-key">
                        <div className="plan__plannings-button-create-modal-container">
                            <div className="plan__plannings-button-create-modal-container-content">
                                <h3 className="plan__plannings-button-create-modal-container-content-title">{plan.name}</h3>
                                <div className="plan__plannings-button-create-modal-container-content-values">
                                    <span>{plan.type === "simple" ? "Planificación simple" : "Planificación avanzada"}</span>
                                    <span className="ml-4">{plan.weeks} semanas</span>
                                </div>
                            </div>
                            <div className="plan__plannings-button-create-modal-container-actions">
                                <button onClick={() => handleEdit(plan)}>
                                    <Pencil className="plan__plannings-button-create-modal-container-actions-edit" />
                                </button>
                                <button onClick={() => handleDelete(plan.id)} className="text-red-500">
                                    <Trash2 className="plan__plannings-button-create-modal-container-actions-delete" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal de creación/edición */}
            <div className={`plan__plannings-button-create-modal ${open ? 'active' : ''}`}>
                <div className="plan__plannings-button-create-modal-container-key">
                    <div className="plan__plannings-button-create-modal-container">
                        <h2 className="plan__plannings-button-create-modal-container-content-title">{editingPlanId ? "Editar Programa de Entrenamiento" : "Crear Programa de Entrenamiento"}</h2>

                        <div className="plan__plannings-button-create-modal-container-content-values">
                            <label>Nombre de la planificación:</label>
                            <input 
                                value={programName} 
                                onChange={(e) => setProgramName(e.target.value)} 
                                className="plan__plannings-button-create-modal-container-content-values-input"
                                placeholder="Ingrese el nombre del programa"
                            />
                        </div>

                        <div className="plan__plannings-button-create-modal-container-content-values">
                            <label>Elige el tipo de planificación:</label>
                            <div className="plan__plannings-button-create-modal-container-content-values-options">
                                <button 
                                    onClick={() => setPlanType("simple")} 
                                    className={`plan__plannings-button-create-modal-container-content-values-options-type ${planType === "simple" ? 'selected' : ''}`}
                                >
                                    Planificación simple
                                </button>
                                <button 
                                    onClick={() => setPlanType("advanced")} 
                                    className={`plan__plannings-button-create-modal-container-content-values-options-type ${planType === "advanced" ? 'selected' : ''}`}
                                >
                                    Planificación avanzada
                                </button>
                            </div>
                        </div>

                        <div className="plan__plannings-button-create-modal-container-content-values">
                            <label>Cantidad de semanas:</label>
                            <input 
                                type="number" 
                                min="1" 
                                value={weeks} 
                                onChange={(e) => setWeeks(e.target.value)} 
                                className="plan__plannings-button-create-modal-container-content-values-input"
                                placeholder="Número de semanas"
                            />
                        </div>

                        {error && (
                            <div className="plan__plannings-button-create-modal-container-alert">
                                <AlertCircle className="plan__plannings-button-create-modal-container-alert-circle" />
                                <span>Faltan campos por completar, debes llenarlos para poder continuar.</span>
                            </div>
                        )}

                        <div className="plan__plannings-button-create-modal-container-actions">
                            <button 
                                onClick={handleContinue}
                                className="plan__plannings-button-create-modal-container-actions-button"
                            >
                                {editingPlanId ? "Actualizar" : "Continuar"}
                            </button>
                            <button 
                                onClick={() => setOpen(false)}
                                className="plan__plannings-button-create-modal-container-actions-button"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrainingPlanModal;