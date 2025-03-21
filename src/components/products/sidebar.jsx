export default function SideBar() {
	return (
		<aside className="max-w-64 w-full pt-10 pb-16 pr-8 border-r border-gray-200">
			<ul className="flex flex-col gap-3 w-full">
				<li className="bg-black text-white hover:bg-cyan-500 tc active:ring-4 ring-cyan-500/30  rounded-lg text-xl font-semibold px-6 py-3">
					Rocking chair
				</li>
				<li className="font-medium text-xl px-6 py-3 hover:bg-gray-200 rounded-lg tc">
					Side chair
				</li>
				<li className="font-medium text-xl px-6 py-3 hover:bg-gray-200 rounded-lg tc">
					Lounge chair
				</li>
			</ul>
		</aside>
	);
}
