import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [eventName, setEventName] = useState('');
  const [venue, setVenue] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
        await axios.post("http://localhost:5000/sendData",{
            eventName,
            venue,
            time,
            date,
            description
        });

       
    } catch (e) {
        console.log(e);
        
    }
  }

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name: 
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
        </label>
        <br />
        <label>
          Venue: 
          <input type="text" value={venue} onChange={(e) => setVenue(e.target.value)} />
        </label>
        <br />
        <label>
          Time: 
          <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <br />
        <label>
          Date: 
          <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <br />
        <label>
          Short Description: 
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <button type="submit">Generate Poster</button>
      </form>
    </div>
      
    </>
  );
};

export default App;
