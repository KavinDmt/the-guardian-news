import React, { useRef } from 'react';

const AddTodoModal = ({ onAdd, onClose }) => {

    const inputRef = useRef();
    const handleAdd = () => {
        const title = inputRef.current.value.trim();
        if (title) {
            onAdd({ title, completed: false });
            onClose();
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h3>Добавить задачу</h3>
                <input ref={inputRef} type="text" placeholder="Название задачи" />
                <div className="modal-actions">
                    <button onClick={onClose}>Отмена</button>
                    <button onClick={handleAdd}>Добавить</button>
                </div>
            </div>
        </div>
    );
};

export default AddTodoModal;