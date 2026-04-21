"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Clock,
  Gift,
  CheckCircle,
  Star,
  Zap,
  Smartphone,
  Lock,
  Shield,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Assign Tasks",
    description: "Create chores, homework, or activities. Set point values. Add photo proof requirement.",
    icon: Smartphone,
    color: "#3A7BFA"
  },
  {
    step: "02",
    title: "Kids Complete",
    description: "Your child finishes tasks and submits photo proof through the app. No photo, no points.",
    icon: Camera,
    color: "#4CCB6E"
  },
  {
    step: "03",
    title: "Earn & Redeem",
    description: "Approve completions, points are awarded automatically. Kids redeem for screen time or rewards.",
    icon: Gift,
    color: "#FFC300"
  }
];

const FEATURES = [
  {
    icon: Camera,
    title: "Photo Proof",
    description: "Kids must submit photo evidence for every task. No more guessing if they actually did it.",
    color: "#4CCB6E"
  },
  {
    icon: Lock,
    title: "Automatic Enforcement",
    description: "When time runs out, apps lock automatically using iOS Screen Time APIs. No negotiations needed.",
    color: "#3A7BFA"
  },
  {
    icon: Gift,
    title: "Flexible Rewards",
    description: "Screen time, cash, privileges, or experiences. Customize rewards that motivate YOUR child.",
    color: "#FFC300"
  },
  {
    icon: Clock,
    title: "Time Banking",
    description: "Kids can save up points and redeem when they want. Teaches delayed gratification.",
    color: "#3A7BFA"
  },
  {
    icon: Star,
    title: "Achievement Badges",
    description: "Celebrate milestones with visual achievements that keep kids engaged and motivated.",
    color: "#FFC300"
  },
  {
    icon: Shield,
    title: "COPPA Compliant",
    description: "Built with child safety in mind. Your data stays private and secure.",
    color: "#4CCB6E"
  }
];

const TESTIMONIALS = [
  {
    quote: "We went from daily tantrums to my son asking what chores he can do. It's been life-changing.",
    author: "Sarah M.",
    detail: "Mom of 2, ages 8 & 11"
  },
  {
    quote: "Finally, an app that actually enforces screen time limits. No more 'just 5 more minutes' negotiations.",
    author: "Michael R.",
    detail: "Dad of 3, ages 6-14"
  },
  {
    quote: "The photo proof feature is genius. My daughter used to say she cleaned her room. Now I can actually see it.",
    author: "Jennifer L.",
    detail: "Mom of 1, age 9"
  }
];

const FAQS = [
  {
    q: "How does the screen time enforcement work?",
    a: "Screen Time Hero uses Apple's native Screen Time APIs (FamilyControls framework) to actually block apps when your child's time runs out. This is real enforcement, not just tracking. The restrictions are applied at the system level."
  },
  {
    q: "What devices does this work on?",
    a: "Currently, Screen Time Hero works on iPhone and iPad running iOS 15.0 or later. For full screen time enforcement features, iOS 16.0+ is required. We're actively working on an Android version."
  },
  {
    q: "Can my child just uninstall the app?",
    a: "On iOS, you can prevent app deletion through Screen Time settings (Settings > Screen Time > Content & Privacy Restrictions > iTunes & App Store Purchases > Deleting Apps > Don't Allow). We provide step-by-step instructions for this during setup."
  },
  {
    q: "What if my child doesn't have their own device?",
    a: "Screen Time Hero works best when children have their own iOS device. However, you can also use it on a shared device by setting up different user profiles or using the app's child mode with a PIN."
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. We use industry-standard encryption (TLS 1.2+ in transit, AES-256 at rest). We're COPPA compliant and never sell your data. Photos are stored securely and only accessible to you and your linked family members."
  },
  {
    q: "Can I use this for multiple children?",
    a: "Yes! The Family Plan includes unlimited children at no extra cost. Each child has their own profile, tasks, and reward balance."
  },
  {
    q: "What makes this different from other chore apps?",
    a: "Two key differences: (1) We're the only app that uses screen time itself as a reward — others use points or money only. (2) We actually enforce screen time limits automatically using iOS native controls, not just track usage."
  },
  {
    q: "Can I cancel my subscription?",
    a: "Yes, you can cancel anytime from your account settings. If you cancel, you'll continue to have access until the end of your billing period. We also offer a 7-day free trial with no credit card required."
  }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const NAV_HEIGHT = 64;
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="Screen Time Hero" width={32} height={32} />
              <span className="text-xl font-bold text-[#1C1F26]">Screen Time Hero</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("how-it-works")} className="text-gray-600 hover:text-[#3A7BFA] transition-colors">How It Works</button>
              <button onClick={() => scrollToSection("features")} className="text-gray-600 hover:text-[#3A7BFA] transition-colors">Features</button>
              <button onClick={() => scrollToSection("pricing")} className="text-gray-600 hover:text-[#3A7BFA] transition-colors">Pricing</button>
              <button onClick={() => scrollToSection("faq")} className="text-gray-600 hover:text-[#3A7BFA] transition-colors">FAQ</button>
              <Link href="/support" className="text-gray-600 hover:text-[#3A7BFA] transition-colors">Support</Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/download"
                className="px-4 py-2 bg-[#3A7BFA] text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                Start Free Trial
              </Link>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection("how-it-works")} className="block w-full text-left py-2 text-gray-600">How It Works</button>
              <button onClick={() => scrollToSection("features")} className="block w-full text-left py-2 text-gray-600">Features</button>
              <button onClick={() => scrollToSection("pricing")} className="block w-full text-left py-2 text-gray-600">Pricing</button>
              <button onClick={() => scrollToSection("faq")} className="block w-full text-left py-2 text-gray-600">FAQ</button>
              <Link href="/support" className="block w-full text-left py-2 text-gray-600">Support</Link>
              <div className="pt-3 border-t border-gray-100">
                <Link href="/download" className="block w-full py-2 bg-[#3A7BFA] text-white font-medium rounded-lg text-center">Start Free Trial</Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-[#FFC300]/20 text-[#1C1F26] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 text-[#FFC300] fill-[#FFC300]" />
              <span>7-Day Free Trial • No Credit Card Required</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1F26] leading-tight mb-6">
              End the Screen Time{" "}
              <span className="text-[#3A7BFA]">Fights</span>{" "}
              Forever
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Turn screen time battles into motivation. Your kids will actually{" "}
              <span className="font-semibold text-[#1C1F26]">want</span> to do chores.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/download"
                  className="block w-full sm:w-auto px-8 py-4 bg-[#3A7BFA] text-white font-semibold rounded-xl text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25 text-center"
                >
                  Start Your Free Trial
                </Link>
              </motion.div>
              <motion.button 
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#1C1F26] font-semibold rounded-xl text-lg border-2 border-gray-200 hover:border-[#3A7BFA] hover:text-[#3A7BFA] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("how-it-works")}
              >
                See How It Works
              </motion.button>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Works on iPhone & iPad. Android coming soon.
            </p>
          </motion.div>

          {/* App Preview */}
          <motion.div 
            className="mt-16 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-b from-[#3A7BFA]/5 to-transparent rounded-3xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-bold text-lg">Parent Dashboard</h3>
                      <p className="text-sm text-gray-500">3 tasks awaiting approval</p>
                    </div>
                    <div className="w-10 h-10 bg-[#FFC300] rounded-full flex items-center justify-center">
                      <span className="text-lg">👋</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {["Clean bedroom - 15 pts", "Math homework - 20 pts", "Walk the dog - 10 pts"].map((task, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Camera className="w-5 h-5 text-[#3A7BFA]" />
                          <span className="text-sm font-medium">{task}</span>
                        </div>
                        <div className="flex space-x-2">
                          <div aria-hidden="true" className="p-2 bg-[#4CCB6E] text-white rounded-lg">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <div aria-hidden="true" className="p-2 bg-gray-200 text-gray-600 rounded-lg">
                            <X className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#FFC300]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-[#FFC300]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Automatic Enforcement</h4>
                      <p className="text-gray-600">When time runs out, apps automatically lock. No negotiations, no arguments.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#4CCB6E]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Camera className="w-6 h-6 text-[#4CCB6E]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Photo Proof Required</h4>
                      <p className="text-gray-600">Kids must submit photo evidence. No more &quot;I did it&quot; without verification.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#3A7BFA]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Gift className="w-6 h-6 text-[#3A7BFA]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Flexible Rewards</h4>
                      <p className="text-gray-600">Screen time, cash, privileges, or experiences — customize what motivates your child.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1F26] mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to transform screen time from battle to motivation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {HOW_IT_WORKS_STEPS.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl font-bold" style={{ color: item.color }}>{item.step}</div>
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1F26] mb-4">Features Parents Love</h2>
            <p className="text-xl text-gray-600">Everything you need to manage screen time without the daily fights</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1F26] mb-4">What Parents Are Saying</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FFC300] fill-[#FFC300]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-semibold text-[#1C1F26]">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1F26] mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Start free. No credit card required.</p>
          </motion.div>

          <div className="max-w-md mx-auto">
            <motion.div 
              className="bg-white rounded-2xl shadow-2xl border-2 border-[#3A7BFA] p-8 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 bg-[#FFC300] text-[#1C1F26] text-sm font-bold px-4 py-1 rounded-bl-xl">
                MOST POPULAR
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Family Plan</h3>
              <p className="text-gray-600 mb-6">Everything you need for your family</p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold">$9.99</span>
                <span className="text-gray-600">/month</span>
                <p className="text-sm text-gray-500 mt-1">or $99/year (save 17%)</p>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  "7-day free trial",
                  "Unlimited children",
                  "Unlimited tasks",
                  "Photo proof verification",
                  "Automatic screen time enforcement",
                  "All reward types (time, cash, privileges)",
                  "Progress tracking & analytics",
                  "Priority support"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#4CCB6E] flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/download"
                  className="block w-full py-4 bg-[#3A7BFA] text-white font-semibold rounded-xl text-lg hover:bg-blue-600 transition-colors text-center"
                >
                  Start Free Trial
                </Link>
              </motion.div>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                Cancel anytime. No questions asked.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-[#F4F5F7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1F26] mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  id={`faq-button-${index}`}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-[#1C1F26]">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    className="px-6 pb-4 text-gray-600"
                  >
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-br from-[#3A7BFA] to-[#2563EB] rounded-3xl p-8 md:p-16 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to End the Screen Time Fights?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of families who&apos;ve transformed screen time from a battle into motivation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/download"
                  className="block w-full sm:w-auto px-8 py-4 bg-[#FFC300] text-[#1C1F26] font-semibold rounded-xl text-lg hover:bg-yellow-400 transition-colors text-center"
                >
                  Start Your Free 7-Day Trial
                </Link>
              </motion.div>
            </div>
            <p className="mt-4 text-sm text-blue-200">No credit card required. Cancel anytime.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1F26] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/logo.svg" alt="Screen Time Hero" width={32} height={32} />
                <span className="text-xl font-bold">Screen Time Hero</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transforming screen time battles into motivation, one family at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection("features")} className="hover:text-white transition-colors">Features</button></li>
                <li><button onClick={() => scrollToSection("pricing")} className="hover:text-white transition-colors">Pricing</button></li>
                <li><button onClick={() => scrollToSection("faq")} className="hover:text-white transition-colors">FAQ</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/download" className="hover:text-white transition-colors">Download</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
                <li><a href="mailto:support@screentimehero.com" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Screen Time Hero. All rights reserved. Made with 💙 for families everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
