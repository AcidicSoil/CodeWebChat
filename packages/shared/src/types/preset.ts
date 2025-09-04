import { CHATBOTS } from '../constants/chatbots'

export type Preset = {
  name: string
  chatbot?: keyof typeof CHATBOTS
  // Optional deep link for ChatGPT custom pages. Example: https://chatgpt.com/g/<id>
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
