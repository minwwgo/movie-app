import React from 'react'
import { Searchbox } from './Searchbox'

export const SectionContent:React.FC = () => {
  return (
    
      <section className="border-gray-900 border-solid border-2 mb-4">
        <div className="max-w-7xl mx-auto p-4 ">
          <div className="grid grid-cols-2 items-center ">
            <p className="text-4xl">Sav State</p>
            <Searchbox />
          </div>
        </div>
      </section>
  )
}
