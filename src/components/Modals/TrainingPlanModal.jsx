import { useState } from "react";
import { Trash2, Pencil } from "lucide-react";
import EmptyFields from "../EmptyFields/EmptyFields";
import WorkoutPlannerAdvanced from "./WorkoutPlannerAdvancedModal";
import WorkoutPlannerSimple from "./WorkoutPlannerSimple";
import './TrainingPlanModal.scss';

function TrainingPlanModal() {
    const [open, setOpen] = useState(false);
    const [programName, setProgramName] = useState("");
    const [planType, setPlanType] = useState(null);
    const [error, setError] = useState(false);
    const [plans, setPlans] = useState([]);
    const [editingPlanId, setEditingPlanId] = useState(null);
    const [showSimplePlanner, setShowSimplePlanner] = useState(false);
    const [showAdvancedPlanner, setShowAdvancedPlanner] = useState(false);

    const handleContinue = () => {
        if (!programName || !planType) {
            setError(true);
            return;
        }
    
        setError(false);
    
        if (editingPlanId) {
            setPlans(
                plans.map((plan) =>
                    plan.id === editingPlanId ? { ...plan, name: programName, type: planType } : plan
                )
            );
            setEditingPlanId(null);
        } else {
            const newPlan = {
                id: Date.now().toString(),
                name: programName,
                type: planType,
            };
            setPlans([...plans, newPlan]);
        }
    
        setOpen(false);
    
        // Abrir modal correcto
        if (planType === "simple") {
            setShowSimplePlanner(true);
        } else if (planType === "advanced") {
            setShowAdvancedPlanner(true);
        }
    };
    

    const handleEdit = (plan) => {
        setEditingPlanId(plan.id);
        setProgramName(plan.name);
        setPlanType(plan.type);
        setError(false);
        setOpen(true);
    };

    const handleDelete = (planId) => {
        setPlans(plans.filter((plan) => plan.id !== planId));
    };

    return (
        <div className="plan__plannings-button-create">
            {showSimplePlanner ? (
                <WorkoutPlannerSimple
                    programName={programName}
                    planType={planType}
                    onClose={() => setShowSimplePlanner(false)}
                />
            ) : showAdvancedPlanner ? (
                <WorkoutPlannerAdvanced 
                    programName={programName}
                    planType={planType}
                    onClose={() => setShowAdvancedPlanner(false)}
                />
            ) : (
                <>
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

                                {error && (<EmptyFields />)}

                                <div className="plan__plannings-button-create-modal-container-actions">
                                    <button 
                                        onClick={() => setOpen(false)}
                                        className="plan__plannings-button-create-modal-container-actions-button"
                                    >
                                        Cancelar
                                    </button>
                                    <button 
                                        onClick={handleContinue}
                                        className="plan__plannings-button-create-modal-container-actions-button"
                                    >
                                        {editingPlanId ? "Actualizar" : "Continuar"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default TrainingPlanModal;