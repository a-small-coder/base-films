import * as Style from './index.styled'

export interface MenuItemProps {
    href: string, 
    name: string
}

const MenuItem = (props: MenuItemProps) => {


    return (

        <Style.MenuItem href={props.href}>
            {props.name}
        </Style.MenuItem>
    )
}

export default MenuItem