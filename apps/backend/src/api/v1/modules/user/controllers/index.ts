/**
 * @file user/controllers/index.ts
 * @author [Kingsley Ihemelandu]
 * @github [https://github.com/kijuchihe]
 * @description Defines the user controllers for the application.
 * @created [2024-07-20]
 * @lastModified [2024-07-20]
 * @module api/v1/modules/user
 */

import { Request, Response, NextFunction } from 'express'
import CourseController from '../../course/controllers'

const courseService = new CourseController()

class UserController {
  async createCourse(req: Request, res: Response, next: NextFunction) {
    await courseService.createCourse(req, res, next)
  }
  async getAllCourses(req: Request, res: Response, next: NextFunction) {
    await courseService.getAllCourses(req, res, next)
  }
}

export default UserController
