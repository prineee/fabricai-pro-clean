import { RotateCcw } from "lucide-react";
import LegalLayout, { PolicySection, PolicyList, PolicyNote } from "../components/LegalLayout";

export default function RefundPolicy() {
  return (
    <LegalLayout
      title="Refund Policy"
      badge="Customer Protection · Money-Back Guarantee"
      Icon={RotateCcw}
      iconBg="bg-violet-600"
      lastUpdated="May 28, 2026"
      description="FabricAI Pro is committed to customer satisfaction. This Refund Policy outlines when and how refunds are granted for purchases made on our platform."
    >
      <PolicySection number={1} title="Overview">
        <p>
          FabricAI Pro is committed to customer satisfaction. This Refund Policy outlines when and
          how refunds are granted for purchases made on our platform.
        </p>
      </PolicySection>

      <PolicySection number={2} title="Monthly Subscriptions">
        <PolicyNote>
          ✅ 7-Day Money Back Guarantee — New subscribers may request a full refund within 7 days
          of their first payment, no questions asked.
        </PolicyNote>
        <p className="mt-3">
          Refund requests made after 7 days from the initial purchase are not eligible unless caused
          by a verified technical issue on our end. No refunds are provided for partial months.
        </p>
      </PolicySection>

      <PolicySection number={3} title="Annual Subscriptions">
        <p>
          Annual plan purchases are eligible for a full refund within 14 days of the payment date.
          After 14 days, a prorated refund based on unused months may be considered at our discretion.
        </p>
      </PolicySection>

      <PolicySection number={4} title="Lifetime Deals">
        <p>
          Lifetime deal purchases are eligible for a full refund within 7 days of purchase. After
          7 days, lifetime deal payments are non-refundable.
        </p>
      </PolicySection>

      <PolicySection number={5} title="Add-On Credits or Packs">
        <PolicyList items={[
          "Unused credit packs are refundable within 7 days of purchase.",
          "Partially used credit packs are not eligible for refunds.",
        ]} />
      </PolicySection>

      <PolicySection number={6} title="Non-Refundable Circumstances">
        <p>Refunds will not be issued in the following cases:</p>
        <PolicyList items={[
          "Violation of our Terms and Conditions leading to account suspension",
          "Forgetting to cancel before an automatic renewal",
          "Change of mind after the eligible refund window has passed",
          "Dissatisfaction with AI-generated output quality that does not constitute a technical failure",
          "Disruptions caused by third-party API providers outside our control",
        ]} />
      </PolicySection>

      <PolicySection number={7} title="Technical Issues">
        <p>
          If a verified technical fault on our end prevents you from using the Service, please
          contact support@fabricaipro.com. We will attempt to resolve the issue within 48 hours.
          If unresolvable, a full refund will be issued regardless of the refund window.
        </p>
      </PolicySection>

      <PolicySection number={8} title="How to Request a Refund">
        <PolicyList items={[
          "Email support@fabricaipro.com with subject: Refund Request — FabricAI Pro",
          "Include your registered email address and payment/order ID",
          "Provide a brief reason for the refund request",
          "We will respond within 2 business days",
          "Approved refunds are processed within 5–7 business days to the original payment method",
        ]} />
      </PolicySection>

      <PolicySection number={9} title="Contact">
        <p>For refund queries, contact us at:</p>
        <PolicyNote>
          📧 support@fabricaipro.com &nbsp;·&nbsp; Subject: Refund Request — FabricAI Pro &nbsp;·&nbsp; Mon–Sat · 10 AM – 7 PM IST
        </PolicyNote>
      </PolicySection>
    </LegalLayout>
  );
}
