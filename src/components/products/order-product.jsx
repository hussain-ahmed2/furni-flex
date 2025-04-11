import Image from "next/image";
import QuantityCounter from "./quantity-counter";
import { X } from "lucide-react";

export default function OrderProduct({ image, name, price }) {
	return (
		<div className="flex items-center gap-4 p-4">
			<QuantityCounter />
			<div className="flex gap-3 w-full">
				<div>
					<Image
						className="aspect-square w-22 object-cover bg-gray-200 p-2 rounded-lg"
						src={image}
						width={88}
						height={88}
						alt={name}
					/>
				</div>
				<div className="w-full flex flex-col justify-between">
					<div className="flex justify-between w-full">
						<h3 className="font-bold text-neutral-800">{name}</h3>
						<div className="">
							<X color="lightgray" />
						</div>
					</div>
					<div className="font-bold self-end mt-12">$ {price}</div>
				</div>
			</div>
		</div>
	);
}
