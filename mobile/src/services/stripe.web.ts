export const PaymentSheetError = {
  Canceled: "Canceled",
} as const;

export function useStripe() {
  return {
    initPaymentSheet: async () => ({
      error: {
        code: "WEB_NOT_SUPPORTED",
        message:
          "Le paiement Stripe web n'est pas encore disponible.",
      },
    }),

    presentPaymentSheet: async () => ({
      error: {
        code: "Canceled",
        message:
          "Le paiement Stripe web n'est pas encore disponible.",
      },
    }),
  };
}