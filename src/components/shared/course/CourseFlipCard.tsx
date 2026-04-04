import {StarFilled} from '@ant-design/icons';
import {Typography} from 'antd';
import type {Course} from '../../../types/course';
import type {HoverDetail} from '../../../types/types';
import {COURSE_FLIP_COVER, COURSE_FLIP_SHELL, courseLevelPillClass} from './courseFlipCardLayout';
import {CourseInfoFlipBack} from './CourseInfoFlipBack';

export type CourseFlipCardProps = {course: Course; detail: HoverDetail};

const flipEase = 'cubic-bezier(0.22, 1, 0.36, 1)';

function formatRupee(n: number) {
  return `₹${n.toLocaleString('en-IN')}`;
}

export function CourseFlipCard(props: CourseFlipCardProps) {
  const {detail} = props;

  const imageSrc = props.course.image;

  const durationLabel = `${props.course.durationHours} hrs`;

  const backDescription = props.course.description ?? detail.summary;

  const backPriceInr: number | null = props.course.priceInr;

  return (
    <div
      className={`group ${COURSE_FLIP_SHELL} w-[min(100%,268px)] min-w-[240px] max-w-[268px] shrink-0 snap-start outline-none sm:min-w-[248px] [perspective:1400px]`}
      tabIndex={0}
      aria-label={`${props.course.title}. Hover or focus for learning outcomes and cart.`}>
      <span className='sr-only'>Hover or focus this card to see learning outcomes, add to cart, or open the full course page.</span>
      <div
        className='relative h-full w-full transform-3d transition-transform duration-[580ms] motion-reduce:transition-none motion-reduce:duration-0 group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)] motion-reduce:group-hover:[transform:none]'
        style={{transitionTimingFunction: flipEase}}>
        <div className='absolute inset-0 backface-hidden [transform:rotateY(0deg)_translateZ(1px)]'>
          <div className='flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm ring-1 ring-slate-900/[0.04] transition-shadow duration-500 group-hover:shadow-md group-hover:shadow-slate-900/10 group-focus-within:shadow-md group-focus-within:shadow-slate-900/10'>
            <div className={`relative ${COURSE_FLIP_COVER} shrink-0 overflow-hidden border-b border-slate-100`}>
              <img
                src={imageSrc}
                alt=''
                className='h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] group-focus-within:scale-[1.02] motion-reduce:group-hover:scale-100 motion-reduce:group-focus-within:scale-100'
                loading='lazy'
              />
              <div className='pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent' />
            </div>

            <div className='flex min-h-0 flex-1 flex-col gap-2 px-3 py-2.5'>
              <Typography.Text className='!mt-0 !block !min-h-[2.3625rem] !text-sm !font-semibold !leading-[1.35] !tracking-tight !text-brand-navy line-clamp-2'>
                {props.course.title}
              </Typography.Text>

              {props.course.instructor || (props.course.rating != null && props.course.ratingCount != null) ? (
                <div className='flex min-w-0 flex-col gap-1 border-l-2 border-brand-gold/40 pl-2.5'>
                  {props.course.instructor ? <span className='text-[11px] font-medium leading-snug text-slate-700 line-clamp-1'>{props.course.instructor}</span> : null}
                  {props.course.rating != null && props.course.ratingCount != null ? (
                    <div className='flex flex-wrap items-center gap-1 text-[10px] text-slate-600'>
                      <span className='text-[11px] font-bold tabular-nums text-amber-600'>{props.course.rating.toFixed(1)}</span>
                      <StarFilled className='text-[10px] text-amber-500' aria-hidden />
                      <span className='text-slate-500'>
                        {props.course.ratingCount.toLocaleString('en-IN')} <span className='text-slate-400'>ratings</span>
                      </span>
                    </div>
                  ) : null}
                </div>
              ) : null}

              <div className='flex flex-wrap items-center gap-1.5 pt-2'>
                <span className='rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-medium text-slate-700 ring-1 ring-slate-200/80'>{durationLabel}</span>
                <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ring-1 ring-black/5 ${courseLevelPillClass(props.course.level)}`}>{props.course.level}</span>
                <span className='rounded-full border border-brand-gold/35 bg-brand-gold-light/35 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-gold-dark'>
                  {detail.badge}
                </span>
              </div>

              <p className='text-[11px] leading-relaxed text-slate-600 line-clamp-2'>{detail.summary}</p>

              <div className='mt-auto flex justify-end'>
                {props.course.priceInr != null ? (
                  <div className='flex flex-wrap items-baseline justify-end gap-2 leading-none'>
                    <span className='text-lg font-bold tabular-nums tracking-tight text-brand-navy'>{formatRupee(props.course.priceInr)}</span>
                    {props.course.originalPriceInr != null && props.course.originalPriceInr > props.course.priceInr ? (
                      <span className='text-sm font-medium text-slate-400 line-through tabular-nums'>{formatRupee(props.course.originalPriceInr)}</span>
                    ) : null}
                  </div>
                ) : (
                  <span className='text-xs font-medium text-slate-500'>On request</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className='absolute inset-0 h-full min-h-0 backface-hidden [transform:rotateY(180deg)_translateZ(1px)]'>
          <CourseInfoFlipBack title={props.course.title} detail={detail} courseId={props.course.id} priceInr={backPriceInr} description={backDescription} />
        </div>
      </div>
    </div>
  );
}
