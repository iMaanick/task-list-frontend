import React, { useState } from 'react';
import Spinner from './spinner/Spinner';

interface AddTaskProps {
    onAdd: (title: string) => void;
    loading?: boolean;
}

const AddTask: React.FC<AddTaskProps> = ({ onAdd, loading }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !description) return;
        onAdd({ title, description });
        setTitle('');
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
            <input
                type="text"
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
