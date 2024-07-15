import React from 'react'
import { IoNotificationsOutline } from "react-icons/io5";
import Circle from '../Circle';

export default function Notification() {
  return (
    <button>
      <Circle bordered component={IoNotificationsOutline} />
    </button>
  )
}
