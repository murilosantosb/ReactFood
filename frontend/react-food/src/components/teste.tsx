import React from 'react'
import Image from 'next/image'

interface CategoryProps {
    id: number
    name: string
    image_url: string
}

const Teste = async () => {
    const url = "http://127.0.0.1:8000/category"
    const request = await fetch(url)
    const data: CategoryProps[] = await request.json()
    let path = "/backend/app/"

  return (
    <div>
        {data.map((categories) => (
            <span key={categories.id}>
                <Image 
                    src={`${path}${categories.image_url}`}
                    alt='Categorias'
                />
                <strong>{categories.name}</strong>
            </span>
        ))}
    </div>
  )
}

export default Teste