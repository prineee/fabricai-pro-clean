import { Users } from "lucide-react";
import LegalLayout, { PolicySection, PolicyList, PolicyNote } from "../components/LegalLayout";

export default function AffiliateTerms() {
  return (
    <LegalLayout
      title="Affiliate Terms"
      badge="Partner Program · Commission Agreement"
      Icon={Users}
      iconBg="bg-orange-600"
      lastUpdated="May 2026"
      description="These Affiliate Terms govern your participation in the FabricAI Pro Affiliate Program. By promoting FabricAI Pro, you agree to these terms in addition to our general Terms & Conditions."
    >
      <PolicySection number={1} title="Program Eligibility">
        <p>
          The FabricAI Pro Affiliate Program is open to individuals and businesses who
          agree to promote FabricAI Pro through ethical, transparent marketing methods.
          Affiliates may join through JVZoo, WarriorPlus, or CJ Affiliate.
        </p>
        <PolicyNote>
          By applying to and being accepted into our affiliate program, you confirm that
          you have read and agree to these terms.
        </PolicyNote>
      </PolicySection>

      <PolicySection number={2} title="Commission Structure">
        <p>
          Affiliates earn commissions on every qualifying sale referred through their
          unique affiliate link. Commission rates are as stated in the respective affiliate
          network dashboard at the time of joining.
        </p>
        <PolicyList items={[
          "Commissions are calculated on the net sale amount (after taxes)",
          "Cookie duration is 30 days from the first click of your affiliate link",
          "Commissions are subject to reversal if the customer requests a refund",
          "Minimum payout threshold applies as per the affiliate network terms",
        ]} />
      </PolicySection>

      <PolicySection number={3} title="Permitted Promotional Methods">
        <p>Affiliates may promote FabricAI Pro through any of the following:</p>
        <PolicyList items={[
          "Blog posts, articles, and review content",
          "Social media posts and organic content",
          "Email marketing to your own opted-in subscriber list",
          "YouTube videos, tutorials, and demos",
          "Paid advertising (subject to Section 4 restrictions)",
          "WhatsApp groups and industry forums (with disclosure)",
        ]} />
      </PolicySection>

      <PolicySection number={4} title="Prohibited Activities">
        <p>Affiliates are strictly prohibited from engaging in:</p>
        <PolicyList items={[
          "Spam — unsolicited bulk email, SMS, or messaging",
          "Misrepresentation — false or misleading claims about the product",
          "Unrealistic income claims — guaranteed earnings or specific ROI promises",
          "Trademark bidding — bidding on 'FabricAI Pro' in paid search without written approval",
          "Cookie stuffing or fraudulent traffic generation",
          "Promoting through illegal, unethical, or deceptive methods",
          "Self-referrals or purchasing through your own affiliate link",
          "Creating fake reviews or testimonials",
        ]} />
        <PolicyNote>
          Violation of any of the above may result in immediate commission reversal,
          account termination, and potential legal action.
        </PolicyNote>
      </PolicySection>

      <PolicySection number={5} title="Disclosure Requirements">
        <p>
          In compliance with FTC guidelines, all affiliates must clearly and conspicuously
          disclose their affiliate relationship whenever they promote FabricAI Pro. A clear
          statement such as "This post contains affiliate links — I earn a commission if you
          purchase through my link" is required.
        </p>
      </PolicySection>

      <PolicySection number={6} title="Marketing Materials">
        <p>
          FabricAI Pro provides approved marketing assets including banners, email swipes,
          social media graphics, and video scripts. Affiliates should use these materials
          where possible to maintain brand consistency and compliance.
        </p>
        <PolicyNote>
          Access all affiliate marketing materials at /affiliate-assets
        </PolicyNote>
      </PolicySection>

      <PolicySection number={7} title="Payment Terms">
        <p>
          Commission payments are processed through the respective affiliate network
          (JVZoo, WarriorPlus, or CJ Affiliate) according to their payment schedules.
          Direct affiliate arrangements may follow a custom payment schedule agreed in writing.
        </p>
        <PolicyList items={[
          "Refund period: commissions may be reversed if a buyer refunds within 30 days",
          "Chargebacks: commissions are reversed for any chargeback event",
          "Payment methods: as per the affiliate network (PayPal, bank transfer, etc.)",
        ]} />
      </PolicySection>

      <PolicySection number={8} title="Program Modifications">
        <p>
          FabricAI Pro reserves the right to modify commission rates, program terms, or
          terminate the affiliate program at any time with reasonable notice. Continued
          promotion after notice constitutes acceptance of updated terms.
        </p>
      </PolicySection>

      <PolicySection number={9} title="Termination">
        <p>
          We may terminate an affiliate account at our discretion for violations of these
          terms. Upon termination, any pending commissions that have passed the refund
          period will be honoured through the affiliate network.
        </p>
      </PolicySection>

      <PolicySection number={10} title="Contact">
        <p>Affiliate support and queries:</p>
        <PolicyNote>
          📧 support@fabricaipro.com · Subject: Affiliate Support · Monday–Saturday · 10 AM – 7 PM IST
        </PolicyNote>
      </PolicySection>
    </LegalLayout>
  );
}
