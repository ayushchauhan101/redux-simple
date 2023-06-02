import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const fakeData = [
	{
		id: "p1",
		price: 28,
		title: "first product",
		description: "my first created product",
	},
	{
		id: "p2",
		price: 46,
		title: "second product",
		description: "my second created product",
	},
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{fakeData.map((product) => (
					<ProductItem
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						description={product.description}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
