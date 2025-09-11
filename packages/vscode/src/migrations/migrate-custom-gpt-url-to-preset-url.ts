import * as vscode from 'vscode'
import { Logger } from '@shared/utils/logger'
import { ConfigPresetFormat } from '@/view/backend/utils/preset-format-converters'

const MIGRATION_ID = 'custom-gpt-url-to-preset-url-20250919'

const PRESET_CONFIG_KEYS = [
  'codeWebChat.chatPresetsForAskAboutContext',
  'codeWebChat.chatPresetsForEditContext',
  'codeWebChat.chatPresetsForCodeAtCursor',
  'codeWebChat.chatPresetsForNoContext'
]

export async function migrate_custom_gpt_url_to_preset_url(
  context: vscode.ExtensionContext
): Promise<void> {
  try {
    if (process.env.CWC_DISABLE_PRESET_URL === '1') {
      return
    }
    if (context.globalState.get(MIGRATION_ID)) {
      return
    }

    const config = vscode.workspace.getConfiguration()
    const custom_url = config.get<string>('codeWebChat.customGptUrl')
    if (!custom_url) {
      await context.globalState.update(MIGRATION_ID, true)
      return
    }

    let migrated = false
    for (const key of PRESET_CONFIG_KEYS) {
      const inspect = config.inspect<ConfigPresetFormat[]>(key)
      if (inspect?.globalValue) {
        const new_presets = inspect.globalValue.map((preset) => {
          if (
            preset.chatbot === 'ChatGPT Custom' &&
            !preset.url
          ) {
            return { ...preset, url: custom_url }
          }
          return preset
        })
        const changed = JSON.stringify(new_presets) !== JSON.stringify(inspect.globalValue)
        if (changed) {
          await config.update(
            key,
            new_presets,
            vscode.ConfigurationTarget.Global
          )
          migrated = true
        }
      }
    }

    if (migrated) {
      Logger.log({
        function_name: 'migrate_custom_gpt_url_to_preset_url',
        message: '[cwc:preset:url] migrated legacy customGptUrl to preset.url'
      })
    }

    await context.globalState.update(MIGRATION_ID, true)
  } catch (error) {
    Logger.error({
      function_name: 'migrate_custom_gpt_url_to_preset_url',
      message: 'Error migrating customGptUrl to preset.url',
      data: error instanceof Error ? error.message : String(error)
    })
  }
}

