import Styles from '@styles/animations/NeonSign.module.scss'

const NeonSign = () => {
    return (
        <div className={Styles.nextTime}>
            <div className={Styles.sign}>
                <span className={Styles.fastFlicker}>Pro</span>
                xi
                <span className={Styles.flicker}>ma</span>
                mente
            </div>
        </div>
    )
}

export default NeonSign;