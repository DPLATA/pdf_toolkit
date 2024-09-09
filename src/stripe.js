import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

stripePromise.then(stripe => {
  console.log("Stripe loaded successfully:", stripe);
}).catch(error => {
  console.error("Error loading Stripe:", error);
});

export { stripePromise };

