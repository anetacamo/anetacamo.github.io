import React from "react";
import blogs from "../blogs.json";

const YourBag = ({
  itemsInCart,
  onCartItemRemove,
  onCartItemMinus,
  onItemAdd,
}) => {
  const renderImage = (title) => {
    const cartItem = blogs.filter((blog) => title === blog.title);
    if (cartItem[0]?.gallery) {
      return cartItem[0].image + ".jpg";
    } else return cartItem[0]?.image;
  };

  const renderTagged = (title) => {
    const cartItem = blogs.filter((blog) => title === blog.title);
    return cartItem[0].tags.indexOf("print");
  };

  return (
    <>
      <h2>your bag</h2>
      {itemsInCart.length === 0 && <div className="blogs">No items here.</div>}
      <div className="flex">
        {itemsInCart?.map((item, index) => (
          <div className="cart-item" key={index}>
            <div className="image-holder">
              <img src={renderImage(item.title)} alt={item.title} />
            </div>
            <div style={{ position: "relative", paddingRight: 20 }}>
              <p>
                {item.title}
                <span className="capitalised pink"> | {item.size}</span>
              </p>
              <p className="bolded">{item.price * item.amount} dkk</p>
              {renderTagged(item.title) < 0 && (
                <>
                  <button
                    style={{ padding: "4px 9px", marginLeft: 0 }}
                    onClick={() => onItemAdd(item.title, item.size, 50)}
                  >
                    +
                  </button>
                  <button
                    style={{ padding: "4px 9px" }}
                    onClick={() => onCartItemMinus(item.title, item.size)}
                  >
                    -
                  </button>
                </>
              )}
              <button
                className="x-button"
                onClick={() => onCartItemRemove(item.title, item.size)}
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default YourBag;
