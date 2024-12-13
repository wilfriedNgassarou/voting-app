import { useState } from "react"
import { StartFillSVG } from "../../components/svg/star-fill-svg"
import { StarSVG } from "../../components/svg/star-svg"

type Site = {index: number, title: string, score: number, position: number}

export function Root() {
  // All sites of icam 
  const sites = [
    {
      index: 0,
      title: 'kochi',
      score: 0,
      position: 1,
    },
    {
      index: 1,
      title: 'douala',
      score: 2.2,
      position: 2,
    },
    {
      index: 2,
      title: 'toulouse',
      score: 3.5,
      position: 3,
    },
  ]

  // Selected site: default to the first
  const [selectedSite, setSelectedSite] = useState<Site | null>(sites[0])

  // Distance between star and center of hero image 
  const DISTANCE = 80 ;
  // All the stars around the hero image and its translateValue(x, y)
  const stars = [
    {
      index: 1,
      xValue: Math.cos(Math.PI) *  DISTANCE,
      yValue: Math.sin(Math.PI) *  DISTANCE ,  
    },
    {
      index: 2,
      xValue: Math.cos((5/4) * Math.PI) *  DISTANCE,
      yValue: Math.sin((5/4) * Math.PI) *  DISTANCE ,  
    },
    {
      index: 3,
      xValue: Math.cos((3/2) * Math.PI) *  DISTANCE,
      yValue: Math.sin((3/2) * Math.PI) *  DISTANCE ,  
    },
    {
      index: 4,
      xValue: Math.cos((7/4) * Math.PI) *  DISTANCE,
      yValue: Math.sin((7/4) * Math.PI) *  DISTANCE ,  
    },
    {
      index: 5,
      xValue: Math.cos(2 * Math.PI) *  DISTANCE,
      yValue: Math.sin(2 * Math.PI) *  DISTANCE ,  
    },
  ]
  
  // All the criterais to make a vote, you can add or delete 
  const [criterias, setCriterias] = useState(
    [
      {
        index: 0,
        title: 'criteria 1',
        note: 0,
      },
      {
        index: 1,
        title: 'criteria 2',
        note: 0,
      },
      {
        index: 2,
        title: 'criteria 3',
        note: 0,
      },
      {
        index: 3,
        title: 'criteria 4',
        note: 0,
      },
      {
        index: 4,
        title: 'criteria 5',
        note: 0,
      }
    ]
  )

  // update a stars number of a criteria 
  const updateCriteria = (index: number, note: number) => {
    setCriterias(
      criterias.map((item) => {
        if(item.index == index) {
          return {
            index,
            note,
            title: item.title
          }
        }

        return item
      })
    )
  }

  const handleReset = () => {
    const items = criterias.map((item) => ({...item, note: 0}))

    setCriterias(items)
  }

  return (
    <section>
      <section className="bg-white h-24 flex flex-col justify-center gap-2 px-5">
        <h1>Sites icam:</h1>
        {/* List of sites, bg-blue for the active one  */}
        <section className="flex items-center justify-between">
          {
            sites.map((item) => (
              <span
                key={item.index}
                onClick={() => setSelectedSite(item)}
                className={`
                  border rounded capitalize border-black flex h-10 px-5 items-center justify-center cursor-pointer
                  ${selectedSite!.index == item.index ? 'bg-secondary text-white border-secondary' : 'text-black'} duration-100 
                `}
              >
                {item.title}
              </span>
            ))
          }
        </section>
      </section>
      {/* stats of the active site, hidden if selected site is null  */}
      {
        selectedSite != null && (
          <section className="h-60 px-4 my-4 mx-5 py-4 flex flex-col justify-between bg-white rounded-lg shadow-md shadow-black/60">
            <h2>Average: <span>{selectedSite.score}/5</span></h2>
            <div className="flex w-full justify-center">
              <div className="relative flex justify-center items-center">
                <img src="/hero.png" height={100} alt="" />

                {
                  stars.map((item) => (
                    <span 
                      key={item.index}
                      style={{ transform: `translate(${item.xValue}px, ${item.yValue}px)` }}
                      className=" absolute"
                    >
                      {
                        Math.ceil(selectedSite.score) >= item.index ? <StartFillSVG size={24} /> : <StarSVG size={24} />
                      }
                    </span>
                  ))
                }
              </div>
            </div>
            <h3 className="text-center">You can be cooler !!</h3>
          </section>
        )
      }
      <section className="py-2 px-4 mb-4 mx-5 bg-white rounded-lg shadow-md shadow-black/60">
        <h2>Criterias</h2>
        {/* list of criterias */}
        <section className="my-2 flex text-sm flex-col gap-2">
          {
            criterias.map((item) => (
              <div key={item.title}>
                <h4 className="capitalize">{item.title}:</h4>
                <div className="flex justify-center gap-4">
                  <span onClick={() => updateCriteria(item.index, item.note == 1 ? 0 : 1)}>
                    { item.note > 0 ? <StartFillSVG size={24} /> : <StarSVG size={24} /> }
                  </span>
                  <span onClick={() => updateCriteria(item.index, 2)}>
                    { item.note > 1 ? <StartFillSVG size={24} /> : <StarSVG size={24} /> }
                  </span>
                  <span onClick={() => updateCriteria(item.index, 3)}>
                    { item.note > 2 ? <StartFillSVG size={24} /> : <StarSVG size={24} /> }
                  </span>
                  <span onClick={() => updateCriteria(item.index, 4)}>
                    { item.note > 3 ? <StartFillSVG size={24} /> : <StarSVG size={24} /> }
                  </span>
                  <span onClick={() => updateCriteria(item.index, 5)}>
                    { item.note > 4 ? <StartFillSVG size={24} /> : <StarSVG size={24} /> }
                  </span>
                </div>
              </div>
            ))
          }
        </section>
        {/* buttons  */}
        <section className="flex justify-between mt-6 mb-2 text-sm">
          <button
            onClick={handleReset} 
            className="h-10 w-24 relative group flex items-center overflow-hidden justify-center border border-black rounded-md"
          >
            <span className="absolute inset-0 bg-black duration-150 origin-left scale-x-0 group-hover:scale-x-100"></span>
            <span className="relative group-hover:text-white text-black duration-150">Reset</span>
          </button>
          <button className="h-10 w-24 flex items-center justify-center bg-secondary/85 duration-150 hover:bg-secondary text-white rounded-md">
            <span>Next</span>
          </button>
        </section>
      </section>
    </section>
  )
}