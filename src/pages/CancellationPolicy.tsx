import { XCircle } from "lucide-react";
import LegalLayout, { PolicySection, PolicyList, PolicyNote, PolicyWarning } from "../components/LegalLayout";

export default function CancellationPolicy() {
  return (
    <LegalLayout
      title="Cancellation Policy"
      badge="Subscription Management · Account Control"
      Icon={XCircle}
      iconBg="bg-rose-600"
      lastUpdated="May 28, 2026"
      description="You may cancel your FabricAI Pro subscription at any time. This policy explains the cancellation process and what happens to your account afterward."
    >
      <PolicySection number={1} title="Overview">
        <p>
          You may cancel your FabricAI Pro subscription at any time. This policy explains the
          cancellation process and what happens to your account afterward.
        </p>
      </PolicySection>

      <PolicySection number={2} title="How to Cancel">
        <PolicyList items={[
          "Self-service: Log in → Account Settings → Billing → Cancel Subscription",
          "Email: Send a cancellation request to support@fabricaipro.com from your registered email",
        ]} />
        <p className="mt-2">Cancellations are processed immediately upon confirmation.</p>
      </PolicySection>

      <PolicySection number={3} title="What Happens After Cancellation">
        <PolicyList items={[
          "You retain full access to your current plan features until the end of the active billing cycle",
          "No further charges will be applied after cancellation is confirmed",
          "Your account is automatically downgraded to the free tier at the end of the billing cycle",
          "All previously generated content remains accessible unless you request account deletion",
          "Unused credits from your paid plan will expire at the end of the billing cycle",
        ]} />
      </PolicySection>

      <PolicySection number={4} title="Monthly Subscriptions">
        <p>
          Cancel at any time before your next renewal date to avoid future charges. If cancellation
          is requested on the same day as renewal, contact us immediately at support@fabricaipro.com.
        </p>
      </PolicySection>

      <PolicySection number={5} title="Annual Subscriptions">
        <p>
          You may cancel your annual subscription at any time. Access to paid features continues
          until the end of the annual period. Please refer to our Refund Policy for prorated
          refund eligibility.
        </p>
      </PolicySection>

      <PolicySection number={6} title="Lifetime Deals">
        <p>
          Lifetime deal accounts have no recurring billing and therefore no cancellation process.
          Lifetime access remains active permanently unless terminated due to Terms violations.
        </p>
      </PolicySection>

      <PolicySection number={7} title="Permanent Account Deletion">
        <PolicyWarning>
          ⚠️ This action is irreversible. All your projects, outputs, and personal data will be
          permanently erased and cannot be recovered.
        </PolicyWarning>
        <p className="mt-3">To permanently delete your FabricAI Pro account:</p>
        <PolicyList items={[
          "Email support@fabricaipro.com with subject: Account Deletion Request — FabricAI Pro",
          "We will permanently delete your account and all data within 7 business days",
          "Any active subscription will be cancelled automatically",
        ]} />
      </PolicySection>

      <PolicySection number={8} title="Reactivation">
        <p>
          If you cancel and wish to reactivate, simply log back into your account and select a
          new plan from the Billing section. All your previous content will still be available
          if you did not request account deletion.
        </p>
      </PolicySection>

      <PolicySection number={9} title="Cancellation by FabricAI Pro">
        <p>We reserve the right to cancel or suspend your account without prior notice if:</p>
        <PolicyList items={[
          "You are found to have violated our Terms and Conditions",
          "Fraudulent or abusive activity is detected",
          "Payment repeatedly fails after automated retry attempts",
        ]} />
        <PolicyNote>
          In all such cases, you will be notified via your registered email address.
        </PolicyNote>
      </PolicySection>

      <PolicySection number={10} title="Contact">
        <p>For cancellation assistance, contact us at:</p>
        <PolicyNote>
          📧 support@fabricaipro.com &nbsp;·&nbsp; Subject: Cancellation Request — FabricAI Pro &nbsp;·&nbsp; Mon–Sat · 10 AM – 7 PM IST
        </PolicyNote>
      </PolicySection>
    </LegalLayout>
  );
}
