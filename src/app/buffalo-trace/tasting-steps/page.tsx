'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports for each step component
const ColorStep = dynamic(() => import('@/components/tasting-steps/ColorStep'), {
  loading: () => <div>Loading...</div>
});
const NoseStep = dynamic(() => import('@/components/tasting-steps/NoseStep'), {
  loading: () => <div>Loading...</div>
});
const TasteStep = dynamic(() => import('@/components/tasting-steps/TasteStep'), {
  loading: () => <div>Loading...</div>
});
const FinishStep = dynamic(() => import('@/components/tasting-steps/FinishStep'), {
  loading: () => <div>Loading...</div>
});
const TastingSummaryStep = dynamic(() => import('@/components/tasting-steps/TastingSummaryStep'), {
  loading: () => <div>Loading...</div>
});

export default function BuffaloTraceTastingExperience() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const steps = ['color', 'nose', 'taste', 'finish', 'summary'];
  const currentStep = steps[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'color':
        return (
          <ColorStep
            onNext={handleNext}
            onPrevious={handlePrevious}
            isFirst={currentStepIndex === 0}
            isLast={currentStepIndex === steps.length - 1}
          />
        );
      case 'nose':
        return (
          <NoseStep
            onNext={handleNext}
            onPrevious={handlePrevious}
            isFirst={currentStepIndex === 0}
            isLast={currentStepIndex === steps.length - 1}
          />
        );
      case 'taste':
        return (
          <TasteStep
            title="Taste"
            description="Take a small sip and let it coat your entire palate. Notice how the flavors develop and change."
            onNext={handleNext}
            onPrevious={handlePrevious}
            isFirst={currentStepIndex === 0}
            isLast={currentStepIndex === steps.length - 1}
          />
        );
      case 'finish':
        return (
          <FinishStep
            onNext={handleNext}
            onPrevious={handlePrevious}
            isFirst={currentStepIndex === 0}
            isLast={currentStepIndex === steps.length - 1}
          />
        );
      case 'summary':
        return <TastingSummaryStep />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      {currentStep !== 'summary' && (
        <h1 className="text-4xl font-bold text-center mb-8 text-oaklore-blue">
          {currentStep.charAt(0).toUpperCase() + currentStep.slice(1)}
        </h1>
      )}
      {currentStep === 'summary' && (
        <h1 className="text-4xl font-bold text-center mb-8 text-oaklore-blue">
          Your Tasting Experience
        </h1>
      )}
      {renderStep()}
    </div>
  );
} 