import mongoose from 'mongoose'

const { Schema } = mongoose;

const animalitosSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },
    strNombre: { type: Schema.Types.String },
    strTipoAnimal: { type: Schema.Types.String },
    nmbEdad: { type: Schema.Types.Decimal128 },
    strSexo: { type: Schema.Types.String },
    btnActivo: { type: Schema.Types.Boolean },
    createdAt: { type: Schema.Types.String },
    updatedAt: { type: Schema.Types.String }
},
    {
        collection: 'animalito_model'
    }
);

const animalito_model = mongoose.model('animalito_model', animalitosSchema)


export default animalito_model