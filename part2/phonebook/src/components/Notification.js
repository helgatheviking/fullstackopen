import React from 'react'

const Notification = ({ message, type }) => {

	if (message === null) {
	  return null
	}

	type = type || 'notice';

	return (
	  <div className={"notification " + type}>
		{message}
	  </div>
	)
  }

export default Notification
