import sql from 'mssql'
import { sqlConfig } from './sql/config.js'

sql.on('error', err => {
    console.error(err);
})

sql.connect(sqlConfig).then(pool => {
    return pool.request()
    .input('placa', sql.Char(7), 'abd9144')
    .input('nome', sql.VarChar(50), 'fusca')
    .input('descricao', sql.VarChar(200),  'carro antigo')
    .input('fabricacao', sql.Date, '1978-01-04')
    .input('preco', sql.Numeric, 3000)
    .execute('SP_I_VEI_VEICULO')
}).then(result => {
    console.log(result)
}).catch(err => {
    console.log(err.message)
})