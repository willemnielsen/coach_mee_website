import { useState, useEffect } from 'react';


function useEvents() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/events')
        .then(response => response.json())
        .then(response => {
            setEvents(response);
            console.log(events);
        })
        .catch(error => {
            console.error(error);
        });
    }, [events])
    return (events)
};

export default useEvents;