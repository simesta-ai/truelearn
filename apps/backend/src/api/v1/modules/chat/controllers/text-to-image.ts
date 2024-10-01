import AIGenerator from '@/libs/utils/services/aigenerator'
import { RequestHandler } from 'express'

const aiGenerator = new AIGenerator()

const textToImage: RequestHandler = async (req, res, next) => {
  try {
    const { text } = req.body
    const url = await aiGenerator.generateImageFromText(text as string)
    res.status(200).json({
      message: 'Successfully generated image',
      success: true,
      data: {
        imgUrl: url,
      },
    })
  } catch (err) {
    next(err)
  }
}
export default textToImage
