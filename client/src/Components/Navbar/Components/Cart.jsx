const Cart = () => {
  return (
    <div>
      <div className="flex-none">
        <div className="dropdown dropdown-top lg:dropdown-bottom dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle bg-sage hover:text-brown p-3"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />{" "}
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-sage p-0 z-1 w-70 shadow border-1"
          >
            <div className="card-body">
              <div className="flex gap-2 p-2 border-b-2">
                <img
                  src="/other-images/jeans.png"
                  alt=""
                  className="size-10 rounded-full object-contain"
                />
                <div>
                  <h1>Product Name 1</h1>
                  <p>Price: $999</p>
                </div>
              </div>
              <span className="text-darkbrown">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn bg-darkbrown btn-block">
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
