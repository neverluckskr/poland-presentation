import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import CoverSlide from './slides/CoverSlide';
import InfoCardsSlide from './slides/InfoCardsSlide';
import GeographySlide from './slides/GeographySlide';
import GovernanceSlide from './slides/GovernanceSlide';
import DemographicsSlide from './slides/DemographicsSlide';
import SettlementSlide from './slides/SettlementSlide';
import EconomySlide from './slides/EconomySlide';
import HistorySlide from './slides/HistorySlide';
import SecondarySectorSlide from './slides/SecondarySectorSlide';
import TertiarySectorSlide from './slides/TertiarySectorSlide';
import ServicesDetailSlide from './slides/ServicesDetailSlide';
import FactsSlide from './slides/FactsSlide';
import NaturalConditionsSlide from './slides/NaturalConditionsSlide';
import NaturalResourcesSlide from './slides/NaturalResourcesSlide';
import PrimarySectorSlide from './slides/PrimarySectorSlide';
import VideoSlide from './slides/VideoSlide';

export default function Slide({ slide, isActive, index }) {
  const slideComponents = {
    cover: CoverSlide,
    video: VideoSlide,
    'info-cards': InfoCardsSlide,
    geography: GeographySlide,
    governance: GovernanceSlide,
    structure: GovernanceSlide,
    demographics: DemographicsSlide,
    settlement: SettlementSlide,
    economy: EconomySlide,
    history: HistorySlide,
    'secondary-sector': SecondarySectorSlide,
    'tertiary-sector': TertiarySectorSlide,
    'services-detail': ServicesDetailSlide,
    facts: FactsSlide,
    'natural-conditions': NaturalConditionsSlide,
    'natural-resources': NaturalResourcesSlide,
    'primary-sector': PrimarySectorSlide,
  };

  const SlideComponent = slideComponents[slide.type] || InfoCardsSlide;

  const isSettlementSlide = slide.type === 'settlement';
  
  return (
    <article
      className={`
        absolute inset-0 m-auto rounded-[32px] border border-dark-border
        p-4 sm:p-8 md:p-14 flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 overflow-auto
        transition-all duration-700 ease-out
        ${isActive 
          ? 'opacity-100 scale-100 translate-y-0 rotate-x-0 visible z-10' 
          : 'opacity-0 scale-90 translate-y-10 rotate-x-[10deg] invisible'
        }
      `}
      style={{
        background: isSettlementSlide ? 'rgba(25, 25, 35, 0.95)' : 'rgba(25, 25, 35, 0.65)',
        backdropFilter: isSettlementSlide ? 'none' : 'blur(12px)',
        WebkitBackdropFilter: isSettlementSlide ? 'none' : 'blur(12px)',
        boxShadow: isActive 
          ? '0 30px 60px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 50px 100px -20px rgba(239, 68, 68, 0.15)'
          : 'none',
      }}
      aria-label={`Слайд ${index + 1}: ${slide.title}`}
      aria-hidden={!isActive}
      role="article"
      tabIndex={isActive ? 0 : -1}
    >
      <div 
        className={`absolute top-2 right-2 sm:top-4 sm:right-4 md:top-7 md:right-7 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full border-2 sm:border-3 md:border-4 flex items-center justify-center text-lg sm:text-xl md:text-3xl font-black z-20 shadow-lg ${
          slide.type === 'cover' || slide.type === 'video'
            ? 'bg-[#8B0000] border-[#3a0000] text-white shadow-[0_0_20px_rgba(139,0,0,0.8),inset_0_0_15px_rgba(90,0,0,0.5),0_0_0_2px_rgba(58,0,0,0.8)] ring-2 ring-[#5a0000]/50'
            : 'bg-white border-black text-black'
        }`}
        aria-label={`Автор слайду: ${slide.author}`}
        title={`Автор: ${slide.author}`}
      >
        {slide.author}
      </div>
      <SlideComponent slide={slide} isActive={isActive} />
    </article>
  );
}

Slide.propTypes = {
  slide: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    type: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.object,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};
