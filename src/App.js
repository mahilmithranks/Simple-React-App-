import React, { useState } from 'react';
import './App.css';

const studentData = [
  {
    "_id": "67db9fec6dc40b37b0ff2ba1",
    "name": "John",
    "grade": "A",
    "score": 95,
    "__v": 0
  },
  {
    "_id": "67db9fec6dc40b37b0ff2ba2",
    "name": "Alice",
    "grade": "B",
    "score": 85,
    "__v": 0
  },
  {
    "_id": "67db9fec6dc40b37b0ff2ba3",
    "name": "Bob",
    "grade": "A",
    "score": 92,
    "__v": 0
  },
  {
    "_id": "67db9fec6dc40b37b0ff2ba4",
    "name": "Emma",
    "grade": "C",
    "score": 75,
    "__v": 0
  },
  {
    "_id": "67db9fec6dc40b37b0ff2ba5",
    "name": "Michael",
    "grade": "B",
    "score": 88,
    "__v": 0
  },
  {
    "_id": "67db9fec6dc40b37b0ff2ba6",
    "name": "Sophia",
    "grade": "A",
    "score": 98,
    "__v": 0
  },
  {
    "_id": "67db9fec6dc40b37b0ff2ba7",
    "name": "David",
    "grade": "C",
    "score": 72,
    "__v": 0
  },
  {
    "_id": "67db9fec6dc40b37b0ff2ba8",
    "name": "Olivia",
    "grade": "B",
    "score": 81,
    "__v": 0
  },
  {
    "_id": "67db9fec6dc40b37b0ff2ba9",
    "name": "James",
    "grade": "A",
    "score": 96,
    "__v": 0
  },
  {
    "_id": "67db9fec6dc40b37b0ff2baa",
    "name": "Charlotte",
    "grade": "B",
    "score": 84,
    "__v": 0
  },
  {
    "_id": "67db9fec6dc40b37b0ff2bab",
    "name": "Daniel",
    "grade": "C",
    "score": 70,
    "__v": 0
  },
  {
    "_id": "67db9fec6dc40b37b0ff2bac",
    "name": "Emily",
    "grade": "A",
    "score": 94,
    "__v": 0
  },
  {
    "_id": "67db9fec6dc40b37b0ff2bad",
    "name": "Matthew",
    "grade": "B",
    "score": 87,
    "__v": 0
  },
  {
    "_id": "67db9fec6dc40b37b0ff2bae",
    "name": "Ava",
    "grade": "A",
    "score": 99,
    "__v": 0
  },
  {
    "_id": "67db9fec6dc40b37b0ff2baf",
    "name": "Ethan",
    "grade": "C",
    "score": 73,
    "__v": 0
  },
  {
    "_id": "67db9fec6dc40b37b0ff2bb0",
    "name": "Isabella",
    "grade": "B",
    "score": 82,
    "__v": 0
  },
  {
    "_id": "67db9fec6dc40b37b0ff2bb1",
    "name": "Alexander",
    "grade": "A",
    "score": 97,
    "__v": 0
  },
  {
    "_id": "67db9fec6dc40b37b0ff2bb2",
    "name": "Mia",
    "grade": "C",
    "score": 76,
    "__v": 0
  },
  {
    "_id": "67db9fec6dc40b37b0ff2bb3",
    "name": "Benjamin",
    "grade": "B",
    "score": 86,
    "__v": 0
  },
  {
    "_id": "67db9fec6dc40b37b0ff2bb4",
    "name": "Harper",
    "grade": "A",
    "score": 93,
    "__v": 0
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredAndSortedStudents = studentData
    .filter(student => 
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  return (
    <div className="App">
      <h1>Student Records</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          className="sort-button"
        >
          Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Grade</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedStudents.map(student => (
            <tr key={student._id}>
              <td>{student._id}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td>{student.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App; 