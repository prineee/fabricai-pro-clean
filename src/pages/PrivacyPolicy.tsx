import { Shield } from "lucide-react";
import LegalLayout, { PolicySection, PolicyList, PolicyNote } from "../components/LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      badge="Data Protection · GDPR Aligned"
      Icon={Shield}
      iconBg="bg-emerald-600"
      lastUpdated="May 28, 2026"
      description="FabricAI Pro is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our platform."
    >
      <PolicySection number={1} title="Introduction">
        <p>
          FabricAI Pro is committed to protecting your privacy. This Privacy Policy explains how
          we collect, use, store, and protect your personal information when you use our platform.
        </p>
      </PolicySection>

      <PolicySection number={2} title="Information We Collect">
        <p><strong className="text-white">Information you provide:</strong></p>
        <PolicyList items={[
          "Full name and email address during registration",
          "Payment details (processed securely — we never store card or UPI details directly)",
          "Content inputs such as prompts, topics, and creative briefs you submit",
        ]} />
        <p className="mt-3"><strong className="text-white">Information collected automatically:</strong></p>
        <PolicyList items={[
          "IP address and browser/device information",
          "Pages and features accessed on our platform",
          "Session duration and usage patterns",
          "Error logs and performance data",
        ]} />
      </PolicySection>

      <PolicySection number={3} title="How We Use Your Information">
        <PolicyList items={[
          "Create and manage your account",
          "Process payments and manage subscriptions",
          "Deliver AI-generated outputs based on your inputs",
          "Send transactional emails and important account notifications",
          "Improve platform performance and user experience",
          "Comply with applicable laws and regulations",
        ]} />
      </PolicySection>

      <PolicySection number={4} title="Data Storage and Security">
        <p>
          Your personal data is stored on secure, encrypted servers. We use industry-standard
          SSL/TLS encryption for all data in transit. Access to your data is restricted to
          authorised personnel only.
        </p>
      </PolicySection>

      <PolicySection number={5} title="Data Sharing">
        <p>We do not sell your personal data to any third party. We share data only with:</p>
        <PolicyList items={[
          "Payment processors (Razorpay, Stripe) to handle transactions securely",
          "AI service providers solely to process and return your requested outputs",
          "Cloud infrastructure providers to store and serve your files",
          "Legal or regulatory authorities when required by law",
        ]} />
      </PolicySection>

      <PolicySection number={6} title="Cookies">
        <p>
          We use cookies to keep you logged in, remember your preferences, and analyse usage
          patterns. You may disable cookies in your browser, though some features may not
          function correctly without them.
        </p>
      </PolicySection>

      <PolicySection number={7} title="Your Rights">
        <PolicyList items={[
          "Access your personal data held by us",
          "Request correction of any inaccurate information",
          "Request deletion of your account and associated data",
          "Export your data in a machine-readable format",
          "Withdraw consent for marketing communications at any time",
        ]} />
        <PolicyNote>
          To exercise any of these rights, email us at support@fabricaipro.com. We will respond
          within 30 days.
        </PolicyNote>
      </PolicySection>

      <PolicySection number={8} title="Data Retention">
        <p>
          We retain your data for as long as your account remains active. Upon account deletion,
          your personal data is permanently removed within 7 business days.
        </p>
      </PolicySection>

      <PolicySection number={9} title="Children's Privacy">
        <p>
          FabricAI Pro is not intended for users under 18 years of age. We do not knowingly
          collect personal data from minors.
        </p>
      </PolicySection>

      <PolicySection number={10} title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will notify you via email or
          in-app notification of any material changes.
        </p>
      </PolicySection>

      <PolicySection number={11} title="Contact">
        <p>For privacy-related queries, contact us at:</p>
        <PolicyNote>
          📧 support@fabricaipro.com &nbsp;·&nbsp; Website: fabricaipro.com &nbsp;·&nbsp; Effective: May 28, 2026
        </PolicyNote>
      </PolicySection>
    </LegalLayout>
  );
}
