import type { FC } from "react"
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary"
import { ErrorFallback } from "./ErrorFallback"

interface Props {
  reset: () => void
}

export const ErrorBoundary: FC<Props> = ({ children, reset }) => (
  <ReactErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // Reset the state and cleanup the memory of the app
      reset()
    }}>
    {children}
  </ReactErrorBoundary>
)
