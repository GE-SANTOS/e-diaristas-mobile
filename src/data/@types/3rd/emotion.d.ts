import AppTheme from 'ui/themes/app-themes'

type PaperThemeType = typeof AppTheme;

declare module '@emotion/react' {
    export interface Theme extends PaperThemeType{}
}