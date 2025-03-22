"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
	const pathname = usePathname();

	return (
		<header className="border-b border-gray-200">
			<nav className="max-w-7xl mx-auto px-5 min-h-20 flex justify-between items-center">
				<Link href="/" className="flex items-center gap-1.5">
					<svg
						width="38"
						height="38"
						viewBox="0 0 38 38"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width="38" height="38" rx="19" fill="#1E99F5" />
						<path
							d="M18.0195 19.4727L18.8516 18.5352H20.0938L21.5703 11.0703C19.9688 11.0703 18.668 11.5039 17.668 12.3711C16.6758 13.2305 16.1797 14.3555 16.1797 15.7461L16.1914 16.0039L13.9062 17.1055C14.1094 14.707 15.0391 12.9492 16.6953 11.832C18.3594 10.7148 20.8672 10.1562 24.2188 10.1562H30.9805L29.9258 13.4727H29.1758C29.2773 13.1602 29.3281 12.8516 29.3281 12.5469C29.3281 11.5312 27.7305 11.0234 24.5352 11.0234H24.0312L22.543 18.5352H27.6523L26.4922 19.7305C25.2422 19.5586 24.0547 19.4727 22.9297 19.4727H22.3555L21.6758 22.9062C21.1055 25.7969 20 28.1055 18.3594 29.832C16.7266 31.5586 14.8242 32.4219 12.6523 32.4219C11.4805 32.4219 10.4336 31.9805 9.51172 31.0977L11.2344 29.3398C11.8516 30.6211 12.8438 31.2617 14.2109 31.2617C15.4609 31.2617 16.4414 30.6953 17.1523 29.5625C17.8711 28.4375 18.5156 26.4414 19.0859 23.5742L19.9062 19.4727H18.0195Z"
							fill="black"
						/>
					</svg>
					<h2 className="text-xl font-bold font-[Inter]">
						Furni<span className="text-cyan-500">Flex</span>
					</h2>
				</Link>

				<div className="flex gap-2.5 font-medium">
					<Link
						href="/"
						className={`px-5 py-2 rounded-md hover:underline tc hover:text-cyan-500 ${
							pathname === "/" ? "bg-gray-100" : ""
						}`}
					>
						Home
					</Link>
					<Link
						href="/products"
						className={`px-5 py-2 rounded-md hover:underline tc hover:text-cyan-500 ${
							pathname === "/products" ? "bg-gray-100" : ""
						}`}
					>
						Products
					</Link>
					<Link
						href="#"
						className={`px-5 py-2 rounded-md hover:underline tc hover:text-cyan-500 ${
							pathname === "/categories" ? "bg-gray-100" : ""
						}`}
					>
						Categories
					</Link>
					<Link
						href="#"
						className={`px-5 py-2 rounded-md hover:underline tc hover:text-cyan-500 ${
							pathname === "/custom" ? "bg-gray-100" : ""
						}`}
					>
						Custom
					</Link>
					<Link
						href="#"
						className={`px-5 py-2 rounded-md hover:underline tc hover:text-cyan-500 ${
							pathname === "/blog" ? "bg-gray-100" : ""
						}`}
					>
						Blog
					</Link>
				</div>

				<div className="flex items-center gap-6">
					<Link href="#">
						<div>
							<svg
								width="33"
								height="34"
								viewBox="0 0 33 34"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5.15865 22.6925L3.5539 13.1197C3.31126 11.6724 3.18995 10.9487 3.57843 10.4743C3.96693 10 4.68094 10 6.10898 10H25.8807C27.3087 10 28.0227 10 28.4112 10.4743C28.7996 10.9487 28.6783 11.6724 28.4357 13.1197L26.8309 22.6925C26.2991 25.8655 26.0331 27.4519 24.9472 28.3927C23.8615 29.3333 22.2961 29.3333 19.1657 29.3333H12.8239C9.69341 29.3333 8.12816 29.3333 7.04232 28.3927C5.95648 27.4519 5.69054 25.8655 5.15865 22.6925Z"
									stroke="#323232"
									strokeWidth="3"
								/>
								<path
									d="M23.3385 9.99935C23.3385 5.94926 20.0553 2.66602 16.0052 2.66602C11.9551 2.66602 8.67188 5.94926 8.67188 9.99935"
									stroke="#323232"
									strokeWidth="3"
								/>
								<rect
									x="17"
									y="18"
									width="16"
									height="16"
									rx="8"
									fill="#323232"
								/>
								<path
									d="M24.205 28.8152C24.1975 28.8301 24.1975 28.845 24.205 28.86C24.2125 28.8674 24.2237 28.8712 24.2386 28.8712H27.6098C27.6845 28.8712 27.7218 28.9085 27.7218 28.9832V29.6888C27.7218 29.7634 27.6845 29.8008 27.6098 29.8008H22.917C22.8423 29.8008 22.805 29.7634 22.805 29.6888V29.0056C22.805 28.9533 22.8237 28.9085 22.861 28.8712C23.1149 28.58 23.6973 27.8968 24.6082 26.8216L25.381 25.892C26.0754 25.0632 26.4226 24.421 26.4226 23.9656C26.4226 23.6146 26.3031 23.3346 26.0642 23.1256C25.8327 22.909 25.5229 22.8008 25.1346 22.8008C24.7463 22.8008 24.4365 22.909 24.205 23.1256C23.9735 23.3421 23.8615 23.6258 23.869 23.9768V24.3128C23.869 24.3874 23.8317 24.4248 23.757 24.4248H22.8946C22.8199 24.4248 22.7826 24.3874 22.7826 24.3128V23.8312C22.7975 23.4429 22.9058 23.0994 23.1074 22.8008C23.3165 22.5021 23.5965 22.2744 23.9474 22.1176C24.2983 21.9533 24.6941 21.8712 25.1346 21.8712C25.6125 21.8712 26.0306 21.9608 26.389 22.14C26.7474 22.3192 27.0237 22.5656 27.2178 22.8792C27.4119 23.1928 27.509 23.5474 27.509 23.9432C27.509 24.5629 27.173 25.2946 26.501 26.1384C26.2023 26.5192 25.8477 26.9485 25.437 27.4264C25.0263 27.8968 24.6157 28.3597 24.205 28.8152Z"
									fill="white"
								/>
							</svg>
						</div>
					</Link>

					<Link href="#">
						<div>
							<Image className="rounded-full" src="/avatar.png" alt="avatar" height={40} width={40} />
						</div>
					</Link>
				</div>
			</nav>
		</header>
	);
}
