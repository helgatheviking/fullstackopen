import React from 'react'

const ListItem = ({
	item,
	selectListItem
}) => {
	return (
	  <li>{item.name}<button value={item.name} onClick={selectListItem}>Show</button></li>
	)
}

export default ListItem
