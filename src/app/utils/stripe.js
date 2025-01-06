import Stripe from "stripe";

export const stripe = Stripe(process.env.SECRITY_KEY);