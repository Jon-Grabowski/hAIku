function ArchiveCard({haiku}) {
    const {date, day, body} = haiku

    const bodyArray = body.split('|')
        
        const bodyLines = bodyArray.map(line => {
            line = line.trim()
            return <p key={line} className='my-1 fs-5 card-text'>{line}</p>
        })

    return(
        <div className="card archive-card m-3">
            <div className="card-body">
                <h5 className="card-title">{day}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{date}</h6>
                {bodyLines}
            </div>
        </div>
    )
}

export default ArchiveCard