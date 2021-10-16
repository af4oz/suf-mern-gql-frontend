import { useStateContext } from '../context/state'

import { Alert, Snackbar } from './CompStore.js'

const ToastNotification = () => {
  const { notification, clearNotif } = useStateContext()

  if (!notification?.message) {
    return null
  }

  const { message, severity } = notification

  return (
    <Snackbar
      open={!!notification}
      onClose={() => clearNotif()}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={() => clearNotif()} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default ToastNotification