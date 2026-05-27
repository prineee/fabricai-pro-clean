import { FileText } from "lucide-react";
import LegalLayout, { PolicySection, PolicyList, PolicyNote } from "../components/LegalLayout";

export default function Terms() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      badge="Legal · Binding Agreement"
      Icon={FileText}
      iconBg="bg-blue-600"
      lastUpdated="May 2026"
      description="By accessing or using FabricAI Pro, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully."
    >
      <PolicySection number={1} title="Services">
        <p>
          FabricAI Pro provides AI-powered ERP and production management tools for garment
          factories and textile manufacturing businesses. Our platform includes fabric consumption
          calculation, style management, buyer communication, BOM generation, and related services.
        </p>
      </PolicySection>

      <PolicySection number={2} title="User Responsibilities">
        <p>
          Users agree to provide accurate information and use the platform lawfully. You are
          responsible for maintaining account security and confidentiality of your login credentials.
        </p>
        <PolicyNote>
          Any activity that occurs under your account is your responsibility. Notify us immediately
          if you suspect unauthorized access at support@fabricaipro.com.
        </PolicyNote>
      </PolicySection>

      <PolicySection number={3} title="Subscriptions">
        <p>
          Certain features require paid subscriptions. Current pricing is displayed on the pricing
          page. Subscription pricing may change with prior notice of at least 14 days before
          your next billing cycle.
        </p>
        <PolicyList items={[
          "Subscriptions auto-renew unless cancelled before the renewal date",
          "Downgrading or cancelling takes effect at the end of the billing period",
          "Free plan limitations apply as described on the pricing page",
        ]} />
      </PolicySection>

      <PolicySection number={4} title="Acceptable Use">
        <p>Users may not engage in any of the following:</p>
        <PolicyList items={[
          "Use the platform for unlawful, fraudulent, or harmful purposes",
          "Attempt to reverse engineer, decompile, or disassemble the software",
          "Abuse AI generation systems through automated bulk requests",
          "Share account access credentials without authorization",
          "Upload harmful, malicious, or illegal content",
          "Use the platform to violate intellectual property rights of third parties",
          "Attempt to gain unauthorized access to other user accounts or our infrastructure",
        ]} />
      </PolicySection>

      <PolicySection number={5} title="AI Generated Content">
        <p>
          AI-generated outputs — including fabric consumption calculations, BOMs, costing
          estimates, and business communications — are provided for assistance purposes only.
        </p>
        <PolicyNote>
          Users are responsible for reviewing and verifying all AI-generated content before use
          in production environments, buyer communications, or business decisions. FabricAI Pro
          does not guarantee the accuracy of AI outputs.
        </PolicyNote>
      </PolicySection>

      <PolicySection number={6} title="Limitation of Liability">
        <p>
          FabricAI Pro shall not be liable for any indirect, incidental, consequential, or
          punitive damages including but not limited to:
        </p>
        <PolicyList items={[
          "Production losses or delays arising from AI-generated outputs",
          "Business interruptions or revenue loss",
          "Inaccuracies arising from incorrect user-entered data",
          "Loss of data due to technical failures outside our control",
          "Third-party service disruptions affecting our platform",
        ]} />
      </PolicySection>

      <PolicySection number={7} title="Account Termination">
        <p>
          We reserve the right to suspend or terminate accounts at our discretion if users
          violate these terms, engage in fraudulent activity, or abuse the platform. Users
          may also terminate their account at any time by contacting support.
        </p>
      </PolicySection>

      <PolicySection number={8} title="Intellectual Property">
        <p>
          All software, branding, interfaces, AI systems, content, and documentation are the
          exclusive property of FabricAI Pro. Users may not reproduce, distribute, or create
          derivative works without explicit written permission.
        </p>
      </PolicySection>

      <PolicySection number={9} title="Modifications to Terms">
        <p>
          We may update these Terms and Conditions at any time. We will notify registered
          users of significant changes via email. Continued use of the platform after changes
          take effect constitutes acceptance of the revised terms.
        </p>
      </PolicySection>

      <PolicySection number={10} title="Contact">
        <p>For questions regarding these Terms and Conditions, contact us at:</p>
        <PolicyNote>
          📧 support@fabricaipro.com · Monday–Saturday · 10 AM – 7 PM IST
        </PolicyNote>
      </PolicySection>
    </LegalLayout>
  );
}
