import "./globals.css";

export const metadata = {
	title: "FurniFlex",
	description: "A e-commerce online furniture shop.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`antialiased`}>{children}</body>
		</html>
	);
}
