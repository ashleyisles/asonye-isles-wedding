import { UserInputError } from 'apollo-server'

export const resolvers = {
  Query: {
    rsvps: async (parent, args, context) => {
      return await context.db
        .collection('rsvps')
        .find({})
        .toArray()
    },
    invited: async (parent, args, context) => {
      return await context.db
        .collection('invited')
        .find({})
        .toArray()
    }
  },
  Mutation: {
    createRSVP: async (parent, { details, plusOne }, context) => {
      try {
        return await context.db
        .collection('rsvps')
        .insert([
          {
            first_name: details.first_name,
            last_name: details.last_name,
            email: details.email,
            hasDietaryRestriction: details.hasDietaryRestriction,
            attendanceStatus: details.attendanceStatus
          },
          ...plusOne && {
            first_name: plusOne.first_name,
            last_name: plusOne.last_name,
            hasDietaryRestriction: plusOne.hasDietaryRestriction,
            attendanceStatus: plusOne.attendanceStatus
          }
        ])
        .then(({ ops }) => {
          console.log(ops)
          return ops
        })
      } catch (err) {
        if (err.code === 11000) {
          throw new UserInputError(
            'Looks like we\'ve already got you in the system!'
          )
        }
      }
    }
  }
}