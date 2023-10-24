import { ComponentProps } from 'react'
import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps
  extends ComponentProps<typeof MultiStepContainer> {
  numberOfSteps: number
  currentStep: number
}

export function MultiStep({ numberOfSteps, currentStep }: MultiStepProps) {
  const maxCurrentStep =
    currentStep < numberOfSteps ? currentStep : numberOfSteps

  return (
    <MultiStepContainer>
      <Label>
        Step {maxCurrentStep} of {numberOfSteps}
        <Steps css={{ '--number-of-steps': numberOfSteps }}>
          {Array.from({ length: numberOfSteps }, (_, i) => i + 1).map(
            (step) => (
              <Step
                key={step.toString()}
                active={step <= maxCurrentStep}
              ></Step>
            ),
          )}
        </Steps>
      </Label>
    </MultiStepContainer>
  )
}
