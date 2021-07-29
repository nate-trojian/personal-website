import React from 'react'
import { Menu, MenuItem } from "semantic-ui-react"

const Header = () => {
    return (
        <Menu fixed="top" pointing secondary compact stackable>
            <MenuItem active name="home"/>
        </Menu>
    )
}
export default Header