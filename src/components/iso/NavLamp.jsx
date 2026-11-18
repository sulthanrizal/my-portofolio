import svgMarkup from './nav-lamp.html?raw'
import { useTheme } from '../../ThemeContext'
import './iso.css'
import './lamp.css'

export default function NavLamp() {
  const { theme, toggleTheme } = useTheme()
  const on = theme === 'light'

  return (
    <button
      type="button"
      className="iso nav-lamp"
      data-theme={theme}
      data-on={on ? 'true' : 'false'}
      aria-pressed={on}
      aria-label={on ? 'Switch to dark mode' : 'Switch to light mode'}
      onClick={toggleTheme}
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  )
}
