import WishlistItem from "./wishlistItem/WishlistItem";

const WishlistItemsList = ({ items, onMoveToCart, onRemove }) => {
  if (!items || items.length === 0) {
    return <p className="text-muted">Your wishlist is empty.</p>;
  }

  return (
    <>
      {items.map((product) => (
        <WishlistItem
          key={product._id}
          product={product}
          onMoveToCart={onMoveToCart}
          onRemove={onRemove}
        />
      ))}
    </>
  );
};

export default WishlistItemsList;