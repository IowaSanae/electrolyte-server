import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config() // Load environment variables from .env file

const connectMongodb = async () => {
  try {
    const connectionString = process.env.MONGODB_CONNECT
    if (!connectionString) {
      throw new Error('Không có đường dẫn kết nối.')
    }

    const options: any = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }

    mongoose.connect(connectionString, options)

    console.log('Kết nối tới MongoDB thành công.')
  } catch (e: any) {
    console.error('Không thể kết nối vì lỗi: ', e.message)
  }
}

export default connectMongodb
