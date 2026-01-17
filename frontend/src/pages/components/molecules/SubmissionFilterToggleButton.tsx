import ToggleButton from '@atoms/ToggleButton';
import MultiDisplay from '@atoms/MultiDisplay';

type SubmissionFilter = 'all' | 'success' | 'failure';

type SubmissionFilterToggleButtonProps = {
  value: SubmissionFilter;
  onClick: (value: SubmissionFilter) => void;
};

export default function SubmissionFilterToggleButton({
  value,
  onClick,
}: SubmissionFilterToggleButtonProps) {
  return (
    <MultiDisplay>
      <ToggleButton isActive={value === 'all'} onClick={() => onClick('all')}>
        All
      </ToggleButton>

      <ToggleButton
        isActive={value === 'success'}
        onClick={() => onClick('success')}
      >
        Success
      </ToggleButton>

      <ToggleButton
        isActive={value === 'failure'}
        onClick={() => onClick('failure')}
      >
        Failure
      </ToggleButton>
    </MultiDisplay>
  );
}
