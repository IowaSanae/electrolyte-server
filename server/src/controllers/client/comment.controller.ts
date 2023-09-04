import CommentService from '../../services/client/comment.service'
import { internalServerError } from '../../middleWares/handle_errors'
import { Request, Response } from 'express'
const CommentController = {
  GetAllComment: async (req: Request, res: Response) => {
    try {
      const query = req.query
      CommentService.GetAllComment({ ...query }).then((response: any) => {
        res.status(200).json(response)
      })
    } catch (error) {
      internalServerError(res)
    }
  },

  CreateComment: async (req: any, res: Response) => {
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: 'No files uploaded' })
      }
      const { userid } = req.user
      const payload = req.body
      const filesdata = req.files
      CommentService.CreateComment(userid, payload, filesdata).then((response: any) => {
        res.status(200).json(response)
      })
    } catch (error) {
      return internalServerError(res)
    }
  }
}

export default CommentController
