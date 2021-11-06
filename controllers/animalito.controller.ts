import { Request, response, Response } from 'express'
import { successResponse, failResponse } from '../helpers/methods'
import animalito_model from '../models/animalitos'

interface AnimalitoI {
    _id: string;
    strNombre: string;
    strTipoAnimal: string;
    nmbEdad: number;
    strSexo: string;
    btnActivo: boolean;
    createdAt: string;
    updatedAt: string;
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
    await animalito_model.findById(req.body._id).then(
        (respose) => {
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
    ).catch((err) => {
        res.send(
            failResponse(
                'Error to read collection', {
                data: 'collection error',
                request: err
            }
            )
        )
    })
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
        let response =  await animalito_model.create(body).catch((err) => {
            res.send(
                failResponse(
                    'Error to create document', {
                    data: 'error in catch',
                    request: err
                }
                )
            )
        });

        if(response){
            res.send(
                successResponse(
                    `Animalido was saved`, {
                    data: 'save document',
                    request: body
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
    animalito_model.findByIdAndUpdate(req.body._id, req.body.update, { new: false }).then(
        (document: AnimalitoI) => {
            if (document) {
                res.send(
                    successResponse(
                        `Animalido ${req.body.id}`, {
                        data: 'update document',
                        request: document
                    }
                    )
                )
            }
        }
    ).catch((err) => {
        res.send(
            failResponse(
                `Animalido ${req.body.id}`, {
                data: 'document was not updated',
                request: err
            }
            )
        )
    });
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const remove = async (req: Request, res: Response): Promise<void> => {
    animalito_model.remove(req.body._id).then(
        (response) => {
            if (response) {
                res.send(
                    successResponse(
                        `Animalido ${req.body.id}`, {
                        data: 'document was removed',
                        request: document
                    }
                    )
                )
            }
        }
    ).catch((err) => {
        res.send(
            failResponse(
                `Animalido ${req.body.id}`, {
                data: 'document was not removed',
                request: err
            }
            )
        )
    })
}
