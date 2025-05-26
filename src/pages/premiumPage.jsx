// PremiumPage.jsx
import React from "react";
import PlanCard from "../component/plancard";
import { postRazorPayment } from "../services/postInterestedFeed";
import { RAZOR_KeyId } from "../config_global";

const PremiumPage = () => {
  const plans = [
    {
      name: "Silver",
      price: 100,
      feedsPerDay: 100,
      features: ["Basic Support", "Access to Community Forums"],
    },
    {
      name: "Gold",
      price: 300,
      feedsPerDay: 500,
      features: ["Priority Support", "Access to Beta Features"],
    },
    {
      name: "Diamond",
      price: 500,
      feedsPerDay: "Unlimited",
      features: [
        "24/7 Support",
        "Dedicated Account Manager",
        "All Features Included",
      ],
    },
  ];

  const handleSubscribe = async (Type) => {
    const order = await postRazorPayment(Type);
    console.log(order ,"order ")

    const options = {
      key: RAZOR_KeyId,
      amount: order.amount,
      currency: "INR",
      name: "DevHub",
      description: "Test Transaction",
      order_id:  order.OrderId,
     
      prefill: {
        name: order.notes.userName  ,
        email:order.notes.email,
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Choose Your Plan</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <PlanCard
            key={plan.name}
            name={plan.name}
            price={plan.price}
            feedsPerDay={plan.feedsPerDay}
            features={plan.features}
            onSubscribe={() => handleSubscribe(plan.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default PremiumPage;
