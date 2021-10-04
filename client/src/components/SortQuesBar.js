import tw from 'twin.macro' // eslint-disable-line no-unused-vars
import { VButton as Button, VButtonGroup as ButtonGroup } from './CompStore'

const SortQuesBar = ({ sortBy, setSortBy }) => {

  const handleSortChange = e => {
    setSortBy(e.target.innerText.toUpperCase())
  }

  return (
    <div tw="flex justify-end my-4">
      <ButtonGroup
      >
        <Button
          variant={sortBy === 'HOT' ? 'contained' : 'outlined'}
          onClick={handleSortChange}
        >
          Hot
        </Button>
        <Button
          variant={sortBy === 'VOTES' ? 'contained' : 'outlined'}
          onClick={handleSortChange}
        >
          Votes
        </Button>
        <Button
          variant={sortBy === 'VIEWS' ? 'contained' : 'outlined'}
          onClick={handleSortChange}
        >
          Views
        </Button>
        <Button
          variant={sortBy === 'NEWEST' ? 'contained' : 'outlined'}
          onClick={handleSortChange}
        >
          Newest
        </Button>
        <Button
          variant={sortBy === 'OLDEST' ? 'contained' : 'outlined'}
          onClick={handleSortChange}
        >
          Oldest
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default SortQuesBar
