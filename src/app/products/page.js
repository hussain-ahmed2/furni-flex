import Layout from "@/components/Layout";
import Pagination from "@/components/products/pagination";
import ProductGrid from "@/components/products/product-grid";
import SideBar from "@/components/products/sidebar";

export default function Products() {
	return (
		<>
			<Layout>
				<main className="max-w-7xl mx-auto px-5 py-14">
					<div className="flex md:gap-10 max-md:flex-col">
						<div>
							<SideBar />
						</div>
						<div>
							<ProductGrid />
						</div>
					</div>
					<div className="mt-14 w-full">
						<Pagination />
					</div>
				</main>
			</Layout>
		</>
	);
}
