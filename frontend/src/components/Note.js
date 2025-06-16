import '../App.css';


function Note({ id, title, content, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <div className="note-card">
      <div className="note-content">
        <h3 className="note-title">{title}</h3>
        <p className="note-text">{content}</p>
      </div>
      <button 
        className="delete-btn"
        onClick={handleDeleteClick}
      >
        🗑 Delete
      </button>
    </div>
  );
}

export default Note;