import chairs from "@/data/chairs.json";

export default function ProductGrid() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{chairs.map((chair) => (
				<article key={chair.id} className="border border-gray-100 hover:shadow-xl hover:scale-105 tc rounded-2xl p-4 flex flex-col gap-8">
					<img
						className="w-full rounded-lg object-cover aspect-square max-w-60"
						src={chair.image}
						alt={chair.name}
					/>
					<div className="space-y-4">
						<h2 className="text-lg text-gray-700 font-semibold">
							{chair.name}
						</h2>
						<h3 className="text-lg flex gap-3">
							<span className="text-gray-700 font-bold">
								$
								{(
									chair.price / chair.discountPercentage
								).toFixed(2)}
							</span>{" "}
							<span className="text-gray-300 line-through font-medium">
								${chair.price}
							</span>{" "}
							<span className="text-red-800 font-semibold">
								{chair.discountPercentage}% OFF
							</span>
						</h3>
						<p className="text-sm text-gray-400">
							{chair.description}
						</p>
					</div>
					<button className="flex gap-3 items-center justify-center bg-gray-900 hover:bg-cyan-600 active:ring-4 ring-cyan-500/30 tc px-6 py-2.5 rounded font-semibold text-white">
						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3.18982 12.7641L2.28715 7.37937C2.15067 6.56522 2.08243 6.15815 2.30095 5.89133C2.51948 5.62451 2.92111 5.62451 3.72439 5.62451H14.846C15.6492 5.62451 16.0508 5.62451 16.2694 5.89133C16.4879 6.15815 16.4196 6.56522 16.2832 7.37937L15.3805 12.7641C15.0813 14.5488 14.9317 15.4412 14.3209 15.9704C13.7102 16.4995 12.8297 16.4995 11.0688 16.4995H7.50152C5.74063 16.4995 4.86018 16.4995 4.24939 15.9704C3.63861 15.4412 3.48901 14.5488 3.18982 12.7641Z"
								stroke="white"
								strokeWidth="1.6875"
							/>
							<path
								d="M13.4062 5.62598C13.4062 3.3478 11.5594 1.50098 9.28125 1.50098C7.00307 1.50098 5.15625 3.3478 5.15625 5.62598"
								stroke="white"
								strokeWidth="1.6875"
							/>
						</svg>
						Add to cart
					</button>
				</article>
			))}
		</div>
	);
}
