/*
 * @file controllers/index.ts
 * @author [Emeka Samuel]
 * @github [https://github.com/samthemogul]
 * @description Defines controller to handle speech-to-text requests.
 * @created [2024-09-09]
 * @lastModified [2024-09-15]
 * @module api/v1/modules/chat
 */

import { NextFunction, Request, Response } from 'express'
import ChatService from '../services'


const chatService = new ChatService()
class ChatController {

  constructor() {
  }
  async speechToText(req: Request, res: Response, next: NextFunction) {
    try {
      if (req.file) {
        const file = req.file;
        const response = await chatService.speechToText(file)
        if(response && response.length > 0){
             res.status(200).json({
              message: 'Speech to text conversion successful',
              data: response
            })
          } else {
             res.status(400).json({
              message: 'Speech to text conversion failed',
              data: null
          })
      }}
      
    } catch (error) {
      next(error)
    }
  }

}

export default ChatController
