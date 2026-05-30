import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark, FaPlus, FaMinus, FaTrash, FaBagShopping } from "react-icons/fa6";
import { useCart } from "../CartContext";
import toast from "react-hot-toast";

const CartSidebar = () => {
  const { cart, remove, updateQty, total, count, isOpen, setIsOpen } = useCart();

  const handleRemove = (item) => {
    remove(item.id);
    toast.error(`${item.title} removed`, { icon: "🗑️" });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="cart-overlay" onClick={() => setIsOpen(false)} />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#140900] border-l border-white/10 z-[999] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <FaBagShopping className="text-flame-500 text-xl" />
                <h2 className="font-display text-xl font-bold text-white">
                  Your Cart
                  {count > 0 && (
                    <span className="ml-2 text-sm bg-flame-500 text-white px-2 py-0.5 rounded-full">
                      {count}
                    </span>
                  )}
                </h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
              >
                <FaXmark size={18} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-white/40">
                  <span className="text-6xl">🍕</span>
                  <p className="text-lg font-medium">Your cart is empty</p>
                  <p className="text-sm text-center">
                    Add your favourite pizzas to get started!
                  </p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 bg-white/5 rounded-xl p-3 border border-white/5"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-sm truncate">
                        {item.title}
                      </p>
                      <p className="text-flame-500 font-bold mt-0.5">{item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-flame-500 transition-colors text-white"
                        >
                          <FaMinus size={10} />
                        </button>
                        <span className="text-white font-semibold w-5 text-center text-sm">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-flame-500 transition-colors text-white"
                        >
                          <FaPlus size={10} />
                        </button>
                        <button
                          onClick={() => handleRemove(item)}
                          className="ml-auto text-white/30 hover:text-red-400 transition-colors"
                        >
                          <FaTrash size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="px-6 py-5 border-t border-white/10 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Subtotal</span>
                  <span className="text-white font-bold text-lg">₹{total}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Delivery</span>
                  <span className={total >= 299 ? "text-green-400 text-sm font-medium" : "text-white text-sm"}>
                    {total >= 299 ? "FREE" : "₹30"}
                  </span>
                </div>
                {total < 299 && (
                  <p className="text-xs text-white/40 text-center">
                    Add ₹{299 - total} more for free delivery
                  </p>
                )}
                <button
                  onClick={() => toast.success("Order placed! Preparing your pizza 🍕", { duration: 3000 })}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-flame-500 to-gold-500 text-white font-bold text-base hover:opacity-90 transition-opacity shadow-lg"
                >
                  Place Order · ₹{total >= 299 ? total : total + 30}
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
