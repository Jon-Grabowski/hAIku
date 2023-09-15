import { useEffect, useState } from "react"
import ArchiveCard from "./ArchiveCard"

function Archive() {
    const [haikusArray, setHaikus] = useState([])
    const [selectedMonth, setSelectedMonth] = useState('')
    const [selectedYear, setSelectedYear] = useState('')
    const [is2023, setIs2023] = useState(false)

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

    function handleClickMonth(e) {
        console.log(e.target.innerText)
    }

    useEffect(()=>{
        getAllHaikusByMonth('September')
        setSelectedMonth(month_text)
        setSelectedYear(year)
    }, [])

    useEffect(() => {
        if (selectedYear === 2023) {
            console.log(selectedYear)
            setIs2023(true)
        } else {
            setIs2023(false)
        }
    }, [selectedYear])

    const filteredHaikus = haikusArray.filter((haiku) => haiku.date <= currentDay)
    const haikuCards = filteredHaikus.map((haiku)=>{
        if (haiku.date < currentDay) {
            return (
                <ArchiveCard key={haiku.date}haiku={haiku} selectedMonth={selectedMonth} />
            )
        } else {
        }
    })

    return (
        <div className='container text-center mt-3'>
            <div className='d-flex justify-content-between'>
                <h1 className='ms-5 p-2'>{selectedMonth+' '+selectedYear}</h1>
                <div className='d-flex justify-content-between'>
                    <div className="dropdown p-2">
                        <button className="btn btn-light dropdown-toggle border border-2 border-primary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {selectedMonth}
                        </button>
                        <ul className="dropdown-menu">
                            <li onClick={handleClickMonth}><p className="dropdown-item">December</p></li>
                            <li onClick={handleClickMonth}><p className="dropdown-item">November</p></li>
                            <li onClick={handleClickMonth}><p className="dropdown-item">October</p></li>
                            <li onClick={handleClickMonth}><p className="dropdown-item">September</p></li>
                            {is2023 ? <li><p className="dropdown-item disabled">August</p></li> : <li onClick={handleClickMonth}><p className="dropdown-item">August</p></li>}
                            {is2023 ? <li><p className="dropdown-item disabled">July</p></li> : <li onClick={handleClickMonth}><p className="dropdown-item">July</p></li>}
                            {is2023 ? <li><p className="dropdown-item disabled">June</p></li> : <li onClick={handleClickMonth}><p className="dropdown-item">June</p></li>}
                            {is2023 ? <li><p className="dropdown-item disabled">May</p></li> : <li onClick={handleClickMonth}><p className="dropdown-item">May</p></li>}
                            {is2023 ? <li><p className="dropdown-item disabled">April</p></li> : <li onClick={handleClickMonth}><p className="dropdown-item">April</p></li>}
                            {is2023 ? <li><p className="dropdown-item disabled">March</p></li> : <li onClick={handleClickMonth}><p className="dropdown-item">March</p></li>}
                            {is2023 ? <li><p className="dropdown-item disabled">February</p></li> : <li onClick={handleClickMonth}><p className="dropdown-item">February</p></li>}
                            {is2023 ? <li><p className="dropdown-item disabled">January</p></li> : <li onClick={handleClickMonth}><p className="dropdown-item">January</p></li>}
                        </ul>
                    </div>
                    <div className="dropdown p-2 me-5">
                        <button className="btn btn-light dropdown-toggle border border-2 border-primary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {selectedYear}
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='d-inline-flex flex-wrap'>
                {haikuCards.reverse()}
            </div>
        </div>
    )
}


export default Archive