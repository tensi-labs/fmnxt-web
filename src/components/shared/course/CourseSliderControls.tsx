import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import {Button, Typography} from 'antd';

type Theme = 'emerald' | 'indigo';

const laneClass: Record<Theme, string> = {
  emerald:
    'inline-flex items-center gap-2 rounded-full bg-linear-to-r from-brand-navy via-brand-gold to-brand-gold-dark px-3 py-1.5 text-white shadow-sm',
  indigo:
    'inline-flex items-center gap-2 rounded-full bg-linear-to-r from-brand-navy via-brand-gold to-brand-gold-dark px-3 py-1.5 text-white shadow-sm'
};

const prevBtnClass: Record<Theme, string> = {
  emerald: 'rounded-full border-slate-200 bg-white text-brand-navy',
  indigo: 'rounded-full border-slate-200 bg-white text-brand-navy'
};

type Props = {
  theme: Theme;
  ariaLabelLeft: string;
  ariaLabelRight: string;
  onPrev: () => void;
  onNext: () => void;
};

export function CourseSliderControls({theme, ariaLabelLeft, ariaLabelRight, onPrev, onNext}: Props) {
  return (
    <div className="mt-4 flex items-center justify-center gap-2 sm:gap-3">
      <Button
        size="large"
        className={prevBtnClass[theme]}
        shape="circle"
        icon={<LeftOutlined />}
        aria-label={ariaLabelLeft}
        onClick={onPrev}
      />
      <div className={laneClass[theme]}>
        <Typography.Text className="text-xs! font-medium text-white!">Scroll</Typography.Text>
        <span className="h-1.5 w-1.5 rounded-full bg-white/70" aria-hidden />
        <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden />
        <span className="h-1.5 w-1.5 rounded-full bg-white/70" aria-hidden />
      </div>
      <Button
        size="large"
        type="primary"
        className="rounded-full"
        shape="circle"
        icon={<RightOutlined />}
        aria-label={ariaLabelRight}
        onClick={onNext}
      />
    </div>
  );
}
