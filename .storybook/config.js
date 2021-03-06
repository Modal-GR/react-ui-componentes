import { configure, addParameters, addDecorator } from '@storybook/react'
// import { withActions } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'
import theme from './theme'
import './reset.css'

addParameters({
    options: {
      theme,
    },
  })
// addDecorator(withActions)
addDecorator(withKnobs)
addDecorator(withInfo)
addDecorator(centered)

configure(require.context('../stories', true, /\.stories\.tsx$/), module)