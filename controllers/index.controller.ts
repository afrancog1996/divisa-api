import { Request, Response } from 'express'
import { successResponse } from '../helpers/methods'
import  animalito_model from '../models/animalitos'

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const index = async (req: Request, res: Response): Promise<void> => {
    res.send(successResponse(
        'Express JS API Boiler Plate post api working like a charm...',
        {
            data: 'here comes you payload...',
            request: req.body,
        }
    ))
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const indexPost = async (req: Request, res: Response): Promise<void> => {
    res.send(successResponse(
        'Express JS API Boiler Plate post api working like a charm...',
        {
            data: 'here comes you payload...',
            request: req.body,
        }
    ))
}

