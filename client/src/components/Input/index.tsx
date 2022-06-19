import './styles.scss'
interface IDefaultInputProps {
    name: string;
    type: string;
    placeholder: string;
    label: string;
    value: string;
    error?: string;
    autoComplete?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DefaultInput({ name, type, autoComplete, placeholder, error = '', value, label = '', onChange }: IDefaultInputProps) {
    return (
        <div>
            <label className='inputLabel'>
                {label}
                <input autoComplete={autoComplete} placeholder={placeholder} type={type} name={name} value={value} onChange={onChange} />
            </label>
            {error && <span className='errorSpan'>{error}</span>}
        </div>
    )
}