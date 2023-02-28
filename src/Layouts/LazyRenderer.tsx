import * as React from 'react'
import Loader from 'Components/atoms/Loaders/Loader'

export const LazyRenderer = ({
  isLoading,
  skeletonPlaceholder,
  children
}: {
  isLoading: boolean
  skeletonPlaceholder?: JSX.Element
  children: JSX.Element
}) => {
  return isLoading ? skeletonPlaceholder || <Loader /> : children
}
