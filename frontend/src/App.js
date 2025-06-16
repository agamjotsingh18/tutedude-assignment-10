import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';
import './App.css';


function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  };

  const handleDeleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <CreateArea onAdd={handleAddNote} />
        
        {notes.length === 0 ? (
          <div className="empty-notes">
            <div className="empty-message">
              <div className="emoji">📝</div>
              <h3>No notes yet</h3>
              <p>Create your first note above!</p>
            </div>
          </div>
        ) : (
          <div className="notes-grid">
            {notes.map((note, index) => (
              <Note
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                onDelete={handleDeleteNote}
              />
            ))}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;