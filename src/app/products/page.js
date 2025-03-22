import Header from "@/components/header";
import Pagination from "@/components/products/pagination";
import ProductGrid from "@/components/products/product-grid";
import SideBar from "@/components/products/sidebar";

export default function Products() {
   
	return (
		<>
			<Header />
			<main className="max-w-7xl mx-auto px-5 py-14">
				<div className="flex gap-10">
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
		</>
	);
}
