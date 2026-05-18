export default function FabricAILandingPage() {
  return (
    <div className="bg-[#050816] text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm mb-6">
            NEW AI BUSINESS PLATFORM
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Build AI Content,
            <span className="text-blue-500"> Chatbots</span>,
            Images & Marketing
            <span className="text-blue-500"> In One App</span>
          </h1>

          <p className="text-gray-400 text-xl mt-8 leading-relaxed">
            FabricAI Pro helps creators, marketers, freelancers, and agencies generate AI content, business assets, landing pages, social posts, and customer support instantly.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="/billing"
              className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl text-lg font-bold"
            >
              Get Instant Access
            </a>

            <a
              href="#demo"
              className="border border-gray-700 hover:border-blue-500 transition px-8 py-4 rounded-2xl text-lg font-bold"
            >
              Watch Demo
            </a>
          </div>

          <div className="flex gap-8 mt-10 text-gray-400">
            <div>
              <h3 className="text-3xl font-bold text-white">25K+</h3>
              <p>Users</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">1M+</h3>
              <p>AI Generations</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">99%</h3>
              <p>Uptime</p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-[40px] p-1 shadow-2xl shadow-blue-500/20">
            <div className="bg-[#0b1120] rounded-[40px] p-6">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
                alt="AI Dashboard"
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black">
            Everything Needed To Run
            <span className="text-blue-500"> AI Business</span>
          </h2>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto">
            Replace multiple expensive tools with one powerful AI platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'AI Chat Assistant',
              desc: 'Generate business content, emails, blogs, and marketing copy instantly.',
            },
            {
              title: 'AI Image Creator',
              desc: 'Create professional images, ads, thumbnails, and social media graphics.',
            },
            {
              title: 'Landing Page Builder',
              desc: 'Build sales pages and lead funnels without coding.',
            },
            {
              title: 'Marketing Toolkit',
              desc: 'Create ads, hooks, scripts, captions, and product descriptions.',
            },
            {
              title: 'Agency Dashboard',
              desc: 'Manage multiple clients and AI workspaces.',
            },
            {
              title: 'Subscription Billing',
              desc: 'Integrated Razorpay, WarriorPlus, and JVZoo support.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl mb-6">
                ✨
              </div>

              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DEMO */}
      <section
        id="demo"
        className="bg-[#0b1120] py-24"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black mb-10">
            Watch FabricAI Pro In Action
          </h2>

          <div className="rounded-[40px] overflow-hidden border border-gray-800 shadow-2xl shadow-blue-500/10">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Demo"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black">
            Choose Your Plan
          </h2>

          <p className="text-gray-400 text-xl mt-6">
            Start small or scale your agency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Starter',
              price: '₹499',
              features: ['AI Chat', 'AI Content', 'Basic Dashboard'],
            },
            {
              name: 'Pro',
              price: '₹1499',
              features: ['Everything In Starter', 'AI Images', 'Advanced Marketing Tools'],
              featured: true,
            },
            {
              name: 'Agency',
              price: '₹4999',
              features: ['Unlimited Usage', 'Client Workspaces', 'Commercial License'],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`rounded-[40px] p-10 border ${
                plan.featured
                  ? 'bg-blue-600 border-blue-400 scale-105'
                  : 'bg-[#0f172a] border-gray-800'
              }`}
            >
              <h3 className="text-3xl font-black">
                {plan.name}
              </h3>

              <div className="text-6xl font-black mt-8">
                {plan.price}
              </div>

              <div className="mt-10 space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-lg">
                    <span>✅</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="/billing"
                className={`block text-center mt-10 py-4 rounded-2xl font-bold text-lg ${
                  plan.featured
                    ? 'bg-white text-blue-600'
                    : 'bg-blue-600 text-white'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#0b1120] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black">
              Users Love FabricAI
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'This platform replaced 6 different AI tools for my business.',
              'I created client content in minutes instead of hours.',
              'Perfect for agencies and online marketers.',
            ].map((review, index) => (
              <div
                key={index}
                className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8"
              >
                <div className="text-yellow-400 text-2xl mb-4">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[40px] p-16 shadow-2xl shadow-blue-500/20">
          <h2 className="text-6xl font-black leading-tight">
            Ready To Launch
            Your AI Business?
          </h2>

          <p className="text-xl mt-8 text-blue-100 max-w-3xl mx-auto">
            Join creators and agencies using FabricAI Pro to build AI-powered businesses.
          </p>

          <a
            href="/billing"
            className="inline-block mt-10 bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-black"
          >
            Start Today
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-10 text-center text-gray-500">
        © 2026 FabricAI Pro. All rights reserved.
      <div
  style={{
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    marginTop: '40px',
  }}
>
  <a href="/privacy-policy" style={{ color: 'white' }}>
    Privacy Policy
  </a>

  <a href="/terms" style={{ color: 'white' }}>
    Terms
  </a>

  <a href="/refund-policy" style={{ color: 'white' }}>
    Refund Policy
  </a>
</div>
      
      </footer>
    </div>
  );
}
