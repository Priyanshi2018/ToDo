// Task.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import './Task.css';

const Task = ({ title, description, deleteTask, editTask, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleDelete = () => {
    deleteTask(index);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const editedTask = {
      title: editedTitle,
      description: editedDescription,
    };
    editTask(index, editedTask);
    setIsEditing(false);
  };

  return (
    <div className='task'>
      {isEditing ? (
        <div div className='edit'>
          <input 
          className='editTask'
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
          className='editDesc'
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button className='save'onClick={handleSave}>Save</button>
        </div>
      ) : (
        <>
          <div className='item'>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <button  className='btn' onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} color='white' />
          </button>
          <button className='btn' onClick={handleEdit}>
            <FontAwesomeIcon icon={faPen} color='white' />
          </button>
        </>
      )}
    </div>
  );
};

export default Task;

