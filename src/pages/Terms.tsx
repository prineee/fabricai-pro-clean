import { FileText } from "lucide-react";
import LegalLayout, { PolicySection, PolicyList, PolicyNote } from "../components/LegalLayout";

export default function Terms() {
  return (
    <LegalLayout
      title="Terms and Conditions"
      badge="Legal · Binding Agreement"
      Icon={FileText}
      iconBg="bg-blue-600"
      lastUpdated="May 28, 2026"
      description="By accessing or using FabricAI Pro, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Service."
    >
      <PolicySection number={1} title="Acceptance of Terms">
        <p>
          By accessing or using FabricAI Pro ("the Service"), you agree to be bound by these
          Terms and Conditions. If you do not agree, please do not use the Service.
        </p>
      </PolicySection>

      <PolicySection number={2} title="Description of Service">
        <p>
          FabricAI Pro is an AI-powered platform providing tools and services for creators,
          marketers, and businesses to automate and enhance their digital content workflows
          using artificial intelligence.
        </p>
      </PolicySection>

      <PolicySection number={3} title="User Accounts">
        <PolicyList items={[
          "You must provide accurate and complete information when creating an account.",
          "You are responsible for maintaining the confidentiality of your login credentials.",
          "You must be at least 18 years of age to use the Service.",
          "You are responsible for all activity that occurs under your account.",
          "We reserve the right to terminate accounts that violate these terms without prior notice.",
        ]} />
      </PolicySection>

      <PolicySection number={4} title="Subscription and Billing">
        <PolicyList items={[
          "FabricAI Pro offers subscription-based plans billed monthly or annually.",
          "All prices are listed in INR (Indian Rupees) and USD where applicable.",
          "Subscriptions automatically renew unless cancelled before the renewal date.",
          "We reserve the right to modify pricing with 30 days advance notice.",
        ]} />
      </PolicySection>

      <PolicySection number={5} title="Acceptable Use">
        <p>You agree NOT to use the Service to:</p>
        <PolicyList items={[
          "Create content that is illegal, harmful, defamatory, or infringes on intellectual property rights.",
          "Generate spam, misleading, or fraudulent content.",
          "Violate the privacy or rights of any third party.",
          "Attempt to reverse engineer, hack, or disrupt the Service or its infrastructure.",
          "Resell or redistribute the Service without written permission.",
          "Use automated bots or scripts to abuse the platform.",
        ]} />
      </PolicySection>

      <PolicySection number={6} title="Intellectual Property">
        <PolicyList items={[
          "All content generated using FabricAI Pro belongs to you, the user.",
          "The FabricAI Pro platform, branding, logo, and underlying technology remain our exclusive property.",
          "You grant FabricAI Pro a limited, non-exclusive license to process your inputs solely to deliver the Service.",
        ]} />
      </PolicySection>

      <PolicySection number={7} title="Third-Party Integrations">
        <p>
          FabricAI Pro integrates with third-party services to deliver its features. We are not
          responsible for the performance, availability, or policies of any third-party service.
        </p>
      </PolicySection>

      <PolicySection number={8} title="Limitation of Liability">
        <p>
          FabricAI Pro shall not be liable for any indirect, incidental, special, or consequential
          damages arising from your use of the Service. Our maximum liability shall not exceed the
          amount you paid in the last 30 days.
        </p>
      </PolicySection>

      <PolicySection number={9} title="Service Availability">
        <p>
          We aim for maximum uptime but do not guarantee uninterrupted access. Scheduled maintenance
          will be communicated in advance when possible.
        </p>
      </PolicySection>

      <PolicySection number={10} title="Termination">
        <p>
          We reserve the right to suspend or terminate your account at any time if you violate these
          Terms. You may terminate your account at any time by contacting support.
        </p>
      </PolicySection>

      <PolicySection number={11} title="Modifications">
        <p>
          We reserve the right to modify these Terms at any time. Continued use of the Service after
          changes constitutes your acceptance.
        </p>
      </PolicySection>

      <PolicySection number={12} title="Governing Law">
        <p>
          These Terms are governed by the laws of India. Any disputes shall be subject to the
          exclusive jurisdiction of the courts of India.
        </p>
      </PolicySection>

      <PolicySection number={13} title="Contact">
        <p>For questions regarding these Terms, contact us at:</p>
        <PolicyNote>
          📧 support@fabricaipro.com &nbsp;·&nbsp; Website: fabricaipro.com &nbsp;·&nbsp; Effective: May 28, 2026
        </PolicyNote>
      </PolicySection>
    </LegalLayout>
  );
}
