import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <CreateArea onAdd={addNote} />
        
        {notes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {notes.map((note, index) => (
              <Note
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                onDelete={deleteNote}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 animate-fadeIn">
            <div className="inline-block p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-medium text-gray-900">No notes yet</h3>
              <p className="mt-2 text-gray-600">Your notes will appear here</p>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;