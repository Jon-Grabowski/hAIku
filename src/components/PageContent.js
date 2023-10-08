import { useState, useEffect } from 'react'
import Haiku from './Haiku'

function PageContent() {

    const [haikusArray, setHaikus] = useState([])
    const [todayHaiku, setTodayHaiku] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3001/${month_text}`)
        .then(res => res.json())
        .then(Haikus => {
            // console.log(Haikus)
            setHaikus(Haikus)
            }
        )
    }, [])

    useEffect(() => {
        findHaiku(haikusArray)
    }, [haikusArray])
    
    const date = new Date()
    const currentDay = date.getDate()
    const month = date.getMonth() + 1
    const month_text = getMonthName(month)
    const year = date.getFullYear()
    const currentDate = `${month_text} ${currentDay}, ${year}`
    // console.log(day)
    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);
        return date.toLocaleString('en-US', { month: 'long' });
    }
    
    function findHaiku(haikus) {
        haikus.forEach(haiku => {
            if (haiku.date === `${currentDay}`) {
                setTodayHaiku(haiku)
            }
        }
        )
    }
    
    return (
        <div>
            <div className='container-lg text-center p-4'>
                <h2 className='display-4'>{currentDate}</h2>
                <h3 className='h3'>{todayHaiku.day}</h3>
            </div>
            <div className='d-flex justify-content-center'>
                <div id="haiku_container" className='bg-white border border-5 border-black rounded shadow w-50 p-5'>
                    <Haiku todayHaiku = {todayHaiku} />
                </div> 
            </div>  
            <div>
                <img id="haiku_image" src="https://png.pngtree.com/png-clipart/20221028/original/pngtree-under-construction-png-image_8741247.png" alt="placeholder"></img>
            </div>
        </div>
    )
}

export default PageContent