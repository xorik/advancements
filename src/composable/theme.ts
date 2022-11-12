import { useLocalStorage } from '@vueuse/core'
import { watch } from 'vue'

const enum Theme {
  Auto = 'auto',
  Dark = 'dark',
  Light = 'light',
}

function useTheme() {
  const theme = useLocalStorage<Theme>('theme', Theme.Auto)

  watch(
    theme,
    () => {
      if (theme.value === Theme.Auto) {
        document.documentElement.removeAttribute('data-theme')
      } else {
        document.documentElement.setAttribute('data-theme', theme.value)
      }
    },
    { immediate: true },
  )

  function switchTheme() {
    if (theme.value === Theme.Auto) {
      theme.value = Theme.Dark
    } else if (theme.value === Theme.Dark) {
      theme.value = Theme.Light
    } else {
      theme.value = Theme.Auto
    }
  }

  return {
    theme,
    switchTheme,
  }
}

export { useTheme }
