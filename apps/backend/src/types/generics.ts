export interface Repository<Model> {
  model: Model

  createOne: (ModelDetails: Partial<Model>) => Promise<Model>
  createMany: () => Promise<any>
  findAll: () => Promise<Model[]>

  findOne: (query: any) => Promise<Model | null>

  findById: (id: number) => Promise<Model | null>

  update: (ModelDetails: Partial<Model>, query: any) => Promise<number>

  updateOne: (ModelDetails: Partial<Model>, id: number) => Promise<number>

  updateAll: (ModelDetails: Partial<Model>) => Promise<number>

  delete: (id: number) => Promise<number>

  deleteOne: (query: any) => Promise<number>

  deleteAll: () => Promise<number>
}
