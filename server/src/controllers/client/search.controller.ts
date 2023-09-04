import { Response } from 'express'
import { internalServerError } from '../../middleWares/handle_errors'
import SearchService from '~/services/client/search.service'

const SearchController = {
  GetAllSearch: async (req: any, res: Response) => {
    const { userid } = req.user
    try {
      const response = await SearchService.GetAllSearch(userid)
      return res.status(200).json(response)
    } catch (error) {
      return internalServerError(res)
    }
  },

  AddSearch: async (req: any, res: Response) => {
    const payload = req.body
    const { userid } = req.user
    try {
      const response = await SearchService.AddSearch(payload, userid)
      return res.status(200).json(response)
    } catch (error) {
      return internalServerError(res)
    }
  }
}

export default SearchController
