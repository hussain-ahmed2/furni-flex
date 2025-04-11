import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Layout>
				<main className="max-w-7xl mx-auto px-5">
					<h1 className="font-bold text-3xl text-center my-5">Welcome to FurniFlex.</h1>

					<p className="text-center mb-3 text-lg font-semibold">Links to the All Pages</p>
					<div className="mb-10 flex flex-col w-fit mx-auto gap-2">
						<Link className="font-medium text-sky-600 hover:underline" href='/'>Home Page</Link>
						<Link className="font-medium text-sky-600 hover:underline" href='/products'>Products Page</Link>
						<Link className="font-medium text-sky-600 hover:underline" href='/cart'>Cart Page</Link>
						<Link className="font-medium text-sky-600 hover:underline" href='/signup'>SignUp Page</Link>
						<Link className="font-medium text-sky-600 hover:underline" href='/login'>Login Page</Link>
					</div>
				</main>
			</Layout>
		</>
	);
}
