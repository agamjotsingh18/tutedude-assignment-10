import { useState } from 'react';

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const submitNote = (e) => {
    e.preventDefault();
    if (note.title.trim() === '' || note.content.trim() === '') {
      alert('🚨 Please fill in both Title and Content!');
      return;
    }
    onAdd(note);
    setNote({ title: '', content: '' });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-8 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
        <span className="mr-2">📝</span> Create a New Note
      </h2>
      <input
        className="w-full border-b-2 border-gray-200 focus:border-purple-500 outline-none p-3 text-lg mb-4 transition-colors duration-300"
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
      />
      <textarea
        className="w-full border-b-2 border-gray-200 focus:border-purple-500 outline-none p-3 text-lg mb-6 resize-none transition-colors duration-300"
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        rows="3"
      />
      <button
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:scale-[1.02] transform transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
        onClick={submitNote}
      >
        <span className="text-xl">➕</span> Add Note
      </button>
    </div>
  );
};

export default CreateArea;