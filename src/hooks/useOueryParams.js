import { useLocation} from "react-router-dom"
export const useOueryParams = () => {
    return new URLSearchParams(useLocation().search)
}