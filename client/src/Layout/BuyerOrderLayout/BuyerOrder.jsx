// GroupedOrderList.tsx
import { useState } from "react";
import { useBuyerStore } from "../../GlobalState/useBuyerState";
import { useEffect } from "react";

function BuyerOrder() {
  const { groupedOrders, getOrders } = useBuyerStore();

  useEffect(() => {
    getOrders();
  });
  return (
    <div className="pt-40">
      {Object.entries(groupedOrders).map(([date, items]) => (
        <OrderGroup key={date} date={date} items={items} />
      ))}
    </div>
  );
}

function OrderGroup({ date, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded p-2">
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer font-semibold"
      >
        Order from {date} {open ? "▲" : "▼"}
      </div>
      {open && (
        <ul className="pl-4 mt-2 space-y-2">
          {items.map((item) => (
            <li key={item._id} className="flex gap-4 items-center">
              <img
                src={item.product.productImages[0].url}
                className="w-12 h-12 object-cover"
              />
              <div>
                <p className="text-sm">{item.product.name}</p>
                <p className="text-xs text-gray-600">Rs. {item.price}</p>
                <p>Status: {item.delivery_status}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BuyerOrder;
