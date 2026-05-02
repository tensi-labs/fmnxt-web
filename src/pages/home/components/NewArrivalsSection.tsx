import {RightOutlined} from '@ant-design/icons';
import {Typography} from 'antd';
import {useEffect, useMemo, useState} from 'react';
import {Link} from 'react-router-dom';
import {CourseFlipCard, CourseSliderControls, useCourseCarousel} from '../../../components/shared/course';
import {newArrivalCategories, newArrivalCategoryLabels, newArrivalsSectionMeta} from '../../../const/homePageData';
import {SectionHeading} from './SectionHeading';
import type {HoverDetail} from '../../../types/types';
import type {Course} from '../../../types/course';

type Props = {
  courses: Course[];
  hoverDetails: Record<string, HoverDetail>;
  searchActive?: boolean;
  /** Match Academy template tab styling (sky accent on muted sections). */
  tabAccent?: 'brand' | 'academy';
};

export function NewArrivalsSection({courses, hoverDetails, searchActive = false, tabAccent = 'brand'}: Props) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const {scrollRef, scroll} = useCourseCarousel();

  const visibleCourses = useMemo(() => {
    if (activeCategoryId === 'all') return courses;
    return courses.filter((c) => c.category === activeCategoryId);
  }, [courses, activeCategoryId]);

  useEffect(() => {
    scrollRef.current?.scrollTo({left: 0, behavior: 'auto'});
  }, [activeCategoryId, scrollRef, visibleCourses.length]);

  const activeCategoryLabel = activeCategoryId === 'all' ? 'courses' : `${newArrivalCategoryLabels[activeCategoryId] ?? 'category'} courses`;

  return (
    <section
      id='home-new'
      className={`relative overflow-hidden rounded-2xl border p-6 shadow-sm shadow-slate-900/5 md:p-8 lg:p-10 ${
        tabAccent === 'academy' ? 'border-white/80 bg-white shadow-md' : 'border-slate-200/90 bg-white'
      }`}>
      <div className='mb-6 md:mb-8'>
        <SectionHeading
          kicker={newArrivalsSectionMeta.kicker}
          title={newArrivalsSectionMeta.title}
          description={newArrivalsSectionMeta.subtitle}
        />
      </div>

      <div className='border-b border-slate-200/90'>
        <div className='-mb-px flex gap-4 overflow-x-auto pb-0 md:gap-8 [scrollbar-width:thin]' role='tablist' aria-label='Course categories'>
          {newArrivalCategories.map(({id, label}) => {
            const selected = id === activeCategoryId;
            return (
              <button
                key={id}
                type='button'
                role='tab'
                aria-selected={selected}
                onClick={() => setActiveCategoryId(id)}
                className={`shrink-0 border-b-2 pb-3 text-sm font-semibold tracking-tight transition-colors duration-200 md:text-[0.95rem] ${
                  selected
                    ? tabAccent === 'academy'
                      ? 'border-brand-gold text-slate-900'
                      : 'border-brand-navy text-brand-navy'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}>
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div key={`${activeCategoryId}-${searchActive ? 'q' : 'all'}`} className='home-list-reveal mt-8'>
        {courses.length === 0 ? (
          <Typography.Paragraph className='!mb-0 text-slate-600'>{searchActive ? 'No new arrivals match your search.' : 'No courses to show yet.'}</Typography.Paragraph>
        ) : visibleCourses.length === 0 ? (
          <Typography.Paragraph className='!mb-0 text-slate-600'>No courses in this category{searchActive ? ' for your search' : ''}. Try another topic.</Typography.Paragraph>
        ) : (
          <>
            <div className='relative'>
              <div
                ref={scrollRef}
                className='flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 pl-0 pr-10 pt-1 [scrollbar-width:none] md:gap-5 md:pr-14 [&::-webkit-scrollbar]:hidden'>
                {visibleCourses.map((course) => (
                  <CourseFlipCard course={course} detail={hoverDetails[course.id]} />
                ))}
              </div>
            </div>
            <CourseSliderControls
              theme='indigo'
              ariaLabelLeft='Scroll newly arrived courses left'
              ariaLabelRight='Scroll newly arrived courses right'
              onPrev={() => scroll('left')}
              onNext={() => scroll('right')}
            />
          </>
        )}
      </div>

      {visibleCourses.length > 0 && (
        <div className='mt-6 border-t border-slate-100 pt-5'>
          <Link
            to='/courses'
            className={`inline-flex items-center gap-1.5 text-sm font-bold underline-offset-[3px] transition-colors hover:underline ${
              tabAccent === 'academy' ? 'text-brand-gold hover:text-brand-gold-dark' : 'text-brand-navy hover:text-brand-gold-dark'
            }`}>
            Show all {activeCategoryLabel}
            <RightOutlined className='text-xs' />
          </Link>
        </div>
      )}
    </section>
  );
}
