import ProductDetail from "../../src/components/ProductDetail";
import productsData from "../../src/Products/productsData";

export async function getStaticPaths() {
	const paths = productsData.map((product) => ({
		params: { id: product.id },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	return {
		props: {
			initialId: params.id,
		},
	};
}

export default function ProductDetailPage({ initialId }) {
	return <ProductDetail initialId={initialId} />;
}
