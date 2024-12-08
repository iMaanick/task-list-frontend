import React, { useState } from 'react';
import Spinner from './spinner/Spinner';

// Interface defining the props for AddTask component
interface AddTaskProps {
    onAdd: (title: string) => void;  // Function to handle adding a new task
    loading?: boolean;
}

const AddTask: React.FC<AddTaskProps> = ({ onAdd, loading }) => {
    const [title, setTitle] = useState('');  // Стейт для заголовка
    const [description, setDescription] = useState('');  // Стейт для описания

    // Функция для отправки данных
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();  // Отменить стандартное поведение формы
        if (!title || !description) return;  // Если нет title или description, не добавляем задачу
        onAdd({ title, description });  // Отправка задачи с title и description
        setTitle('');  // Очистка полей после добавления задачи
        setDescription('');
    };

    return (
        <form className="addTask" onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="New task title"
                disabled={loading}
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task description"
                disabled={loading}
            />
            <button type="submit">{loading ? <Spinner /> : "Add"}</button>
        </form>
    );
};

export default AddTask;
