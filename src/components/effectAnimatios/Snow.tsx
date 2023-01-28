import Styles from '@styles/animations/snow.module.scss';

const AnimationSnow = () => {
    return (
        <>
            {[...Array(60)].map((x, i) => {
                return (
                    <div key={i} className={Styles.snowflake}></div>
                )
            })}
        </>
    )
}

export default AnimationSnow;