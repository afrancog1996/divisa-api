import mongoose from 'mongoose'

const { Schema } = mongoose;

const animalitosSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },
    strNombre: { type: Schema.Types.String },
    strDireccion: { type: Schema.Types.String },
    strTelefono: { type: Schema.Types.String },
    strUrlWeb: { type: Schema.Types.String },
    arrAnimalitosDisponibles: { type: Schema.Types.Array },
    aJsnCompra: { type: Schema.Types.Array },
    btnActivo: { type: Schema.Types.Boolean },
    createdAt: { type: Schema.Types.String },
    updatedAt: { type: Schema.Types.String }
},
    {
        collection: 'tienda_model'
    }
);

const tienda_model = mongoose.model('tienda_model', animalitosSchema)

export default tienda_model
