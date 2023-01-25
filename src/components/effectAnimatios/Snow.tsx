const AnimationSnow = () => {
    return (
        <>
            {[...Array(75)].map((x, i) => {
                return (
                    <div key={i} className='snowflake'></div>
                )
            })}
        </>
    )
}

export default AnimationSnow;