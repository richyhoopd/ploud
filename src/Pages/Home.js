import React from 'react'
import Beneficios from '../Components/Beneficios'
import Hero from '../Components/Hero'
import Swal from 'sweetalert2';


export default function Home() {
  Swal.fire({
    title: 'Bienvenido a Ploud!',
    width: 600,
    padding: '3em',
    color: '#716add',
    text: 'Se responsable con tu tarea, disfruta :)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
  })
  return (
    <div>
    <Hero />
    <Beneficios/>
    
    
    </div>
    )
}
