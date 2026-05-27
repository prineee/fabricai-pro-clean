import { RotateCcw } from "lucide-react";
import LegalLayout, { PolicySection, PolicyList, PolicyNote } from "../components/LegalLayout";

export default function RefundPolicy() {
  return (
    <LegalLayout
      title="Refund Policy"
      badge="Customer Protection · 30-Day Guarantee"
      Icon={RotateCcw}
      iconBg="bg-violet-600"
      lastUpdated="May 2026"
      description="We want you to be fully satisfied with FabricAI Pro. If you're not happy with your subscription, our refund policy is designed to be fair, fast, and hassle-free."
    >
      <PolicySection number={1} title="30-Day Money-Back Guarantee">
        <p>
          We offer a full 30-day money-back guarantee for all FabricAI Pro subscriptions.
          If you are not satisfied for any reason, you may request a complete refund within
          30 days of your initial purchase date — no questions asked.
        </p>
        <PolicyNote>
          The 30-day period starts from the date of your first payment, not the free trial
          start date (if applicable).
        </PolicyNote>
      </PolicySection>

      <PolicySection number={2} title="Eligibility Criteria">
        <p>To qualify for a refund, the following conditions must be met:</p>
        <PolicyList items={[
          "Request submitted within 30 days of the original purchase date",
          "First-time purchase of the specific plan being refunded",
          "Account not flagged for terms of service violations",
          "No evidence of fraudulent activity or abuse of the platform",
          "Request submitted by the original account holder",
        ]} />
      </PolicySection>

      <PolicySection number={3} title="Non-Refundable Situations">
        <p>Refunds will not be issued in the following circumstances:</p>
        <PolicyList items={[
          "Refund requested after the 30-day period has elapsed",
          "Renewal charges for subscriptions not cancelled before the billing date",
          "Accounts suspended for abuse or terms of service violations",
          "Duplicate purchases where one subscription is already active",
          "Partial month refunds for mid-cycle cancellations",
        ]} />
      </PolicySection>

      <PolicySection number={4} title="How to Request a Refund">
        <p>To initiate a refund, follow these steps:</p>
        <PolicyList items={[
          "Email support@fabricaipro.com with subject line: 'Refund Request'",
          "Include your registered email address and order/payment ID",
          "Briefly describe your reason (optional but helps us improve)",
          "Our team will process your request within 3–5 business days",
        ]} />
        <PolicyNote>
          Approved refunds are returned to the original payment method. Processing time
          depends on your bank or payment provider (typically 5–10 business days).
        </PolicyNote>
      </PolicySection>

      <PolicySection number={5} title="Subscription Cancellation">
        <p>
          You may cancel your subscription at any time from your account settings or by
          contacting support. Cancellation takes effect at the end of your current billing
          period — you retain full access until then.
        </p>
      </PolicySection>

      <PolicySection number={6} title="Duplicate Payments">
        <p>
          If you have been charged twice for the same subscription period due to a technical
          error, contact us immediately. We will review and refund the duplicate charge
          within 3 business days of verification.
        </p>
      </PolicySection>

      <PolicySection number={7} title="Contact for Refunds">
        <p>All refund requests are handled by our support team:</p>
        <PolicyNote>
          📧 support@fabricaipro.com · Monday–Saturday · 10 AM – 7 PM IST · Response within 24 hours
        </PolicyNote>
      </PolicySection>
    </LegalLayout>
  );
}
