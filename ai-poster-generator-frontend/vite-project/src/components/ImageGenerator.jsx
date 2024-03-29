import React, { useRef, useState } from 'react'
import './ImageGenerator.css'
import yourImage from '../assets/logo3.jpeg'
import axios from 'axios';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { imgDB} from '../config/firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from  'uuid';


const ImageGenerator = () => {
    const [eventName, setEventName] = useState('');
    const [venue, setVenue] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [image_url, setimage_url] = useState("/");

    const logOut = async () => {
        try {
            await signOut(auth);

        } catch (err) {
            console.error(err)

        }


    };


    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("http://localhost:5000/sendData", {
                eventName,
                venue,
                time,
                date,
                description
            },
                {
                    responseType: 'blob' // Specify the response type as 'blob' to receive binary data
                });      
            const result1 = new Blob([response.data]);
            setimage_url(URL.createObjectURL(result1));

            const imageFile = new File([result1], 'image.jpg', { type: 'image/jpeg' });

            
            const storageRef = ref(imgDB, `${eventName}`);
            

            uploadBytes(storageRef, imageFile).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });

            setLoading(false);


            console.log(typeof response.data);
            console.log(typeof result1);

        } catch (e) {
            console.log(e);

        }
        
    }

    
    let inputRef = useRef(null);

    return (
        <>
            <p>
                

            </p>
            <div className='ai-poster-generator'>
                <div className="header">Chitra <span>. AI</span></div>
                <div className="img-loading">
                    <div className="image"><img src={image_url === "/" ? yourImage : image_url} alt=''></img></div>
                    <div className="loading">
                        <div className={loading ? "loading-bar-full" : "loading-bar"}></div>
                        <div id="bar" className={loading ? "loading-text" : "display-none"}>Loading....</div>
                    </div>
                </div>
                <div className="search-box">
                <div className="title">Enter the details of the event....</div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Event Name:
                            <input type="text" placeholder="Name of the event" value={eventName} onChange={(e) => setEventName(e.target.value)} />
                        </label>
                        <br />
                        <label>
                            Venue:
                            <input type="text" placeholder="Venue of the event" value={venue} onChange={(e) => setVenue(e.target.value)} />
                        </label>
                        <br />
                        <label>
                            Time:
                            <input type="text" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} />
                        </label>
                        <br />
                        <label>
                            Date:
                            <input type="text" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
                        </label>
                        <br />
                        <label>
                            Short Description:<br/><br/>
                            <textarea value={description} placeholder="description of the event......" onChange={(e) => setDescription(e.target.value)} />
                        </label>
                        <br />
                        <button className='generate-btn' type="submit">Generate Poster</button>
                    </form>
                </div>
                </div>

            </div>
            


               

           
            <button onClick={logOut}>
                Logout
            </button>
            

        </>
    )
}

export default ImageGenerator
