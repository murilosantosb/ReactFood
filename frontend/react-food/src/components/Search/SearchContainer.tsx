import Image from 'next/image'

// Styles
import { SearchContainerComponent } from './Search.styles'
import Search from './Search'

const SearchContainer = () => {
  return (
  <>
    <SearchContainerComponent>
        <div className='search'>
            <h1>Está com fome?</h1>
            <p>Com apenas alguns cliques, encontre refeições acessíveis perto de você.</p>
            <span className='search-container'>
                <Search variant='primary'/>
            </span>
        </div>
        <div className='search-image'>
          <Image 
            src="./search-image.png"
            alt='Search image'
            width={600}
            height={420}
          />
        </div>
    </SearchContainerComponent>
    <div className='search-mobile'>
      <Search variant='primary'/>
    </div>
  </>
  )
}

export default SearchContainer