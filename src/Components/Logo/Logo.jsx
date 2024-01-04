import React from 'react'
import LogoImg from '../../Assets/movix-logo.svg'

const Logo = () => {
    const style = {
        height: "40px"
    }

    return (
        <>

            <img src={LogoImg} style={style} alt="logoImage" />

        </>
    )
}

export default Logo
