"use client";

import {
	PanelLeftClose,
	PanelLeftOpen,
	PanelTopClose,
	PanelTopOpen,
} from "lucide-react";
import { useState } from "react";

export default function SideBar() {
	const [isOpen, setIsOpen] = useState(true);

	function handleToggle() {
		setIsOpen((prev) => !prev);
	}

	return (
		<aside className=" pb-16 md:pr-8 border-b md:border-r border-gray-200 h-full">
			<button
				onClick={handleToggle}
				className="mb-5 block ms-auto p-1.5 hover:bg-neutral-200 rounded"
			>
				<div className="md:hidden">
					{!isOpen ? <PanelTopOpen /> : <PanelTopClose />}
				</div>
				<div className="max-md:hidden">
					{!isOpen ? <PanelLeftOpen /> : <PanelLeftClose />}
				</div>
			</button>
			<ul
				className={`flex flex-col gap-3  max-md:w-full text-gray-500 overflow-hidden transition-all duration-300 ${
					isOpen
						? "md:w-64 max-md:h-48"
						: "md:w-0 max-md:h-0 invisible"
				}`}
			>
				<li className="text-nowrap bg-black text-white hover:bg-cyan-600 tc active:ring-4 ring-cyan-500/30  rounded-lg text-xl font-semibold px-6 py-3">
					Rocking chair
				</li>
				<li className="text-nowrap font-medium text-xl px-6 py-3 hover:bg-gray-200 rounded-lg tc">
					Side chair
				</li>
				<li className="text-nowrap font-medium text-xl px-6 py-3 hover:bg-gray-200 rounded-lg tc">
					Lounge chair
				</li>
			</ul>
		</aside>
	);
}
