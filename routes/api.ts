import { Express } from 'express-serve-static-core'
import * as IndexController from '../controllers/animalito.controller'
import { validate } from "../middlewares/validators/wrapper.validator";
import { indexValidator } from "../middlewares/validators/index.validations";

const version = '/api/v1'

/**
 *
 * @param app
 */
export const api = (app: Express) => {
    app.get(`${version}/animalito/find`, IndexController.find)
    app.post(`${version}/animalito/save`, IndexController.save)
    app.put(`${version}/animalito/update`, IndexController.update)
    app.delete(`${version}/animalito/remove`, IndexController.remove)
    // app.post('/', validate(indexValidator), IndexController.indexPost)
}