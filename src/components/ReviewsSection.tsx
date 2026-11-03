import React from 'react';
import { Star, MessageSquareQuote, ExternalLink, ThumbsUp } from 'lucide-react';
import { GOOGLE_REVIEWS, RESTAURANT_INFO, SEARCH_KEYWORDS } from '../data/restaurantData.ts';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#121214] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header & Google Rating Scoreboard */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Real Customer Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
              Google Customer Reviews
            </h2>
          </div>

          {/* Trust Banner with 4.5 Stars & 214 Reviews */}
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-amber-500/30 flex items-center gap-5 shrink-0 shadow-lg">
            <div className="text-center border-r border-zinc-800 pr-5">
              <span className="text-3xl sm:text-4xl font-black text-amber-400 font-display tabular-nums">
                4.5
              </span>
              <div className="flex items-center justify-center text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">Google Rating</span>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                  Verified
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Based on <strong className="text-zinc-200 font-semibold">{RESTAURANT_INFO.reviewCount} Google reviews</strong> in Al Ain
              </p>
              <a
                href={RESTAURANT_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 hover:underline mt-1"
              >
                <span>Read all on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Real Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {GOOGLE_REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#17171b] border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl relative group"
            >
              <div className="relative">
                {/* Quote Icon */}
                <MessageSquareQuote className="w-8 h-8 text-amber-500/30 mb-4 group-hover:text-amber-500/50 transition-colors" />

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Body */}
                <blockquote className="text-sm text-zinc-200 leading-relaxed mb-6 font-normal">
                  &ldquo;{rev.review}&rdquo;
                </blockquote>
              </div>

              {/* Author & Source */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm font-display">
                    {rev.name}
                  </h4>
                  <span className="text-[11px] text-zinc-400 font-medium">
                    {rev.source}
                  </span>
                </div>

                {rev.highlightDish && (
                  <span className="text-[11px] font-medium text-amber-300/80 bg-zinc-900 px-2.5 py-1 rounded-lg border border-zinc-800">
                    {rev.highlightDish}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Popular Google Search Topics / Keywords */}
        <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <ThumbsUp className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                Popular Customer Search Topics:
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {SEARCH_KEYWORDS.map((kw, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-medium text-zinc-300 bg-zinc-800/90 border border-zinc-700 hover:border-amber-500/40 transition-colors"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
