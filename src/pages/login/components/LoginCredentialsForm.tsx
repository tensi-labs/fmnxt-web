import { Button, Form, Input } from 'antd'
import type { FormInstance } from 'antd/es/form'
import type { LoginFormValues } from '../../../types/loginPage'
import { notifySocialFeatureComingSoon } from '../utils/loginToasts'

const loginFieldClassNames = {
  input:
    '!rounded-xl !py-2.5 !text-[15px] max-md:!border-white/30 max-md:!bg-white/12 max-md:!text-white max-md:!placeholder:text-white/45 max-md:!ring-1 max-md:!ring-white/15 max-md:hover:!border-white/35 max-md:hover:!ring-white/25 max-md:focus:!border-brand-gold-light/55 max-md:focus:!ring-brand-gold/30',
  affixWrapper:
    'max-md:!rounded-xl max-md:!border-white/30 max-md:!bg-white/12 max-md:!ring-1 max-md:!ring-white/15 max-md:[&_.ant-input]:!text-white max-md:[&_.ant-input]:!placeholder:text-white/45',
} as const

type LoginCredentialsFormProps = {
  form: FormInstance<LoginFormValues>
  onFinish: (values: LoginFormValues) => void
}

export function LoginCredentialsForm({ form, onFinish }: LoginCredentialsFormProps) {
  return (
    <Form form={form} layout="vertical" className="mt-5" onFinish={onFinish} requiredMark={false} size="large">
      <Form.Item
        label={<span className="text-sm font-medium text-white/90 md:text-slate-700">Email</span>}
        name="email"
        className="mb-4"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Enter a valid email' },
        ]}
      >
        <Input placeholder="you@example.com" autoComplete="email" classNames={loginFieldClassNames} />
      </Form.Item>
      <Form.Item
        label={<span className="text-sm font-medium text-white/90 md:text-slate-700">Password</span>}
        name="password"
        className="mb-2"
        rules={[{ required: true, message: 'Please enter your password' }]}
        extra={
          <div className="flex justify-end pt-0.5">
            <button
              type="button"
              className="text-xs font-semibold text-white/95 underline decoration-white/35 underline-offset-2 transition-colors hover:text-brand-gold-light hover:decoration-brand-gold-light/50 md:text-brand-navy/80 md:no-underline md:hover:text-brand-gold-dark"
              onClick={() => notifySocialFeatureComingSoon('Password reset')}
            >
              Forgot password?
            </button>
          </div>
        }
      >
        <Input.Password placeholder="••••••••" autoComplete="current-password" classNames={loginFieldClassNames} />
      </Form.Item>
      <Form.Item className="mb-0 mt-6">
        <Button
          type="primary"
          htmlType="submit"
          block
          size="large"
          className="h-12 !rounded-xl !text-[15px] !font-semibold shadow-lg shadow-brand-navy/20 ring-1 ring-brand-gold/25 transition-[transform,box-shadow] hover:!shadow-xl hover:!shadow-brand-navy/25 active:translate-y-px"
        >
          Continue
        </Button>
      </Form.Item>
    </Form>
  )
}
