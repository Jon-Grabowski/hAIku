function ArchiveCard({haiku, selectedMonth}) {
    const {date, day, body} = haiku

    const bodyArray = body.split('|')
        
        const bodyLines = bodyArray.map(line => {
            line = line.trim()
            return <p key={line} className='my-1 fs-5 card-text'>{line}</p>
        })

    return(
        <div className="card archive-card m-3 rounded shadow border border-3 border-black">
            <div className="card-body rounded">
                <h5 className="card-title text-wrap">{day}</h5>
                <h6 className="card-subtitle border-bottom border-black pb-2 mb-4 text-body-secondary">{selectedMonth + ' ' + date}</h6>
                <div className='pb-3'>
                    {bodyLines}
                </div>
            </div>
        </div>
    )
}

export default ArchiveCard