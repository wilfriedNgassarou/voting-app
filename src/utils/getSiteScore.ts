import { Site } from "../data/sites";
import { getAverage } from "./getAverage";

const getSiteScore = (site: Site) => {
  const criteriasAverage = site.criterias.map((item) => getAverage(item.notes)) ;
  const totalAverage = getAverage(criteriasAverage) ;

  return +totalAverage.toFixed(2)
}

export { getSiteScore }