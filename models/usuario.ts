import mongoose from 'mongoose'

const { Schema } = mongoose;

const animalitosSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },
    strNombre: { type: Schema.Types.String },
    strApellidos: { type: Schema.Types.String },
    nmbEdad: { type: Schema.Types.Number },
    strCorreo: { type: Schema.Types.String },
    strDireccion: { type: Schema.Types.String },
    strTelefono: { type: Schema.Types.String },
    arrMascotas: { type: Schema.Types.Array },
    btnActivo: { type: Schema.Types.Boolean },
    createdAt: { type: Schema.Types.String },
    updatedAt: { type: Schema.Types.String }
},
    {
        collection: 'usuario_model'
    }
);

const usuario_model = mongoose.model('usuario_model', animalitosSchema)

export default usuario_model
