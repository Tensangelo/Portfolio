import Style from '@styles/animations/newSign.module.scss';

interface PropsSign {
    label: string;
}

export const NewSign = ({ label }: PropsSign) => {
    return (
        <span className={Style.newLabel}>
            {label}
        </span>
    )
}