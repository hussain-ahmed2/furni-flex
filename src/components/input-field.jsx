export default function InputField({ 
    name,
    label,
    type = 'text',
    placeholder,
    value
}) {
	return (
		<div className="border border-gray-300 bg-white p-3 w-full flex flex-col gap-1 rounded-md focus-within:ring-4 ring-cyan-500/30 tc">
			<label className="text-xs text-gray-500" htmlFor={name}>
				{label}
			</label>
			<input
                id={name}
				className="text-sm outline-none w-full"
				type={type}
				defaultValue={value}
                placeholder={placeholder}
			/>
		</div>
	);
}
