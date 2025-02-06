'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import WelcomeStep from '@/components/tasting-steps/WelcomeStep';
import ColorStep from '@/components/tasting-steps/ColorStep';
import NoseStep from '@/components/tasting-steps/NoseStep';
import TasteStep from '@/components/tasting-steps/TasteStep';
import FinishStep from '@/components/tasting-steps/FinishStep';
import { buffaloTraceTasting } from '@/data/tastings/buffaloTrace';

export default function BuffaloTraceTastingExperience() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const router = useRouter();
  const steps = buffaloTraceTasting.steps;
  const currentStep = steps[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex === steps.length - 1) {
      router.push('/buffalo-trace');
    } else {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep.id) {
      case 'about':
        return (
          <WelcomeStep
            title={currentStep.title}
            description={currentStep.description}
            onNext={handleNext}
          />
        );
      case 'color':
        return (
          <ColorStep
            title={currentStep.title}
            description={currentStep.description}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 'nose':
        return (
          <NoseStep
            title={currentStep.title}
            description={currentStep.description}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 'taste':
        return (
          <TasteStep
            title={currentStep.title}
            description={currentStep.description}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 'finish':
        return (
          <FinishStep
            title={currentStep.title}
            description={currentStep.description}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        {buffaloTraceTasting.name} Tasting Experience
      </h1>
      {renderStep()}
    </div>
  );
} 