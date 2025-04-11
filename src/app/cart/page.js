import Layout from "@/components/Layout";
import OrderProduct from "@/components/products/order-product";
import chairs from "@/data/chairs.json";

const orders = chairs.sort(() => 0.5 - Math.random()).slice(1);
const totalPrice = orders.reduce((acc, chair) => chair.price + acc, 0);

export default function page() {
	return (
		<Layout>
			<main className="max-w-7xl mx-auto px-5">
				<div className="mt-5 grid md:grid-cols-3 gap-10 mb-20">
					<div className="md:col-span-2">
						<h2 className="text-2xl font-semibold mb-10">
							An overview of your order
						</h2>
						<div className="bg-neutral-100 rounded-md">
							{orders.map((chair, index) => (
								<div key={chair.id}>
									<OrderProduct {...chair} />
									{orders.length - 1 > index && (
										<div className="border-t border-gray-300 mx-4"></div>
									)}
								</div>
							))}
						</div>
					</div>
					<div className="">
						<h2 className="text-2xl font-semibold mb-10">
							Order details
						</h2>

						<div className="border border-neutral-300 bg-neutral-100 rounded-lg">
							<div className="flex flex-col gap-3 p-4 text-neutral-500 font-medium">
								<div className="flex justify-between">
									<span>Subtotal</span>{" "}
									<span>$ {totalPrice}</span>
								</div>
								<div className="flex justify-between">
									<span>Shipping</span> <span>free</span>
								</div>
								<div className="flex justify-between">
									<span>Estimated Tax</span>{" "}
									<span>$ - {}</span>
								</div>
								<div className="border-t border-neutral-300"></div>
								<div className="text-lg font-semibold text-neutral-800 flex justify-between">
									<span>Total</span>{" "}
									<span>$ {totalPrice}</span>
								</div>
							</div>
						</div>

						<button className="w-full bg-neutral-900 text-white font-medium rounded py-3 mt-4 hover:bg-sky-600 transition duration-300">GO TO CHECKOUT</button>
					</div>
				</div>
			</main>
		</Layout>
	);
}
