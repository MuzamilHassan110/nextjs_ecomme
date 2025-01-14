import { stripe } from "@/app/utils/stripe";
import { revalidatePath } from "next/cache";

export async function POST(req, res) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.WEB_HOOK_SECRITY_KEY
    );
  } catch (err) {
    console.log(`Webhook Error: ${err.message}`);
  }

  if (event.type === "product.update" || event.type === "product.created") {
    console.log("event.type", event.type);
    revalidatePath("/products", "page");
  } else {
    console.log(`Unhandled event type: ${event.type}`);
  }

  return Response.json({ message: "Success" });
}
