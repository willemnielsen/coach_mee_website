import { useState, useEffect } from 'react';


function useEvents() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/events')
        .then(response => response.json())
        .then(data => {
            setEvents(data);
            console.log(events);
        })
        .catch(error => {
            console.error(error);
        });
    }, [events])
    return (events)
};

export default useEvents;