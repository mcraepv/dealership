import { Query, Resolver, Arg, Mutation } from 'type-graphql';
import Car, { CarInput } from '../schemas/Car';
import CarModel from '../../db/models/car';
import { v4 as uuidv4 } from 'uuid';

@Resolver((of) => Car)
export default class {
  @Mutation(() => Car)
  createCar(@Arg('model') model: CarInput) {
    return CarModel.create({ id: uuidv4(), createdAt: new Date(), model });
  }

  @Mutation(() => Car)
  async updateCar(@Arg('model') model: CarInput) {
    const carToUpdate = await CarModel.findByPk(model.id);
    return carToUpdate.update({
      id: model.id,
      name: model.name === undefined ? carToUpdate.name : model.name,
      doors: model.doors === undefined ? carToUpdate.doors : model.doors,
      automatic:
        model.automatic === undefined ? carToUpdate.automatic : model.automatic,
      isNew: model.isNew === undefined ? carToUpdate.isNew : model.isNew,
      price: model.price === undefined ? carToUpdate.price : model.price,
      miles: model.miles === undefined ? carToUpdate.miles : model.miles,
      dealershipId:
        model.dealershipId === undefined
          ? carToUpdate.dealershipId
          : model.dealershipId,
      clientId:
        model.clientId === undefined ? carToUpdate.clientId : model.clientId,
      employeeId:
        model.employeeId === undefined
          ? carToUpdate.employeeId
          : model.employeeId,
      sold: model.sold === undefined ? carToUpdate.sold : model.sold,
      updatedAt: new Date(),
      createdAt: model.createdAt,
    });
  }

  @Mutation(() => Car)
  async upsertCar(@Arg('model') model: CarInput) {
    if (!model.id) {
      model.id = uuidv4();
      model.createdAt = new Date();
    }
    const existingCar = await CarModel.findByPk(model.id);
    if (existingCar) {
      model.createdAt = existingCar.createdAt;
    }
    await CarModel.upsert({
      id: model.id,
      name: model.name === undefined ? existingCar.name : model.name,
      doors: model.doors === undefined ? existingCar.doors : model.doors,
      automatic:
        model.automatic === undefined ? existingCar.automatic : model.automatic,
      isNew: model.isNew === undefined ? existingCar.isNew : model.isNew,
      price: model.price === undefined ? existingCar.price : model.price,
      miles: model.miles === undefined ? existingCar.miles : model.miles,
      dealershipId:
        model.dealershipId === undefined
          ? existingCar.dealershipId
          : model.dealershipId,
      clientId:
        model.clientId === undefined ? existingCar.clientId : model.clientId,
      employeeId:
        model.employeeId === undefined
          ? existingCar.employeeId
          : model.employeeId,
      sold: model.sold === undefined ? existingCar.sold : model.sold,
      updatedAt: new Date(),
      createdAt: model.createdAt,
    });
    return CarModel.findByPk(model.id);
  }

  @Mutation(() => Boolean)
  async deleteCar(@Arg('id') id: string) {
    const deleted = await CarModel.destroy({ where: { id } });
    return deleted ? true : false;
  }

  @Query(() => [Car])
  getCars() {
    return CarModel.findAll();
  }

  @Query(() => [Car])
  getUnsoldCars() {
    return CarModel.findAll({
      where: {
        sold: false,
      },
    });
  }

  @Query(() => [Car])
  getCarsByDealership(@Arg('dealershipId') dealershipId: string) {
    return CarModel.findAll({
      where: {
        dealershipId,
      },
    });
  }

  @Query(() => [Car])
  getUnsoldCarsByDealership(@Arg('dealershipId') dealershipId: string) {
    return CarModel.findAll({
      where: {
        dealershipId,
        sold: false,
      },
    });
  }

  @Query(() => Car)
  findCarById(@Arg('id') id: string) {
    return CarModel.findOne({
      where: {
        id,
      },
    });
  }

  @Query(() => [Car])
  getUnsoldCarsByPrice(@Arg('price') price: number) {
    return CarModel.findAll({
      where: {
        price: { $lt: price },
        sold: false,
      },
    });
  }

  @Query(() => [Car])
  getUnsoldNewCars() {
    return CarModel.findAll({
      where: {
        isNew: true,
        sold: false,
      },
    });
  }

  @Query(() => [Car])
  getUnsoldUsedCars() {
    return CarModel.findAll({
      where: {
        isNew: false,
        sold: false,
      },
    });
  }

  @Query(() => [Car])
  getUnsoldCarsByMileage(@Arg('miles') miles: number) {
    return CarModel.findAll({
      where: {
        miles: { $lt: miles },
        sold: false,
      },
    });
  }

  @Query(() => [Car])
  getSoldCarsByClientId(@Arg('clientId') clientId: string) {
    return CarModel.findAll({
      where: {
        clientId,
        sold: true,
      },
    });
  }

  @Query(() => [Car])
  getSoldCarsByEmployeeId(@Arg('employeeId') employeeId: string) {
    return CarModel.findAll({
      where: {
        employeeId,
      },
    });
  }
}
