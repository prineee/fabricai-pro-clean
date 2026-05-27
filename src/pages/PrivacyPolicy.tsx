import { Shield } from "lucide-react";
import LegalLayout, { PolicySection, PolicyList, PolicyNote } from "../components/LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      badge="Data Protection · GDPR Aligned"
      Icon={Shield}
      iconBg="bg-emerald-600"
      lastUpdated="May 2026"
      description="FabricAI Pro is committed to protecting your personal data. This policy explains what we collect, how we use it, and your rights regarding your information."
    >
      <PolicySection number={1} title="Information We Collect">
        <p>When you use FabricAI Pro, we may collect the following categories of information:</p>
        <PolicyList items={[
          "Name and contact information (email address)",
          "Company name, industry, and factory details",
          "Payment and billing information (processed securely by Razorpay)",
          "Usage analytics and feature interaction data",
          "Garment data, style records, and production information you upload",
          "IP address and device/browser information",
          "Customer support communications",
        ]} />
      </PolicySection>

      <PolicySection number={2} title="How We Use Your Information">
        <p>We use collected information strictly for the following purposes:</p>
        <PolicyList items={[
          "Provide, operate, and maintain the FabricAI Pro platform",
          "Process subscription payments and manage billing",
          "Generate AI-powered outputs based on data you provide",
          "Improve platform performance, features, and AI accuracy",
          "Send service-related communications and support responses",
          "Comply with legal obligations and resolve disputes",
        ]} />
        <PolicyNote>
          We do not use your factory data, style records, or production information for
          training AI models. Your business data stays private to your account.
        </PolicyNote>
      </PolicySection>

      <PolicySection number={3} title="Data Security">
        <p>
          We implement industry-standard security measures to protect your information,
          including AES-256 encryption for data at rest and TLS 1.3 for data in transit.
          Access to user data is restricted to authorised personnel only.
        </p>
        <PolicyNote>
          While we take reasonable precautions, no system is completely secure. We encourage
          users to use strong passwords and enable account security features.
        </PolicyNote>
      </PolicySection>

      <PolicySection number={4} title="Third-Party Service Providers">
        <p>
          We may share limited data with trusted third-party providers solely to operate
          the platform:
        </p>
        <PolicyList items={[
          "Payment processing — Razorpay (PCI DSS compliant)",
          "AI infrastructure — Google AI / Groq (computation only)",
          "Email delivery — for transactional and support emails",
          "Analytics — aggregated, anonymised usage statistics only",
          "Cloud hosting — for secure, reliable service delivery",
        ]} />
      </PolicySection>

      <PolicySection number={5} title="Cookies & Analytics">
        <p>
          FabricAI Pro uses cookies and similar technologies to improve your experience.
          These may include session cookies, preference cookies, and analytics trackers.
          You can control cookie behaviour through your browser settings.
        </p>
      </PolicySection>

      <PolicySection number={6} title="Data Sharing Policy">
        <p>
          We do not sell, rent, or trade your personal information to third parties for
          marketing or advertising purposes. Data is only shared with service providers
          as described in Section 4, or when required by law.
        </p>
      </PolicySection>

      <PolicySection number={7} title="Your Rights">
        <p>You have the following rights regarding your personal data:</p>
        <PolicyList items={[
          "Access — request a copy of the data we hold about you",
          "Correction — request correction of inaccurate information",
          "Deletion — request deletion of your account and associated data",
          "Portability — receive your data in a machine-readable format",
          "Objection — object to specific uses of your data",
        ]} />
        <PolicyNote>
          To exercise any of these rights, contact us at support@fabricaipro.com. We will
          respond within 30 days.
        </PolicyNote>
      </PolicySection>

      <PolicySection number={8} title="Data Retention">
        <p>
          We retain your account data for as long as your subscription is active. Upon account
          deletion, personal data is purged within 30 days. Aggregated, anonymised analytics
          data may be retained indefinitely.
        </p>
      </PolicySection>

      <PolicySection number={9} title="Policy Updates">
        <p>
          This Privacy Policy may be updated periodically to reflect changes in our practices
          or legal requirements. We will notify users of material changes via email at least
          14 days before they take effect.
        </p>
      </PolicySection>

      <PolicySection number={10} title="Contact">
        <p>For privacy-related enquiries or data requests:</p>
        <PolicyNote>
          📧 support@fabricaipro.com · Monday–Saturday · 10 AM – 7 PM IST
        </PolicyNote>
      </PolicySection>
    </LegalLayout>
  );
}
