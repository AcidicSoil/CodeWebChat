import { CHATBOTS } from '../constants/chatbots'

export type Preset = {
  name: string
  chatbot?: keyof typeof CHATBOTS
  // Optional target URL for providers that support deep links (e.g., ChatGPT Custom)
  url?: string
  prompt_prefix?: string
  prompt_suffix?: string
  model?: string
  temperature?: number
  top_p?: number
  thinking_budget?: number
  system_instructions?: string
  options?: string[]
  port?: number
  is_selected?: boolean
  is_collapsed?: boolean
}
