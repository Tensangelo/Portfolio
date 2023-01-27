const AnimationSnow = () => {
    return (
        <>
            {[...Array(60)].map((x, i) => {
                return (
                    <div key={i} className='snowflake'></div>
                )
            })}
        </>
    )
}

export default AnimationSnow;