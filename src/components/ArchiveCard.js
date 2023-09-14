function ArchiveCard({haiku}) {
    const {date, day, body} = haiku

    return(
        <div>
            <p>{date}</p>
            <p>{day}</p>
            <p>{body}</p>
        </div>
    )
}

export default ArchiveCard