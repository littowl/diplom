import { ThemeComponent } from '../../config'

export const PasswordInputTheme: ThemeComponent = {
  styles: (theme) => {
    const isDark = theme.colorScheme === 'dark'
    return {
      root: { width: '100%' },
      input: {
        height: '42px',
        background: isDark ? theme.colors.darkBlack[6] : theme.colors.gray[1],
        border: `1px ${theme.colors.gray[5]} solid`,
      },
      innerInput: {
        height: '100%',
        border: 'none',
      },
    }
  },
  defaultProps: {
    icon: null,
  },
}
