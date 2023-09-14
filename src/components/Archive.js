import { useEffect, useState } from "react"
import ArchiveCard from "./ArchiveCard"

function Archive() {
    const [haikusArray, setHaikus] = useState([])

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

    function getAllHaikusByMonth(month_text){
        fetch(`http://localhost:3001/September`)
        .then(res => res.json())
        .then(Haikus => {
            setHaikus(Haikus)
            }
        )
    }

    useEffect(()=>{
        getAllHaikusByMonth('September')
    }, [])
    const filteredHaikus = haikusArray.filter((haiku) => haiku.date <= currentDay)
    const haikuCards = filteredHaikus.map((haiku)=>{
        if (haiku.date <= currentDay) {
            return (
                <ArchiveCard key={haiku.date}haiku={haiku} />
            )
        } else {
        }
    })
    
    console.log(haikuCards)

    return (
        <div className='text-center'>
            <h1>ARCHIVE PAGE</h1>
            {haikuCards}
        </div>
    )
}


export default Archive