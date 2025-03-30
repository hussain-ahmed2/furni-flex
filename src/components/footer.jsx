import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-neutral-950 text-neutral-500 px-5">
			<div className="max-w-7xl mx-auto flex justify-between py-20 gap-x-30 gap-y-10 flex-wrap">
				<div>
					<Link href="/" className="flex items-center gap-1.5">
						<svg
							width="38"
							height="38"
							viewBox="0 0 38 38"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								width="38"
								height="38"
								rx="19"
								fill="#1E99F5"
							/>
							<path
								d="M18.0195 19.4727L18.8516 18.5352H20.0938L21.5703 11.0703C19.9688 11.0703 18.668 11.5039 17.668 12.3711C16.6758 13.2305 16.1797 14.3555 16.1797 15.7461L16.1914 16.0039L13.9062 17.1055C14.1094 14.707 15.0391 12.9492 16.6953 11.832C18.3594 10.7148 20.8672 10.1562 24.2188 10.1562H30.9805L29.9258 13.4727H29.1758C29.2773 13.1602 29.3281 12.8516 29.3281 12.5469C29.3281 11.5312 27.7305 11.0234 24.5352 11.0234H24.0312L22.543 18.5352H27.6523L26.4922 19.7305C25.2422 19.5586 24.0547 19.4727 22.9297 19.4727H22.3555L21.6758 22.9062C21.1055 25.7969 20 28.1055 18.3594 29.832C16.7266 31.5586 14.8242 32.4219 12.6523 32.4219C11.4805 32.4219 10.4336 31.9805 9.51172 31.0977L11.2344 29.3398C11.8516 30.6211 12.8438 31.2617 14.2109 31.2617C15.4609 31.2617 16.4414 30.6953 17.1523 29.5625C17.8711 28.4375 18.5156 26.4414 19.0859 23.5742L19.9062 19.4727H18.0195Z"
								fill="black"
							/>
						</svg>
						<h2 className="text-xl font-bold font-[Inter] text-white">
							Furni<span className="text-cyan-500">Flex</span>
						</h2>
					</Link>
				</div>
				<div className="font-semibold text-lg">
					<h3 className="text-white mb-4">About US</h3>

					<div>
						<p>Master Plan</p>
						<p>Jobs</p>
						<p>Invest</p>
						<p>Pressroom</p>
						<p>Blog</p>
						<p>Contact</p>
					</div>
				</div>
				<div className="font-semibold text-lg">
					<h3 className="text-white mb-4">Explore EEVE</h3>

					<div>
						<p>Unlock my Robot Power</p>
						<p>Starlight</p>
						<p>Robot Platform</p>
						<p>EEVE Roadmap</p>
					</div>
				</div>
				<div className="font-semibold text-lg">
					<h3 className="text-white mb-4">Community & Support</h3>

					<div>
						<p>Willow X Community</p>
						<p>Developer & Maker Access</p>
						<p>Special Cases</p>
					</div>
				</div>
			</div>

			<div className="py-10 border-t border-neutral-700">
				<div className="flex flex-wrap gap-5 justify-between items-center text-lg font-semibold">
					<div className="flex gap-4">
						<Facebook />
						<Instagram />
						<Twitter />
						<Linkedin />
					</div>
					<div className="flex gap-5">
						<p>March22 Recap</p>
						<p>Privacy Policy</p>
						<p>General Terms</p>
						<p>Contact</p>
					</div>
					<div className="flex items-center">
						<Image
							src="/us-flag-icon.png"
							alt="flag"
							width={20}
							height={20}
						/>
						<p className="ml-2">United States{"(English)"}</p>
					</div>
				</div>
				<p className="mt-10 font-semibold text-center">
					EEVE © 2025. All Rights Reserved
				</p>
			</div>
		</footer>
	);
}
