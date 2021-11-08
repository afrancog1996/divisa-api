import type { ErrorRequestHandler } from "express"
import * as methods from '../helpers/methods'

/**
 *
 * @param error
 * @param req
 * @param res
 * @returns {*}
 */
const errorMiddleware: ErrorRequestHandler = (error, req, res, next): Record<string, any> => {
    return res.status(error.statusCode).send(methods.failResponse(error.message))
}

export default errorMiddleware
