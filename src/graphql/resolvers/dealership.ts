import { Query, Resolver, Arg, Mutation } from 'type-graphql';
import Dealership, { DealershipInput } from '../schemas/dealership';
import { Dealership as DealershipModel } from '../../db/models/dealership';
import { v4 as uuidv4 } from 'uuid';

@Resolver((of) => Dealership)
export default class {
  @Mutation(() => Dealership)
  createDealership(@Arg('model') model: DealershipInput) {
    return DealershipModel.create({
      id: uuidv4(),
      createdAt: new Date(),
      model,
    });
  }

  @Mutation(() => Dealership)
  async updateDealership(@Arg('model') model: DealershipInput) {
    const dealershipToUpdate = await DealershipModel.findByPk(model.id);
    return dealershipToUpdate.update({
      id: model.id,
      name: model.name === undefined ? dealershipToUpdate.name : model.name,
      location:
        model.location === undefined
          ? dealershipToUpdate.location
          : model.location,
      phoneNumber:
        model.phoneNumber === undefined
          ? dealershipToUpdate.phoneNumber
          : model.phoneNumber,
      updatedAt: new Date(),
      createdAt: model.createdAt,
    });
  }

  @Mutation(() => Dealership)
  async upsertDealership(@Arg('model') model: DealershipInput) {
    if (!model.id) {
      model.id = uuidv4();
      model.createdAt = new Date();
    }
    const existingDealership = await DealershipModel.findByPk(model.id);
    if (existingDealership) {
      model.createdAt = existingDealership.createdAt;
    }
    await DealershipModel.upsert({
      id: model.id,
      name: model.name === undefined ? existingDealership.name : model.name,
      location:
        model.location === undefined
          ? existingDealership.location
          : model.location,
      phoneNumber:
        model.phoneNumber === undefined
          ? existingDealership.phoneNumber
          : model.phoneNumber,
      updatedAt: new Date(),
      createdAt: model.createdAt,
    });
  }

  @Mutation(() => Boolean)
  async deleteDealership(@Arg('id') id: string) {
    const deleted = await DealershipModel.destroy({ where: { id } });
    return deleted ? true : false;
  }

  @Query(() => [Dealership])
  getDealerships() {
    return DealershipModel.findAll();
  }

  @Query(() => Dealership)
  getDealershipById(@Arg('id') id: string) {
    return DealershipModel.findOne({
      where: {
        id,
      },
    });
  }

  @Query(() => Dealership)
  getDealershipByName(@Arg('name') name: string) {
    return DealershipModel.findOne({
      where: {
        name,
      },
    });
  }
}
