import { stripe } from "@/app/utils/stripe";

export async function POST(req) {
  try {
    const body = await req.json();

    const session = await stripe.checkout.sessions.create({
      line_items: body,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/cart?success=true`,
      cancel_url: `${req.headers.get("origin")}/cart?canceled=true`,
    });

    return Response.json(
      { message: "Payment successful", session_url: session.url },
      { status: 200 }
    );
  } catch (error) {
    console.error("server error : ", error);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
