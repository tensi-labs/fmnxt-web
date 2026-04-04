import type { ComponentProps } from 'react'
import { Button, Typography } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { BRAND } from '../../const/branding'

type FooterProps = Pick<ComponentProps<'footer'>, 'className'>

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`mt-16 border-t border-slate-200 bg-white pb-24 md:pb-10 ${className ?? ''}`}>
      <div className="border-b border-slate-200 bg-brand-navy">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <Typography.Title level={4} className="!mb-1 !mt-0 !text-white">
              Stay connected with practical FM & CRE learning
            </Typography.Title>
            <Typography.Text className="text-slate-300">
              Browse the catalog or sign in to continue your programs.
            </Typography.Text>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/courses" className="inline-flex no-underline">
              <Button type="primary" size="large" icon={<ArrowRightOutlined />} iconPosition="end" className="rounded-full! font-semibold!">
                View courses
              </Button>
            </Link>
            <Link to="/login" className="inline-flex no-underline">
              <Button size="large" ghost className="rounded-full! border-white/40! font-semibold! text-white! hover:border-white! hover:bg-white/10! hover:text-white!">
                Sign in
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <img
            src={BRAND.logoFull}
            alt="FMNXT"
            className="mb-3 h-9 w-auto max-w-[200px] object-contain object-left"
            width={200}
            height={42}
            decoding="async"
          />
          <Typography.Paragraph className="!mb-4 !max-w-md !text-sm !text-slate-600">
            Affordable and practical learning for FM and CRE professionals.
          </Typography.Paragraph>
          <div className="flex gap-2">
            <Button shape="circle" icon={<FiLinkedin />} aria-label="LinkedIn" />
            <Button shape="circle" icon={<FiInstagram />} aria-label="Instagram" />
            <Button shape="circle" icon={<FiFacebook />} aria-label="Facebook" />
          </div>
        </div>
        <nav className="text-sm text-slate-600" aria-label="Platform links">
          <p className="font-semibold text-slate-900">Platform</p>
          <ul className="mt-2 list-none space-y-1.5 p-0">
            <li>
              <Link to="/courses" className="text-slate-600 no-underline hover:text-brand-gold-dark">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-slate-600 no-underline hover:text-brand-gold-dark">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/library" className="text-slate-600 no-underline hover:text-brand-gold-dark">
                Library
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="text-sm text-slate-600" aria-label="Company links">
          <p className="font-semibold text-slate-900">Company</p>
          <ul className="mt-2 list-none space-y-1.5 p-0">
            <li>
              <span className="text-slate-500">Contact</span>
            </li>
            <li>
              <span className="text-slate-500">Privacy</span>
            </li>
            <li>
              <span className="text-slate-500">Terms</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs font-medium tracking-wide text-brand-gold-dark">
        Learn, Transform, Lead.
      </div>
    </footer>
  )
}
