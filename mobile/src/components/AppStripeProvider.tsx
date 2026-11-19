import {
  PropsWithChildren,
  ReactElement,
} from "react";
import { StripeProvider } from "@stripe/stripe-react-native";

function getStripePublishableKey(): string {
  const key =
    process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY;

  if (!key) {
    throw new Error(
      "EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY est manquante.",
    );
  }

  return key;
}

const stripePublishableKey =
  getStripePublishableKey();

export default function AppStripeProvider({
  children,
}: PropsWithChildren): ReactElement {
  return (
    <StripeProvider
      publishableKey={
        stripePublishableKey
      }
    >
      <>{children}</>
    </StripeProvider>
  );
}