import {CheckOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import {Button, message} from 'antd';
import {Link} from 'react-router-dom';
import {useCart} from '../../../context/CartContext';
import type {HoverDetail} from '../../../types/types';
import { BRAND } from '../../../const/branding';
import {courseCardBtnSecondary, courseCardCartIconBtn} from './courseFlipCardLayout';

const panelClass =
  'relative flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-slate-200/55 bg-linear-to-br from-slate-100 via-white via-40% to-brand-gold-light/25 px-2 pb-2 pt-2 text-left shadow-[inset_0_1px_0_0_rgba(255,255,255,0.92),inset_0_2px_0_0_rgba(6,182,212,0.12)] ring-1 ring-brand-gold/15';

type Props = {
  title: string;
  detail: HoverDetail;
  courseId: string;
  priceInr: number | null;
  description: string;
};

export function CourseInfoFlipBack({title, detail, courseId, priceInr, description}: Props) {
  const {addToCart} = useCart();

  const handleAddToCart = () => {
    if (priceInr == null) return;
    addToCart({courseId, title, priceInr});
    void message.success({content: 'Added to cart', duration: 2});
  };

  return (
    <div className={panelClass}>
      <h3 className='min-h-[2.3625rem] shrink-0 wrap-break-word text-sm font-semibold leading-[1.35] tracking-tight text-brand-navy line-clamp-2'>{title}</h3>

      <div className='mt-1.5 shrink-0 border-t border-brand-gold/20 pt-1.5'>
        <p className='text-[10px] font-semibold uppercase tracking-wide text-brand-gold-dark/90'>Description</p>
        <p className='mt-1 text-xs leading-relaxed text-slate-700'>{description}</p>
      </div>

      <div className='mt-1.5 flex min-h-0 flex-1 flex-col border-t border-brand-gold/15 pt-1.5'>
        <p className='shrink-0 text-[10px] font-semibold uppercase tracking-wide text-brand-gold-dark/90'>Learning outcomes</p>
        <ul className='mt-1 min-h-0 flex-1 space-y-1 overflow-hidden'>
          {detail.bullets.map((item) => (
            <li key={item} className='flex gap-1.5 text-xs leading-snug text-slate-700'>
              <span className='mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 text-[9px] text-brand-gold-dark' aria-hidden>
                <CheckOutlined />
              </span>
              <span className='min-w-0'>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='mt-auto flex shrink-0 items-center gap-1.5 border-t border-brand-gold/25 pt-1.5'>
        <Button
          className={courseCardCartIconBtn}
          disabled={priceInr == null}
          aria-label='Add to cart'
          style={{ backgroundColor: BRAND.gold }}
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart();
          }}>
          <ShoppingCartOutlined className='ml-1 text-[20px] text-white! transition-colors' aria-hidden />{' '}
        </Button>
        <Link to={`/courses/${courseId}`} className={courseCardBtnSecondary} onClick={(e) => e.stopPropagation()}>
          View details
        </Link>
      </div>
    </div>
  );
}
