import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    feature1: '',
    feature2: '',
    feature3: '',
    feature4: ''
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: parseFloat(e.target.value) || ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/predict', formData);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error making prediction:', error);
      alert('Error making prediction. Make sure the API server is running.');
    }
    
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ML API Demo</h1>
        <p>Enter iris flower measurements to get a species prediction</p>
        
        <form onSubmit={handleSubmit} className="prediction-form">
          <div className="form-group">
            <label>Sepal Length:</label>
            <input
              type="number"
              step="0.1"
              name="feature1"
              value={formData.feature1}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Sepal Width:</label>
            <input
              type="number"
              step="0.1"
              name="feature2"
              value={formData.feature2}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Petal Length:</label>
            <input
              type="number"
              step="0.1"
              name="feature3"
              value={formData.feature3}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Petal Width:</label>
            <input
              type="number"
              step="0.1"
              name="feature4"
              value={formData.feature4}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <button type="submit" disabled={loading}>
            {loading ? 'Predicting...' : 'Get Prediction'}
          </button>
        </form>
        
        {prediction !== null && (
          <div className="prediction-result">
            <h3>Prediction Result:</h3>
            <p>Species: {['Setosa', 'Versicolor', 'Virginica'][prediction]}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;