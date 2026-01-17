import Button from '@atoms/Button';
import PageIndicator from '@atoms/PageIndicator';

type IndexNavigationProps = {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function IndexNavigation({
  index,
  total,
  onPrev,
  onNext,
}: IndexNavigationProps) {
  return (
    <div className="flex justify-between items-center">
      <Button disabled={index === 0} onClick={onPrev}>
        ← 前
      </Button>

      <PageIndicator current={index + 1} total={total} />

      <Button disabled={index === total - 1} onClick={onNext}>
        次 →
      </Button>
    </div>
  );
}
