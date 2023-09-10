
function Haiku({todayHaiku}) {
    if (todayHaiku.body) {
        const bodyArray = todayHaiku.body.split('|')
        
        const haikuLines = bodyArray.map(line => {
            line = line.trim()
            return <p key={line} className='my-1 display-6'>{line}</p>
        })
        return (
            <div className='text-center'>
                {haikuLines}
            </div>
        )
    }
}

export default Haiku