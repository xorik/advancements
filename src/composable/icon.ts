import { libraries } from '../data/icons'
import { Sprite } from '../interface/icon'

interface IconProps {
  item: string
  collection: Sprite
}

function useIcon(props: IconProps) {
  const collection = libraries[props.collection]

  const index = (collection.positions[props.item] ?? collection.fallbackPosition) - 1
  const colCount = collection.width / collection.size

  const xOffset = (index % colCount) * collection.size
  const yOffset = Math.floor(index / colCount) * collection.size

  const imgStyle = {
    width: collection.size + 'px',
    height: collection.size + 'px',
    background: `url(${collection.url})`,
    backgroundPosition: `-${xOffset}px -${yOffset}px`,
  }

  const wrapStyle = {
    scale: collection.zoom,
    width: collection.size * collection.zoom + 'px',
    height: collection.size * collection.zoom + 'px',
    transformOrigin: '0 0',
  }

  return {
    collection,
    imgStyle,
    wrapStyle,
  }
}

export { useIcon }
export type { IconProps }
