import React from 'react'
import { Link } from 'react-router-dom'
import { StyledHome } from './style'

function Home() {
  return (
    <StyledHome>
        <div className='homeContainer'>
            <div className='upperDiv'>
                <Link className='homeRedirect' to={'/login'}>Logar</Link>
                <Link className='homeRedirect' to={'/register'}>Cadastrar</Link>
            </div>
            <div className='lowerDiv'>
                <Link className='homeRedirect' to={'/dashboard'}>Ver Imóveis</Link>
            </div>
        </div>
    </StyledHome>
  )
}

export default Home