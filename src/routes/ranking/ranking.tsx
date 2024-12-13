import { useEffect, useState } from "react";
import { BronzeMedal } from "../../components/svg/bronze-medal";
import { GoldMedal } from "../../components/svg/gold-medal";
import { SilverMedal } from "../../components/svg/silver-medal";
import { StartFillSVG } from "../../components/svg/star-fill-svg";

export function Ranking() {
  const sites = [
    {
      title: 'kochi',
      score: 2.7,
      position: 1,
    },
    {
      title: 'douala',
      score: 2.7,
      position: 2,
    },
    {
      title: 'toulouse',
      score: 2.7,
      position: 3,
    },
  ]

  const [isLoading, setIsLoading] = useState(true) ;

  // remove spinner after 1.5s
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500);
  }, [])

  return (
    <section>
      {
        // show spinner if is loading 
        isLoading ?
          (
            <section className="h-60 flex flex-col gap-4 items-center justify-center px-4 mt-2 mb-4 mx-5 bg-white rounded-lg shadow-md shadow-black/60">
              <img height={80} src="/loader.png" alt="" />
              <h3 className="flex items-center gap-2">
                Result coming soon !!
                <span className="block w-4 h-4 border-2 animate-spin rounded-full border-secondary border-t-white"></span>
              </h3>
            </section>
          )
        :
          (
            <>
              {/* show result board  */}
              <section className="h-60 relative flex flex-col gap-4 items-center justify-center px-4 mt-2 mb-4 mx-5 bg-white rounded-lg shadow-md shadow-black/60">
                <div className="absolute">
                  <img height={80} src="/result-bg.png" alt="" />
                </div>
                <section className="relative h-full w-full flex flex-col items-center justify-between py-4">
                  <div>
                    <img src="/result-header.png" alt="" />
                  </div>
                  <section className="flex flex-col font-medium gap-2">
                    <article className="h-28 gap-1 flex items-end">
                      <div>
                        <span className="capitalize">{sites[2].title}</span>
                        <div className="bg-secondary rounded-tl-3xl rounded-tr-3xl text-center pt-2 h-10 w-20">
                          <span className="text-2xl text-white font-bold">3</span>
                        </div>
                      </div>
                      <div>
                        <span className="capitalize">{sites[0].title}</span>
                        <div className="bg-secondary rounded-tl-3xl rounded-tr-3xl text-center pt-2 h-24 w-20">
                          <span className="text-2xl text-white font-bold">1</span>
                        </div>
                      </div>
                      <div>
                        <span className="capitalize">{sites[1].title}</span>
                        <div className="bg-secondary rounded-tl-3xl rounded-tr-3xl text-center pt-2 h-14 w-20">
                          <span className="text-2xl text-white font-bold">2</span>
                        </div>
                      </div>
                    </article>
                    <h3 className="flex items-center gap-2 font-semibold">
                      Congratulation !!
                    </h3>
                  </section>
                </section>
              </section>
              {/* show result list  */}
              <section>
                {
                  sites.map((item) => (
                    <div
                      key={item.title} 
                      className="h-16 flex items-center justify-between px-4 mt-2 mx-5 bg-white rounded-lg shadow-md shadow-black/60"
                    >
                      { item.position == 1 && (<GoldMedal size={40} />) }
                      { item.position == 2 && (<SilverMedal size={40} />) }
                      { item.position == 3 && (<BronzeMedal size={40} />) }
                      <div>
                        <span className="capitalize">{item.title}</span>
                        <div className="flex gap-4 items-center">
                          <span className="font-light">Score: <span className="font-medium">{item.score}/5</span></span>
                          <StartFillSVG size={20} />
                        </div>
                      </div>
                      <span className="text-secondary text-sm">Number {item.position}</span>
                    </div>
                  ))
                }
              </section>
            </>
          )
      }
    </section>
  )
}