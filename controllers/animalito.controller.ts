import { Request, response, Response } from 'express'
import { AnyArray } from 'mongoose'
import { successResponse, failResponse } from '../helpers/methods'
import animalito_model from '../models/animalitos'

interface AnimalitoI {
    strNombre: string;
    strTipoAnimal: string;
    nmbEdad: number;
    strSexo: string;
    btnActivo: boolean;
    createdAt: string;
    updatedAt: string;
}

interface ID {
    _id: string
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const find = async (req: Request, res: Response): Promise<void> => {
    await animalito_model.find().then(
        (response) => {
            if (response) {
                res.send(
                    successResponse(
                        'Collection animalitos success', {
                        data: 'find all documents',
                        request: response
                    }
                    )
                )
            }
        }
    ).catch(
        (err) => {
            res.send(
                failResponse(
                    'Error to read collection', {
                    data: 'collection error',
                    request: err
                }
                )
            )
        }
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const findByOne = async (req: Request, res: Response): Promise<void> => {

    try {

        const _id: ID = req.body._id

        const response = await animalito_model.findById(_id).exec()

        if (response) {
            res.send(
                successResponse(
                    'Collection animalitos success', {
                    data: 'find all documents',
                    request: response
                }
                )
            )
        }

    } catch (error: any) {
        res.send(
            failResponse(
                'Error to read collection', {
                data: 'collection error',
                request: error
            }
            )
        )
    }

}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const save = async (req: Request, res: Response): Promise<void> => {
    const body: AnimalitoI = req.body;
    if (body) {

        try {

            let response = await animalito_model.create(body)

            res.send(
                successResponse(
                    `Animalido save`, {
                    data: 'create document',
                    request: response
                }
                )
            )


        } catch (error) {
            res.send(
                failResponse(
                    `Animalido create`, {
                    data: 'document was not created',
                    request: error
                }
                )
            )
        }


    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const update = async (req: Request, res: Response): Promise<void> => {


    try {

        const _id: ID = req.body._id
        const toUpdate: AnimalitoI = req.body.toUpdate

        const response = await animalito_model.findByIdAndUpdate(_id, toUpdate, { new: false })

        res.send(
            successResponse(
                `Animalido ${response._id}`, {
                data: 'update document',
                request: true
            }
            )
        )


    } catch (error: any) {
        res.send(
            failResponse(
                `Animalido ${req.body.id}`, {
                data: 'document was not updated',
                request: error
            }
            )
        )
    }





}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const remove = async (req: Request, res: Response): Promise<void> => {

    try {

        const _id: ID = req.body._id
        const toRemove: AnimalitoI = req.body.toRemove

        const response = await animalito_model.remove({ _id, toRemove }).exec()

        console.log(response)

        if (response) {

            res.send(
                successResponse(
                    `Animalido ${_id}`, {
                    data: 'document was removed',
                    request: response
                }
                )
            )

        }


    } catch (error: any) {
        console.log(error)
        res.send(
            failResponse(
                'catch', {
                data: 'document was not removed',
                request: JSON.stringify(error)
            }
            )
        )
    }

}
