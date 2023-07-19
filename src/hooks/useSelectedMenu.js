import { useState, useEffect } from 'react'
const useSelectedMenu = (initial = 'home') => {
  const [selectedOption, setSelectedOption] = useState(initial)

  useEffect(() => {
    const $lis = document.querySelectorAll('li')
    $lis.forEach(($li) => {
      $li.classList.toggle('text-textSecondary', $li.id === selectedOption)
      $li.classList.toggle('text-bgPrimary', $li.id !== selectedOption)
      $li.classList.toggle('bg-bgPrimary', $li.id === selectedOption)
    })
  }, [selectedOption])

  return [selectedOption, setSelectedOption]
}

export default useSelectedMenu
