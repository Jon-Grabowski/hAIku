import { useState, useEffect } from 'react'

function PageContent() {
    const black_state = {1: {haiku: "",}}
    const [haikus, setHaikus] = useState(black_state)

    useEffect(() => {
        fetch(`http://localhost:3001/July_2023`)
        .then(res => res.json())
        .then(julyHaikus => setHaikus(julyHaikus))
    }, [])
    
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const month_text = getMonthName(month)
    const year = date.getFullYear()
    const currentDate = `${month_text} ${day}, ${year}`
    // console.log(haikus[day].haiku)
    // console.log(day)
    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);
        return date.toLocaleString('en-US', { month: 'long' });
      }
      
    return (
        <div>
            <div>
                <h2>{currentDate}</h2>
            </div>
            <div id="haiku_image">
                <img src="https://png.pngtree.com/png-clipart/20221028/original/pngtree-under-construction-png-image_8741247.png" alt="placeholder"></img>
            </div>
            <div id="haiku_container">
                <h3>{haikus[1].haiku == "" ? "" : haikus[day].haiku}</h3>
            </div>    
        </div>
    )
}

export default PageContent