import './styles.scss'
interface IButtonProps {
    children: React.ReactNode;
    type: 'submit' | 'button';
}

export default function DefaultButton({ type, children }: IButtonProps) {
    return <button className='buttonStyles' type={type}>{children}</button>
}
