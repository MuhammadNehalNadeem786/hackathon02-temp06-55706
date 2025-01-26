"use client";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import Header from "../components/Header";
import CheckoutHero from "../components/CheckoutHero";
import Achievement from "../components/Achievement";
import Footer from "../components/Footer";

import { ProductType } from "@/types/product.types";
import { useCart } from "@/context/cartContext";

/* Zod schema for form validation */
const billingSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    companyName: z.string().optional(),
    country: z.string().min(1, "Country is required"),
    streetAddress: z.string().min(1, "Street address is required"),
    city: z.string().min(1, "City is required"),
    province: z.string().optional(),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^[0-9]{10,15}$/, "Invalid phone number"),
});

const BillingPage = () => {
    const { cart, removeFromCart } = useCart();
    const [products, setProducts] = useState<ProductType[]>(cart);
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        country: "",
        streetAddress: "",
        city: "",
        province: "",
        email: "",
        phone: "",
    });
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        setProducts(cart);
    }, [cart]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); 
    };

    const handleBuyAndPlaceOrder = () => {
        /* Form data with Zod */
        const result = billingSchema.safeParse(formData);

        if (!result.success) {
            const errors: { [key: string]: string } = {};
            result.error.errors.forEach((err) => {
                if (err.path[0]) errors[err.path[0] as string] = err.message;
            });
            setFormErrors(errors);
            return;
        }

        setIsProcessing(true);

        /* Simulate processing time */
        setTimeout(() => {
            setIsProcessing(false);
            setPaymentSuccess(true);
            setTimeout(() => {
                setPaymentSuccess(false);
            }, 3000);
        }, 2000);
    };

    return (
        <div>
            <Header />
            <CheckoutHero />
            <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-10">
                <div className="max-w-7xl mx-auto bg-white shadow-md rounded-md p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Billing Form */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-semibold mb-6">Billing details</h2>
                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Dynamically render form fields */}
                            {[
                                { label: "First Name", name: "firstName", type: "text" },
                                { label: "Last Name", name: "lastName", type: "text" },
                                { label: "Company Name (Optional)", name: "companyName", type: "text" },
                                { label: "Country / Region", name: "country", type: "text" },
                                { label: "Street Address", name: "streetAddress", type: "text" },
                                { label: "Town / City", name: "city", type: "text" },
                                { label: "Province (Optional)", name: "province", type: "text" },
                                { label: "Email Address", name: "email", type: "email" },
                                { label: "Phone", name: "phone", type: "text" },
                            ].map(({ label, name, type }) => (
                                <div key={name}>
                                    <label className="block text-sm font-medium text-gray-700">{label}</label>
                                    <input
                                        type={type}
                                        name={name}
                                        value={(formData as any)[name]}
                                        onChange={handleInputChange}
                                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors[name] ? "border-red-500" : ""
                                            }`}
                                        placeholder={label}
                                    />
                                    {formErrors[name] && (
                                        <p className="text-red-500 text-sm mt-2">{formErrors[name]}</p>
                                    )}
                                </div>
                            ))}
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-gray-100 p-6 rounded-md">
                        <h2 className="text-2xl font-semibold mb-6">Your Order</h2>
                        <div className="mb-4">
                            <div className="flex justify-between text-sm font-medium">
                                <span>Product</span>
                                <span>Subtotal</span>
                            </div>
                            {cart.map((product) => (
                                <div key={product._id} className="flex justify-between text-sm">
                                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                                    <p className="text-xl text-gray-800 font-semibold mb-4">${product.price}</p>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-gray-300 my-4"></div>
                        <div className="flex justify-between font-semibold">
                            <span>Total</span>
                            <h6 className="font-bold">
                                {cart.reduce((sum, product) => sum + parseFloat(product?.price!) * product.quantity, 0).toFixed(2)}
                            </h6>
                        </div>
                        <div className="my-6">
                            <label className="flex items-start space-x-2">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <span className="text-sm text-gray-600">Direct Bank Transfer</span>
                            </label>
                            <p className="text-xs text-gray-500 mt-2">
                                Your personal data will be used to support your experience throughout this website.
                            </p>
                        </div>
                        <button
                            onClick={handleBuyAndPlaceOrder}
                            disabled={isProcessing}
                            className={`w-full ${isProcessing ? "bg-gray-400 cursor-pointer" : "bg-indigo-700 text-white"
                                } text-white py-3 rounded-md text-sm font-medium hover:bg-indigo-800`}
                        >
                            Place Order
                        </button>
                    </div>
                </div>
                <Achievement />
                <Footer />
            </div>
        </div>
    );
};

export default BillingPage;
