import { Request, Response } from 'express'
import { internalServerError } from '../../middleWares/handle_errors'
import CommentService from '../../services/admin/comment.service'

const CommentController = {
    GetAllComment: async (req: any, res: Response) => {
        try {
            const { shopid } = req.shop
            const query = req.query
            CommentService.GetAllComment({ shopid, ...query }).then((response: any) => {
                res.status(200).json(response)
            })
        } catch (error) {
            internalServerError(res)
        }
    },

    GetCommentId: async (req: Request, res: Response) => {
        try {
            const response: any = CommentService.GetCommentId()
            return res.status(200).json(response)
        } catch (error) {
            internalServerError(res)
        }
    },

    AddComment: async (req: Request, res: Response) => {
        try {
            const response: any = CommentService.AddComment
            return res.status(200).json(response)
        } catch (error) {
            internalServerError(res)
        }
    },

    UpdateComment: async (req: Request, res: Response) => {
        try {
            const response: any = CommentService.UpdateComment
            return res.status(200).json(response)
        } catch (error) {
            internalServerError(res)
        }
    },

    DeleteComment: async (req: Request, res: Response) => {
        try {
            const response: any = CommentService.DeleteComment
            return res.status(200).json(response)
        } catch (error) {
            internalServerError(res)
        }
    }
}

export default CommentController