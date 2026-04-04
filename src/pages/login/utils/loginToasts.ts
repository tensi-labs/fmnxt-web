import { message } from 'antd'

export function notifySocialFeatureComingSoon(providerLabel: string) {
  void message.info({
    content: `${providerLabel} — coming soon.`,
    duration: 2.5,
  })
}

export function notifyDemoLoginSuccess(email: string) {
  void message.success({
    content: `Continuing as ${email} (demo only — wire your auth next).`,
    duration: 3,
  })
}
