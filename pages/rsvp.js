import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useForm } from 'react-hook-form';
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { toaster } from 'evergreen-ui'

import { Input } from '../components/input'
import { RadioGroup } from '../components/radio-group'
// import { data } from 'autoprefixer';

const ADD_RSVP = gql`
  mutation createRSVP ($details: AttendeeDetails, $plusOne: AttendeeDetails) {
    createRSVP (details: $details, plusOne: $plusOne) {
      first_name
      last_name
    }
  }
`

const plusOneOptions = [
  {
    label: 'Yes',
    value: 'yes'
  },
  {
    label: 'No',
    value: 'no'
  }
]

const dietaryOptions = [
  {
    label: 'Nuts',
    value: 'NUT_ALLERGY'
  },
  {
    label: 'Vegetarian',
    value: 'VEGETARIAN'
  },
  {
    label: 'Vegan',
    value: 'VEGAN'
  },
  {
    label: 'None',
    value: 'NONE'
  }
]

const attendanceOptions = [
  {
    label: 'Yes!! 🥳',
    value: 'GOING'
  },
  {
    label: 'Sorry, I can\'t make it 🙁',
    value: 'NOT_GOING'
  }
]

export default function RsvpPage() {
  const router = useRouter()
  const { first_name, last_name } = router.query
  const { register, errors, handleSubmit, watch, setValue } = useForm({
    mode: 'onBlur',
  })

  const [addRsvp, { data }] = useMutation(ADD_RSVP, {
    onError: (error) => {
      toaster.danger(error.message)
      
    }
  })

  const { attendance, hasPlusOne } = watch()

  const onSubmit = (data) => {
    addRsvp({
      variables: {
        details: {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          hasDietaryRestriction: data.dietary,
          attendanceStatus: data.attendance
        },
        ...hasPlusOne && {
          plusOne: {
            first_name: data.plusOneFirstName,
            last_name: data.plusOneLastName,
            hasDietaryRestriction: data.plusOneDietary,
            attendanceStatus: data.attendance
          }
        }
      }
    })
  }

  const handleInputChange = (e, name) => {
    console.log(name, e.target.value)
    setValue(name, e.target.value)
  }

  return (
    <div className="h-full prose prose-xl">
      <Head>
        <title>Save the Date - Asonye/Isles Wedding</title>
        <meta></meta>
      </Head>
      <h1>
        RSVP{' '}
        <span role="img" aria-label="admit one ticket">
          🎟
        </span>
      </h1>
      <p>
        <strong>When: </strong>
        Saturday April 10th, 2021
        <br />
        <strong>Where: </strong>
        2001 Ashton Gardens Lane Corinth, TX 76210
      </p>
      {/* <p className="leading-3">
        <strong>Where: </strong>
        Aston Gardens
      </p> */}
      <br />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-flow-row gap-8"
      >
        <div className="grid grid-cols-2 gap-8">
          <Input
            invalid={errors.firstName}
            errorMessage={errors.firstName && errors.firstName.message}
            name="firstName"
            label="First Name"
            value={first_name}
            onChange={(e) => handleInputChange('firstName', e)}
            placeholder="Jane"
            ref={register({ required: 'This field is required!' })}
          ></Input>
          <Input
            invalid={errors.lastName}
            errorMessage={errors.lastName && errors.lastName.message}
            name="lastName"
            value={last_name}
            onChange={(e) => handleInputChange('lastName', e)}
            label="Last Name"
            placeholder="Doe"
            ref={register({ required: 'This field is required!' })}
          ></Input>
        </div>
        <RadioGroup
          ref={register({ required: 'This field is required!' })}
          invalid={errors.attendance}
          errorMessage={errors.attendance && errors.attendance.message}
          label="Will you be attending?"
          options={attendanceOptions}
          name="attendance"
        ></RadioGroup>
        {
          attendance === 'GOING' && (
            <>
              <Input
                invalid={errors.email}
                errorMessage={errors.email && errors.email.message}
                name="email"
                label="Email Address"
                placeholder="jane@doe.com"
                ref={register({
                  required: {
                    value: attendance === 'GOING',
                    message: 'This field is required!' 
                  },
                  pattern: {
                    value: /[a-zA-Z0-9]+@\w+\.\w{2,3}/g,
                    message: 'Invalid email address',
                  },
                })}
              ></Input>
              <RadioGroup
                invalid={errors.dietary}
                errorMessage={errors.dietary && errors.dietary.message}
                name="dietary"
                ref={register({ required: {
                  value: attendance === 'GOING',
                  message: 'This field is required!' 
                }})}
                label="Do you have any dietary restrictions?"
                options={dietaryOptions}
              ></RadioGroup>
              <RadioGroup
                ref={register({ required: {
                  value: attendance === 'GOING',
                  message: 'This field is required!' 
                } })}
                invalid={errors.hasPlusOne}
                errorMessage={errors.hasPlusOne && errors.hasPlusOne.message}
                label="Will you be bringing a plus one?"
                options={plusOneOptions}
                name="hasPlusOne"
              ></RadioGroup>
              {
                hasPlusOne === 'yes' && (
                  <>
                    <div className="grid grid-cols-2 gap-8">
                      <Input
                        invalid={errors.plusOneFirstName}
                        errorMessage={errors.plusOneFirstName && errors.plusOneFirstName.message}
                        name="plusOneFirstName"
                        label="First Name"
                        placeholder="John"
                        ref={register({ required: {
                          value: attendance === 'GOING' && hasPlusOne === 'yes',
                          message: 'This field is required!' 
                        } })}
                      ></Input>
                      <Input
                        invalid={errors.plusOneLastName}
                        errorMessage={errors.plusOneLastName && errors.plusOneLastName.message}
                        name="plusOneLastName"
                        label="Last Name"
                        placeholder="Doe"
                        ref={register({ required: {
                          value: attendance === 'GOING' && hasPlusOne === 'yes',
                          message: 'This field is required!' 
                        } })}
                      ></Input>
                    </div>
                    <RadioGroup
                      invalid={errors.plusOneDietary}
                      errorMessage={errors.plusOneDietary && errors.plusOneDietary.message}
                      name="plusOneDietary"
                      ref={register({ required: {
                        value: attendance === 'GOING' && hasPlusOne === 'yes',
                        message: 'This field is required!' 
                      }})}
                      label="Does your plus one have any dietary restrictions?"
                      options={dietaryOptions}
                    ></RadioGroup>
                  </>
                )
              }
            </>
          )
        }
        <button disabled={Object.keys(errors).length > 0} className="disabled:shadow-none disabled:translate-y-0 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer rounded-md leading-10 bg-blue-600 text-white px-4 text-base w-48 transform ease-in-out duration-100 hover:shadow-lg hover:-translate-y-1">
          RSVP
        </button>
      </form>
    </div>
  );
}
