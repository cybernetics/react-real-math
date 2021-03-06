import React from 'react'
import ReactDOMServer from 'react-dom/server'

export const computeValue = (component) => (
  parseInt(
    ReactDOMServer.renderToStaticMarkup(component)
    .match(/<.*?>(.*?)<\/.*?>/i)[1]
  )
)

export const Add = (props) => {
  const result = props.children.reduce((acc, component) => {
    return acc += computeValue(component)
  }, 0)

  return <span>{result}</span>
}

export const Subtract = (props) => (
  <span>{computeValue(props.children) - computeValue(props.by)}</span>
)

export const Multiply = (props) => (
  <span>{computeValue(props.children) * computeValue(props.by)}</span>
)

export const Divide = (props) => (
  <span>{computeValue(props.children) / computeValue(props.by)}</span>
)

export const One = () => <span>1</span>
export const Two = () => <Add><One/><One/></Add>
export const Three = () => <Add><Two/><One/></Add>
export const Four = () => <Add><Three/><One/></Add>
export const Five = () => <Add><Four/><One/></Add>
export const Six = () => <Add><Five/><One/></Add>
export const Seven = () => <Add><Six/><One/></Add>
export const Eight = () => <Add><Seven/><One/></Add>
export const Nine = () => <Add><Eight/><One/></Add>
