import { withAuthenticationRequired } from '@auth0/auth0-react'
import { Route } from 'react-router-dom'

export default function ProtectedRoute({ component, ...props }) {
  return <Route component={withAuthenticationRequired(component)} {...props} />
}
