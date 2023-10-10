import { useState } from "react"

function ArchiveCard({haiku, selectedMonth}) {
    const {date, day, body} = haiku
    const[cardTrigger, setCardTrigger] = useState(true)

    function handleClick() {
        setCardTrigger(!cardTrigger)
    }

    const bodyArray = body.split('|')
        
        const bodyLines = bodyArray.map(line => {
            line = line.trim()
            return <p key={line} className='my-1 fs-5 card-text'><strong>{line}</strong></p>
        })

    return(
        <div>
            {cardTrigger ? 
            <div 
            className="card archive-card m-3 rounded shadow border border-3 border-black" 
            onClick={handleClick}>
                <div className="card-body rounded">
                    <h5 className="card-title pb-1 pt-1 mb-5 fs-3 border-bottom border-1 border-black">{selectedMonth + ' ' + date}</h5>
                    <h6 className="card-subtitle text-wrap text-body-secondary fs-4">{day}</h6>
                </div>
            </div>
            : 
            <div className="card archive-card m-3 rounded shadow border border-3 border-black" onClick={handleClick}>
                <div className="card-body rounded">
                    <h5 className="card-title pb-1 pt-1 mb-5 fs-3 border-bottom border-1 border-black">{day}</h5>
                    <div className='pb-3'>
                        {bodyLines}
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default ArchiveCard