import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(process.env.DB_NAME!, process.env.DB_USERNAME!, process.env.DB_PASSWORD!, {
  host: process.env.DB_HOST!,
  dialect: 'mysql',
  port: parseInt(process.env.DB_PORT!),
  logging: true,
  pool: {
    max: 30,
    min: 0,
    acquire: 600000,
    idle: 5000
  }
})

const connectDb = async () => {
  try {
    await sequelize.authenticate()
    console.log('Kết nối tới database thành công.')
  } catch (error) {
    console.error('Không thể kết nối tới database: ', error)
  }
}

export default connectDb
