"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Zap,
  Target,
  Layers,
  TrendingUp,
  Globe,
  Users,
  DollarSign,
  BarChart3,
  Code,
  Rocket,
  CheckCircle2,
} from "lucide-react";

export default function WebSystemsLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-900">adszoo</div>
          <button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translateY(${parallaxOffset}px)`,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium animate-pulse">
            Trusted by 8-figure agencies worldwide
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            From inbox to <span className="italic text-cyan-600">action</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Your website owes you money. Turn static sites into{" "}
            <span className="font-semibold text-slate-900">
              high-performing web systems
            </span>{" "}
            that convert visitors into customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              Start Building
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-lg font-semibold transition-all duration-300 border-2 border-slate-200 hover:border-cyan-500">
              View Case Studies
            </button>
          </div>

          {/* Animated Dashboard Preview */}
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200">
                  <Target className="w-10 h-10 text-cyan-600 mb-4" />
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    247%
                  </div>
                  <div className="text-sm text-slate-600">
                    Conversion Increase
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                  <TrendingUp className="w-10 h-10 text-purple-600 mb-4" />
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    3.2x
                  </div>
                  <div className="text-sm text-slate-600">ROI Growth</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <Zap className="w-10 h-10 text-green-600 mb-4" />
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    4 Hours
                  </div>
                  <div className="text-sm text-slate-600">Launch Time</div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="h-2 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full"></div>
                <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
                <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full"></div>
                <div className="h-2 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systems, Not Sites Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              <span className="italic text-cyan-600">Systems</span>, not sites
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stop treating your website like a digital brochure. Build a
              living, breathing system that evolves with your business across
              US, Australia, UAE, and MENA markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Modular Architecture
                  </h3>
                  <p className="text-slate-600">
                    Built with flexible modules that snap together like LEGO
                    blocks. Update any section without breaking the entire site.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Data-Driven Decisions
                  </h3>
                  <p className="text-slate-600">
                    Every change backed by analytics. Track conversions,
                    optimize performance, and scale what works across global
                    markets.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Rapid Deployment
                  </h3>
                  <p className="text-slate-600">
                    Launch new pages in hours, not weeks. Your team can build
                    and publish without touching code.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Built for ROI
                  </h3>
                  <p className="text-slate-600">
                    Every pixel optimized for conversion. Turn your website from
                    a cost center into a revenue engine.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-slate-900 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-green-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-mono text-sm">
                      System initialized successfully
                    </span>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm text-slate-300 overflow-x-auto">
                    <div className="text-cyan-400">const webSystem = {`{`}</div>
                    <div className="ml-4">modules: [</div>
                    <div className="ml-8 text-yellow-400">
                      &apos;hero&apos;, &apos;features&apos;, &apos;cta&apos;
                    </div>
                    <div className="ml-4">],</div>
                    <div className="ml-4">performance: {`{`}</div>
                    <div className="ml-8">
                      conversions: <span className="text-green-400">+247%</span>
                      ,
                    </div>
                    {/* <div className="ml-8">speed: <span className="text-green-400">'< 1s'</span>,</div> */}
                    <div className="ml-8">
                      roi:{" "}
                      <span className="text-green-400">&apos;3.2x&apos;</span>
                    </div>
                    <div className="ml-4">{`}`},</div>
                    <div className="ml-4">regions: [</div>
                    <div className="ml-8 text-purple-400">
                      &apos;US&apos;, &apos;Australia&apos;,
                    </div>
                    <div className="ml-8 text-purple-400">
                      &apos;UAE&apos;, &apos;MENA&apos;
                    </div>
                    <div className="ml-4">]</div>
                    <div className="text-cyan-400">{`}`};</div>
                  </div>
                  <div className="flex items-center gap-3 text-cyan-400 animate-pulse">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="font-mono text-sm">
                      Live and converting...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facts Not Feelings Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Facts, not <span className="italic text-cyan-400">feelings</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Your website is a tool, not a trophy. Every decision backed by
              data, every improvement measured in revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-slate-300 mb-4">Data-Driven Design</div>
              <p className="text-sm text-slate-400">
                Every module tested and optimized for maximum conversion across
                your target markets.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              {/* <div className="text-4xl font-bold text-cyan-400 mb-2">< 1s</div> */}
              <div className="text-slate-300 mb-4">Load Time</div>
              <p className="text-sm text-slate-400">
                Lightning-fast performance means higher rankings and better user
                experience globally.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-slate-300 mb-4">Analytics Tracking</div>
              <p className="text-sm text-slate-400">
                Real-time insights into visitor behavior, conversions, and
                revenue across all regions.
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Track What Matters
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-cyan-400">
                  Sitewide Metrics
                </h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    Total conversions and revenue
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    Traffic sources and channels
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    Overall site performance
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-cyan-400">
                  Page-Level Insights
                </h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    Conversion rate by page
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    User behavior patterns
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    A/B test results
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Not Pages Section */}
      <section className="py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Modules, not <span className="italic text-purple-600">pages</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Build pages like LEGO blocks. Reusable, flexible modules that your
              team can edit without touching code.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-purple-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Workhorse Modules
              </h3>
              <p className="text-slate-600 mb-6">
                The foundation of your site. Heroes, features, testimonials -
                all optimized and ready to deploy.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                  12-20 core modules
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                  Brand-customized design
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                  Fully responsive
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-purple-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Showstopper Modules
              </h3>
              <p className="text-slate-600 mb-6">
                Eye-catching, premium sections that make your brand
                unforgettable. Perfect for product showcases.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Custom animations
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Interactive elements
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Unique designs
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-purple-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                High-Touch Modules
              </h3>
              <p className="text-slate-600 mb-6">
                Specialized modules for pricing, comparisons, and complex data.
                Built for clarity and conversion.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Pricing tables
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Feature comparisons
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Data visualization
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl p-12 shadow-xl border border-slate-200">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                The Benefits Are Clear
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Modular systems give you speed, flexibility, and control
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  4 Hours
                </div>
                <div className="text-sm text-slate-600">
                  To launch new pages
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  70%
                </div>
                <div className="text-sm text-slate-600">
                  Cost savings vs custom
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
                <div className="text-sm text-slate-600">
                  Code changes needed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">∞</div>
                <div className="text-sm text-slate-600">
                  Possible combinations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beginning Not Ending Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                A beginning, not an{" "}
                <span className="italic text-cyan-600">ending</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Most websites launch and decay. Ours evolve. Launch day is just
                the start of a system that grows with your business.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Minimum Viable System
                    </h4>
                    <p className="text-slate-600">
                      Launch fast with core functionality, then iterate based on
                      real data.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Continuous Improvement
                    </h4>
                    <p className="text-slate-600">
                      Regular updates and optimizations keep your system
                      performing at peak.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Scalable Growth
                    </h4>
                    <p className="text-slate-600">
                      Add new features, pages, and capabilities as your business
                      expands.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200">
                <p className="text-slate-700 italic">
                  &apos;Launch isn&apos;t the finish line - it&apos;s the
                  starting point. Your website should keep improving, growing,
                  and delivering more value over time.&apos;
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">
                        Week 1: Launch
                      </div>
                      <div className="text-sm text-slate-600">
                        Initial system goes live
                      </div>
                    </div>
                  </div>
                  <div className="h-2 bg-green-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-full"></div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">
                        Week 2-4: Analyze
                      </div>
                      <div className="text-sm text-slate-600">
                        Gather data and insights
                      </div>
                    </div>
                  </div>
                  <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-3/4"></div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">
                        Month 2+: Optimize
                      </div>
                      <div className="text-sm text-slate-600">
                        Continuous improvements
                      </div>
                    </div>
                  </div>
                  <div className="h-2 bg-purple-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/20 backdrop-blur-md text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30">
              Global Performance
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Built for <span className="italic text-cyan-400">worldwide</span>{" "}
              success
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Optimized for peak performance across US, Australia, UAE, and MENA
              markets with localized SEO and lightning-fast load times.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Globe className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">United States</h3>
              <p className="text-slate-400 text-sm">
                Optimized for US search engines and user behaviors
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Globe className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Australia</h3>
              <p className="text-slate-400 text-sm">
                Localized content and CDN for Australian markets
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Globe className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">UAE</h3>
              <p className="text-slate-400 text-sm">
                High-performance delivery for UAE businesses
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Globe className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">MENA</h3>
              <p className="text-slate-400 text-sm">
                Regional optimization for MENA audiences
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Technical Excellence
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Modern Stack</h4>
                <p className="text-slate-400">
                  Built with Next.js, TypeScript, and headless CMS for maximum
                  flexibility
                </p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Blazing Fast</h4>
                <p className="text-slate-400">
                  Static generation and CDN delivery for sub-second load times
                  globally
                </p>
              </div>
              <div className="text-center">
                <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">SEO Optimized</h4>
                <p className="text-slate-400">
                  Structured data, meta optimization, and regional targeting
                  built-in
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing/CTA Section */}
      <section className="py-32 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Ready to transform your{" "}
              <span className="italic text-cyan-600">website?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join top agencies and businesses using web systems to drive real
              revenue. Built by adszoo for companies that expect more from their
              websites.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200 hover:border-cyan-500 transition-all duration-300">
              <div className="text-sm font-semibold text-cyan-600 mb-2">
                STARTER
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-4">
                Custom
                <span className="text-lg font-normal text-slate-600">
                  {" "}
                  pricing
                </span>
              </div>
              <p className="text-slate-600 mb-6">
                Perfect for small businesses ready to scale
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">12 core modules</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Basic analytics setup</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Mobile responsive</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">1 region optimization</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl p-8 shadow-2xl border-2 border-cyan-400 transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <div className="text-sm font-semibold text-white mb-2">
                PROFESSIONAL
              </div>
              <div className="text-4xl font-bold text-white mb-4">
                Custom
                <span className="text-lg font-normal text-cyan-100">
                  {" "}
                  pricing
                </span>
              </div>
              <p className="text-cyan-50 mb-6">
                For growing agencies and enterprises
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white">20 modules + showstoppers</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white">Advanced analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white">A/B testing included</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white">Multi-region optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white">Priority support</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-white hover:bg-slate-50 text-cyan-600 rounded-lg font-semibold transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200 hover:border-cyan-500 transition-all duration-300">
              <div className="text-sm font-semibold text-cyan-600 mb-2">
                ENTERPRISE
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-4">
                Custom
                <span className="text-lg font-normal text-slate-600">
                  {" "}
                  solution
                </span>
              </div>
              <p className="text-slate-600 mb-6">
                Full-service for 8-figure agencies
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Unlimited modules</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Custom development</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">
                    Dedicated account manager
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Global optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">White-label options</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              Want to see it in action?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Schedule a demo to see how web systems can transform your digital
              presence and drive real ROI across your target markets.
            </p>
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              FAQs
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about web systems
            </p>
          </div>

          <div className="space-y-6">
            <details className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-lg font-semibold text-slate-900">
                  How does Adszoo&apos;s web system differ from regular
                  websites?
                </span>
                <ArrowRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-slate-600">
                Unlike traditional websites that are static and difficult to
                update, our web systems are modular, data-driven, and built to
                evolve. You can make changes in hours instead of weeks, track
                real ROI, and continuously optimize based on performance data.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-lg font-semibold text-slate-900">
                  Can Adszoo build web systems for agencies and their clients?
                </span>
                <ArrowRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-slate-600">
                Absolutely! We specialize in partnering with agencies to build
                high-performance web systems for their clients. Many top
                8-figure agencies trust us to deliver scalable,
                conversion-focused solutions that make them look great.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-lg font-semibold text-slate-900">
                  How does regional optimization work for US, Australia, UAE,
                  and MENA?
                </span>
                <ArrowRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-slate-600">
                We optimize for each region&apos;s specific search behaviors,
                CDN delivery, localized content strategies, and user
                preferences. Your site loads fast globally and ranks well in
                each target market&apos;s search engines.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-lg font-semibold text-slate-900">
                  Will I need a developer to make updates?
                </span>
                <ArrowRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-slate-600">
                No! That&apos;s the beauty of modular web systems. Your team can
                create new pages, update content, and rearrange modules directly
                from the CMS without writing a single line of code. We provide
                tutorial videos to make it easy.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-lg font-semibold text-slate-900">
                  How is Adszoo related to web systems?
                </span>
                <ArrowRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-slate-600">
                Adszoo is a digital agency specializing in building
                high-performance web systems that convert. We combine
                data-driven design, modular architecture, and continuous
                optimization to help businesses and agencies achieve real ROI
                from their websites across global markets.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-lg font-semibold text-slate-900">
                  How long does it take to launch a web system?
                </span>
                <ArrowRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-slate-600">
                We follow the Minimum Viable System approach - typically 4-8
                weeks for initial launch with core functionality. Then we
                continuously improve based on real data. This is faster and more
                effective than traditional 6-month website projects.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-lg font-semibold text-slate-900">
                  What if I need to rebrand or redesign later?
                </span>
                <ArrowRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-slate-600">
                Our headless CMS architecture separates content from design, so
                you can completely redesign your site without touching your
                content. This saves months of work and ensures your content
                investments are protected long-term.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <Rocket className="w-10 h-10 text-white" />
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Your website owes you{" "}
            <span className="italic text-cyan-400">money</span>
          </h2>

          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Stop settling for websites that just look good. Build a system that
            drives revenue, scales with your business, and performs across US,
            Australia, UAE, and MENA markets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              Start Your Web System
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-lg font-semibold transition-all duration-300 border-2 border-white/30">
              Download Playbook
            </button>
          </div>

          <div className="text-slate-400 text-sm">
            Questions? Email us at{" "}
            <a
              href="mailto:askar@adszoo.in"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              askar@adszoo.in
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold text-white mb-4">adszoo</div>
              <p className="text-sm text-slate-400 mb-4">
                Building web systems that convert for businesses and agencies
                worldwide.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Users className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Web Systems
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Modules
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Playbook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <div>© 2025 Adszoo. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
