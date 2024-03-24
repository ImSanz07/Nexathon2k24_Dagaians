import React, { useRef, useState } from 'react'
import './ImageGenerator.css'
import trace from '../assets/trace.svg'
import axios from 'axios';


const ImageGenerator = () => {
    const [eventName, setEventName] = useState('');
    const [venue, setVenue] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/sendData", {
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

    const [image_url, setImage_url] = useState("/");
    let inputRef = useRef(null);

    return (
        <>
            <div className='ai-poster-generator'>
                <div className="header">Chitra <span>. AI</span></div>
                <div className="img-loading">
                    <div className="image"><img src={image_url === "/" ? trace : image_url} alt=''></img></div>
                    <div className='loading'>
                        <div className='loading-bar'></div>
                        <div className='loading-text'>Loading...</div>
                    </div>
                </div>
                <div className="search-box">
                    
               
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
                            Short Description:<br/><br/>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                        </label>
                        <br />
                        <button className='generate-btn' type="submit">Generate Poster</button>
                    </form>
                </div>
                </div>

            </div>
            

        </>
    )
}

export default ImageGenerator
