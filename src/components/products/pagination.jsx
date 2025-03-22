import { ChevronRight } from "lucide-react";

export default function Pagination() {
	return (
		<ul className="text-gray-900 flex w-full items-center justify-center text-sm font-bold gap-2">
			<li className="w-8 h-8 rounded bg-gray-100 border border-gray-100 grid place-content-center"></li>
			<li>
				<a
					className="w-8 h-8 rounded border border-gray-900 grid place-content-center"
					href="#"
				>
					1
				</a>
			</li>
			<li>
				<a href="#" className="w-8 h-8 rounded border border-gray-100 grid place-content-center hover:bg-gray-100 tc">2</a>
			</li>
			<li>
				...
			</li>
			<li>
				<a href="#" className="w-8 h-8 rounded border border-gray-100 grid place-content-center hover:bg-gray-100 tc">9</a>
			</li>
			<li>
				<a href="#" className="w-8 h-8 rounded border border-gray-100 grid place-content-center hover:bg-gray-100 tc">10</a>
			</li>
			<li>
				<a href="#" className="w-8 h-8 rounded border border-gray-100 grid place-content-center hover:bg-gray-100 tc">
					<ChevronRight />
				</a>
			</li>
		</ul>
	);
}
