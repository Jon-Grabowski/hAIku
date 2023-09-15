import { useEffect, useState } from "react"
import ArchiveCard from "./ArchiveCard"

function Archive() {
    const [haikusArray, setHaikus] = useState([])
    const [selectedMonth, setSelectedMonth] = useState('')
    const [selectedYear, setSelectedYear] = useState('')

    const date = new Date()
    const currentDay = date.getDate()
    const month = date.getMonth() + 1
    const month_text = getMonthName(month)
    const year = date.getFullYear()
    const currentDate = `${month_text} ${currentDay}, ${year}`
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
        setSelectedMonth(month_text)
        setSelectedYear(year)
    }, [])
    const filteredHaikus = haikusArray.filter((haiku) => haiku.date <= currentDay)
    const haikuCards = filteredHaikus.map((haiku)=>{
        if (haiku.date < currentDay) {
            return (
                <ArchiveCard key={haiku.date}haiku={haiku} selectedMonth={selectedMonth} />
            )
        } else {
        }
    })
    
    console.log(haikuCards)

    return (
        <div className='container text-center'>
            <h1>{selectedMonth+' '+selectedYear}</h1>
            <div className='d-inline-flex flex-wrap'>
                {haikuCards.reverse()}
            </div>
        </div>
    )
}


export default Archive