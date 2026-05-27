import { TrendingUp } from "lucide-react";
import LegalLayout, { PolicySection, PolicyList, PolicyNote } from "../components/LegalLayout";

export default function EarningsDisclaimer() {
  return (
    <LegalLayout
      title="Earnings Disclaimer"
      badge="FTC Compliant · Income Disclosure"
      Icon={TrendingUp}
      iconBg="bg-amber-600"
      lastUpdated="May 2026"
      description="FabricAI Pro is committed to transparency about what users and affiliates can realistically expect. Please read this disclaimer carefully before making any purchasing or promotional decisions."
    >
      <PolicySection number={1} title="No Income or Savings Guarantee">
        <p>
          FabricAI Pro does not guarantee any specific business results, cost savings,
          production improvements, or income increases. Results vary significantly based on
          individual factory operations, usage patterns, data quality, and implementation.
        </p>
        <PolicyNote>
          Any savings figures or efficiency improvements mentioned on our website are
          illustrative examples and not a promise of what you will achieve.
        </PolicyNote>
      </PolicySection>

      <PolicySection number={2} title="Illustrative Examples">
        <p>
          Case studies, testimonials, and statistics shared on our website and marketing
          materials represent the experiences of specific users and may not be typical.
          Factors affecting your results include:
        </p>
        <PolicyList items={[
          "Factory size, product complexity, and order volumes",
          "Quality and accuracy of data entered into the platform",
          "User experience level and implementation consistency",
          "Industry conditions and buyer requirements",
          "Team adoption and training investment",
        ]} />
      </PolicySection>

      <PolicySection number={3} title="AI Calculation Accuracy">
        <p>
          While our AI is trained on extensive garment production data and aims for high
          accuracy, all AI-generated outputs — including consumption calculations, costing
          estimates, BOM suggestions, and production recommendations — should be reviewed
          and validated by qualified personnel before operational use.
        </p>
        <PolicyNote>
          Users are solely responsible for verifying AI-generated content before applying
          it in production, buyer communications, or commercial decision-making.
        </PolicyNote>
      </PolicySection>

      <PolicySection number={4} title="Affiliate Income Disclosure">
        <p>
          Affiliates promoting FabricAI Pro earn commissions on referred sales. Affiliate
          income depends on promotional effort, audience size, niche relevance, and market
          conditions. We do not guarantee any level of affiliate earnings.
        </p>
        <PolicyList items={[
          "Commission rates are as stated in the affiliate agreement at time of joining",
          "Earnings examples on affiliate pages are illustrative, not guaranteed",
          "Commission payments are subject to refund reversal within the refund period",
        ]} />
      </PolicySection>

      <PolicySection number={5} title="Independent Business Decisions">
        <p>
          The decision to purchase or subscribe to FabricAI Pro should be based on your
          own independent assessment of our features and fit for your specific factory
          operations — not on expectations of specific financial returns.
        </p>
      </PolicySection>

      <PolicySection number={6} title="FTC Compliance">
        <p>
          In accordance with FTC guidelines, affiliates and partners promoting FabricAI Pro
          must clearly disclose their relationship with us whenever they recommend or review
          our product. Affiliate links must be disclosed as such.
        </p>
      </PolicySection>

      <PolicySection number={7} title="Contact">
        <p>Questions about this disclaimer or our marketing claims:</p>
        <PolicyNote>
          📧 support@fabricaipro.com · Monday–Saturday · 10 AM – 7 PM IST
        </PolicyNote>
      </PolicySection>
    </LegalLayout>
  );
}
