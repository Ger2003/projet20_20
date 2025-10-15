import { useState } from 'react'
import './App.css'

const dayImages = {
  lundi: 'src/assets/lundi.png',
  mardi: 'src/assets/mardi.png',
  mercredi: 'src/assets/mercredi.png',
  jeudi: 'src/assets/jeudi.png',
  vendredi: 'src/assets/vendredi.png',
  samedi: 'src/assets/samedi.png',
  dimanche: 'src/assets/dimanche.png',
};

function getFrenchDayName(date) {
  const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  return days[date.getDay()];
}

function App() {
  const today = new Date();
  const dayName = getFrenchDayName(today);
  const imageSrc = dayImages[dayName];

  return (
    <div className="day-image-container">
      <h1>Image du jour : {dayName.charAt(0).toUpperCase() + dayName.slice(1)}</h1>
      <img src={imageSrc} alt={dayName} style={{ width: '300px', height: 'auto' }} />
    </div>
  );
}

export default App
