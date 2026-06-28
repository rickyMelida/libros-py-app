import CardProfile from "./CardProfile";
import StatesTabs from "./StatesTabs";
import BooksCardProfile from "./BooksCardProfile";
import CardAddBook from "./CardAddBook";
import AddBookFloatButton from "./AddBookFloatButton";

const Index = () => {
	return (
		<>

			<div className="container">
				<CardProfile />
				<StatesTabs />
				<div className="row g-4 pb-5">
					<CardAddBook />
					<BooksCardProfile />
				</div>
			</div>

			<AddBookFloatButton />
		</>
	)
}

export default Index;