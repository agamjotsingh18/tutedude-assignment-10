import { useState } from 'react';
import '../App.css';


function CreateArea({ onAdd }) {
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!note.title.trim() || !note.content.trim()) {
      alert('Please fill in both fields!');
      return;
    }
    
    onAdd(note);
    
    setNote({
      title: '',
      content: ''
    });
  };

  return (
    <div className="create-note">
      <h2 className="create-title">
        <span>📝</span> Create a New Note
      </h2>
      
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          onChange={handleInputChange}
          value={note.title}
          placeholder="Title"
          className="note-input"
        />
        
        <textarea
          name="content"
          onChange={handleInputChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
          className="note-textarea"
        />
        
        <button type="submit" className="add-btn">
          ➕ Add Note
        </button>
      </form>
    </div>
  );
}

export default CreateArea;