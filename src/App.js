// src/App.js
import React, { useState } from 'react';
import Duck from './Duck';
import './App.css';

function App() {
  const [duck, setDuck] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    color: '',
    age: '',
    weight: '',
    image: '',
  });
  const [output, setOutput] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateDuck = () => {
    const { name, color, age, weight, image } = formData;
    if (!name || !color || !age || !weight || !image) {
      alert('Please fill in all fields');
      return;
    }
    const newDuck = new Duck(name, color, age, weight, image);
    setDuck(newDuck);
    setFormData({
      name: '',
      color: '',
      age: '',
      weight: '',
      image: '',
    });
  };

  const handleShow = () => {
    setOutput('');
    if (duck) {
      setOutput(duck.show());
    }
  };

  const handleQuack = () => {
    setOutput('');
    if (duck) {
      setOutput(duck.quack());
      // Sound effect is optional and requires an audio file
    }
  };

  return (
    <div className="App">
      <h1>Duck Application</h1>
      {!duck && (
        <div className="form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter duck's name"
          />
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleInputChange}
            placeholder="Enter duck's color"
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter duck's age"
          />
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            placeholder="Enter duck's weight"
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            placeholder="Enter duck's image URL"
          />
          <button onClick={handleCreateDuck}>Create Duck</button>
        </div>
      )}
      {duck && (
        <div>
          <button onClick={handleShow}>Show</button>
          <button onClick={handleQuack}>Quack</button>
        </div>
      )}
      {output && (
        <div>
          <p>{output}</p>
          {duck.image && <img src={duck.image} alt="Duck" />}
        </div>
      )}
    </div>
  );
}

export default App;
