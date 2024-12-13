import { Dispatch, SetStateAction } from "react";

interface Props {
  criterias: { index: number, title: string, note: number }[]
  setCriterias: Dispatch<SetStateAction<{ index: number, title: string, note: number }[]>>,
  setShowSubmitModal: Dispatch<SetStateAction<boolean>>
  setDisplaySubmitModalInDom: Dispatch<SetStateAction<boolean>>
}

export function ButtonsContainer({ criterias, setCriterias, setDisplaySubmitModalInDom, setShowSubmitModal }: Props) {
  const handleReset = () => {
    const items = criterias.map((item) => ({...item, note: 0}))

    setCriterias(items)
  }

  return (
    <section className="flex justify-between font-light mt-6 mb-2 text-sm">
      <button
        onClick={handleReset} 
        className="h-10 w-24 relative group flex items-center overflow-hidden justify-center border border-black rounded-md"
      >
        <span className="absolute inset-0 bg-black duration-150 origin-left scale-x-0 group-hover:scale-x-100"></span>
        <span className="relative group-hover:text-white text-black duration-150">Reset</span>
      </button>
      <button
        onClick={() => {
          // all criterias should have less one stars
          const permission = criterias.reduce((a, b) => b.note != 0, false )

          if(!permission) return alert('Please select one or many star') ;

          setShowSubmitModal(true)
          setDisplaySubmitModalInDom(true)
        }} 
        className="h-10 w-24 flex items-center justify-center bg-secondary/85 duration-150 hover:bg-secondary text-white rounded-md"
      >
        <span>Next</span>
      </button>
    </section>
  )
}