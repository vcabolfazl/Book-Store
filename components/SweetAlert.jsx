import React from 'react'
import Swal from 'sweetalert2'

export default function Alert({ position, icon, title }) {
 return (
  <>
   {
    Swal.fire({
     position: `${position ? position : "center"}`,
     icon: icon,
     title: title,
     showConfirmButton: false,
     timer: 1500,
    })
   }
  </>
 )
}
