import { useEffect, useState } from "react"
import ArchiveCard from "./ArchiveCard"

function Archive() {
    const [haikusArray, setHaikus] = useState([])
    const [selectedMonth, setSelectedMonth] = useState('')
    const [selectedMonthNum, setSelectedMonthNum] = useState('')
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

    function getAllHaikusByMonth(month){
        fetch(`http://localhost:3001/${month}`)
        .then(res => res.json())
        .then(Haikus => {
            setHaikus(Haikus)
            }
        )
    }

    function handleClickMonth(e) {
        
        getAllHaikusByMonth(e.target.innerText)
        setSelectedMonth(e.target.innerText)
        setSelectedMonthNum(parseInt(e.target.getAttribute('value')))
    }

    useEffect(()=>{
        getAllHaikusByMonth(month_text)
        setSelectedMonth(month_text)
        setSelectedYear(year)
        setSelectedMonthNum(month)
    }, [])

    useEffect(() => {
        if (selectedYear === 2023) {
            setIs2023(true)
        } else {
            setIs2023(false)
        }
    }, [selectedYear])

    // const filteredHaikus = haikusArray.filter((haiku) => haiku.date <= currentDay)
    const haikuCards = haikusArray.map((haiku)=>{
        if (selectedMonthNum < month) {
            return (
                <ArchiveCard key={haiku.date}haiku={haiku} selectedMonth={selectedMonth} />
            )
            
            }else if (selectedMonthNum === month && haiku.date < currentDay){
                return (
                    <ArchiveCard key={haiku.date}haiku={haiku} selectedMonth={selectedMonth} />
                )}
    })

    console.log(haikuCards)

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
                            <li onClick={handleClickMonth}><p className="dropdown-item" value='12'>December</p></li>
                            <li onClick={handleClickMonth}><p className="dropdown-item" value='11'>November</p></li>
                            <li onClick={handleClickMonth}><p className="dropdown-item" value='10'>October</p></li>
                            <li onClick={handleClickMonth}><p className="dropdown-item" value='9'>September</p></li>
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