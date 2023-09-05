import { useState, useEffect } from 'react'

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
            if (haiku.date === `${month_text} ${currentDay}`) {
                console.log(haiku)
                setTodayHaiku(haiku)
            }
        }
        )
    }
    return (
        <div>
            <div>
                <h2>{currentDate}</h2>
                <h3>{todayHaiku.day}</h3>
            </div>
            <div id="haiku_image">
                <img src="https://png.pngtree.com/png-clipart/20221028/original/pngtree-under-construction-png-image_8741247.png" alt="placeholder"></img>
            </div>
            <div id="haiku_container">
                <h2>{todayHaiku.body}</h2>
                {/* <h3>{haikus.haiku}</h3> */}
            </div>    
        </div>
    )
}

export default PageContent