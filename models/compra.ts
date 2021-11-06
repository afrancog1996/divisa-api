import mongoose from 'mongoose'

const { Schema } = mongoose;

const animalitosSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },
    idUsuario: { type: Schema.Types.ObjectId },
    idAnimalito: { type: Schema.Types.ObjectId },
    dteFechaCompra: { type: Schema.Types.String },
    nmbPrecio: { type: Schema.Types.Number },
    btnActivo: { type: Schema.Types.Boolean },
    createdAt: { type: Schema.Types.String },
    updatedAt: { type: Schema.Types.String }
},
    {
        collection: 'compra_model'
    }
);

const compra_model = mongoose.model('compra_model', animalitosSchema)

export default compra_model