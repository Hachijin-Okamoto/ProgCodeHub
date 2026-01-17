import ToggleButton from '@atoms/ToggleButton';
import MultiDisplay from '@atoms/MultiDisplay';
import { type ApiMode } from '../../../services/api';

type ApiModeToggleButtonProps = {
  value: ApiMode;
  onClick: (value: ApiMode) => void;
};

export default function ApiModeToggleButton({
  value,
  onClick,
}: ApiModeToggleButtonProps) {
  return (
    <MultiDisplay>
      <ToggleButton isActive={value === 'rest'} onClick={() => onClick('rest')}>
        REST
      </ToggleButton>

      <ToggleButton
        isActive={value === 'graphql'}
        onClick={() => onClick('graphql')}
      >
        GraphQL
      </ToggleButton>
    </MultiDisplay>
  );
}
