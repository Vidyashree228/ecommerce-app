import { useContext } from 'react';
import Title from '../Components/Title';
import { ShopContext } from '../Context/ShopContext';

const Orders = () => {
  const { orders, products, currency } = useContext(ShopContext);

  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="pt-16 border-t">
      <div className="mb-3 text-2xl">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      {orders.length === 0 ? (
        <p className="text-gray-500">You have no orders.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {/* Group all orders into a single container like video */}
          <div className="flex flex-col gap-4">
            {orders.map((order, index) => {
              const product = products.find((p) => p._id === order._id);
              if (!product) return null;

              return (
                <div
                  key={index}
                  className="flex justify-between items-center border rounded-md px-4 py-3 shadow-sm"
                >
                  <div className="flex gap-4 items-start">
                    <img
                      src={product.image[0]}
                      alt={product.name}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div className="flex flex-col">
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-gray-500 text-sm">
                        {currency}
                        {product.price} &nbsp; Quantity: {order.quantity} &nbsp;
                        Size: {order.size}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        Date: {formatDate(new Date())}
                      </p>
                      <p className="flex items-center text-sm text-green-600 mt-1">
                        <span className="w-2 h-2 rounded-full bg-green-600 mr-2"></span>
                        Ready to ship
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className="border px-4 py-2 rounded text-sm text-gray-600 hover:bg-gray-100 transition">
                      Track Order
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
