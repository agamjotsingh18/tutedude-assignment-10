const Note = ({ id, title, content, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 whitespace-pre-wrap">{content}</p>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-colors duration-300 flex items-center gap-1"
          onClick={() => onDelete(id)}
        >
          <span>🗑</span> Delete
        </button>
      </div>
    </div>
  );
};

export default Note;