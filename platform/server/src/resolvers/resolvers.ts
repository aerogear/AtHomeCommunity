/*
 * File generated by Graphback CRUD resolver plugin.
 * Content will be overwritten by Graphback generator.
 * To change implementation please disable generator options and supply your own implementation
 * outside generated file.
 */

export default {
  DistributionCentre: {
    actions: (parent, args, context) => {
      return context.VolunteerAction.batchLoadData(
        "distributionCentreId",
        parent.id,
        context
      )
    },
  },

  VolunteerAction: {
    distributionCentre: (parent, args, context) => {
      return context.DistributionCentre.findBy({
        id: parent.distributionCentreId,
      }).then((results) => results[0])
    },
    volunteer: (parent, args, context) => {
      return context.Volunteer.findBy({ id: parent.volunteerId }).then(
        (results) => results[0]
      )
    },
    products: (parent, args, context) => {
      return context.VolunteerActionProduct.batchLoadData(
        "volunteerActionId",
        parent.id,
        context
      )
    },
    recipient: (parent, args, context) => {
      return context.Recipient.findBy({ id: parent.recipientId }).then(
        (results) => results[0]
      )
    },
  },

  Volunteer: {
    actions: (parent, args, context) => {
      return context.VolunteerAction.batchLoadData(
        "volunteerId",
        parent.id,
        context
      )
    },
  },

  VolunteerActionProduct: {
    volunteerAction: (parent, args, context) => {
      return context.VolunteerAction.findBy({
        id: parent.volunteerActionId,
      }).then((results) => results[0])
    },
    product: (parent, args, context) => {
      return context.Product.findBy({ id: parent.productId }).then(
        (results) => results[0]
      )
    },
  },

  Product: {
    volunteerActionProducts: (parent, args, context) => {
      return context.VolunteerActionProduct.batchLoadData(
        "productId",
        parent.id,
        context
      )
    },
    preferredProducts: (parent, args, context) => {
      return context.PrefferedProduct.batchLoadData(
        "productId",
        parent.id,
        context
      )
    },
  },

  PrefferedProduct: {
    product: (parent, args, context) => {
      return context.Product.findBy({ id: parent.productId }).then(
        (results) => results[0]
      )
    },
    recipient: (parent, args, context) => {
      return context.Recipient.findBy({ id: parent.recipientId }).then(
        (results) => results[0]
      )
    },
  },

  Recipient: {
    actions: (parent, args, context) => {
      return context.VolunteerAction.batchLoadData(
        "recipientId",
        parent.id,
        context
      )
    },
    prefferedProducts: (parent, args, context) => {
      return context.PrefferedProduct.batchLoadData(
        "recipientId",
        parent.id,
        context
      )
    },
  },

  Query: {
    findDistributionCentres: (parent, args, context) => {
      const { fields, ...page } = args
      return context.DistributionCentre.findBy(fields, page)
    },
    findAllDistributionCentres: (parent, args, context) => {
      return context.DistributionCentre.findAll(args)
    },
    findVolunteerActions: (parent, args, context) => {
      const { fields, ...page } = args
      return context.VolunteerAction.findBy(fields, page)
    },
    findAllVolunteerActions: (parent, args, context) => {
      return context.VolunteerAction.findAll(args)
    },
    findVolunteers: (parent, args, context) => {
      const { fields, ...page } = args
      return context.Volunteer.findBy(fields, page)
    },
    findAllVolunteers: (parent, args, context) => {
      return context.Volunteer.findAll(args)
    },
    findVolunteerActionProducts: (parent, args, context) => {
      const { fields, ...page } = args
      return context.VolunteerActionProduct.findBy(fields, page)
    },
    findAllVolunteerActionProducts: (parent, args, context) => {
      return context.VolunteerActionProduct.findAll(args)
    },
    findProducts: (parent, args, context) => {
      const { fields, ...page } = args
      return context.Product.findBy(fields, page)
    },
    findAllProducts: (parent, args, context) => {
      return context.Product.findAll(args)
    },
    findPrefferedProducts: (parent, args, context) => {
      const { fields, ...page } = args
      return context.PrefferedProduct.findBy(fields, page)
    },
    findAllPrefferedProducts: (parent, args, context) => {
      return context.PrefferedProduct.findAll(args)
    },
    findRecipients: (parent, args, context) => {
      const { fields, ...page } = args
      return context.Recipient.findBy(fields, page)
    },
    findAllRecipients: (parent, args, context) => {
      return context.Recipient.findAll(args)
    },
  },

  Mutation: {
    createDistributionCentre: (parent, args, context) => {
      return context.DistributionCentre.create(args.input, context)
    },
    createVolunteerAction: (parent, args, context) => {
      return context.VolunteerAction.create(args.input, context)
    },
    updateVolunteerAction: (parent, args, context) => {
      return context.VolunteerAction.update(args.input, context)
    },
    deleteVolunteerAction: (parent, args, context) => {
      return context.VolunteerAction.delete(args.input, context)
    },
    createVolunteer: (parent, args, context) => {
      return context.Volunteer.create(args.input, context)
    },
    updateVolunteer: (parent, args, context) => {
      return context.Volunteer.update(args.input, context)
    },
    createProduct: (parent, args, context) => {
      return context.Product.create(args.input, context)
    },
    updateProduct: (parent, args, context) => {
      return context.Product.update(args.input, context)
    },
    createRecipient: (parent, args, context) => {
      return context.Recipient.create(args.input, context)
    },
    updateRecipient: (parent, args, context) => {
      return context.Recipient.update(args.input, context)
    },
  },

  Subscription: {
    newDistributionCentre: {
      subscribe: (parent, args, context) => {
        return context.DistributionCentre.subscribeToCreate(args, context)
      },
    },
    newVolunteerAction: {
      subscribe: (parent, args, context) => {
        return context.VolunteerAction.subscribeToCreate(args, context)
      },
    },
    updatedVolunteerAction: {
      subscribe: (parent, args, context) => {
        return context.VolunteerAction.subscribeToUpdate(args, context)
      },
    },
    deletedVolunteerAction: {
      subscribe: (parent, args, context) => {
        return context.VolunteerAction.subscribeToDelete(args, context)
      },
    },
    newVolunteer: {
      subscribe: (parent, args, context) => {
        return context.Volunteer.subscribeToCreate(args, context)
      },
    },
    updatedVolunteer: {
      subscribe: (parent, args, context) => {
        return context.Volunteer.subscribeToUpdate(args, context)
      },
    },
    newProduct: {
      subscribe: (parent, args, context) => {
        return context.Product.subscribeToCreate(args, context)
      },
    },
    updatedProduct: {
      subscribe: (parent, args, context) => {
        return context.Product.subscribeToUpdate(args, context)
      },
    },
    newRecipient: {
      subscribe: (parent, args, context) => {
        return context.Recipient.subscribeToCreate(args, context)
      },
    },
    updatedRecipient: {
      subscribe: (parent, args, context) => {
        return context.Recipient.subscribeToUpdate(args, context)
      },
    },
  },
}
