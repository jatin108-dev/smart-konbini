import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 250 : 0;
  const grandTotal = total + shipping;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fffaf7] via-[#fff5f2] to-[#fdeff1] overflow-x-hidden">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-24 sm:pt-32 pb-20">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="uppercase tracking-[8px] text-[#c75c5c] text-xs">
            Smart Konbini
          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-4 text-[#222]">
            Shopping Cart
          </h1>

          <p className="mt-4 text-[#666]">
            Review your selected Japanese products.
          </p>
        </motion.div>

        {cartItems.length === 0 ? (

          <div className="mt-16 bg-white rounded-[35px] shadow-xl border border-[#efe4d8] p-10 text-center">

            <ShoppingBag size={70} className="mx-auto text-[#c75c5c]" />

            <h2 className="text-4xl font-bold mt-6">
              Your Cart is Empty
            </h2>

            <p className="mt-4 text-[#666]">
              Start exploring Japanese convenience store products.
            </p>

            <Link to="/products">
              <button className="mt-8 bg-[#111] text-white px-8 py-4 rounded-full hover:scale-105 transition">
                Explore Products
              </button>
            </Link>

          </div>

        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 mt-16">

            {/* Cart Items */}
            <div className="space-y-8">

              {cartItems.map((item, index) => (

                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white rounded-[30px] shadow-lg border border-[#efe4d8] overflow-hidden"
                >

                  <div className="flex flex-col sm:flex-row">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full sm:w-56 md:w-64 h-56 sm:h-auto object-cover flex-shrink-0"
                    />

                    <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">

                      <div>
                        <p className="uppercase tracking-[5px] text-xs text-[#c75c5c]">
                          {item.category}
                        </p>

                        <h2 className="text-2xl sm:text-3xl font-black mt-2">
                          {item.name}
                        </h2>

                        <p className="text-[#666] mt-4 text-sm sm:text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Price + Qty + Remove */}
                      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                        <div>
                          <p className="text-sm text-gray-500">Price</p>
                          <h3 className="text-2xl sm:text-3xl font-black text-[#c75c5c]">
                            ¥{item.price}
                          </h3>
                        </div>

                        <div>
                          <p className="text-sm text-gray-500">Quantity</p>
                          <h3 className="text-xl sm:text-2xl font-bold">
                            {item.quantity}
                          </h3>
                        </div>

                        <button
                          onClick={() => removeFromCart(item._id)}
                          className="flex items-center justify-center gap-2 bg-red-50 text-red-600 px-6 py-3 rounded-full hover:bg-red-100 transition text-sm font-medium w-full sm:w-auto"
                        >
                          <Trash2 size={16} />
                          Remove
                        </button>

                      </div>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-[30px] shadow-xl border border-[#efe4d8] p-6 sm:p-8 h-fit lg:sticky lg:top-28">

              <h2 className="text-2xl sm:text-3xl font-black">
                Order Summary
              </h2>

              <div className="space-y-5 mt-8">

                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium">¥{total}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-medium">¥{shipping}</span>
                </div>

                <hr className="border-[#efe4d8]" />

                <div className="flex justify-between text-2xl font-black">
                  <span>Total</span>
                  <span className="text-[#c75c5c]">¥{grandTotal}</span>
                </div>

              </div>

              <button className="w-full mt-8 bg-[#111] text-white py-4 rounded-full flex items-center justify-center gap-2 hover:scale-[1.02] transition font-medium">
                Checkout
                <ArrowRight size={18} />
              </button>

              <Link to="/products">
                <button className="w-full mt-4 border border-[#ddd] py-4 rounded-full hover:bg-[#faf7f5] transition">
                  Continue Shopping
                </button>
              </Link>

              <button
                onClick={clearCart}
                className="w-full mt-4 text-red-600 border border-red-200 py-4 rounded-full hover:bg-red-50 transition"
              >
                Clear Cart
              </button>

            </div>

          </div>

        )}

      </section>
    </main>
  );
};

export default Cart;