import { Minus, Plus } from "lucide-react";

export default function QuantityCounter({quantity = 1}) {
	return (
		<div className="flex items-center gap-2 border border-gray-300 p-2 rounded-md w-fit">
			<button className="w-4 h-4 grid place-content-center">
                <Minus size={16} />
            </button>
			<div className="font-semibold">{quantity}</div>
			<button className="w-4 h-4 grid place-content-center">
                <Plus size={16} />
            </button>
		</div>
	);
}
