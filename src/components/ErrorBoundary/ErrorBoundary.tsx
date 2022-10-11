import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary"
import { ErrorFallback } from "./ErrorFallback"

interface Props {
  reset: () => void
  children: React.ReactNode
}

export const ErrorBoundary = ({ children, reset }: Props) => (
  <ReactErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // Reset the state and cleanup the memory of the app
      reset()
    }}>
    {children}
  </ReactErrorBoundary>
)
