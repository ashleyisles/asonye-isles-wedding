import gql from 'graphql-tag'

export const typeDefs = gql`
  enum DietaryRestrictionType {
    NONE
    NUT_ALLERGY
    VEGAN
    VEGETARIAN
  }
  enum AttendanceOption {
    GOING
    NOT_GOING
  }
  type Invited {
    first_name: String!
    last_name: String!
  }
  type RSVP {
    attendanceStatus: AttendanceOption!
    first_name: String!
    last_name: String!
    email: String
    hasDietaryRestriction: DietaryRestrictionType
    plusOne: RSVP
  }
  input AttendeeDetails {
    first_name: String!
    last_name: String!
    email: String
    hasDietaryRestriction: DietaryRestrictionType
    attendanceStatus: AttendanceOption!
  }
  type Query {
    rsvps: [RSVP]
    invited: [Invited]
  }
  type Mutation {
    createRSVP(details: AttendeeDetails, plusOne: AttendeeDetails): [RSVP]
  }
`